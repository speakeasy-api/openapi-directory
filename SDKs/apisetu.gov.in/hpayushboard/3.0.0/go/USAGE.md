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
    
    req := operations.PhcerRequest{
        Security: operations.PhcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.PhcerRequestBody{
            CertificateParameters: &operations.PhcerRequestBodyCertificateParameters{
                FullName: "ut",
                RegistrationNo: "ut",
            },
            ConsentArtifact: "deleniti",
            Format: "pdf",
            TxnID: "quam",
        },
    }
    
    res, err := s.APIs.Phcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->