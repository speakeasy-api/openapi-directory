<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AcceptMatch(ctx, operations.AcceptMatchRequest{
        AcceptMatchInput: shared.AcceptMatchInput{
            AcceptanceType: shared.AcceptanceTypeEnumReject,
            PlayerIds: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            TicketID: "nulla",
        },
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.AcceptMatchXAmzTargetEnumGameLiftAcceptMatch,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptMatchOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->