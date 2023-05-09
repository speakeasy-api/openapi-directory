<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostAssignTerminals(ctx, shared.AssignTerminalsRequest{
        CompanyAccount: "corrupti",
        MerchantAccount: sdk.String("provident"),
        MerchantInventory: sdk.Bool(false),
        Store: sdk.String("distinctio"),
        Terminals: []string{
            "unde",
            "nulla",
            "corrupti",
            "illum",
        },
    }, operations.PostAssignTerminalsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignTerminalsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->