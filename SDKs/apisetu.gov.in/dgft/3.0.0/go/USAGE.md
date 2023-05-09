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
    res, err := s.APIs.ImporterExporterCodeVerificationAPI(ctx, operations.ImporterExporterCodeVerificationAPIRequest{
        Iec: "corrupti",
    }, operations.ImporterExporterCodeVerificationAPISecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImporterExporterCodeVerificationAPI200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->