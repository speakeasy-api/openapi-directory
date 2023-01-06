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
    
    req := operations.GetVehicleSeenVehicleSeenGetRequest{
        QueryParams: operations.GetVehicleSeenVehicleSeenGetQueryParams{
            AfterDate: "1975-11-10",
            Jwt: "labore",
            Vin: "consequuntur",
        },
    }
    
    res, err := s.ApplicationAcceleration.GetVehicleSeenVehicleSeenGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BooleanResp != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->