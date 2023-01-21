<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.ImporterExporterCodeVerificationAPIRequest{
        Security: operations.ImporterExporterCodeVerificationAPISecurity{
            APIKey: &shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.ImporterExporterCodeVerificationAPIPathParams{
            Iec: "sit",
        },
    }
    
    res, err := s.APIs.ImporterExporterCodeVerificationAPI(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ImporterExporterCodeVerificationAPI200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->