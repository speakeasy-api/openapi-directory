<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AcceptAdministratorInvitationRequest req = new AcceptAdministratorInvitationRequest() {{
                headers = new AcceptAdministratorInvitationHeaders() {{
                    xAmzAlgorithm = "sint";
                    xAmzContentSha256 = "et";
                    xAmzCredential = "deleniti";
                    xAmzDate = "ratione";
                    xAmzSecurityToken = "voluptas";
                    xAmzSignature = "quas";
                    xAmzSignedHeaders = "quae";
                }};
                request = new AcceptAdministratorInvitationRequestBody() {{
                    administratorId = "incidunt";
                    invitationId = "sapiente";
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