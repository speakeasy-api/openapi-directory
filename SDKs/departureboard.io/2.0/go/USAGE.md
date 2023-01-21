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
            CRS: "sit",
        },
        QueryParams: operations.GetArrivalsAndDeparturesByCrsQueryParams{
            APIKey: "voluptas",
            FilterStation: "culpa",
            FilterType: "expedita",
            NumServices: 3390393562759376202,
            ServiceDetails: false,
            TimeOffset: 1774932891286980153,
            TimeWindow: 6044372234677422456,
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