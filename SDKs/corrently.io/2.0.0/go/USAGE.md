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
    res, err := s.DispatchGreenEnergyDistributionAPI.GsiDispatch(ctx, operations.GsiDispatchRequest{
        Key: sdk.String("corrupti"),
        Zip: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GsiDispatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->