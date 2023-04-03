<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateAdminAccountXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateAdminAccountRequest;
import org.openapis.openapi.models.operations.AssociateAdminAccountResponse;
import org.openapis.openapi.models.shared.AssociateAdminAccountRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateAdminAccountRequest req = new AssociateAdminAccountRequest() {{
                associateAdminAccountRequest = new AssociateAdminAccountRequest() {{
                    adminAccount = "corrupti";
                }};
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
                xAmzTarget = "AWSFMS_20180101.AssociateAdminAccount";
            }}            

            AssociateAdminAccountResponse res = sdk.associateAdminAccount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->