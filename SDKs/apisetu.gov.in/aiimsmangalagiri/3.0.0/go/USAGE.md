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
    
    req := operations.LabrpRequest{
        Security: operations.LabrpSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.LabrpRequestBody{
            CertificateParameters: &operations.LabrpRequestBodyCertificateParameters{
                DOB: "totam",
                FullName: "mollitia",
                GENDER: "quo",
                MobileNoRQ: "quos",
            },
            ConsentArtifact: "beatae",
            Format: "pdf",
            TxnID: "dolor",
        },
    }
    
    res, err := s.APIs.Labrp(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->