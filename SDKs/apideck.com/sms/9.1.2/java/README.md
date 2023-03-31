# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### messages

* `messagesAdd` - Create Message
* `messagesAll` - List Messages
* `messagesDelete` - Delete Message
* `messagesOne` - Get Message
* `messagesUpdate` - Update Message
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
