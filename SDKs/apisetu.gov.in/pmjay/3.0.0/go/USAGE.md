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
    
    req := operations.PmjayRequest{
        Security: operations.PmjaySecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.PmjayRequestBody{
            CertificateParameters: &operations.PmjayRequestBodyCertificateParameters{
                DOB: "enim",
                FullName: "aliquid",
                Udf1: "et",
                Udf2: "et",
            },
            ConsentArtifact: "quia",
            Format: "pdf",
            TxnID: "maiores",
        },
    }
    
    res, err := s.APIs.Pmjay(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->