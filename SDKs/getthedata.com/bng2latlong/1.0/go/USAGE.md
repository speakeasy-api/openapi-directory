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
    
    req := operations.GetBng2latlongEastingNorthingRequest{
        PathParams: operations.GetBng2latlongEastingNorthingPathParams{
            Easting: 8717895732742165505,
            Northing: 2259404117704393152,
        },
    }
    
    res, err := s.GetBng2latlongEastingNorthing(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBng2latlongEastingNorthing200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->