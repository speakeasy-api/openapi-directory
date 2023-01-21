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
    
    req := operations.DoctorsListRequest{
        Security: operations.DoctorsListSecurity{
            DrchronoOauth2: shared.SchemeDrchronoOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.DoctorsListQueryParams{
            Cursor: "sit",
            Doctor: 2259404117704393152,
            PageSize: 6050128673802995827,
        },
    }
    
    res, err := s.Administrative.DoctorsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DoctorsList200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->