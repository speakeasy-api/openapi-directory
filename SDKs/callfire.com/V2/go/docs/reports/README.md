# Reports

### Available Operations

* [GetDeliveryReports](#getdeliveryreports) - Get delivery reports by ad hoc criteria

## GetDeliveryReports

Get delivery reports

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Reports.GetDeliveryReports(ctx, operations.GetDeliveryReportsRequest{
        CampaignID: sdk.Int64(639028),
        Carrier: sdk.String("dolorum"),
        DeliveryCategory: operations.GetDeliveryReportsDeliveryCategoryEnumBounced.ToPointer(),
        DeliveryState: operations.GetDeliveryReportsDeliveryStateEnumRateLimitExceeded.ToPointer(),
        EndDate: sdk.String("tempora"),
        FromNumber: sdk.String("atque"),
        Limit: sdk.Int(148268),
        MessageText: sdk.String("ut"),
        Offset: sdk.Int(856303),
        StartDate: sdk.String("voluptatem"),
        ToNumber: sdk.String("culpa"),
    }, operations.GetDeliveryReportsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PageDeliveryReport != nil {
        // handle response
    }
}
```
