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
        XApideckAppID: "corrupti",
        XApideckConsumerID: "provident",
        XApideckDownstreamAuthorization: "distinctio",
        XApideckDownstreamURL: "quibusdam",
        XApideckServiceID: "unde",
    }

    ctx := context.Background()
    res, err := s.Execute.DeleteProxy(ctx, req, operations.DeleteProxySecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProxy200ApplicationJSONAny != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->