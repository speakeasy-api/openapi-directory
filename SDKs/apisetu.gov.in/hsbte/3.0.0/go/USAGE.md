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
    
    req := operations.DgmstRequest{
        Security: operations.DgmstSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.DgmstRequestBody{
            CertificateParameters: &operations.DgmstRequestBodyCertificateParameters{
                FullName: "sit",
                RROLL: "voluptas",
                SEM: "culpa",
            },
            ConsentArtifact: "expedita",
            Format: "pdf",
            TxnID: "dolor",
        },
    }
    
    res, err := s.APIs.Dgmst(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->