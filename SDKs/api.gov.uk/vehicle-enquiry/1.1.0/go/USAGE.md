<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Vehicle.GetVehicleDetailsByRegistrationNumber(ctx, operations.GetVehicleDetailsByRegistrationNumberRequest{
        VehicleRequest: shared.VehicleRequest{
            RegistrationNumber: sdk.String("corrupti"),
        },
        XCorrelationID: sdk.String("provident"),
        XAPIKey: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Vehicle != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->