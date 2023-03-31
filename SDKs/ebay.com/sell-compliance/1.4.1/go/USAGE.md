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
        XEbayCMarketplaceID: "corrupti",
        ComplianceType: "provident",
        Filter: "distinctio",
        Limit: "quibusdam",
        ListingID: "unde",
        Offset: "nulla",
    }

    ctx := context.Background()
    res, err := s.ListingViolation.GetListingViolations(ctx, req, operations.GetListingViolationsSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedComplianceViolationCollection != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->