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

    req := operations.GetClassificationsAddressTypesRequest{
        APIKey: "corrupti",
    }

    ctx := context.Background()
    res, err := s.AddressTypes.GetClassificationsAddressTypes(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddressTypes != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->