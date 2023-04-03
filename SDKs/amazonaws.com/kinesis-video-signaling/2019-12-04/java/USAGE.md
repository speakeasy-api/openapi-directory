<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetIceServerConfigRequestBodyServiceEnum;
import org.openapis.openapi.models.operations.GetIceServerConfigRequestBody;
import org.openapis.openapi.models.operations.GetIceServerConfigRequest;
import org.openapis.openapi.models.operations.GetIceServerConfigResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIceServerConfigRequest req = new GetIceServerConfigRequest() {{
                requestBody = new GetIceServerConfigRequestBody() {{
                    channelARN = "corrupti";
                    clientId = "provident";
                    service = "TURN";
                    username = "Micheal_Sporer";
                }};
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "illum";
                xAmzCredential = "vel";
                xAmzDate = "error";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "iure";
            }}            

            GetIceServerConfigResponse res = sdk.getIceServerConfig(req);

            if (res.getIceServerConfigResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->