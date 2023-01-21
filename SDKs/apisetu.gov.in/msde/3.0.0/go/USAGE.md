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
    
    req := operations.IticrRequest{
        Security: operations.IticrSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.IticrRequestBody{
            CertificateParameters: &operations.IticrRequestBodyCertificateParameters{
                FullName: "sit",
                Certno: "voluptas",
            },
            ConsentArtifact: "culpa",
            Format: "pdf",
            TxnID: "consequuntur",
        },
    }
    
    res, err := s.APIs.Iticr(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->