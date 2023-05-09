# WebhookTests

## Overview

Operations about webhook_tests

### Available Operations

* [PostWebhookTests](#postwebhooktests) - Create Webhook Test

## PostWebhookTests

Create Webhook Test

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
    res, err := s.WebhookTests.PostWebhookTests(ctx, operations.PostWebhookTestsRequestBody{
        Action: sdk.String("test"),
        Body: map[string]interface{}{
            "cum": "at",
            "alias": "quia",
            "quidem": "fuga",
            "repudiandae": "accusantium",
        },
        Encoding: sdk.String("RAW"),
        FileAsBody: sdk.Bool(false),
        FileFormField: sdk.String("upload_file_data"),
        Headers: map[string]interface{}{
            "officiis": "eos",
            "quibusdam": "odio",
            "praesentium": "odit",
        },
        Method: sdk.String("GET"),
        RawBody: sdk.String("test body"),
        URL: "https://www.site.com/...",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookTestEntity != nil {
        // handle response
    }
}
```
