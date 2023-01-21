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
    
    req := operations.BtcerRequest{
        Security: operations.BtcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.BtcerRequestBody{
            CertificateParameters: &operations.BtcerRequestBodyCertificateParameters{
                DOB: "sit",
                RegistrationID: "voluptas",
            },
            ConsentArtifact: "culpa",
            Format: "pdf",
            TxnID: "consequuntur",
        },
    }
    
    res, err := s.APIs.Btcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->