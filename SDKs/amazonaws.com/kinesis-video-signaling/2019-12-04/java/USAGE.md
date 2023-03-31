<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetIceServerConfigHeaders;
import org.openapis.openapi.models.operations.GetIceServerConfigRequestBodyServiceEnum;
import org.openapis.openapi.models.operations.GetIceServerConfigRequestBody;
import org.openapis.openapi.models.operations.GetIceServerConfigRequest;
import org.openapis.openapi.models.operations.GetIceServerConfigResponse;

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

            GetIceServerConfigRequest req = new GetIceServerConfigRequest() {{
                headers = new GetIceServerConfigHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new GetIceServerConfigRequestBody() {{
                    channelARN = "illum";
                    clientId = "vel";
                    service = "TURN";
                    username = "Linda.Oberbrunner";
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