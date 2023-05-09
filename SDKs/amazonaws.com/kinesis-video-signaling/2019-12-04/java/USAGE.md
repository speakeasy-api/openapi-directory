<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIceServerConfigRequest;
import org.openapis.openapi.models.operations.GetIceServerConfigRequestBody;
import org.openapis.openapi.models.operations.GetIceServerConfigRequestBodyServiceEnum;
import org.openapis.openapi.models.operations.GetIceServerConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIceServerConfigRequest req = new GetIceServerConfigRequest(                new GetIceServerConfigRequestBody("provident") {{
                                clientId = "distinctio";
                                service = GetIceServerConfigRequestBodyServiceEnum.TURN;
                                username = "Rosalinda_Mitchell84";
                            }};) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "error";
                xAmzCredential = "deserunt";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "iure";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "debitis";
            }};            

            GetIceServerConfigResponse res = sdk.getIceServerConfig(req);

            if (res.getIceServerConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->