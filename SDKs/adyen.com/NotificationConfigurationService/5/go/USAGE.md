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
    
    req := operations.PostCreateNotificationConfigurationRequest{
        Security: operations.PostCreateNotificationConfigurationSecurity{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: "accusantium",
    }
    
    res, err := s.General.PostCreateNotificationConfiguration(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNotificationConfigurationResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->