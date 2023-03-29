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

    req := operations.GetGifByIDRequest{
        PathParams: operations.GetGifByIDPathParams{
            GifID: 548814,
        },
    }

    ctx := context.Background()
    res, err := s.Gifs.GetGifByID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGifByID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->