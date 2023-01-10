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
                Txt10thRollNo: "nostrum",
                TxtCandidateAppSeq: "porro",
                TxtExamDate: "et",
            },
            ConsentArtifact: "maxime",
            Format: "pdf",
            TxnID: "est",
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