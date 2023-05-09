# actionWebhookFailures

## Overview

Operations about action_webhook_failures

### Available Operations

* [postActionWebhookFailuresIdRetry](#postactionwebhookfailuresidretry) - retry Action Webhook Failure

## postActionWebhookFailuresIdRetry

retry Action Webhook Failure

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostActionWebhookFailuresIdRetryRequest;
import org.openapis.openapi.models.operations.PostActionWebhookFailuresIdRetryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostActionWebhookFailuresIdRetryRequest req = new PostActionWebhookFailuresIdRetryRequest(645894);            

            PostActionWebhookFailuresIdRetryResponse res = sdk.actionWebhookFailures.postActionWebhookFailuresIdRetry(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
