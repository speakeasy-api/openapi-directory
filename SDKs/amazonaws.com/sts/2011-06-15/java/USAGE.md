<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GETDecodeAuthorizationMessageActionEnum;
import org.openapis.openapi.models.operations.GETDecodeAuthorizationMessageVersionEnum;
import org.openapis.openapi.models.operations.GETDecodeAuthorizationMessageQueryParams;
import org.openapis.openapi.models.operations.GETDecodeAuthorizationMessageHeaders;
import org.openapis.openapi.models.operations.GETDecodeAuthorizationMessageRequest;
import org.openapis.openapi.models.operations.GETDecodeAuthorizationMessageResponse;

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

            GETDecodeAuthorizationMessageRequest req = new GETDecodeAuthorizationMessageRequest() {{
                queryParams = new GETDecodeAuthorizationMessageQueryParams() {{
                    action = "DecodeAuthorizationMessage";
                    encodedMessage = "corrupti";
                    version = "2011-06-15";
                }};
                headers = new GETDecodeAuthorizationMessageHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
            }};            

            GETDecodeAuthorizationMessageResponse res = sdk.getDecodeAuthorizationMessage(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->