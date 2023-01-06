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
    
    req := operations.HpcerRequest{
        Security: operations.HpcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.HpcerRequestBody{
            CertificateParameters: &operations.HpcerRequestBodyCertificateParameters{
                FullName: "est",
                RROLL: "sequi",
                Year: "doloremque",
            },
            ConsentArtifact: "eius",
            Format: "pdf",
            TxnID: "omnis",
        },
    }
    
    res, err := s.APIs.Hpcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->