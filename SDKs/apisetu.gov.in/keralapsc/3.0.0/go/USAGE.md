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
    
    req := operations.OtcerRequest{
        Security: operations.OtcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.OtcerRequestBody{
            CertificateParameters: &operations.OtcerRequestBodyCertificateParameters{
                DOB: "numquam",
                FullName: "quod",
                UID: "quisquam",
            },
            ConsentArtifact: "ex",
            Format: "pdf",
            TxnID: "ea",
        },
    }
    
    res, err := s.APIs.Otcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->