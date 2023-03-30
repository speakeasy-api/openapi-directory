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

    req := operations.ConnectionSettingsAllRequest{
        Security: operations.ConnectionSettingsAllSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.ConnectionSettingsAllPathParams{
            Resource: "unde",
            ServiceID: "deserunt",
            UnifiedAPI: "porro",
        },
        Headers: operations.ConnectionSettingsAllHeaders{
            XApideckAppID: "nulla",
            XApideckConsumerID: "id",
        },
    }

    ctx := context.Background()
    res, err := s.Connections.ConnectionSettingsAll(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->