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
        QueryParams: operations.GetFlightOffersQueryParams{
            Adults: 548814,
            Children: 592845,
            CurrencyCode: "distinctio",
            DepartureDate: "2022-05-25",
            DestinationLocationCode: "unde",
            ExcludedAirlineCodes: "nulla",
            IncludedAirlineCodes: "corrupti",
            Infants: 847252,
            Max: 423655,
            MaxPrice: 623564,
            NonStop: false,
            OriginLocationCode: "deserunt",
            ReturnDate: "2022-11-09",
            TravelClass: "PREMIUM_ECONOMY",
        },
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