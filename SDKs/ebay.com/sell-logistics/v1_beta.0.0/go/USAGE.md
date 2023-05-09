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
    res, err := s.Shipment.CancelShipment(ctx, operations.CancelShipmentRequest{
        ShipmentID: "corrupti",
    }, operations.CancelShipmentSecurity{
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