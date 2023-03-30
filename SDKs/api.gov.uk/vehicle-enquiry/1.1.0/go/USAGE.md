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

    req := operations.GetVehicleDetailsByRegistrationNumberRequest{
        Headers: operations.GetVehicleDetailsByRegistrationNumberHeaders{
            XCorrelationID: "corrupti",
            XAPIKey: "provident",
        },
        Request: shared.VehicleRequest{
            RegistrationNumber: "distinctio",
        },
    }

    ctx := context.Background()
    res, err := s.Vehicle.GetVehicleDetailsByRegistrationNumber(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Vehicle != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->