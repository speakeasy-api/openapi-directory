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
            Resource: "corrupti",
            ServiceID: "provident",
            UnifiedAPI: "distinctio",
        },
        Headers: operations.ConnectionSettingsAllHeaders{
            XApideckAppID: "quibusdam",
            XApideckConsumerID: "unde",
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