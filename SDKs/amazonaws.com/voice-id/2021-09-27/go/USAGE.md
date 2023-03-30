<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AssociateFraudsterRequest{
        Headers: operations.AssociateFraudsterHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "VoiceID.AssociateFraudster",
        },
        Request: shared.AssociateFraudsterRequest{
            DomainID: "illum",
            FraudsterID: "vel",
            WatchlistID: "error",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateFraudster(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateFraudsterResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->