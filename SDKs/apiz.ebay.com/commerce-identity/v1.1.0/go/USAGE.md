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
    
    req := operations.GetUserRequest{
        Security: operations.GetUserSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
    }
    
    res, err := s.User.GetUser(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.UserResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->