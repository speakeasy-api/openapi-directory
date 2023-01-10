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
            XAmzAlgorithm: "impedit",
            XAmzContentSha256: "est",
            XAmzCredential: "dolor",
            XAmzDate: "facilis",
            XAmzSecurityToken: "ut",
            XAmzSignature: "tenetur",
            XAmzSignedHeaders: "voluptatibus",
            XAmzTarget: "IotThingsGraphFrontEndService.AssociateEntityToThing",
        },
        Request: shared.AssociateEntityToThingRequest{
            EntityID: "cupiditate",
            NamespaceVersion: 6514906014667812376,
            ThingName: "in",
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