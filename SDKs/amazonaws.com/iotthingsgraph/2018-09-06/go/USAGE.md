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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "IotThingsGraphFrontEndService.AssociateEntityToThing",
        },
        Request: shared.AssociateEntityToThingRequest{
            EntityID: "fugit",
            NamespaceVersion: 1543572285742637646,
            ThingName: "nihil",
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