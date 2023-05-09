<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateAdminAccountRequest;
import org.openapis.openapi.models.operations.AssociateAdminAccountResponse;
import org.openapis.openapi.models.operations.AssociateAdminAccountXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateAdminAccountRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateAdminAccountRequest req = new AssociateAdminAccountRequest(                new AssociateAdminAccountRequest("provident");, AssociateAdminAccountXAmzTargetEnum.AWSFMS20180101_ASSOCIATE_ADMIN_ACCOUNT) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            AssociateAdminAccountResponse res = sdk.associateAdminAccount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->