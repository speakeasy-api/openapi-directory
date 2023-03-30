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

    req := operations.GETVersionIncidentsFormatRequest{
        QueryParams: operations.GETVersionIncidentsFormatQueryParams{
            IncidentType: "unconfirmed",
            OccurredAfter: 592845,
            OccurredBefore: 715190,
            Page: 844266,
            PerPage: 602763,
            Proximity: "nulla",
            ProximitySquare: 544883,
            Query: "illum",
        },
    }

    ctx := context.Background()
    res, err := s.Incidents.GETVersionIncidentsFormat(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->