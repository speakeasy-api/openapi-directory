<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKeyAuth: shared.SchemeAPIKeyAuth{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CheckDomainRequest{
        PathParams: operations.CheckDomainPathParams{
            Domain: "sit",
        },
    }
    
    res, err := s.CheckDomain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckDomain200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->