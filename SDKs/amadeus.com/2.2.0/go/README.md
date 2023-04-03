# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amadeus.com/2.2.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

    req := operations.GetFlightOffersRequest{
        Adults: 548814,
        Children: 592845,
        CurrencyCode: "distinctio",
        DepartureDate: "2021-03-11",
        DestinationLocationCode: "nulla",
        ExcludedAirlineCodes: "corrupti",
        IncludedAirlineCodes: "illum",
        Infants: 423655,
        Max: 623564,
        MaxPrice: 645894,
        NonStop: false,
        OriginLocationCode: "suscipit",
        ReturnDate: "2022-09-14",
        TravelClass: "FIRST",
    }

    ctx := context.Background()
    res, err := s.Shopping.GetFlightOffers(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Success != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Shopping

* `GetFlightOffers` - Return list of Flight Offers based on searching criteria.
* `SearchFlightOffers` - Return list of Flight Offers based on posted searching criteria.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
