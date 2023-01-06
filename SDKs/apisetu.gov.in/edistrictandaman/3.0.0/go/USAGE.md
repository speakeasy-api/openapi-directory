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
    
    req := operations.BrlcsRequest{
        Security: operations.BrlcsSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.BrlcsRequestBody{
            CertificateParameters: &operations.BrlcsRequestBodyCertificateParameters{
                CertificateNumber: "laboriosam",
            },
            ConsentArtifact: "non",
            Format: "pdf",
            TxnID: "vel",
        },
    }
    
    res, err := s.APIs.Brlcs(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->