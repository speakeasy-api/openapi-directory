<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteSessionPathParams;
import org.openapis.openapi.models.operations.DeleteSessionHeaders;
import org.openapis.openapi.models.operations.DeleteSessionRequest;
import org.openapis.openapi.models.operations.DeleteSessionResponse;

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

            DeleteSessionRequest req = new DeleteSessionRequest() {{
                pathParams = new DeleteSessionPathParams() {{
                    botAliasId = "corrupti";
                    botId = "provident";
                    localeId = "distinctio";
                    sessionId = "quibusdam";
                }};
                headers = new DeleteSessionHeaders() {{
                    xAmzAlgorithm = "unde";
                    xAmzContentSha256 = "nulla";
                    xAmzCredential = "corrupti";
                    xAmzDate = "illum";
                    xAmzSecurityToken = "vel";
                    xAmzSignature = "error";
                    xAmzSignedHeaders = "deserunt";
                }};
            }};            

            DeleteSessionResponse res = sdk.deleteSession(req);

            if (res.deleteSessionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->