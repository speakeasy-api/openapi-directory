# ActionWebhookFailures

## Overview

Operations about action_webhook_failures

### Available Operations

* [PostActionWebhookFailuresIDRetry](#postactionwebhookfailuresidretry) - retry Action Webhook Failure

## PostActionWebhookFailuresIDRetry

retry Action Webhook Failure

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
    res, err := s.ActionWebhookFailures.PostActionWebhookFailuresIDRetry(ctx, operations.PostActionWebhookFailuresIDRetryRequest{
        ID: 645894,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
