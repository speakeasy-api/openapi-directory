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
    
    req := operations.CemstRequest{
        Security: operations.CemstSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.CemstRequestBody{
            CertificateParameters: &operations.CemstRequestBodyCertificateParameters{
                FullName: "necessitatibus",
                UID: "sint",
                Rollno: "enim",
                Year: "quia",
            },
            ConsentArtifact: "voluptatem",
            Format: "pdf",
            TxnID: "dolorem",
        },
    }
    
    res, err := s.APIs.Cemst(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->