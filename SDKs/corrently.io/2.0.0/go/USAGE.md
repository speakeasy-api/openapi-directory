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
    
    req := operations.GsiDispatchRequest{
        QueryParams: operations.GsiDispatchQueryParams{
            Key: "sit",
            Zip: "voluptas",
        },
    }
    
    res, err := s.DispatchGreenEnergyDistributionAPI.GsiDispatch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GsiDispatch200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->