<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDecodeAuthorizationMessageActionEnum;
import org.openapis.openapi.models.operations.GETDecodeAuthorizationMessageRequest;
import org.openapis.openapi.models.operations.GETDecodeAuthorizationMessageResponse;
import org.openapis.openapi.models.operations.GETDecodeAuthorizationMessageVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDecodeAuthorizationMessageRequest req = new GETDecodeAuthorizationMessageRequest(GETDecodeAuthorizationMessageActionEnum.DECODE_AUTHORIZATION_MESSAGE, "provident", GETDecodeAuthorizationMessageVersionEnum.TWO_THOUSAND_AND_ELEVEN0615) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            GETDecodeAuthorizationMessageResponse res = sdk.getDecodeAuthorizationMessage(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->