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
    
    req := operations.RdcerRequest{
        Security: operations.RdcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.RdcerRequestBody{
            CertificateParameters: &operations.RdcerRequestBodyCertificateParameters{
                DOB: "ut",
                FullName: "molestiae",
                REGDNO: "rem",
                UID: "totam",
            },
            ConsentArtifact: "culpa",
            Format: "pdf",
            TxnID: "eos",
        },
    }
    
    res, err := s.APIs.Rdcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->