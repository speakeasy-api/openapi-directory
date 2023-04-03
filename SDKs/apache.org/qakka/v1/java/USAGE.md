<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AckMessageRequest;
import org.openapis.openapi.models.operations.AckMessageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AckMessageRequest req = new AckMessageRequest() {{
                queueMessageId = "corrupti";
                queueName = "provident";
            }}            

            AckMessageResponse res = sdk.queues.ackMessage(req);

            if (res.apiResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->