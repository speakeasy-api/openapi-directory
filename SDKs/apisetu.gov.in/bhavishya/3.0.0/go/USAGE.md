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
    
    req := operations.PecerRequest{
        Security: operations.PecerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.PecerRequestBody{
            CertificateParameters: &operations.PecerRequestBodyCertificateParameters{
                DOB: "aliquid",
                FullName: "consequuntur",
                GENDER: "rerum",
                PAN: "officiis",
                PPO: "corporis",
            },
            ConsentArtifact: "et",
            Format: "pdf",
            TxnID: "numquam",
        },
    }
    
    res, err := s.APIs.Pecer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->