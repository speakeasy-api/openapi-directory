<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.MessagesAddSecurity;
import org.openapis.openapi.models.operations.MessagesAddRequest;
import org.openapis.openapi.models.operations.MessagesAddResponse;
import org.openapis.openapi.models.shared.MessageMessageTypeEnum;
import org.openapis.openapi.models.shared.MessageInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MessagesAddRequest req = new MessagesAddRequest() {{
                messageInput = new MessageInput() {{
                    body = "Hi! How are you doing?";
                    from = "+15017122661";
                    messagingServiceId = "123456";
                    reference = "CUST001";
                    scheduledAt = "2020-09-30T07:43:32.000Z";
                    subject = "Picture";
                    to = "+15017122662";
                    type = "sms";
                    webhookUrl = "https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms";
                }};
                raw = false;
                xApideckAppId = "corrupti";
                xApideckConsumerId = "provident";
                xApideckServiceId = "distinctio";
            }}            

            MessagesAddResponse res = sdk.messages.messagesAdd(req, new MessagesAddSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createMessageResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->