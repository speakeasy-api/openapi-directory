<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKeyHeaderAuth = new SchemeApiKeyHeaderAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    apiKeyQueryAuth = new SchemeApiKeyQueryAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetAuditCaseRequest req = new GetAuditCaseRequest() {{
                queryParams = new GetAuditCaseQueryParams() {{
                    apiKey = "repellat";
                    auditCaseId = new String[]() {{
                        add("dolorum"),
                    }};
                    auditId = new Integer[]() {{
                        add(8645970321281326832),
                        add(7136207181802684899),
                        add(1736299023908858105),
                    }};
                    candidateId = new String[]() {{
                        add("aut"),
                    }};
                    committeeDesignation = "tempora";
                    committeeId = new String[]() {{
                        add("mollitia"),
                        add("non"),
                        add("magni"),
                    }};
                    committeeType = new String[]() {{
                        add("illum"),
                        add("consequatur"),
                        add("dolores"),
                    }};
                    cycle = new Integer[]() {{
                        add(2762871534793283085),
                        add(1595294774483826936),
                        add(1547351759706903978),
                    }};
                    maxElectionCycle = 5235109611096705579;
                    minElectionCycle = 1717316735216544452;
                    page = 7338161805244208148;
                    perPage = 6531361177861028646;
                    primaryCategoryId = "explicabo";
                    q = new String[]() {{
                        add("veniam"),
                        add("qui"),
                    }};
                    qq = new String[]() {{
                        add("odit"),
                        add("molestias"),
                        add("corporis"),
                    }};
                    sort = new String[]() {{
                        add("esse"),
                        add("similique"),
                        add("mollitia"),
                    }};
                    sortHideNull = false;
                    sortNullOnly = true;
                    sortNullsLast = true;
                    subCategoryId = "maiores";
                }};
            }};

            GetAuditCaseResponse res = sdk.audit.getAuditCase(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->