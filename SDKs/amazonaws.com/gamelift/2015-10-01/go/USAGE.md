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

    req := operations.AcceptMatchRequest{
        Headers: operations.AcceptMatchHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "GameLift.AcceptMatch",
        },
        Request: shared.AcceptMatchInput{
            AcceptanceType: "REJECT",
            PlayerIds: []string{
                "error",
                "deserunt",
            },
            TicketID: "suscipit",
        },
    }

    ctx := context.Background()
    res, err := s.AcceptMatch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptMatchOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->