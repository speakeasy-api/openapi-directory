<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptAdministratorInvitationRequest;
import org.openapis.openapi.models.operations.AcceptAdministratorInvitationRequestBody;
import org.openapis.openapi.models.operations.AcceptAdministratorInvitationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptAdministratorInvitationRequest req = new AcceptAdministratorInvitationRequest(                new AcceptAdministratorInvitationRequestBody("provident", "distinctio");) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            AcceptAdministratorInvitationResponse res = sdk.acceptAdministratorInvitation(req);

            if (res.acceptAdministratorInvitationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->