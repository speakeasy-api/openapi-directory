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
    
    req := operations.DpicrRequest{
        Security: operations.DpicrSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.DpicrRequestBody{
            CertificateParameters: &operations.DpicrRequestBodyCertificateParameters{
                CERTNO: "facere",
                FullName: "facere",
            },
            ConsentArtifact: "ut",
            Format: "pdf",
            TxnID: "assumenda",
        },
    }
    
    res, err := s.APIs.Dpicr(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->