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

    req := operations.ActivityCheckRepoIsStarredByAuthenticatedUserRequest{
        PathParams: operations.ActivityCheckRepoIsStarredByAuthenticatedUserPathParams{
            Owner: "corrupti",
            Repo: "provident",
        },
    }

    ctx := context.Background()
    res, err := s.Activity.ActivityCheckRepoIsStarredByAuthenticatedUser(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->