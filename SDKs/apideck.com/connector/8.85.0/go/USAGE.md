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
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.APIResourceCoverageOneRequest{
        Security: operations.APIResourceCoverageOneSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.APIResourceCoverageOnePathParams{
            ID: "sit",
            ResourceID: "voluptas",
        },
        Headers: operations.APIResourceCoverageOneHeaders{
            XApideckAppID: "culpa",
        },
    }
    
    res, err := s.APIResources.APIResourceCoverageOne(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIResourceCoverageResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->