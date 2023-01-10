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
    
    req := operations.CancelShipmentRequest{
        Security: operations.CancelShipmentSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CancelShipmentPathParams{
            ShipmentID: "aliquid",
        },
    }
    
    res, err := s.Shipment.CancelShipment(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Shipment != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->