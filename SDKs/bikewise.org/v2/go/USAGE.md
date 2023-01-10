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
            IncidentType: "hazard",
            OccurredAfter: 7278960282919804440,
            OccurredBefore: 8123455823415940668,
            Page: 279016587921788840,
            PerPage: 6868718605133710902,
            Proximity: "quibusdam",
            ProximitySquare: 2090439125431722263,
            Query: "vel",
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