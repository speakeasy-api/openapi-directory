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
    
    req := operations.GetListingViolationsRequest{
        Security: operations.GetListingViolationsSecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.GetListingViolationsQueryParams{
            ComplianceType: "sit",
            Filter: "voluptas",
            Limit: "culpa",
            ListingID: "expedita",
            Offset: "consequuntur",
        },
        Headers: operations.GetListingViolationsHeaders{
            XEBAYCMARKETPLACEID: "dolor",
        },
    }
    
    res, err := s.ListingViolation.GetListingViolations(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedComplianceViolationCollection != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->