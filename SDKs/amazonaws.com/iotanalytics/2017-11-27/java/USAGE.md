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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new BatchPutMessageRequestBody() {{
                    channelName = "voluptas";
                    messages = new openapisdk.models.shared.Message[]() {{
                        add(new Message() {{
                            messageId = "et";
                            payload = "nihil";
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