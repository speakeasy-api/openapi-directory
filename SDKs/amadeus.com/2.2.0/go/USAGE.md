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