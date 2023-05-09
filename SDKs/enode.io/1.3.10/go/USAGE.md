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
    res, err := s.Chargers.ControlChargerCharging(ctx, operations.ControlChargerChargingRequest{
        RequestBody: &operations.ControlChargerChargingRequestBody{
            Action: operations.ControlChargerChargingRequestBodyActionEnumStart,
        },
        ChargerID: "corrupti",
    }, operations.ControlChargerChargingSecurity{
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