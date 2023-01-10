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
    
    req := operations.CmcerRequest{
        Security: operations.CmcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.CmcerRequestBody{
            CertificateParameters: &operations.CmcerRequestBodyCertificateParameters{
                Aplno: "architecto",
                Certno: "ea",
                Sccd: "et",
            },
            ConsentArtifact: "soluta",
            Format: "pdf",
            TxnID: "ea",
        },
    }
    
    res, err := s.APIs.Cmcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->