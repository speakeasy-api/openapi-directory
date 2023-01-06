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
    
    req := operations.SscerRequest{
        Security: operations.SscerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.SscerRequestBody{
            CertificateParameters: &operations.SscerRequestBodyCertificateParameters{
                Cent: "excepturi",
                MName: "dolore",
                Name: "animi",
                RROLL: "odio",
                YEAR: "officia",
            },
            ConsentArtifact: "odio",
            Format: "pdf",
            TxnID: "sunt",
        },
    }
    
    res, err := s.APIs.Sscer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->