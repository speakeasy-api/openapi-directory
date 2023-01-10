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
    
    req := operations.TdcerRequest{
        Security: operations.TdcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.TdcerRequestBody{
            CertificateParameters: &operations.TdcerRequestBodyCertificateParameters{
                CustID: "id",
                DOB: "vitae",
                FinYr: "atque",
            },
            ConsentArtifact: "sit",
            Format: "pdf",
            TxnID: "sint",
        },
    }
    
    res, err := s.APIs.Tdcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->