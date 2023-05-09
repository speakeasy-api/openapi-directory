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
    res, err := s.AssociateEntityToThing(ctx, operations.AssociateEntityToThingRequest{
        AssociateEntityToThingRequest: shared.AssociateEntityToThingRequest{
            EntityID: "corrupti",
            NamespaceVersion: sdk.Int64(592845),
            ThingName: "distinctio",
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("unde"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("corrupti"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.AssociateEntityToThingXAmzTargetEnumIotThingsGraphFrontEndServiceAssociateEntityToThing,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateEntityToThingResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->