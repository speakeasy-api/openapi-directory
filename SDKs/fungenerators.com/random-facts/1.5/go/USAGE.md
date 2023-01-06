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
    
    req := operations.GetFactFodRequest{
        Security: operations.GetFactFodSecurity{
            XFungeneratorsAPISecret: shared.SchemeXFungeneratorsAPISecret{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.GetFactFodQueryParams{
            Category: "laudantium",
        },
    }
    
    res, err := s.FactOfTheDay.GetFactFod(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->