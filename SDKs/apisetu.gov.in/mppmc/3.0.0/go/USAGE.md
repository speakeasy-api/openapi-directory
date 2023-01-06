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
    
    req := operations.SocerRequest{
        Security: operations.SocerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.SocerRequestBody{
            CertificateParameters: &operations.SocerRequestBodyCertificateParameters{
                APPNO: "quidem",
                DateOfBirth: "quia",
                ENROLNO: "voluptas",
                TypOfCert: "laboriosam",
            },
            ConsentArtifact: "earum",
            Format: "pdf",
            TxnID: "est",
        },
    }
    
    res, err := s.APIs.Socer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->