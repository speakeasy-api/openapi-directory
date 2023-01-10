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
    
    req := operations.ControlChargerChargingRequest{
        Security: operations.ControlChargerChargingSecurity{
            UserAccessToken: &shared.SchemeUserAccessToken{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ControlChargerChargingPathParams{
            ChargerID: "ut",
        },
        Request: &operations.ControlChargerChargingRequestBody{
            Action: "START",
        },
    }
    
    res, err := s.Chargers.ControlChargerCharging(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->