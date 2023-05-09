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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [messages](docs/messages/README.md)

* [messagesAdd](docs/messages/README.md#messagesadd) - Create Message
* [messagesAll](docs/messages/README.md#messagesall) - List Messages
* [messagesDelete](docs/messages/README.md#messagesdelete) - Delete Message
* [messagesOne](docs/messages/README.md#messagesone) - Get Message
* [messagesUpdate](docs/messages/README.md#messagesupdate) - Update Message
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
