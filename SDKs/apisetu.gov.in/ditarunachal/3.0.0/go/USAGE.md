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
    
    req := operations.IlpmtRequest{
        Security: operations.IlpmtSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.IlpmtRequestBody{
            CertificateParameters: &operations.IlpmtRequestBodyCertificateParameters{
                FullName: "saepe",
                UID: "eius",
                EILPAppID: "delectus",
                EILPContactNumber: "sint",
            },
            ConsentArtifact: "dolor",
            Format: "pdf",
            TxnID: "molestiae",
        },
    }
    
    res, err := s.APIs.Ilpmt(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->