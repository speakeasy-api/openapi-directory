<!-- Start SDK Example Usage -->
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
    res, err := s.GetLatestBaseCurrency(ctx, operations.GetLatestBaseCurrencyRequest{
        BaseCurrency: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLatestBaseCurrency200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->