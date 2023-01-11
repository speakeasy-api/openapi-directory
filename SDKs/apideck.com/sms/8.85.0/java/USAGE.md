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
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            MessagesAddRequest req = new MessagesAddRequest() {{
                security = new MessagesAddSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new MessagesAddQueryParams() {{
                    raw = false;
                }};
                headers = new MessagesAddHeaders() {{
                    xApideckAppId = "voluptas";
                    xApideckConsumerId = "culpa";
                    xApideckServiceId = "expedita";
                }};
                request = new MessageInput() {{
                    body = "consequuntur";
                    from = "dolor";
                    messagingServiceId = "expedita";
                    reference = "voluptas";
                    scheduledAt = "2011-08-12T10:11:12Z";
                    subject = "nihil";
                    to = "rerum";
                    type = "mms";
                    webhookUrl = "debitis";
                }};
            }};

            MessagesAddResponse res = sdk.messages.messagesAdd(req);

            if (res.createMessageResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->