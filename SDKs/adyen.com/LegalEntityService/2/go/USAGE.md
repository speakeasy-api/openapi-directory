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

    req := operations.DeleteBusinessLinesIDRequest{
        Security: operations.DeleteBusinessLinesIDSecurity{
            APIKeyAuth: &shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.DeleteBusinessLinesIDPathParams{
            ID: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.BusinessLines.DeleteBusinessLinesID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->