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
    
    req := operations.AssociateDeviceWithPlacementRequest{
        PathParams: operations.AssociateDeviceWithPlacementPathParams{
            DeviceTemplateName: "voluptatem",
            PlacementName: "magnam",
            ProjectName: "recusandae",
        },
        Headers: operations.AssociateDeviceWithPlacementHeaders{
            XAmzAlgorithm: "quos",
            XAmzContentSha256: "aspernatur",
            XAmzCredential: "veniam",
            XAmzDate: "minima",
            XAmzSecurityToken: "harum",
            XAmzSignature: "et",
            XAmzSignedHeaders: "alias",
        },
        Request: operations.AssociateDeviceWithPlacementRequestBody{
            DeviceID: "aliquam",
        },
    }
    
    res, err := s.AssociateDeviceWithPlacement(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDeviceWithPlacementResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->