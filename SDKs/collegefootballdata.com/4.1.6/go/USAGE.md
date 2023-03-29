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
            APIKeyAuth: shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetLinesRequest{
        QueryParams: operations.GetLinesQueryParams{
            Away: "unde",
            Conference: "deserunt",
            GameID: 715190,
            Home: "nulla",
            SeasonType: "id",
            Team: "vero",
            Week: 544883,
            Year: 847252,
        },
    }

    ctx := context.Background()
    res, err := s.Betting.GetLines(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GameLines != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->