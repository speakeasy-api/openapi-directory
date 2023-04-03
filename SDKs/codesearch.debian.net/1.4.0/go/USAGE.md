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

    req := operations.SearchRequest{
        MatchMode: "regexp",
        Query: "provident",
    }

    ctx := context.Background()
    res, err := s.Search.Search(ctx, req, operations.SearchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResults != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->