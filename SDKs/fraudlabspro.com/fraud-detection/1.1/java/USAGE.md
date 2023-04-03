<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostV1OrderFeedbackActionEnum;
import org.openapis.openapi.models.operations.PostV1OrderFeedbackFormatEnum;
import org.openapis.openapi.models.operations.PostV1OrderFeedbackRequest;
import org.openapis.openapi.models.operations.PostV1OrderFeedbackResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV1OrderFeedbackRequest req = new PostV1OrderFeedbackRequest() {{
                action = "REJECT";
                format = "xml";
                id = "distinctio";
                key = "quibusdam";
                notes = "unde";
            }}            

            PostV1OrderFeedbackResponse res = sdk.postV1OrderFeedback(req);

            if (res.postV1OrderFeedback200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->