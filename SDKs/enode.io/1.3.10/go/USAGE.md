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

    req := operations.ControlChargerChargingRequest{
        RequestBody: &operations.ControlChargerChargingRequestBody{
            Action: "START",
        },
        ChargerID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Chargers.ControlChargerCharging(ctx, req, operations.ControlChargerChargingSecurity{
        UserAccessToken: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
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