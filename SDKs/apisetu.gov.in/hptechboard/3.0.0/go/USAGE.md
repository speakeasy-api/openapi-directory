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
    
    req := operations.DipcrRequest{
        Security: operations.DipcrSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.DipcrRequestBody{
            CertificateParameters: &operations.DipcrRequestBodyCertificateParameters{
                FullName: "doloribus",
                RollNo: "porro",
            },
            ConsentArtifact: "est",
            Format: "pdf",
            TxnID: "eum",
        },
    }
    
    res, err := s.APIs.Dipcr(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->