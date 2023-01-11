<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            PostV1OrderFeedbackRequest req = new PostV1OrderFeedbackRequest() {{
                queryParams = new PostV1OrderFeedbackQueryParams() {{
                    action = "REJECT_BLACKLIST";
                    format = "json";
                    id = "fugiat";
                    key = "nesciunt";
                    notes = "et";
                }};
            }};

            PostV1OrderFeedbackResponse res = sdk.postV1OrderFeedback(req);

            if (res.postV1OrderFeedback200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->