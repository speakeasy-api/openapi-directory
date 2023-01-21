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
    
    req := operations.GetVehicleDetailsByRegistrationNumberRequest{
        Headers: operations.GetVehicleDetailsByRegistrationNumberHeaders{
            XCorrelationID: "sit",
            XAPIKey: "voluptas",
        },
        Request: shared.VehicleRequest{
            RegistrationNumber: "culpa",
        },
    }
    
    res, err := s.Vehicle.GetVehicleDetailsByRegistrationNumber(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Vehicle != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->