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
    
    req := operations.RatcrRequest{
        Security: operations.RatcrSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.RatcrRequestBody{
            CertificateParameters: &operations.RatcrRequestBodyCertificateParameters{
                FullName: "sit",
                UID: "voluptas",
                RationCardNo: "culpa",
            },
            ConsentArtifact: "expedita",
            Format: "pdf",
            TxnID: "dolor",
        },
    }
    
    res, err := s.APIs.Ratcr(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->