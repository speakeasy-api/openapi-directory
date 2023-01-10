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
    
    req := operations.DgcerRequest{
        Security: operations.DgcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.DgcerRequestBody{
            CertificateParameters: &operations.DgcerRequestBodyCertificateParameters{
                FullName: "quam",
                RROLL: "modi",
            },
            ConsentArtifact: "cupiditate",
            Format: "pdf",
            TxnID: "earum",
        },
    }
    
    res, err := s.APIs.Dgcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->