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
    
    req := operations.CtcerRequest{
        Security: operations.CtcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.CtcerRequestBody{
            CertificateParameters: &operations.CtcerRequestBodyCertificateParameters{
                RefNo: "aut",
                TokenNo: "est",
            },
            ConsentArtifact: "nobis",
            Format: "pdf",
            TxnID: "ea",
        },
    }
    
    res, err := s.APIs.Ctcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->