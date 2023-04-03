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

    req := operations.GetReisezentrenRequest{
        Name: "corrupti",
    }

    ctx := context.Background()
    res, err := s.GetReisezentren(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TravelCenterList != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->