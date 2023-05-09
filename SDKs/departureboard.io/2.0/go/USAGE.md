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
    res, err := s.DeparturesAndArrivals.GetArrivalsAndDeparturesByCRS(ctx, operations.GetArrivalsAndDeparturesByCRSRequest{
        Crs: "corrupti",
        APIKey: "provident",
        FilterStation: sdk.String("distinctio"),
        FilterType: sdk.String("quibusdam"),
        NumServices: sdk.Int64(602763),
        ServiceDetails: sdk.Bool(false),
        TimeOffset: sdk.Int64(857946),
        TimeWindow: sdk.Int64(544883),
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