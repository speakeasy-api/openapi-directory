<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchPutMessageHeaders;
import org.openapis.openapi.models.operations.BatchPutMessageRequestBody;
import org.openapis.openapi.models.operations.BatchPutMessageRequest;
import org.openapis.openapi.models.operations.BatchPutMessageResponse;
import org.openapis.openapi.models.shared.Message;

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

            BatchPutMessageRequest req = new BatchPutMessageRequest() {{
                headers = new BatchPutMessageHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new BatchPutMessageRequestBody() {{
                    channelName = "illum";
                    messages = new org.openapis.openapi.models.shared.Message[]{{
                        add(new Message() {{
                            messageId = "error";
                            payload = "deserunt";
                        }}),
                        add(new Message() {{
                            messageId = "suscipit";
                            payload = "iure";
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