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

            BatchPutMessageRequest req = new BatchPutMessageRequest() {{
                headers = new BatchPutMessageHeaders() {{
                    xAmzAlgorithm = "vel";
                    xAmzContentSha256 = "cumque";
                    xAmzCredential = "ea";
                    xAmzDate = "earum";
                    xAmzSecurityToken = "quisquam";
                    xAmzSignature = "explicabo";
                    xAmzSignedHeaders = "id";
                }};
                request = new BatchPutMessageRequestBody() {{
                    channelName = "aperiam";
                    messages = new openapisdk.models.shared.Message[]() {{
                        add(new Message() {{
                            messageId = "dolores";
                            payload = "cum";
                        }}),
                        add(new Message() {{
                            messageId = "consequuntur";
                            payload = "vero";
                        }}),
                    }};
                }};
            }};

            BatchPutMessageResponse res = sdk.batchPutMessage(req);

            if (res.batchPutMessageResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->