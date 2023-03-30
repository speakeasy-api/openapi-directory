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

    req := operations.GetAdvertisingEligibilityRequest{
        Security: operations.GetAdvertisingEligibilitySecurity{
            APIAuth: shared.SchemeAPIAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.GetAdvertisingEligibilityQueryParams{
            ProgramTypes: "corrupti",
        },
        Headers: operations.GetAdvertisingEligibilityHeaders{
            XEbayCMarketplaceID: "provident",
        },
    }

    ctx := context.Background()
    res, err := s.AdvertisingEligibility.GetAdvertisingEligibility(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SellerEligibilityMultiProgramResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->