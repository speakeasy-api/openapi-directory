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
            Adults: 8717895732742165505,
            Children: 2259404117704393152,
            CurrencyCode: "culpa",
            DepartureDate: "2019-04-21",
            DestinationLocationCode: "consequuntur",
            ExcludedAirlineCodes: "dolor",
            IncludedAirlineCodes: "expedita",
            Infants: 6044372234677422456,
            Max: 8274930044578894929,
            MaxPrice: 1543572285742637646,
            NonStop: true,
            OriginLocationCode: "rerum",
            ReturnDate: "2004-06-02",
            TravelClass: "ECONOMY",
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