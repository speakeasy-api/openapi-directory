<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateServiceRoleToAccountRequest;
import org.openapis.openapi.models.operations.AssociateServiceRoleToAccountRequestBody;
import org.openapis.openapi.models.operations.AssociateServiceRoleToAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateServiceRoleToAccountRequest req = new AssociateServiceRoleToAccountRequest(                new AssociateServiceRoleToAccountRequestBody("provident");) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            AssociateServiceRoleToAccountResponse res = sdk.associateServiceRoleToAccount(req);

            if (res.associateServiceRoleToAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->