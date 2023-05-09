# Stores

### Available Operations

* [StoresOne](#storesone) - Get Store

## StoresOne

Get Store

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
    res, err := s.Stores.StoresOne(ctx, operations.StoresOneRequest{
        Fields: sdk.String("tenetur"),
        Raw: sdk.Bool(false),
        XApideckAppID: "ipsam",
        XApideckConsumerID: "id",
        XApideckServiceID: sdk.String("possimus"),
    }, operations.StoresOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStoreResponse != nil {
        // handle response
    }
}
```
