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
        OrganizationName: "corrupti",
    }

    ctx := context.Background()
    res, err := s.DeleteSettingsOrganizationsOrganizationName(ctx, req, operations.DeleteSettingsOrganizationsOrganizationNameSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Organization != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->