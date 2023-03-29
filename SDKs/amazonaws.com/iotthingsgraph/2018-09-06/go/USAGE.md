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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "IotThingsGraphFrontEndService.AssociateEntityToThing",
        },
        Request: shared.AssociateEntityToThingRequest{
            EntityID: "nihil",
            NamespaceVersion: 623564,
            ThingName: "facilis",
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