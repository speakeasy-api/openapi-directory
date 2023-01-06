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
    
    req := operations.LlcerRequest{
        Security: operations.LlcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.LlcerRequestBody{
            CertificateParameters: &operations.LlcerRequestBodyCertificateParameters{
                Udf1: "qui",
                Udf2: "voluptatum",
                Udf3: "aut",
            },
            ConsentArtifact: "distinctio",
            Format: "pdf",
            TxnID: "tenetur",
        },
    }
    
    res, err := s.APIs.Llcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->