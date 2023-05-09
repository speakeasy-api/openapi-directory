<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloseTunnelRequest;
import org.openapis.openapi.models.operations.CloseTunnelResponse;
import org.openapis.openapi.models.operations.CloseTunnelXAmzTargetEnum;
import org.openapis.openapi.models.shared.CloseTunnelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CloseTunnelRequest req = new CloseTunnelRequest(                new CloseTunnelRequest("provident") {{
                                delete = false;
                            }};, CloseTunnelXAmzTargetEnum.IO_T_SECURED_TUNNELING_CLOSE_TUNNEL) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            CloseTunnelResponse res = sdk.closeTunnel(req);

            if (res.closeTunnelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->