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
    
    req := operations.GovidRequest{
        Security: operations.GovidSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.GovidRequestBody{
            CertificateParameters: &operations.GovidRequestBodyCertificateParameters{
                DOB: "qui",
                FullName: "voluptate",
                REGNNO: "quia",
                UID: "numquam",
            },
            ConsentArtifact: "voluptates",
            Format: "pdf",
            TxnID: "iusto",
        },
    }
    
    res, err := s.APIs.Govid(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->