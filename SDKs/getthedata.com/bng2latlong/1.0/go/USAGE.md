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

    req := operations.GetBng2latlongEastingNorthingRequest{
        Easting: 548814,
        Northing: 592845,
    }

    ctx := context.Background()
    res, err := s.GetBng2latlongEastingNorthing(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBng2latlongEastingNorthing200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->