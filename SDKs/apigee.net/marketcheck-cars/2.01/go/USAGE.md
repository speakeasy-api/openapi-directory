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
    
    req := operations.CrmCheckRequest{
        PathParams: operations.CrmCheckPathParams{
            Vin: "qui",
        },
        QueryParams: operations.CrmCheckQueryParams{
            APIKey: "aut",
            SaleDate: "voluptatum",
        },
    }
    
    res, err := s.CRMCleanseAPI.CrmCheck(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CRMResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->