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
            Vin: "excepturi",
        },
        QueryParams: operations.CrmCheckQueryParams{
            APIKey: "vel",
            SaleDate: "beatae",
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