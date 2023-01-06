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
    
    req := operations.SkmstRequest{
        Security: operations.SkmstSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.SkmstRequestBody{
            CertificateParameters: &operations.SkmstRequestBodyCertificateParameters{
                Txt10thRollNo: "consequatur",
                TxtCandidateAppSeq: "sequi",
                TxtExamDate: "omnis",
            },
            ConsentArtifact: "quis",
            Format: "pdf",
            TxnID: "sapiente",
        },
    }
    
    res, err := s.APIs.Skmst(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->