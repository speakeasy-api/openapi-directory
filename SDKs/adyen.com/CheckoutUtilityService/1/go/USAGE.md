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

    req := operations.PostOriginKeysRequest{
        Request: &shared.CheckoutUtilityRequest{
            OriginDomains: []string{
                "deserunt",
                "porro",
                "nulla",
            },
        },
    }

    ctx := context.Background()
    res, err := s.PostOriginKeys(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckoutUtilityResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->