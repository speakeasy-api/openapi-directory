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
                Udf1: "ex",
                Udf2: "ad",
                Udf3: "dolorum",
            },
            ConsentArtifact: "voluptatem",
            Format: "pdf",
            TxnID: "laborum",
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