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
    
    req := operations.LpgsvRequest{
        Security: operations.LpgsvSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.LpgsvRequestBody{
            CertificateParameters: &operations.LpgsvRequestBodyCertificateParameters{
                DOB: "vel",
                FullName: "et",
                GENDER: "incidunt",
                LPGID: "voluptas",
                SVNo: "consequuntur",
                UID: "quam",
            },
            ConsentArtifact: "harum",
            Format: "pdf",
            TxnID: "et",
        },
    }
    
    res, err := s.APIs.Lpgsv(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->