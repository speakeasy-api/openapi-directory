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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "VoiceID.AssociateFraudster",
        },
        Request: shared.AssociateFraudsterRequest{
            DomainID: "nihil",
            FraudsterID: "fuga",
            WatchlistID: "facilis",
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