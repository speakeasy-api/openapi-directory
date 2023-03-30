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
        Security: operations.APIResourceCoverageOneSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.APIResourceCoverageOnePathParams{
            ID: "unde",
            ResourceID: "deserunt",
        },
        Headers: operations.APIResourceCoverageOneHeaders{
            XApideckAppID: "porro",
        },
    }

    ctx := context.Background()
    res, err := s.APIResources.APIResourceCoverageOne(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIResourceCoverageResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->