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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "GameLift.AcceptMatch",
        },
        Request: shared.AcceptMatchInput{
            AcceptanceType: "ACCEPT",
            PlayerIds: []string{
                "facilis",
                "eum",
                "iusto",
            },
            TicketID: "ullam",
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