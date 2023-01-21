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
                FullName: "sit",
                Udf1: "voluptas",
                Udf2: "culpa",
            },
            ConsentArtifact: "expedita",
            Format: "pdf",
            TxnID: "dolor",
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