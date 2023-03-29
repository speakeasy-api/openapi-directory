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

    req := operations.AppAPIWMMEndpointsWMMMagneticFieldRequest{
        QueryParams: operations.AppAPIWMMEndpointsWMMMagneticFieldQueryParams{
            Altitude: 10,
            Latitude: 80,
            Longitude: 100,
            Year: 2020.5,
        },
    }

    ctx := context.Background()
    res, err := s.AppAPIWMMEndpointsWMMMagneticField(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AppAPIWMMEndpointsWMMMagneticField200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->