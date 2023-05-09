# messages

### Available Operations

* [messagesAdd](#messagesadd) - Create Message
* [messagesAll](#messagesall) - List Messages
* [messagesDelete](#messagesdelete) - Delete Message
* [messagesOne](#messagesone) - Get Message
* [messagesUpdate](#messagesupdate) - Update Message

## messagesAdd

Create Message

### Example Usage

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
                            }};, "unde", "nulla") {{
                raw = false;
                xApideckServiceId = "corrupti";
            }};            

            MessagesAddResponse res = sdk.messages.messagesAdd(req, new MessagesAddSecurity("illum") {{
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

## messagesAll

List Messages

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MessagesAllRequest;
import org.openapis.openapi.models.operations.MessagesAllResponse;
import org.openapis.openapi.models.operations.MessagesAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MessagesAllRequest req = new MessagesAllRequest("vel", "error") {{
                cursor = "deserunt";
                fields = "suscipit";
                limit = 437587L;
                raw = false;
                xApideckServiceId = "magnam";
            }};            

            MessagesAllResponse res = sdk.messages.messagesAll(req, new MessagesAllSecurity("debitis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getMessagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## messagesDelete

Delete Message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MessagesDeleteRequest;
import org.openapis.openapi.models.operations.MessagesDeleteResponse;
import org.openapis.openapi.models.operations.MessagesDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MessagesDeleteRequest req = new MessagesDeleteRequest("ipsa", "delectus", "tempora") {{
                raw = false;
                xApideckServiceId = "suscipit";
            }};            

            MessagesDeleteResponse res = sdk.messages.messagesDelete(req, new MessagesDeleteSecurity("molestiae") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteMessageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## messagesOne

Get Message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MessagesOneRequest;
import org.openapis.openapi.models.operations.MessagesOneResponse;
import org.openapis.openapi.models.operations.MessagesOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MessagesOneRequest req = new MessagesOneRequest("minus", "placeat", "voluptatum") {{
                fields = "iusto";
                raw = false;
                xApideckServiceId = "excepturi";
            }};            

            MessagesOneResponse res = sdk.messages.messagesOne(req, new MessagesOneSecurity("nisi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getMessageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## messagesUpdate

Update Message

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MessagesUpdateRequest;
import org.openapis.openapi.models.operations.MessagesUpdateResponse;
import org.openapis.openapi.models.operations.MessagesUpdateSecurity;
import org.openapis.openapi.models.shared.MessageInput;
import org.openapis.openapi.models.shared.MessageMessageTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MessagesUpdateRequest req = new MessagesUpdateRequest(                new MessageInput("Hi! How are you doing?", "+15017122661", "+15017122662") {{
                                messagingServiceId = "123456";
                                reference = "CUST001";
                                scheduledAt = OffsetDateTime.parse("2020-09-30T07:43:32.000Z");
                                subject = "Picture";
                                type = MessageMessageTypeEnum.SMS;
                                webhookUrl = "https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms";
                            }};, "recusandae", "temporibus", "ab") {{
                raw = false;
                xApideckServiceId = "quis";
            }};            

            MessagesUpdateResponse res = sdk.messages.messagesUpdate(req, new MessagesUpdateSecurity("veritatis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateMessageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
