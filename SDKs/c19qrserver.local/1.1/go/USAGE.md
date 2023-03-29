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
            TokenHeader: shared.SchemeTokenHeader{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.DeleteSigninSigninIDRequest{
        PathParams: operations.DeleteSigninSigninIDPathParams{
            SigninID: 1,
        },
    }

    ctx := context.Background()
    res, err := s.AttendeesSignins.DeleteSigninSigninID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->