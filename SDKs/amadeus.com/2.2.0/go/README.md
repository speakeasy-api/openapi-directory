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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Shopping.GetFlightOffers(ctx, operations.GetFlightOffersRequest{
        Adults: 548814,
        Children: sdk.Int64(592845),
        CurrencyCode: sdk.String("distinctio"),
        DepartureDate: types.MustDateFromString("2021-03-11"),
        DestinationLocationCode: "nulla",
        ExcludedAirlineCodes: sdk.String("corrupti"),
        IncludedAirlineCodes: sdk.String("illum"),
        Infants: sdk.Int64(423655),
        Max: sdk.Int64(623564),
        MaxPrice: sdk.Int64(645894),
        NonStop: sdk.Bool(false),
        OriginLocationCode: "suscipit",
        ReturnDate: types.MustDateFromString("2022-09-14"),
        TravelClass: operations.GetFlightOffersTravelClassEnumFirst.ToPointer(),
    })
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


### [Shopping](docs/shopping/README.md)

* [GetFlightOffers](docs/shopping/README.md#getflightoffers) - Return list of Flight Offers based on searching criteria.
* [SearchFlightOffers](docs/shopping/README.md#searchflightoffers) - Return list of Flight Offers based on posted searching criteria.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
