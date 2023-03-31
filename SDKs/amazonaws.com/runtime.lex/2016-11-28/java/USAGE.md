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
                    botAlias = "corrupti";
                    botName = "provident";
                    userId = "distinctio";
                }};
                headers = new DeleteSessionHeaders() {{
                    xAmzAlgorithm = "quibusdam";
                    xAmzContentSha256 = "unde";
                    xAmzCredential = "nulla";
                    xAmzDate = "corrupti";
                    xAmzSecurityToken = "illum";
                    xAmzSignature = "vel";
                    xAmzSignedHeaders = "error";
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