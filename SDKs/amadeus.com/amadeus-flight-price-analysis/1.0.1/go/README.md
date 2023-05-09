# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amadeus.com/amadeus-flight-price-analysis/1.0.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [PriceMetrics](docs/pricemetrics/README.md)

* [GetItineraryPriceMetrics](docs/pricemetrics/README.md#getitinerarypricemetrics) - GET itinerary price metric
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
