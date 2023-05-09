# twilio

### Available Operations

* [twilioMessageGetTwilioGet](#twiliomessagegettwilioget) - Twilio Message Get
* [twilioMessagePostTwilioPost](#twiliomessageposttwiliopost) - Twilio Message Post

## twilioMessageGetTwilioGet

Twilio Message Get

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TwilioMessageGetTwilioGetRequest;
import org.openapis.openapi.models.operations.TwilioMessageGetTwilioGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TwilioMessageGetTwilioGetRequest req = new TwilioMessageGetTwilioGetRequest("ab") {{
                authorization = "quis";
                base64Message = "veritatis";
                message = "deserunt";
            }};            

            TwilioMessageGetTwilioGetResponse res = sdk.twilio.twilioMessageGetTwilioGet(req);

            if (res.twilioMessageGetTwilioGet200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## twilioMessagePostTwilioPost

Twilio Message Post

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TwilioMessagePostTwilioPostRequest;
import org.openapis.openapi.models.operations.TwilioMessagePostTwilioPostResponse;
import org.openapis.openapi.models.shared.TwilioMessageRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TwilioMessagePostTwilioPostRequest req = new TwilioMessagePostTwilioPostRequest(                new TwilioMessageRequest("perferendis") {{
                                base64Message = "ipsam";
                                message = "repellendus";
                            }};) {{
                authorization = "sapiente";
            }};            

            TwilioMessagePostTwilioPostResponse res = sdk.twilio.twilioMessagePostTwilioPost(req);

            if (res.twilioMessagePostTwilioPost200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
