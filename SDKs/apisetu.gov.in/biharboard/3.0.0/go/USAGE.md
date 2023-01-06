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
                DOB: "deserunt",
                FullName: "amet",
                RROLL: "optio",
                RROLLCODE: "reiciendis",
                Year: "et",
            },
            ConsentArtifact: "dolorem",
            Format: "pdf",
            TxnID: "ea",
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