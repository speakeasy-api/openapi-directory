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
            Away: "sit",
            Conference: "voluptas",
            GameID: 6050128673802995827,
            Home: "expedita",
            SeasonType: "consequuntur",
            Team: "dolor",
            Week: 1774932891286980153,
            Year: 6044372234677422456,
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