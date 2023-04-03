<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchPutMessageRequestBody;
import org.openapis.openapi.models.operations.BatchPutMessageRequest;
import org.openapis.openapi.models.operations.BatchPutMessageResponse;
import org.openapis.openapi.models.shared.Message;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchPutMessageRequest req = new BatchPutMessageRequest() {{
                requestBody = new BatchPutMessageRequestBody() {{
                    channelName = "corrupti";
                    messages = new org.openapis.openapi.models.shared.Message[]{{
                        add(new Message() {{
                            messageId = "distinctio";
                            payload = "quibusdam";
                        }}),
                        add(new Message() {{
                            messageId = "unde";
                            payload = "nulla";
                        }}),
                        add(new Message() {{
                            messageId = "corrupti";
                            payload = "illum";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "error";
                xAmzCredential = "deserunt";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "iure";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "debitis";
            }}            

            BatchPutMessageResponse res = sdk.batchPutMessage(req);

            if (res.batchPutMessageResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->