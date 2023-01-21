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
    
    req := operations.AgcerRequest{
        Security: operations.AgcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.AgcerRequestBody{
            CertificateParameters: &operations.AgcerRequestBodyCertificateParameters{
                Name: "sit",
                RefNo: "voluptas",
            },
            ConsentArtifact: "culpa",
            Format: "pdf",
            TxnID: "consequuntur",
        },
    }
    
    res, err := s.APIs.Agcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->