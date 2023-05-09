# PromotionReport

### Available Operations

* [GetPromotionReports](#getpromotionreports) - This method generates a report that lists the seller's running, paused, and ended promotions for the specified eBay marketplace. The result set can be filtered by the promotion status and the number of results to return. You can also supply <i>keywords</i> to limit the report to promotions that contain the specified keywords. <br><br>Specify the eBay marketplace for which you want the report run using the <b>marketplace_id</b> query parameter. Supply additional query parameters to control the report as needed.

## GetPromotionReports

This method generates a report that lists the seller's running, paused, and ended promotions for the specified eBay marketplace. The result set can be filtered by the promotion status and the number of results to return. You can also supply <i>keywords</i> to limit the report to promotions that contain the specified keywords. <br><br>Specify the eBay marketplace for which you want the report run using the <b>marketplace_id</b> query parameter. Supply additional query parameters to control the report as needed.

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
    res, err := s.PromotionReport.GetPromotionReports(ctx, operations.GetPromotionReportsRequest{
        Limit: sdk.String("laudantium"),
        MarketplaceID: "eum",
        Offset: sdk.String("mollitia"),
        PromotionStatus: sdk.String("ab"),
        PromotionType: sdk.String("corrupti"),
        Q: sdk.String("non"),
    }, operations.GetPromotionReportsSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PromotionsReportPagedCollection != nil {
        // handle response
    }
}
```
