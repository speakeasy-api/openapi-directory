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
                DOB: "recusandae",
                FullName: "incidunt",
                GENDER: "delectus",
                LPGID: "qui",
                SVNo: "iste",
                UID: "fuga",
            },
            ConsentArtifact: "at",
            Format: "pdf",
            TxnID: "magnam",
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