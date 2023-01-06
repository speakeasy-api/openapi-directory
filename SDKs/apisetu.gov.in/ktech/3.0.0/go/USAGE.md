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
    
    req := operations.CocerRequest{
        Security: operations.CocerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.CocerRequestBody{
            CertificateParameters: &operations.CocerRequestBodyCertificateParameters{
                CertType: "dicta",
                CompanyName: "optio",
                RegNo: "aut",
                Sector: "eum",
            },
            ConsentArtifact: "error",
            Format: "pdf",
            TxnID: "corrupti",
        },
    }
    
    res, err := s.APIs.Cocer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->