# Webhooks

## Overview

With webhooks you can trigger a collection at a specific time with your own custom payload which can then be accessed in the collection.

Learn more about webhooks in our [learning center](https://learning.postman.com/docs/designing-and-developing-your-api/monitoring-your-api/integrations-for-alerts/).

### Available Operations

* [CreateWebhook](#createwebhook) - Create Webhook

## CreateWebhook

Create a webhook that triggers a collection with your custom payload.

You can specify the webhook name and the collection to trigger by using the following attributes of the `webhook` object on your JSON body:

* `name`: the name of the webhook that you're creating.
* `collection`: the ID of the collection that you want to trigger once this webhook is called.

Once created, the webhook URL can be retrieved by accessing the `webhookUrl` attribute of the `webhook` object on the response JSON payload.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.CreateWebhook(ctx, operations.CreateWebhookRequest{
        RequestBody: &operations.CreateWebhookRequestBody{
            Webhook: &operations.CreateWebhookRequestBodyWebhook{
                Collection: sdk.String("{{collection_id}}"),
                Name: sdk.String("{{webhook_name}}"),
            },
        },
        Workspace: sdk.String("{{workspace_id}}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
