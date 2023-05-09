# slack

### Available Operations

* [slackGetSlackGet](#slackgetslackget) - Slack Get
* [slackPostSlackPost](#slackpostslackpost) - Slack Post

## slackGetSlackGet

Slack Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SlackGetSlackGetRequest;
import org.openapis.openapi.models.operations.SlackGetSlackGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SlackGetSlackGetRequest req = new SlackGetSlackGetRequest("debitis") {{
                authorization = "ipsa";
                base64Message = "delectus";
                message = "tempora";
            }};            

            SlackGetSlackGetResponse res = sdk.slack.slackGetSlackGet(req);

            if (res.slackGetSlackGet200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## slackPostSlackPost

Slack Post

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SlackPostSlackPostRequest;
import org.openapis.openapi.models.operations.SlackPostSlackPostResponse;
import org.openapis.openapi.models.shared.SlackMessageRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SlackPostSlackPostRequest req = new SlackPostSlackPostRequest(                new SlackMessageRequest("suscipit") {{
                                base64Message = "molestiae";
                                message = "minus";
                            }};) {{
                authorization = "placeat";
            }};            

            SlackPostSlackPostResponse res = sdk.slack.slackPostSlackPost(req);

            if (res.slackPostSlackPost200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
