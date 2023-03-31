<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetLatestBaseCurrencyRequest{
        BaseCurrency: "corrupti",
    }

    ctx := context.Background()
    res, err := s.GetLatestBaseCurrency(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLatestBaseCurrency200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->