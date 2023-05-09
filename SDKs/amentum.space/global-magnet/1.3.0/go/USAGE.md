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
    res, err := s.AppAPIWMMEndpointsWMMMagneticField(ctx, operations.AppAPIWMMEndpointsWMMMagneticFieldRequest{
        Altitude: 10,
        Latitude: 80,
        Longitude: 100,
        Year: 2020.5,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppAPIWMMEndpointsWMMMagneticField200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->