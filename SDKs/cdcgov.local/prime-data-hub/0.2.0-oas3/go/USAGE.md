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

    req := operations.DeleteSettingsOrganizationsOrganizationNameRequest{
        Security: operations.DeleteSettingsOrganizationsOrganizationNameSecurity{
            OAuth2: shared.SchemeOAuth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DeleteSettingsOrganizationsOrganizationNamePathParams{
            OrganizationName: "corrupti",
        },
    }

    ctx := context.Background()
    res, err := s.DeleteSettingsOrganizationsOrganizationName(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Organization != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->