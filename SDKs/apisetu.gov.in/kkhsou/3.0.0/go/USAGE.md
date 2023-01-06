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
    
    req := operations.PvcerRequest{
        Security: operations.PvcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.PvcerRequestBody{
            CertificateParameters: &operations.PvcerRequestBodyCertificateParameters{
                ENROLNO: "repudiandae",
                FullName: "amet",
                YEAR: "impedit",
            },
            ConsentArtifact: "ducimus",
            Format: "pdf",
            TxnID: "et",
        },
    }
    
    res, err := s.APIs.Pvcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->