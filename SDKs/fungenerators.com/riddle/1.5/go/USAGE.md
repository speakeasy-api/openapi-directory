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
    
    req := operations.DeleteRiddleRequest{
        Security: operations.DeleteRiddleSecurity{
            XFungeneratorsAPISecret: shared.SchemeXFungeneratorsAPISecret{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.DeleteRiddleQueryParams{
            ID: "et",
        },
    }
    
    res, err := s.PrivateRiddles.DeleteRiddle(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->