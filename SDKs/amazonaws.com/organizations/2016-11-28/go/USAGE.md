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
    res, err := s.AcceptHandshake(ctx, operations.AcceptHandshakeRequest{
        AcceptHandshakeRequest: shared.AcceptHandshakeRequest{
            HandshakeID: "corrupti",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.AcceptHandshakeXAmzTargetEnumAwsOrganizationsV20161128AcceptHandshake,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptHandshakeResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->