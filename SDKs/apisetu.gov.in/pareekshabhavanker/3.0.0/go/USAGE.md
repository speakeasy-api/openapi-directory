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
    
    req := operations.SslcrRequest{
        Security: operations.SslcrSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.SslcrRequestBody{
            CertificateParameters: &operations.SslcrRequestBodyCertificateParameters{
                DOB: "sit",
                FullName: "voluptas",
                UID: "culpa",
                Regno: "expedita",
                Year: "consequuntur",
            },
            ConsentArtifact: "dolor",
            Format: "pdf",
            TxnID: "voluptas",
        },
    }
    
    res, err := s.APIs.Sslcr(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->