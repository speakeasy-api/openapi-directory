# PriceMetrics

### Available Operations

* [GetItineraryPriceMetrics](#getitinerarypricemetrics) - GET itinerary price metric

## GetItineraryPriceMetrics

GET itinerary price metric

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
    res, err := s.PriceMetrics.GetItineraryPriceMetrics(ctx, operations.GetItineraryPriceMetricsRequest{
        CurrencyCode: sdk.String("unde"),
        DepartureDate: "nulla",
        DestinationIataCode: "corrupti",
        OneWay: sdk.Bool(false),
        OriginIataCode: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetItineraryPriceMetrics200ApplicationVndAmadeusPlusJSONObject != nil {
        // handle response
    }
}
```
