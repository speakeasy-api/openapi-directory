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
            AfterDate: "2006-05-01",
            Jwt: "culpa",
            Vin: "expedita",
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