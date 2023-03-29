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

    req := operations.InterferenceRequest{
        Security: operations.InterferenceSecurity{
            APIKeyAuth: shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.InterferenceQueryParams{
            Name: "unde",
            Network: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.Analyse.Interference(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->