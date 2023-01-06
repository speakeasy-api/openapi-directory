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
    
    req := operations.PostDisableRequest{
        Security: operations.PostDisableSecurity{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: "non",
    }
    
    res, err := s.General.PostDisable(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->