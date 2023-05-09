# webhookTests

## Overview

Operations about webhook_tests

### Available Operations

* [postWebhookTests](#postwebhooktests) - Create Webhook Test

## postWebhookTests

Create Webhook Test

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWebhookTestsRequestBody;
import org.openapis.openapi.models.operations.PostWebhookTestsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWebhookTestsRequestBody req = new PostWebhookTestsRequestBody("https://www.site.com/...") {{
                action = "test";
                body = new java.util.HashMap<String, Object>() {{
                    put("id", "libero");
                }};
                encoding = "RAW";
                fileAsBody = false;
                fileFormField = "upload_file_data";
                headers = new java.util.HashMap<String, Object>() {{
                    put("officia", "quos");
                    put("placeat", "sit");
                    put("iusto", "ipsa");
                    put("voluptates", "inventore");
                }};
                method = "GET";
                rawBody = "test body";
            }};            

            PostWebhookTestsResponse res = sdk.webhookTests.postWebhookTests(req);

            if (res.webhookTestEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
