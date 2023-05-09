# webhooks

## Overview

With webhooks you can trigger a collection at a specific time with your own custom payload which can then be accessed in the collection.

Learn more about webhooks in our [learning center](https://learning.postman.com/docs/designing-and-developing-your-api/monitoring-your-api/integrations-for-alerts/).

### Available Operations

* [createWebhook](#createwebhook) - Create Webhook

## createWebhook

Create a webhook that triggers a collection with your custom payload.

You can specify the webhook name and the collection to trigger by using the following attributes of the `webhook` object on your JSON body:

* `name`: the name of the webhook that you're creating.
* `collection`: the ID of the collection that you want to trigger once this webhook is called.

Once created, the webhook URL can be retrieved by accessing the `webhookUrl` attribute of the `webhook` object on the response JSON payload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWebhookRequest;
import org.openapis.openapi.models.operations.CreateWebhookRequestBody;
import org.openapis.openapi.models.operations.CreateWebhookRequestBodyWebhook;
import org.openapis.openapi.models.operations.CreateWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateWebhookRequest req = new CreateWebhookRequest() {{
                requestBody = new CreateWebhookRequestBody() {{
                    webhook = new CreateWebhookRequestBodyWebhook() {{
                        collection = "{{collection_id}}";
                        name = "{{webhook_name}}";
                    }};;
                }};;
                workspace = "{{workspace_id}}";
            }};            

            CreateWebhookResponse res = sdk.webhooks.createWebhook(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
