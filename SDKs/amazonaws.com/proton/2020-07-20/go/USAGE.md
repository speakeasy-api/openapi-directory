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
    res, err := s.AcceptEnvironmentAccountConnection(ctx, operations.AcceptEnvironmentAccountConnectionRequest{
        AcceptEnvironmentAccountConnectionInput: shared.AcceptEnvironmentAccountConnectionInput{
            ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.AcceptEnvironmentAccountConnectionXAmzTargetEnumAwsProton20200720AcceptEnvironmentAccountConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptEnvironmentAccountConnectionOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->