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
            Away: "quia",
            Conference: "blanditiis",
            GameID: 501002963790601971,
            Home: "expedita",
            SeasonType: "quo",
            Team: "id",
            Week: 319022383954109970,
            Year: 3325329196161324374,
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