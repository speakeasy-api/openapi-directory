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
    
    req := operations.TrcerRequest{
        Security: operations.TrcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.TrcerRequestBody{
            CertificateParameters: &operations.TrcerRequestBodyCertificateParameters{
                CERTNO: "quis",
                DOB: "tempora",
                FullName: "esse",
                Session: "rerum",
            },
            ConsentArtifact: "tempora",
            Format: "pdf",
            TxnID: "deserunt",
        },
    }
    
    res, err := s.APIs.Trcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->