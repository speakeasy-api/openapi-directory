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

    req := operations.DoctorsListRequest{
        Security: operations.DoctorsListSecurity{
            DrchronoOauth2: shared.SchemeDrchronoOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.DoctorsListQueryParams{
            Cursor: "corrupti",
            Doctor: 592845,
            PageSize: 715190,
        },
    }

    ctx := context.Background()
    res, err := s.Administrative.DoctorsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DoctorsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->