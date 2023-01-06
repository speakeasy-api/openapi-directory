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
    
    req := operations.AlimwRequest{
        Security: operations.AlimwSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.AlimwRequestBody{
            CertificateParameters: &operations.AlimwRequestBodyCertificateParameters{
                RefNo: "nam",
                TokenNo: "eaque",
            },
            ConsentArtifact: "adipisci",
            Format: "pdf",
            TxnID: "laborum",
        },
    }
    
    res, err := s.APIs.Alimw(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->