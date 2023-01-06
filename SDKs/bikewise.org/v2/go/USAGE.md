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
            IncidentType: "unconfirmed",
            OccurredAfter: 4045234609290511383,
            OccurredBefore: 186546979226087645,
            Page: 1040998313997192612,
            PerPage: 1679804363087602601,
            Proximity: "quisquam",
            ProximitySquare: 2963879143025637891,
            Query: "necessitatibus",
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