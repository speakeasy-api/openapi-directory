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

    req := operations.AssociateEntityToThingRequest{
        Headers: operations.AssociateEntityToThingHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "IotThingsGraphFrontEndService.AssociateEntityToThing",
        },
        Request: shared.AssociateEntityToThingRequest{
            EntityID: "illum",
            NamespaceVersion: 423655,
            ThingName: "error",
        },
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