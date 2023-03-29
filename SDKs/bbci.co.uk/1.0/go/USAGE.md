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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetProgrammesAtoZSearchRequest{
        PathParams: operations.GetProgrammesAtoZSearchPathParams{
            Letter: "unde",
        },
        QueryParams: operations.GetProgrammesAtoZSearchQueryParams{
            Availability: "available",
            InitialChildCount: 715190,
            Page: 844266,
            PerPage: 602763,
            Rights: "web",
            Sort: "title",
            SortDirection: "desc",
        },
    }

    ctx := context.Background()
    res, err := s.AToZ.GetProgrammesAtoZSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Ibl != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->