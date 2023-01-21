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
                DOB: "sit",
                FullName: "voluptas",
                GENDER: "culpa",
                UID: "expedita",
            },
            ConsentArtifact: "consequuntur",
            Format: "pdf",
            TxnID: "expedita",
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