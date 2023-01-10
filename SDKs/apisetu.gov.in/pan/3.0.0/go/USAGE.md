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
    
    req := operations.PancrRequest{
        Security: operations.PancrSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.PancrRequestBody{
            CertificateParameters: &operations.PancrRequestBodyCertificateParameters{
                DOB: "sint",
                FullName: "cumque",
                GENDER: "ut",
                PANFullName: "nam",
                UID: "a",
                Panno: "sed",
            },
            ConsentArtifact: "sint",
            Format: "xml",
            TxnID: "impedit",
        },
    }
    
    res, err := s.APIs.Pancr(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->