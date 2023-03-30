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

    req := operations.DeleteProxyRequest{
        Security: operations.DeleteProxySecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Headers: operations.DeleteProxyHeaders{
            XApideckAppID: "corrupti",
            XApideckConsumerID: "provident",
            XApideckDownstreamAuthorization: "distinctio",
            XApideckDownstreamURL: "quibusdam",
            XApideckServiceID: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.Execute.DeleteProxy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProxy200ApplicationJSONAny != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->