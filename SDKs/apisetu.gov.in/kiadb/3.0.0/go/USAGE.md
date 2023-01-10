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
    
    req := operations.AlltrRequest{
        Security: operations.AlltrSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.AlltrRequestBody{
            CertificateParameters: &operations.AlltrRequestBodyCertificateParameters{
                DOB: "et",
                FullName: "tempore",
                RegNum: "quis",
                UID: "vitae",
            },
            ConsentArtifact: "sunt",
            Format: "pdf",
            TxnID: "sit",
        },
    }
    
    res, err := s.APIs.Alltr(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->