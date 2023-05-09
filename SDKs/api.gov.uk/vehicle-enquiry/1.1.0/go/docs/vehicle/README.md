# Vehicle

### Available Operations

* [GetVehicleDetailsByRegistrationNumber](#getvehicledetailsbyregistrationnumber) - Get vehicle details by registration number

## GetVehicleDetailsByRegistrationNumber

Returns vehicle details based on registration number

### Example Usage

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
            RegistrationNumber: sdk.String("quibusdam"),
        },
        XCorrelationID: sdk.String("unde"),
        XAPIKey: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Vehicle != nil {
        // handle response
    }
}
```
