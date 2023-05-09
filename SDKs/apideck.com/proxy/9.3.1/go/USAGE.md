<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Execute.DeleteProxy(ctx, operations.DeleteProxyRequest{
        XApideckAppID: "corrupti",
        XApideckConsumerID: "provident",
        XApideckDownstreamAuthorization: sdk.String("distinctio"),
        XApideckDownstreamURL: "quibusdam",
        XApideckServiceID: "unde",
    }, operations.DeleteProxySecurity{
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