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
            CompanyAccount: "corrupti",
            MerchantAccount: "provident",
            MerchantInventory: false,
            Store: "distinctio",
            Terminals: []string{
                "unde",
                "nulla",
                "corrupti",
                "illum",
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