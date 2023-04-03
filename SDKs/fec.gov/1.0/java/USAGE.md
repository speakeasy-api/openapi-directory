<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetAuditCaseRequest;
import org.openapis.openapi.models.operations.GetAuditCaseResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeaderAuth = "YOUR_API_KEY_HERE";
                    apiKeyQueryAuth = "YOUR_API_KEY_HERE";
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAuditCaseRequest req = new GetAuditCaseRequest() {{
                apiKey = "corrupti";
                auditCaseId = new String[]{{
                    add("distinctio"),
                    add("quibusdam"),
                    add("unde"),
                }};
                auditId = new Integer[]{{
                    add(544883),
                    add(847252),
                    add(423655),
                    add(623564),
                }};
                candidateId = new String[]{{
                    add("suscipit"),
                    add("iure"),
                    add("magnam"),
                }};
                committeeDesignation = "debitis";
                committeeId = new String[]{{
                    add("delectus"),
                }};
                committeeType = new String[]{{
                    add("suscipit"),
                    add("molestiae"),
                }};
                cycle = new Integer[]{{
                    add(812169),
                    add(528895),
                    add(479977),
                    add(568045),
                }};
                maxElectionCycle = 392785;
                minElectionCycle = 925597;
                page = 836079;
                perPage = 71036;
                primaryCategoryId = "quis";
                q = new String[]{{
                    add("deserunt"),
                }};
                qq = new String[]{{
                    add("ipsam"),
                }};
                sort = new String[]{{
                    add("sapiente"),
                    add("quo"),
                    add("odit"),
                    add("at"),
                }};
                sortHideNull = false;
                sortNullOnly = false;
                sortNullsLast = false;
                subCategoryId = "at";
            }}            

            GetAuditCaseResponse res = sdk.audit.getAuditCase(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->