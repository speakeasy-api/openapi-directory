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

            AcceptResourceShareInvitationRequest req = new AcceptResourceShareInvitationRequest() {{
                headers = new AcceptResourceShareInvitationHeaders() {{
                    xAmzAlgorithm = "quis";
                    xAmzContentSha256 = "tempora";
                    xAmzCredential = "esse";
                    xAmzDate = "rerum";
                    xAmzSecurityToken = "tempora";
                    xAmzSignature = "culpa";
                    xAmzSignedHeaders = "deserunt";
                }};
                request = new AcceptResourceShareInvitationRequestBody() {{
                    clientToken = "nihil";
                    resourceShareInvitationArn = "aut";
                }};
            }};

            AcceptResourceShareInvitationResponse res = sdk.acceptResourceShareInvitation(req);

            if (res.acceptResourceShareInvitationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->