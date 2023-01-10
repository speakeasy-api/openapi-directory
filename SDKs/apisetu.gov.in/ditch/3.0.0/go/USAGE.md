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
    
    req := operations.IncerRequest{
        Security: operations.IncerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.IncerRequestBody{
            CertificateParameters: &operations.IncerRequestBodyCertificateParameters{
                APPNO: "error",
                CERTNO: "nulla",
            },
            ConsentArtifact: "quis",
            Format: "pdf",
            TxnID: "ratione",
        },
    }
    
    res, err := s.APIs.Incer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->