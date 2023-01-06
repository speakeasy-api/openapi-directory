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
    
    req := operations.DpcerRequest{
        Security: operations.DpcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.DpcerRequestBody{
            CertificateParameters: &operations.DpcerRequestBodyCertificateParameters{
                FullName: "aut",
                UID: "modi",
                CertNo: "ex",
            },
            ConsentArtifact: "voluptatibus",
            Format: "pdf",
            TxnID: "aut",
        },
    }
    
    res, err := s.APIs.Dpcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->