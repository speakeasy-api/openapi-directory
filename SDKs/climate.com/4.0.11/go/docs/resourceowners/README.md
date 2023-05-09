# ResourceOwners

## Overview

Resource Owner data endpoints.

### Available Operations

* [GetResourceOwner](#getresourceowner) - Retrieve a resource owner by ID

## GetResourceOwner

Retrieve a resource owner for the given `resourceOwnerId`.

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
    res, err := s.ResourceOwners.GetResourceOwner(ctx, operations.GetResourceOwnerRequest{
        ResourceOwnerID: "7bd466d2-8c10-4ab3-8dca-4251904e523c",
    }, operations.GetResourceOwnerSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceOwner != nil {
        // handle response
    }
}
```
