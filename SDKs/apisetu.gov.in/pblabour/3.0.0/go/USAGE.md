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
    
    req := operations.AlsfcRequest{
        Security: operations.AlsfcSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.AlsfcRequestBody{
            CertificateParameters: &operations.AlsfcRequestBodyCertificateParameters{
                UID: "suscipit",
                Lino: "aut",
            },
            ConsentArtifact: "in",
            Format: "pdf",
            TxnID: "quibusdam",
        },
    }
    
    res, err := s.APIs.Alsfc(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->