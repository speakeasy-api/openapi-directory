<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptResourceShareInvitationRequest;
import org.openapis.openapi.models.operations.AcceptResourceShareInvitationRequestBody;
import org.openapis.openapi.models.operations.AcceptResourceShareInvitationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptResourceShareInvitationRequest req = new AcceptResourceShareInvitationRequest(                new AcceptResourceShareInvitationRequestBody("provident") {{
                                clientToken = "distinctio";
                            }};) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            AcceptResourceShareInvitationResponse res = sdk.acceptResourceShareInvitation(req);

            if (res.acceptResourceShareInvitationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->