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
    
    req := operations.CripcRequest{
        Security: operations.CripcSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.CripcRequestBody{
            CertificateParameters: &operations.CripcRequestBodyCertificateParameters{
                DOB: "saepe",
                FullName: "veniam",
                Udf1: "quod",
                Udf2: "ducimus",
                Udf3: "esse",
                UID: "voluptates",
            },
            ConsentArtifact: "non",
            Format: "pdf",
            TxnID: "enim",
        },
    }
    
    res, err := s.APIs.Cripc(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->