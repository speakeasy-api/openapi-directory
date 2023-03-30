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

    req := operations.DeleteBusinessGroupsIDSpacesSpaceIDRequest{
        Security: operations.DeleteBusinessGroupsIDSpacesSpaceIDSecurity{
            GmaAuth: shared.SchemeGmaAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DeleteBusinessGroupsIDSpacesSpaceIDPathParams{
            ID: "P18784",
            SpaceID: "P18784",
        },
    }

    ctx := context.Background()
    res, err := s.DeleteBusinessGroupsIDSpacesSpaceID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->