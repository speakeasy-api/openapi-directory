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
                Apikey: shared.SchemeApikey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.DeleteProjectUsernameProjectBuildCacheRequest{
        PathParams: operations.DeleteProjectUsernameProjectBuildCachePathParams{
            Project: "necessitatibus",
            Username: "quam",
        },
    }
    
    res, err := s.DeleteProjectUsernameProjectBuildCache(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProjectUsernameProjectBuildCache200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->