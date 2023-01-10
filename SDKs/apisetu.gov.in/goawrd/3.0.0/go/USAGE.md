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
    
    req := operations.ErcerRequest{
        Security: operations.ErcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.ErcerRequestBody{
            CertificateParameters: &operations.ErcerRequestBodyCertificateParameters{
                FullName: "vero",
                Registration: "eius",
            },
            ConsentArtifact: "veniam",
            Format: "pdf",
            TxnID: "et",
        },
    }
    
    res, err := s.APIs.Ercer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->