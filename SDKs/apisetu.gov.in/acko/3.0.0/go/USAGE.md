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
    
    req := operations.CripcRequest{
        Security: operations.CripcSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.CripcRequestBody{
            CertificateParameters: &operations.CripcRequestBodyCertificateParameters{
                Phoneno: "nam",
                Policyno: "dolor",
            },
            ConsentArtifact: "itaque",
            Format: "pdf",
            TxnID: "sapiente",
        },
    }
    
    res, err := s.APIs.Cripc(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->