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
    
    req := operations.GetUUIDRequest{
        Security: operations.GetUUIDSecurity{
            XFungeneratorsAPISecret: shared.SchemeXFungeneratorsAPISecret{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.GetUUIDQueryParams{
            Count: 8717895732742165505,
        },
    }
    
    res, err := s.UUIDGeneration.GetUUID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->