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
    
    req := operations.AecmwRequest{
        Security: operations.AecmwSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.AecmwRequestBody{
            CertificateParameters: &operations.AecmwRequestBodyCertificateParameters{
                Udf1: "sit",
            },
            ConsentArtifact: "voluptas",
            Format: "pdf",
            TxnID: "expedita",
        },
    }
    
    res, err := s.APIs.Aecmw(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->