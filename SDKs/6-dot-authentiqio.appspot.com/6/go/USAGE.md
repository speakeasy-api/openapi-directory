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
    
    req := operations.KeyRevokeRequest{
        PathParams: operations.KeyRevokePathParams{
            PK: "expedita",
        },
        QueryParams: operations.KeyRevokeQueryParams{
            Secret: "consequuntur",
        },
    }
    
    res, err := s.Delete.KeyRevoke(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.KeyRevoke200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->