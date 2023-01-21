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
    
    req := operations.AdcrdRequest{
        Security: operations.AdcrdSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.AdcrdRequestBody{
            CertificateParameters: &operations.AdcrdRequestBodyCertificateParameters{
                DOB: "sit",
                PrnNo: "voluptas",
                RequestID: "culpa",
            },
            ConsentArtifact: "expedita",
            Format: "pdf",
            TxnID: "dolor",
        },
    }
    
    res, err := s.APIs.Adcrd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->