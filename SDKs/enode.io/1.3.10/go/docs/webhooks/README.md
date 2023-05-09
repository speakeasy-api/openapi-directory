# Webhooks

### Available Operations

* [PostWebhooksFirehoseTest](#postwebhooksfirehosetest) - Test Firehose Webhook
* [PutWebhooksFirehose](#putwebhooksfirehose) - Update Firehose Webhook

## PostWebhooksFirehoseTest

Trigger a test payload to be sent to your configured Firehose Webhook url.

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
    res, err := s.Webhooks.PostWebhooksFirehoseTest(ctx, operations.PostWebhooksFirehoseTestSecurity{
        ClientAccessToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutWebhooksFirehose

Update Firehose Webhook

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
    res, err := s.Webhooks.PutWebhooksFirehose(ctx, operations.PutWebhooksFirehoseRequestBody{
        Secret: sdk.String("0Kvs1tAUQ69FOMBiWlt5XJSrruXMhWDiVbyrWaNm"),
        URL: sdk.String("https://brainpower.co/enode-webhooks/firehose"),
    }, operations.PutWebhooksFirehoseSecurity{
        ClientAccessToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
