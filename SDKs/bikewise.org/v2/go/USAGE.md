<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Incidents.GETVersionIncidentsFormat(ctx, operations.GETVersionIncidentsFormatRequest{
        IncidentType: operations.GETVersionIncidentsFormatIncidentTypeEnumUnconfirmed.ToPointer(),
        OccurredAfter: sdk.Int(592845),
        OccurredBefore: sdk.Int(715190),
        Page: sdk.Int(844266),
        PerPage: sdk.Int(602763),
        Proximity: sdk.String("nulla"),
        ProximitySquare: sdk.Int(544883),
        Query: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->