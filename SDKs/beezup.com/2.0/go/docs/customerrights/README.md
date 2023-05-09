# CustomerRights

### Available Operations

* [GetRights](#getrights) - Get store's rights

## GetRights

Get store's rights

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
    res, err := s.CustomerRights.GetRights(ctx, operations.GetRightsRequest{
        StoreID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FunctionalityRightInfos != nil {
        // handle response
    }
}
```
