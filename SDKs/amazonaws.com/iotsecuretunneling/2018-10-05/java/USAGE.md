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

            CloseTunnelRequest req = new CloseTunnelRequest() {{
                headers = new CloseTunnelHeaders() {{
                    xAmzAlgorithm = "est";
                    xAmzContentSha256 = "est";
                    xAmzCredential = "consequatur";
                    xAmzDate = "quia";
                    xAmzSecurityToken = "ad";
                    xAmzSignature = "nemo";
                    xAmzSignedHeaders = "quia";
                    xAmzTarget = "IoTSecuredTunneling.CloseTunnel";
                }};
                request = new CloseTunnelRequest() {{
                    delete = true;
                    tunnelId = "dolores";
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