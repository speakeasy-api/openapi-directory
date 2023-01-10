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
    
    req := operations.EscerRequest{
        Security: operations.EscerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.EscerRequestBody{
            CertificateParameters: &operations.EscerRequestBodyCertificateParameters{
                DOB: "impedit",
                DOCID: "molestiae",
                FullName: "dolorem",
            },
            ConsentArtifact: "eligendi",
            Format: "pdf",
            TxnID: "minus",
        },
    }
    
    res, err := s.APIs.Escer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->