<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.FetchBoundariesRequest{
        Security: operations.FetchBoundariesSecurity{
            APIKey: &shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &shared.BoundariesQuery{
            Ids: []string{
                "voluptas",
            },
        },
    }
    
    res, err := s.Boundaries.FetchBoundaries(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Boundaries != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->