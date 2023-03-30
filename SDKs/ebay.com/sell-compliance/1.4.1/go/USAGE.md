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

    req := operations.GetListingViolationsRequest{
        Security: operations.GetListingViolationsSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.GetListingViolationsQueryParams{
            ComplianceType: "corrupti",
            Filter: "provident",
            Limit: "distinctio",
            ListingID: "quibusdam",
            Offset: "unde",
        },
        Headers: operations.GetListingViolationsHeaders{
            XEbayCMarketplaceID: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.ListingViolation.GetListingViolations(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedComplianceViolationCollection != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->