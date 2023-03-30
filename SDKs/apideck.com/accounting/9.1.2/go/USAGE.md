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
        Security: operations.BalanceSheetOneSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.BalanceSheetOneQueryParams{
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
        },
        Headers: operations.BalanceSheetOneHeaders{
            XApideckAppID: "illum",
            XApideckConsumerID: "vel",
            XApideckServiceID: "error",
        },
    }

    ctx := context.Background()
    res, err := s.BalanceSheet.BalanceSheetOne(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBalanceSheetResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->