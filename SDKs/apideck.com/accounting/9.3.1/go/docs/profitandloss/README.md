# ProfitAndLoss

### Available Operations

* [ProfitAndLossOne](#profitandlossone) - Get Profit and Loss

## ProfitAndLossOne

Get Profit and Loss

### Example Usage

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
    res, err := s.ProfitAndLoss.ProfitAndLossOne(ctx, operations.ProfitAndLossOneRequest{
        Fields: sdk.String("numquam"),
        Filter: &shared.ProfitAndLossFilter{
            CustomerID: sdk.String("123abc"),
            EndDate: sdk.String("2021-12-31"),
            StartDate: sdk.String("2021-01-01"),
        },
        PassThrough: map[string]interface{}{
            "in": "officiis",
            "beatae": "laudantium",
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "exercitationem",
        XApideckConsumerID: "praesentium",
        XApideckServiceID: sdk.String("cum"),
    }, operations.ProfitAndLossOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProfitAndLossResponse != nil {
        // handle response
    }
}
```
