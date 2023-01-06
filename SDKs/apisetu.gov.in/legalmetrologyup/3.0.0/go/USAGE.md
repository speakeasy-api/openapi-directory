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
    
    req := operations.DelcsRequest{
        Security: operations.DelcsSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.DelcsRequestBody{
            CertificateParameters: &operations.DelcsRequestBodyCertificateParameters{
                ApplicationNo: "illo",
                LicenseNo: "optio",
            },
            ConsentArtifact: "reprehenderit",
            Format: "pdf",
            TxnID: "commodi",
        },
    }
    
    res, err := s.APIs.Delcs(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->