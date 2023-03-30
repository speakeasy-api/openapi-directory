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

    req := operations.PostDisableRequest{
        Request: &shared.DisableRequest{
            Contract: "corrupti",
            MerchantAccount: "provident",
            RecurringDetailReference: "distinctio",
            ShopperReference: "quibusdam",
        },
    }

    ctx := context.Background()
    res, err := s.PostDisable(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->