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
                APIKeyAuth: shared.SchemeAPIKeyAuth{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetLinesRequest{
        QueryParams: operations.GetLinesQueryParams{
            Away: "voluptas",
            Conference: "quo",
            GameID: 3904959679002859803,
            Home: "quae",
            SeasonType: "dolorem",
            Team: "qui",
            Week: 3664832120697581838,
            Year: 3353722794698886839,
        },
    }
    
    res, err := s.Betting.GetLines(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GameLines != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->