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