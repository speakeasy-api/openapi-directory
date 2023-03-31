<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.MessagesAddSecurity;
import org.openapis.openapi.models.operations.MessagesAddQueryParams;
import org.openapis.openapi.models.operations.MessagesAddHeaders;
import org.openapis.openapi.models.operations.MessagesAddRequest;
import org.openapis.openapi.models.operations.MessagesAddResponse;
import org.openapis.openapi.models.shared.MessageMessageTypeEnum;
import org.openapis.openapi.models.shared.MessageInput;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MessagesAddRequest req = new MessagesAddRequest() {{
                security = new MessagesAddSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new MessagesAddQueryParams() {{
                    raw = false;
                }};
                headers = new MessagesAddHeaders() {{
                    xApideckAppId = "corrupti";
                    xApideckConsumerId = "provident";
                    xApideckServiceId = "distinctio";
                }};
                request = new MessageInput() {{
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