# Operations

## Overview

Operation data endpoints.

### Available Operations

* [FetchOperations](#fetchoperations) - Retrieve the operations accessible to a a given user.

## FetchOperations

Retrieve the **operations** accessible to the authenticated user. Filter the results by resource owner if the `resourceOwnerId` query parameter is specified.

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
    res, err := s.Operations.FetchOperations(ctx, operations.FetchOperationsRequest{
        ResourceOwnerID: sdk.String("fuga"),
    }, operations.FetchOperationsSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operations != nil {
        // handle response
    }
}
```
