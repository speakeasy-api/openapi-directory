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

    req := operations.CancelShipmentRequest{
        ShipmentID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Shipment.CancelShipment(ctx, req, operations.CancelShipmentSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Shipment != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->