<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CloseTunnelXAmzTargetEnum;
import org.openapis.openapi.models.operations.CloseTunnelHeaders;
import org.openapis.openapi.models.operations.CloseTunnelRequest;
import org.openapis.openapi.models.operations.CloseTunnelResponse;
import org.openapis.openapi.models.shared.CloseTunnelRequest;

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

            CloseTunnelRequest req = new CloseTunnelRequest() {{
                headers = new CloseTunnelHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "IoTSecuredTunneling.CloseTunnel";
                }};
                request = new CloseTunnelRequest() {{
                    delete = false;
                    tunnelId = "illum";
                }};
            }};            

            CloseTunnelResponse res = sdk.closeTunnel(req);

            if (res.closeTunnelResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->