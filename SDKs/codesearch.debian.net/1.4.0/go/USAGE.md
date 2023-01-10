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
    
    req := operations.SearchRequest{
        Security: operations.SearchSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.SearchQueryParams{
            MatchMode: "regexp",
            Query: "ullam",
        },
    }
    
    res, err := s.Search.Search(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResults != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->