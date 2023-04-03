<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptAdministratorInvitationRequestBody;
import org.openapis.openapi.models.operations.AcceptAdministratorInvitationRequest;
import org.openapis.openapi.models.operations.AcceptAdministratorInvitationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptAdministratorInvitationRequest req = new AcceptAdministratorInvitationRequest() {{
                requestBody = new AcceptAdministratorInvitationRequestBody() {{
                    administratorId = "corrupti";
                    invitationId = "provident";
                }};
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }}            

            AcceptAdministratorInvitationResponse res = sdk.acceptAdministratorInvitation(req);

            if (res.acceptAdministratorInvitationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->