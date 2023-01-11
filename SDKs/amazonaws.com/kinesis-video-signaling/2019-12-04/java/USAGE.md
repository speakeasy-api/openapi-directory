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

            GetIceServerConfigRequest req = new GetIceServerConfigRequest() {{
                headers = new GetIceServerConfigHeaders() {{
                    xAmzAlgorithm = "nemo";
                    xAmzContentSha256 = "corporis";
                    xAmzCredential = "cupiditate";
                    xAmzDate = "soluta";
                    xAmzSecurityToken = "voluptatibus";
                    xAmzSignature = "maiores";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new GetIceServerConfigRequestBody() {{
                    channelARN = "expedita";
                    clientId = "nisi";
                    service = "TURN";
                    username = "magni";
                }};
            }};

            GetIceServerConfigResponse res = sdk.getIceServerConfig(req);

            if (res.getIceServerConfigResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->