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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AcceptMatchRequest{
        AcceptMatchInput: shared.AcceptMatchInput{
            AcceptanceType: "REJECT",
            PlayerIds: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            TicketID: "nulla",
        },
        XAmzAlgorithm: "corrupti",
        XAmzContentSha256: "illum",
        XAmzCredential: "vel",
        XAmzDate: "error",
        XAmzSecurityToken: "deserunt",
        XAmzSignature: "suscipit",
        XAmzSignedHeaders: "iure",
        XAmzTarget: "GameLift.AcceptMatch",
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