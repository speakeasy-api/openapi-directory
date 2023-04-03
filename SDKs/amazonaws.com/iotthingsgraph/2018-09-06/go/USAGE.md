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

    req := operations.AssociateEntityToThingRequest{
        AssociateEntityToThingRequest: shared.AssociateEntityToThingRequest{
            EntityID: "corrupti",
            NamespaceVersion: 592845,
            ThingName: "distinctio",
        },
        XAmzAlgorithm: "quibusdam",
        XAmzContentSha256: "unde",
        XAmzCredential: "nulla",
        XAmzDate: "corrupti",
        XAmzSecurityToken: "illum",
        XAmzSignature: "vel",
        XAmzSignedHeaders: "error",
        XAmzTarget: "IotThingsGraphFrontEndService.AssociateEntityToThing",
    }

    ctx := context.Background()
    res, err := s.AssociateEntityToThing(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateEntityToThingResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->