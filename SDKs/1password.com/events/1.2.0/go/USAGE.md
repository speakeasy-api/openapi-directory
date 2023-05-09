<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.APIV1.GetAuditEvents(ctx, operations.GetAuditEventsRequestBody{}, operations.GetAuditEventsSecurity{
        Jwtsa: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAuditEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->