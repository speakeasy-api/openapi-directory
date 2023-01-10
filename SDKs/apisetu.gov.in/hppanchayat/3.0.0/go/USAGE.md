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
    
    req := operations.FmcerRequest{
        Security: operations.FmcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.FmcerRequestBody{
            CertificateParameters: &operations.FmcerRequestBodyCertificateParameters{
                UID: "consectetur",
            },
            ConsentArtifact: "consequuntur",
            Format: "pdf",
            TxnID: "saepe",
        },
    }
    
    res, err := s.APIs.Fmcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->