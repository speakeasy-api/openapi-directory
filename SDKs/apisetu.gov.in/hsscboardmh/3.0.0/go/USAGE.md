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
    
    req := operations.HpcerRequest{
        Security: operations.HpcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.HpcerRequestBody{
            CertificateParameters: &operations.HpcerRequestBodyCertificateParameters{
                FullName: "sit",
                Exsession: "voluptas",
                Rollnumber: "culpa",
                Totalmarks: "expedita",
                Year: "consequuntur",
            },
            ConsentArtifact: "dolor",
            Format: "pdf",
            TxnID: "voluptas",
        },
    }
    
    res, err := s.APIs.Hpcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->