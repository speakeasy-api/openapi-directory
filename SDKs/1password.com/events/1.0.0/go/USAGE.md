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
    
    req := operations.GetItemUsagesRequest{
        Security: operations.GetItemUsagesSecurity{
            Jwtsa: shared.SchemeJwtsa{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        Request: "sit",
    }
    
    res, err := s.APIV1.GetItemUsages(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetItemUsages200ApplicationJSONAny != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->