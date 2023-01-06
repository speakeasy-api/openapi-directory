<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetFlightOffersRequest{
        QueryParams: operations.GetFlightOffersQueryParams{
            Adults: 4814861198247358488,
            Children: 4975249678507640420,
            CurrencyCode: "expedita",
            DepartureDate: "1989-07-08",
            DestinationLocationCode: "qui",
            ExcludedAirlineCodes: "modi",
            IncludedAirlineCodes: "nihil",
            Infants: 1011676084465510524,
            Max: 8764227983217623240,
            MaxPrice: 4745905187492708501,
            NonStop: false,
            OriginLocationCode: "sit",
            ReturnDate: "2001-11-10",
            TravelClass: "BUSINESS",
        },
    }
    
    res, err := s.Shopping.GetFlightOffers(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Success != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->