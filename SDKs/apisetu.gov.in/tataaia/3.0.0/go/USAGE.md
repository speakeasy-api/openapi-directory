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
    
    req := operations.LicerRequest{
        Security: operations.LicerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.LicerRequestBody{
            CertificateParameters: &operations.LicerRequestBodyCertificateParameters{
                FullName: "ullam",
                Udf1: "velit",
                Udf2: "eos",
            },
            ConsentArtifact: "officiis",
            Format: "pdf",
            TxnID: "nam",
        },
    }
    
    res, err := s.APIs.Licer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->