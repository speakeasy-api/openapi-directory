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
                    apiKey = "sit";
                    auditCaseId = new String[]() {{
                        add("culpa"),
                    }};
                    auditId = new Integer[]() {{
                        add(3390393562759376202),
                        add(2669985732393126063),
                    }};
                    candidateId = new String[]() {{
                        add("voluptas"),
                        add("fugit"),
                    }};
                    committeeDesignation = "et";
                    committeeId = new String[]() {{
                        add("rerum"),
                    }};
                    committeeType = new String[]() {{
                        add("debitis"),
                        add("voluptatum"),
                        add("et"),
                    }};
                    cycle = new Integer[]() {{
                        add(161231572858529631),
                        add(7259475919510918339),
                        add(7373105480197164748),
                    }};
                    maxElectionCycle = 3287288577352441706;
                    minElectionCycle = 3930927879439176946;
                    page = 4706154865122290029;
                    perPage = 2217592893536642650;
                    primaryCategoryId = "illum";
                    q = new String[]() {{
                        add("vel"),
                    }};
                    qq = new String[]() {{
                        add("dolore"),
                    }};
                    sort = new String[]() {{
                        add("aspernatur"),
                        add("accusantium"),
                    }};
                    sortHideNull = false;
                    sortNullOnly = false;
                    sortNullsLast = true;
                    subCategoryId = "est";
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