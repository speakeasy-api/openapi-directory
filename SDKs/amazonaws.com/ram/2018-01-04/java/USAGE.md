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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new AcceptResourceShareInvitationRequestBody() {{
                    clientToken = "voluptas";
                    resourceShareInvitationArn = "fugit";
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