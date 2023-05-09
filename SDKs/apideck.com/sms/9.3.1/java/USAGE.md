<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MessagesAddRequest;
import org.openapis.openapi.models.operations.MessagesAddResponse;
import org.openapis.openapi.models.operations.MessagesAddSecurity;
import org.openapis.openapi.models.shared.MessageInput;
import org.openapis.openapi.models.shared.MessageMessageTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MessagesAddRequest req = new MessagesAddRequest(                new MessageInput("Hi! How are you doing?", "+15017122661", "+15017122662") {{
                                messagingServiceId = "123456";
                                reference = "CUST001";
                                scheduledAt = OffsetDateTime.parse("2020-09-30T07:43:32.000Z");
                                subject = "Picture";
                                type = MessageMessageTypeEnum.SMS;
                                webhookUrl = "https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms";
                            }};, "corrupti", "provident") {{
                raw = false;
                xApideckServiceId = "distinctio";
            }};            

            MessagesAddResponse res = sdk.messages.messagesAdd(req, new MessagesAddSecurity("quibusdam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createMessageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->