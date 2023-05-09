<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchPutMessageRequest;
import org.openapis.openapi.models.operations.BatchPutMessageRequestBody;
import org.openapis.openapi.models.operations.BatchPutMessageResponse;
import org.openapis.openapi.models.shared.Message;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchPutMessageRequest req = new BatchPutMessageRequest(                new BatchPutMessageRequestBody("provident",                 new org.openapis.openapi.models.shared.Message[]{{
                                                add(new Message("nulla", "corrupti") {{
                                                    messageId = "quibusdam";
                                                    payload = "unde";
                                                }}),
                                                add(new Message("error", "deserunt") {{
                                                    messageId = "illum";
                                                    payload = "vel";
                                                }}),
                                                add(new Message("magnam", "debitis") {{
                                                    messageId = "suscipit";
                                                    payload = "iure";
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "tempora";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "placeat";
            }};            

            BatchPutMessageResponse res = sdk.batchPutMessage(req);

            if (res.batchPutMessageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->