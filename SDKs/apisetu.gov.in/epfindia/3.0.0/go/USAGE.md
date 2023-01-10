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
    
    req := operations.EpfscRequest{
        Security: operations.EpfscSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.EpfscRequestBody{
            CertificateParameters: &operations.EpfscRequestBodyCertificateParameters{
                DOB: "explicabo",
                FullName: "repudiandae",
                SCNO: "sapiente",
            },
            ConsentArtifact: "nesciunt",
            Format: "pdf",
            TxnID: "ab",
        },
    }
    
    res, err := s.APIs.Epfsc(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->