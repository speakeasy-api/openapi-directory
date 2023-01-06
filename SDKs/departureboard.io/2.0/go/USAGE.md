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
    
    req := operations.GetArrivalsAndDeparturesByCrsRequest{
        PathParams: operations.GetArrivalsAndDeparturesByCrsPathParams{
            CRS: "in",
        },
        QueryParams: operations.GetArrivalsAndDeparturesByCrsQueryParams{
            APIKey: "error",
            FilterStation: "quo",
            FilterType: "itaque",
            NumServices: 6460737378073047685,
            ServiceDetails: true,
            TimeOffset: 5240284290571592368,
            TimeWindow: 8520036234026697246,
        },
    }
    
    res, err := s.DeparturesAndArrivals.GetArrivalsAndDeparturesByCrs(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->