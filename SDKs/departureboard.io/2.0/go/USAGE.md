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

    req := operations.GetArrivalsAndDeparturesByCRSRequest{
        Crs: "corrupti",
        APIKey: "provident",
        FilterStation: "distinctio",
        FilterType: "quibusdam",
        NumServices: 602763,
        ServiceDetails: false,
        TimeOffset: 857946,
        TimeWindow: 544883,
    }

    ctx := context.Background()
    res, err := s.DeparturesAndArrivals.GetArrivalsAndDeparturesByCRS(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->