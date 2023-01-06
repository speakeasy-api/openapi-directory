<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AssociateEntityToThingRequest{
        Headers: operations.AssociateEntityToThingHeaders{
            XAmzAlgorithm: "non",
            XAmzContentSha256: "facilis",
            XAmzCredential: "id",
            XAmzDate: "reprehenderit",
            XAmzSecurityToken: "sit",
            XAmzSignature: "at",
            XAmzSignedHeaders: "ex",
            XAmzTarget: "IotThingsGraphFrontEndService.AssociateEntityToThing",
        },
        Request: shared.AssociateEntityToThingRequest{
            EntityID: "qui",
            NamespaceVersion: 1539407075852850598,
            ThingName: "dolorum",
        },
    }
    
    res, err := s.AssociateEntityToThing(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateEntityToThingResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->