<!-- Start SDK Example Usage -->
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
    res, err := s.PriceMetrics.GetItineraryPriceMetrics(ctx, operations.GetItineraryPriceMetricsRequest{
        CurrencyCode: sdk.String("corrupti"),
        DepartureDate: "provident",
        DestinationIataCode: "distinctio",
        OneWay: sdk.Bool(false),
        OriginIataCode: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetItineraryPriceMetrics200ApplicationVndAmadeusPlusJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->