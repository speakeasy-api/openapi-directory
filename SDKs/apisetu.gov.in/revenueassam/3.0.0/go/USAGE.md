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
    
    req := operations.NncerRequest{
        Security: operations.NncerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.NncerRequestBody{
            CertificateParameters: &operations.NncerRequestBodyCertificateParameters{
                RefNo: "consequatur",
            },
            ConsentArtifact: "sit",
            Format: "pdf",
            TxnID: "quaerat",
        },
    }
    
    res, err := s.APIs.Nncer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->