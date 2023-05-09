# Sync

## Overview

Triggering a new sync of expenses to accounting software.

### Available Operations

* [IntiateSync](#intiatesync) - Initiate sync

## IntiateSync

Initiate sync of pending transactions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Sync.IntiateSync(ctx, operations.IntiateSyncRequest{
        PostSync: &shared.PostSync{
            DatasetIds: []string{
                "7cc8796e-d151-4a05-9fc2-ddf7cc78ca1b",
                "a928fc81-6742-4cb7-b920-5929396fea75",
            },
        },
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncInitiated != nil {
        // handle response
    }
}
```
