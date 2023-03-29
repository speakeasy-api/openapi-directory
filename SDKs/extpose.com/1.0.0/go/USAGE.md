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
    s := sdk.New()

    req := operations.GetUserExtensionsRequest{
        Security: operations.GetUserExtensionsSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
    }

    ctx := context.Background()
    res, err := s.User.GetUserExtensions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Extensions != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->