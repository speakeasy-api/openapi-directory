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

            AcceptInvitationRequest req = new AcceptInvitationRequest() {{
                headers = new AcceptInvitationHeaders() {{
                    xAmzAlgorithm = "veritatis";
                    xAmzContentSha256 = "qui";
                    xAmzCredential = "facere";
                    xAmzDate = "aut";
                    xAmzSecurityToken = "nesciunt";
                    xAmzSignature = "adipisci";
                    xAmzSignedHeaders = "consequatur";
                }};
                request = new AcceptInvitationRequestBody() {{
                    administratorAccountId = "praesentium";
                    invitationId = "temporibus";
                    masterAccount = "alias";
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