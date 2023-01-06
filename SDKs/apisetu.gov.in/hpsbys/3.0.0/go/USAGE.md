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
    
    req := operations.RsbycRequest{
        Security: operations.RsbycSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.RsbycRequestBody{
            CertificateParameters: &operations.RsbycRequestBodyCertificateParameters{
                UID: "occaecati",
            },
            ConsentArtifact: "et",
            Format: "pdf",
            TxnID: "non",
        },
    }
    
    res, err := s.APIs.Rsbyc(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->