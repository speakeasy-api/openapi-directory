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
    
    req := operations.GetGifByIDRequest{
        PathParams: operations.GetGifByIDPathParams{
            GifID: 8717895732742165505,
        },
    }
    
    res, err := s.Gifs.GetGifByID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGifByID200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->