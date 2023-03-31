<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptAdministratorInvitationHeaders;
import org.openapis.openapi.models.operations.AcceptAdministratorInvitationRequestBody;
import org.openapis.openapi.models.operations.AcceptAdministratorInvitationRequest;
import org.openapis.openapi.models.operations.AcceptAdministratorInvitationResponse;

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

            AcceptAdministratorInvitationRequest req = new AcceptAdministratorInvitationRequest() {{
                headers = new AcceptAdministratorInvitationHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new AcceptAdministratorInvitationRequestBody() {{
                    administratorId = "illum";
                    invitationId = "vel";
                }};
            }};            

            AcceptAdministratorInvitationResponse res = sdk.acceptAdministratorInvitation(req);

            if (res.acceptAdministratorInvitationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->