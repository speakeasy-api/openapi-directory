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
    
    req := operations.SkcerRequest{
        Security: operations.SkcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.SkcerRequestBody{
            CertificateParameters: &operations.SkcerRequestBodyCertificateParameters{
                FullName: "accusamus",
                CertificateType: "velit",
                Username: "amet",
            },
            ConsentArtifact: "deserunt",
            Format: "pdf",
            TxnID: "molestias",
        },
    }
    
    res, err := s.APIs.Skcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->