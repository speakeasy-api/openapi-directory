# webhooks

### Available Operations

* [postWebhooksFirehoseTest](#postwebhooksfirehosetest) - Test Firehose Webhook
* [putWebhooksFirehose](#putwebhooksfirehose) - Update Firehose Webhook

## postWebhooksFirehoseTest

Trigger a test payload to be sent to your configured Firehose Webhook url.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWebhooksFirehoseTestResponse;
import org.openapis.openapi.models.operations.PostWebhooksFirehoseTestSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWebhooksFirehoseTestResponse res = sdk.webhooks.postWebhooksFirehoseTest(new PostWebhooksFirehoseTestSecurity("nam") {{
                clientAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putWebhooksFirehose

Update Firehose Webhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutWebhooksFirehoseRequestBody;
import org.openapis.openapi.models.operations.PutWebhooksFirehoseResponse;
import org.openapis.openapi.models.operations.PutWebhooksFirehoseSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutWebhooksFirehoseRequestBody req = new PutWebhooksFirehoseRequestBody() {{
                secret = "0Kvs1tAUQ69FOMBiWlt5XJSrruXMhWDiVbyrWaNm";
                url = "https://brainpower.co/enode-webhooks/firehose";
            }};            

            PutWebhooksFirehoseResponse res = sdk.webhooks.putWebhooksFirehose(req, new PutWebhooksFirehoseSecurity("officia") {{
                clientAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
