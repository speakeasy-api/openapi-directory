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
                DOB: "officia",
                FullName: "qui",
                GENDER: "odit",
                PANFullName: "tempora",
                UID: "voluptatem",
                Panno: "dignissimos",
            },
            ConsentArtifact: "velit",
            Format: "pdf",
            TxnID: "vitae",
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