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
    
    req := operations.GovidRequest{
        Security: operations.GovidSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.GovidRequestBody{
            CertificateParameters: &operations.GovidRequestBodyCertificateParameters{
                DOB: "exercitationem",
                FullName: "consequatur",
                REGNO: "ut",
            },
            ConsentArtifact: "dolores",
            Format: "pdf",
            TxnID: "et",
        },
    }
    
    res, err := s.APIs.Govid(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->