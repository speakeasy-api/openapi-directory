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
    
    req := operations.PostGetOnboardingURLRequest{
        Security: operations.PostGetOnboardingURLSecurity{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: "debitis",
    }
    
    res, err := s.HostedOnboardingPage.PostGetOnboardingURL(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOnboardingURLResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->