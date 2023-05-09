<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateAccountsRequest;
import org.openapis.openapi.models.operations.AssociateAccountsRequestBody;
import org.openapis.openapi.models.operations.AssociateAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateAccountsRequest req = new AssociateAccountsRequest(                new AssociateAccountsRequestBody(                new String[]{{
                                                add("distinctio"),
                                                add("quibusdam"),
                                                add("unde"),
                                            }}, "nulla");) {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "illum";
                xAmzCredential = "vel";
                xAmzDate = "error";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "iure";
            }};            

            AssociateAccountsResponse res = sdk.associateAccounts(req);

            if (res.associateAccountsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->