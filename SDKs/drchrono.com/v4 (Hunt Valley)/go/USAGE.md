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
            Cursor: "consequatur",
            Doctor: 5065105845538771853,
            PageSize: 6879998696661704987,
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