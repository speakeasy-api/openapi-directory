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

    req := operations.BalanceSheetOneRequest{
        Filter: &shared.BalanceSheetFilter{
            EndDate: "2021-12-31",
            StartDate: "2021-01-01",
        },
        PassThrough: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        Raw: false,
        XApideckAppID: "illum",
        XApideckConsumerID: "vel",
        XApideckServiceID: "error",
    }

    ctx := context.Background()
    res, err := s.BalanceSheet.BalanceSheetOne(ctx, req, operations.BalanceSheetOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBalanceSheetResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->