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
    
    req := operations.NbcerRequest{
        Security: operations.NbcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.NbcerRequestBody{
            CertificateParameters: &operations.NbcerRequestBodyCertificateParameters{
                RefNo: "omnis",
                TokenNo: "eos",
            },
            ConsentArtifact: "dolore",
            Format: "pdf",
            TxnID: "dolor",
        },
    }
    
    res, err := s.APIs.Nbcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->