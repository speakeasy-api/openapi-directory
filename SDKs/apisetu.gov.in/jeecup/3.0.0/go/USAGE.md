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
                ApplicationNo: "sit",
                DOB: "voluptas",
                ExamYear: "culpa",
                FullName: "expedita",
            },
            ConsentArtifact: "consequuntur",
            Format: "pdf",
            TxnID: "expedita",
        },
    }
    
    res, err := s.APIs.Adcrd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->