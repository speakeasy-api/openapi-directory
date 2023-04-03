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

    req := operations.APIResourceCoverageOneRequest{
        ID: "corrupti",
        ResourceID: "provident",
        XApideckAppID: "distinctio",
    }

    ctx := context.Background()
    res, err := s.APIResources.APIResourceCoverageOne(ctx, req, operations.APIResourceCoverageOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIResourceCoverageResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->