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
    
    req := operations.GetVersionIncidentsFormatRequest{
        QueryParams: operations.GetVersionIncidentsFormatQueryParams{
            IncidentType: "crash",
            OccurredAfter: 2259404117704393152,
            OccurredBefore: 6050128673802995827,
            Page: 501233450539197794,
            PerPage: 3390393562759376202,
            Proximity: "dolor",
            ProximitySquare: 1774932891286980153,
            Query: "voluptas",
        },
    }
    
    res, err := s.Incidents.GetVersionIncidentsFormat(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->