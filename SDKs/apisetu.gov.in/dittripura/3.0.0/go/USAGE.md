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
    
    req := operations.ChcerRequest{
        Security: operations.ChcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.ChcerRequestBody{
            CertificateParameters: &operations.ChcerRequestBodyCertificateParameters{
                RefNo: "non",
                TokenNo: "qui",
            },
            ConsentArtifact: "eum",
            Format: "pdf",
            TxnID: "magni",
        },
    }
    
    res, err := s.APIs.Chcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->