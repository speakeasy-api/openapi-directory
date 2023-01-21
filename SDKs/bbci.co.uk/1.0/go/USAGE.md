<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetProgrammesAtoZSearchRequest{
        PathParams: operations.GetProgrammesAtoZSearchPathParams{
            Letter: "sit",
        },
        QueryParams: operations.GetProgrammesAtoZSearchQueryParams{
            Availability: "all",
            InitialChildCount: 6050128673802995827,
            Page: 501233450539197794,
            PerPage: 3390393562759376202,
            Rights: "tv",
            Sort: "title",
            SortDirection: "desc",
        },
    }
    
    res, err := s.AToZ.GetProgrammesAtoZSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Ibl != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->