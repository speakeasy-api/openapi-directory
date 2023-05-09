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
    res, err := s.Connections.ConnectionSettingsAll(ctx, operations.ConnectionSettingsAllRequest{
        Resource: "corrupti",
        ServiceID: "provident",
        UnifiedAPI: "distinctio",
        XApideckAppID: "quibusdam",
        XApideckConsumerID: "unde",
    }, operations.ConnectionSettingsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->