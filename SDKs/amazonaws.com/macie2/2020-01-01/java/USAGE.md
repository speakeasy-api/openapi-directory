<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptInvitationRequest;
import org.openapis.openapi.models.operations.AcceptInvitationRequestBody;
import org.openapis.openapi.models.operations.AcceptInvitationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptInvitationRequest req = new AcceptInvitationRequest(                new AcceptInvitationRequestBody("provident") {{
                                administratorAccountId = "distinctio";
                                masterAccount = "quibusdam";
                            }};) {{
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
            }};            

            AcceptInvitationResponse res = sdk.acceptInvitation(req);

            if (res.acceptInvitationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->