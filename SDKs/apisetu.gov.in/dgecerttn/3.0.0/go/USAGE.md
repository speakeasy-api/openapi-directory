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
    
    req := operations.HscerRequest{
        Security: operations.HscerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.HscerRequestBody{
            CertificateParameters: &operations.HscerRequestBodyCertificateParameters{
                CertificateType: "sit",
                DOB: "voluptas",
                FullName: "culpa",
                RROLL: "expedita",
                Month: "consequuntur",
                Year: "dolor",
            },
            ConsentArtifact: "expedita",
            Format: "pdf",
            TxnID: "fugit",
        },
    }
    
    res, err := s.APIs.Hscer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->