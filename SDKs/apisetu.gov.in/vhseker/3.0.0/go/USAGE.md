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
    
    req := operations.VochseRequest{
        Security: operations.VochseSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.VochseRequestBody{
            CertificateParameters: &operations.VochseRequestBodyCertificateParameters{
                DOB: "sit",
                FullName: "voluptas",
                Regno: "culpa",
                Year: "expedita",
                Type: "consequuntur",
            },
            ConsentArtifact: "dolor",
            Format: "pdf",
            TxnID: "voluptas",
        },
    }
    
    res, err := s.APIs.Vochse(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->