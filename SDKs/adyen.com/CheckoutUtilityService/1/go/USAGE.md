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

    req := shared.CheckoutUtilityRequest{
        OriginDomains: []string{
            "provident",
            "distinctio",
            "quibusdam",
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