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
    
    req := operations.ActivityCheckRepoIsStarredByAuthenticatedUserRequest{
        PathParams: operations.ActivityCheckRepoIsStarredByAuthenticatedUserPathParams{
            Owner: "molestiae",
            Repo: "atque",
        },
    }
    
    res, err := s.Activity.ActivityCheckRepoIsStarredByAuthenticatedUser(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->