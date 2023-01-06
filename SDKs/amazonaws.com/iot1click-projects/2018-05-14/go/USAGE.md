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
            DeviceTemplateName: "consectetur",
            PlacementName: "ducimus",
            ProjectName: "consequatur",
        },
        Headers: operations.AssociateDeviceWithPlacementHeaders{
            XAmzAlgorithm: "non",
            XAmzContentSha256: "vel",
            XAmzCredential: "at",
            XAmzDate: "cumque",
            XAmzSecurityToken: "occaecati",
            XAmzSignature: "iusto",
            XAmzSignedHeaders: "possimus",
        },
        Request: operations.AssociateDeviceWithPlacementRequestBody{
            DeviceID: "deserunt",
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