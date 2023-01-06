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
    
    req := operations.MrcerRequest{
        Security: operations.MrcerSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.MrcerRequestBody{
            CertificateParameters: &operations.MrcerRequestBodyCertificateParameters{
                DOB: "fuga",
                FullName: "aut",
                RROLL: "consectetur",
                Year: "nihil",
            },
            ConsentArtifact: "similique",
            Format: "pdf",
            TxnID: "mollitia",
        },
    }
    
    res, err := s.APIs.Mrcer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->