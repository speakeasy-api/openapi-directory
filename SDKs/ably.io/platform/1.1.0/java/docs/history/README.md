# history

### Available Operations

* [getMessagesByChannel](#getmessagesbychannel) - Get message history for a channel
* [getPresenceHistoryOfChannel](#getpresencehistoryofchannel) - Get presence history of a channel

## getMessagesByChannel

Get message history for a channel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMessagesByChannelRequest;
import org.openapis.openapi.models.operations.GetMessagesByChannelResponse;
import org.openapis.openapi.models.shared.FilterDirectionEnum;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quo", "odit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMessagesByChannelRequest req = new GetMessagesByChannelRequest("at") {{
                xAblyVersion = "at";
                direction = FilterDirectionEnum.BACKWARDS;
                end = "molestiae";
                format = ResponseFormatEnum.HTML;
                limit = 800911L;
                start = "esse";
            }};            

            GetMessagesByChannelResponse res = sdk.history.getMessagesByChannel(req);

            if (res.messages != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPresenceHistoryOfChannel

Get presence on a channel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPresenceHistoryOfChannelRequest;
import org.openapis.openapi.models.operations.GetPresenceHistoryOfChannelResponse;
import org.openapis.openapi.models.shared.FilterDirectionEnum;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("totam", "porro") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetPresenceHistoryOfChannelRequest req = new GetPresenceHistoryOfChannelRequest("dolorum") {{
                xAblyVersion = "dicta";
                direction = FilterDirectionEnum.BACKWARDS;
                end = "officia";
                format = ResponseFormatEnum.MSGPACK;
                limit = 143353L;
                start = "deleniti";
            }};            

            GetPresenceHistoryOfChannelResponse res = sdk.history.getPresenceHistoryOfChannel(req);

            if (res.presenceMessages != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
