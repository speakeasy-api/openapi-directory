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
    
    req := operations.EgcerRequest{
        Security: operations.EgcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.EgcerRequestBody{
            CertificateParameters: &operations.EgcerRequestBodyCertificateParameters{
                FullName: "qui",
                RefNo: "voluptatibus",
                TokenNo: "nulla",
                UID: "quia",
            },
            ConsentArtifact: "dolorem",
            Format: "pdf",
            TxnID: "quis",
        },
    }
    
    res, err := s.APIs.Egcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->