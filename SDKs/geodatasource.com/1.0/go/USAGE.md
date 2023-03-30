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

    req := operations.GetCityRequest{
        QueryParams: operations.GetCityQueryParams{
            Format: "xml",
            Key: "provident",
            Lat: 7151.9,
            Lng: 8442.66,
        },
    }

    ctx := context.Background()
    res, err := s.GetCity(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCity200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->