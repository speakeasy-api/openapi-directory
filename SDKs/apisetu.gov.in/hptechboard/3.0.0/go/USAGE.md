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
                FullName: "consectetur",
                RollNo: "quis",
            },
            ConsentArtifact: "unde",
            Format: "pdf",
            TxnID: "accusantium",
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