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

            DeleteSessionRequest req = new DeleteSessionRequest() {{
                pathParams = new DeleteSessionPathParams() {{
                    botAlias = "sit";
                    botName = "voluptas";
                    userId = "culpa";
                }};
                headers = new DeleteSessionHeaders() {{
                    xAmzAlgorithm = "expedita";
                    xAmzContentSha256 = "consequuntur";
                    xAmzCredential = "dolor";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "voluptas";
                    xAmzSignature = "fugit";
                    xAmzSignedHeaders = "et";
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