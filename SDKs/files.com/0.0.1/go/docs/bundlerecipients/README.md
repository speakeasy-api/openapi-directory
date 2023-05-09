# BundleRecipients

## Overview

Operations about bundle_recipients

### Available Operations

* [GetBundleRecipients](#getbundlerecipients) - List Bundle Recipients
* [PostBundleRecipients](#postbundlerecipients) - Create Bundle Recipient

## GetBundleRecipients

List Bundle Recipients

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
    res, err := s.BundleRecipients.GetBundleRecipients(ctx, operations.GetBundleRecipientsRequest{
        BundleID: 863856,
        Cursor: sdk.String("soluta"),
        Filter: map[string]interface{}{
            "laborum": "totam",
        },
        PerPage: sdk.Int(276894),
        SortBy: map[string]interface{}{
            "dolores": "distinctio",
        },
        UserID: sdk.Int(704474),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BundleRecipientEntities != nil {
        // handle response
    }
}
```

## PostBundleRecipients

Create Bundle Recipient

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
    res, err := s.BundleRecipients.PostBundleRecipients(ctx, operations.PostBundleRecipientsRequestBody{
        BundleID: 396060,
        Company: sdk.String("Acme Ltd"),
        Name: sdk.String("John Smith"),
        Note: sdk.String("Just a note."),
        Recipient: "johndoe@gmail.com",
        ShareAfterCreate: sdk.Bool(false),
        UserID: sdk.Int(463150),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BundleRecipientEntity != nil {
        // handle response
    }
}
```
