<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BalanceSheet.BalanceSheetOne(ctx, operations.BalanceSheetOneRequest{
        Filter: &shared.BalanceSheetFilter{
            EndDate: sdk.String("2021-12-31"),
            StartDate: sdk.String("2021-01-01"),
        },
        PassThrough: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "illum",
        XApideckConsumerID: "vel",
        XApideckServiceID: sdk.String("error"),
    }, operations.BalanceSheetOneSecurity{
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