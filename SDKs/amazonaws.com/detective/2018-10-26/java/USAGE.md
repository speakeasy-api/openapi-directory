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
                    xAmzAlgorithm = "temporibus";
                    xAmzContentSha256 = "consequatur";
                    xAmzCredential = "non";
                    xAmzDate = "nulla";
                    xAmzSecurityToken = "inventore";
                    xAmzSignature = "reprehenderit";
                    xAmzSignedHeaders = "quos";
                }};
                request = new AcceptInvitationRequestBody() {{
                    graphArn = "saepe";
                }};
            }};

            AcceptInvitationResponse res = sdk.acceptInvitation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->