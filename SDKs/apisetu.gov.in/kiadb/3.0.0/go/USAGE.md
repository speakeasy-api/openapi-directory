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
                DOB: "non",
                FullName: "non",
                RegNum: "quam",
                UID: "est",
            },
            ConsentArtifact: "optio",
            Format: "pdf",
            TxnID: "nisi",
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