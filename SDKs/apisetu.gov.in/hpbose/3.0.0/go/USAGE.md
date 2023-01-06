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
    
    req := operations.HvcerRequest{
        Security: operations.HvcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.HvcerRequestBody{
            CertificateParameters: &operations.HvcerRequestBodyCertificateParameters{
                DOB: "et",
                FullName: "enim",
                ROLL: "saepe",
                YOP: "dolores",
            },
            ConsentArtifact: "quasi",
            Format: "pdf",
            TxnID: "numquam",
        },
    }
    
    res, err := s.APIs.Hvcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->