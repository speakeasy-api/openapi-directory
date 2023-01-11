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
                    botAlias = "ex";
                    botName = "magnam";
                    userId = "a";
                }};
                headers = new DeleteSessionHeaders() {{
                    xAmzAlgorithm = "et";
                    xAmzContentSha256 = "omnis";
                    xAmzCredential = "dicta";
                    xAmzDate = "in";
                    xAmzSecurityToken = "et";
                    xAmzSignature = "enim";
                    xAmzSignedHeaders = "saepe";
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