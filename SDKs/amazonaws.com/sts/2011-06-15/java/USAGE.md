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

            GetDecodeAuthorizationMessageRequest req = new GetDecodeAuthorizationMessageRequest() {{
                queryParams = new GetDecodeAuthorizationMessageQueryParams() {{
                    action = "DecodeAuthorizationMessage";
                    encodedMessage = "autem";
                    version = "2011-06-15";
                }};
                headers = new GetDecodeAuthorizationMessageHeaders() {{
                    xAmzAlgorithm = "consequatur";
                    xAmzContentSha256 = "delectus";
                    xAmzCredential = "qui";
                    xAmzDate = "et";
                    xAmzSecurityToken = "quaerat";
                    xAmzSignature = "voluptatem";
                    xAmzSignedHeaders = "et";
                }};
            }};

            GetDecodeAuthorizationMessageResponse res = sdk.getDecodeAuthorizationMessage(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->