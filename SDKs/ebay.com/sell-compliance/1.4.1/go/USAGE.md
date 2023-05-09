<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ListingViolation.GetListingViolations(ctx, operations.GetListingViolationsRequest{
        XEbayCMarketplaceID: "corrupti",
        ComplianceType: sdk.String("provident"),
        Filter: sdk.String("distinctio"),
        Limit: sdk.String("quibusdam"),
        ListingID: sdk.String("unde"),
        Offset: sdk.String("nulla"),
    }, operations.GetListingViolationsSecurity{
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