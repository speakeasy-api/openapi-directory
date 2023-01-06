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
                DOB: "deleniti",
                FullName: "ratione",
                REGNO: "voluptas",
            },
            ConsentArtifact: "quas",
            Format: "pdf",
            TxnID: "incidunt",
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