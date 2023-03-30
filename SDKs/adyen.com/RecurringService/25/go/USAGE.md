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
        Security: operations.PostDisableSecurity{
            APIKeyAuth: &shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &shared.DisableRequest{
            Contract: "corrupti",
            MerchantAccount: "provident",
            RecurringDetailReference: "distinctio",
            ShopperReference: "quibusdam",
        },
    }

    ctx := context.Background()
    res, err := s.General.PostDisable(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->