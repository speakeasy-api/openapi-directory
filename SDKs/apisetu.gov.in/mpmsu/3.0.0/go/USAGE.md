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
    
    req := operations.MicerRequest{
        Security: operations.MicerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.MicerRequestBody{
            CertificateParameters: &operations.MicerRequestBodyCertificateParameters{
                APPNO: "sit",
                DateOfBirth: "voluptas",
                ENROLNO: "culpa",
                ROLLNO: "expedita",
            },
            ConsentArtifact: "consequuntur",
            Format: "pdf",
            TxnID: "expedita",
        },
    }
    
    res, err := s.APIs.Micer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->