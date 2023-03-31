<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateAdminAccountXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateAdminAccountHeaders;
import org.openapis.openapi.models.operations.AssociateAdminAccountRequest;
import org.openapis.openapi.models.operations.AssociateAdminAccountResponse;
import org.openapis.openapi.models.shared.AssociateAdminAccountRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AssociateAdminAccountRequest req = new AssociateAdminAccountRequest() {{
                headers = new AssociateAdminAccountHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSFMS_20180101.AssociateAdminAccount";
                }};
                request = new AssociateAdminAccountRequest() {{
                    adminAccount = "illum";
                }};
            }};            

            AssociateAdminAccountResponse res = sdk.associateAdminAccount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->