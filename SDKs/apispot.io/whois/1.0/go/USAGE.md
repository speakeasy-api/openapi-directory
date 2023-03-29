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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CheckDomainRequest{
        PathParams: operations.CheckDomainPathParams{
            Domain: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.CheckDomain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckDomain200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->