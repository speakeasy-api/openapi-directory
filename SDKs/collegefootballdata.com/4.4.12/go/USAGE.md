<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Betting.GetLines(ctx, operations.GetLinesRequest{
        Away: sdk.String("corrupti"),
        Conference: sdk.String("provident"),
        GameID: sdk.Int64(715190),
        Home: sdk.String("quibusdam"),
        SeasonType: sdk.String("unde"),
        Team: sdk.String("nulla"),
        Week: sdk.Int64(544883),
        Year: sdk.Int64(847252),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GameLines != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->