<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptResourceShareInvitationHeaders;
import org.openapis.openapi.models.operations.AcceptResourceShareInvitationRequestBody;
import org.openapis.openapi.models.operations.AcceptResourceShareInvitationRequest;
import org.openapis.openapi.models.operations.AcceptResourceShareInvitationResponse;

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

            AcceptResourceShareInvitationRequest req = new AcceptResourceShareInvitationRequest() {{
                headers = new AcceptResourceShareInvitationHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new AcceptResourceShareInvitationRequestBody() {{
                    clientToken = "illum";
                    resourceShareInvitationArn = "vel";
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