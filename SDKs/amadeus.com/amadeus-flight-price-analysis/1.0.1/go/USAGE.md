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

    req := operations.GetItineraryPriceMetricsRequest{
        QueryParams: operations.GetItineraryPriceMetricsQueryParams{
            CurrencyCode: "corrupti",
            DepartureDate: "provident",
            DestinationIataCode: "distinctio",
            OneWay: false,
            OriginIataCode: "quibusdam",
        },
    }

    ctx := context.Background()
    res, err := s.PriceMetrics.GetItineraryPriceMetrics(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetItineraryPriceMetrics200ApplicationVndAmadeusPlusJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->