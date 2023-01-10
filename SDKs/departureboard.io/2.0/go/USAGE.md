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
            CRS: "voluptas",
        },
        QueryParams: operations.GetArrivalsAndDeparturesByCrsQueryParams{
            APIKey: "veniam",
            FilterStation: "dolorum",
            FilterType: "id",
            NumServices: 5235212334792799739,
            ServiceDetails: false,
            TimeOffset: 5575187088826678383,
            TimeWindow: 6278711762470794999,
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