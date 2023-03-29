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

    req := operations.PostAssignTerminalsRequest{
        Security: operations.PostAssignTerminalsSecurity{
            APIKeyAuth: shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &shared.AssignTerminalsRequest{
            CompanyAccount: "unde",
            MerchantAccount: "deserunt",
            MerchantInventory: false,
            Store: "porro",
            Terminals: []string{
                "id",
                "vero",
                "perspiciatis",
                "nulla",
            },
        },
    }

    ctx := context.Background()
    res, err := s.General.PostAssignTerminals(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignTerminalsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->