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

    req := operations.ImporterExporterCodeVerificationAPIRequest{
        Iec: "corrupti",
    }

    ctx := context.Background()
    res, err := s.APIs.ImporterExporterCodeVerificationAPI(ctx, req, operations.ImporterExporterCodeVerificationAPISecurity{
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