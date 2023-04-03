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

    req := operations.GetItemUsagesRequestBody{}

    ctx := context.Background()
    res, err := s.APIV1.GetItemUsages(ctx, req, operations.GetItemUsagesSecurity{
        Jwtsa: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetItemUsages200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->