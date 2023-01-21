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
    
    req := operations.DrvlcRequest{
        Security: operations.DrvlcSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.DrvlcRequestBody{
            CertificateParameters: &operations.DrvlcRequestBodyCertificateParameters{
                DOB: "sit",
                FullName: "voluptas",
                UID: "culpa",
                Dlno: "expedita",
            },
            ConsentArtifact: "consequuntur",
            Format: "xml",
            TxnID: "expedita",
        },
    }
    
    res, err := s.APIs.Drvlc(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->