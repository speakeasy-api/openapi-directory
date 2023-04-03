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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.DeleteProjectUsernameProjectBuildCacheRequest{
        Project: "corrupti",
        Username: "Larue_Rau85",
    }

    ctx := context.Background()
    res, err := s.DeleteProjectUsernameProjectBuildCache(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProjectUsernameProjectBuildCache200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->