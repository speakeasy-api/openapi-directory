<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptInvitationHeaders;
import org.openapis.openapi.models.operations.AcceptInvitationRequestBody;
import org.openapis.openapi.models.operations.AcceptInvitationRequest;
import org.openapis.openapi.models.operations.AcceptInvitationResponse;

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

            AcceptInvitationRequest req = new AcceptInvitationRequest() {{
                headers = new AcceptInvitationHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new AcceptInvitationRequestBody() {{
                    administratorAccountId = "illum";
                    invitationId = "vel";
                    masterAccount = "error";
                }};
            }};            

            AcceptInvitationResponse res = sdk.acceptInvitation(req);

            if (res.acceptInvitationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->