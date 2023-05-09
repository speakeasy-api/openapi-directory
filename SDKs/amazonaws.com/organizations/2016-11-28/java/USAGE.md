<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptHandshakeRequest;
import org.openapis.openapi.models.operations.AcceptHandshakeResponse;
import org.openapis.openapi.models.operations.AcceptHandshakeXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcceptHandshakeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptHandshakeRequest req = new AcceptHandshakeRequest(                new AcceptHandshakeRequest("provident");, AcceptHandshakeXAmzTargetEnum.AWS_ORGANIZATIONS_V20161128_ACCEPT_HANDSHAKE) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            AcceptHandshakeResponse res = sdk.acceptHandshake(req);

            if (res.acceptHandshakeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->