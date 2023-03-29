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

    req := operations.AssociateDeviceWithPlacementRequest{
        PathParams: operations.AssociateDeviceWithPlacementPathParams{
            DeviceTemplateName: "unde",
            PlacementName: "deserunt",
            ProjectName: "porro",
        },
        Headers: operations.AssociateDeviceWithPlacementHeaders{
            XAmzAlgorithm: "nulla",
            XAmzContentSha256: "id",
            XAmzCredential: "vero",
            XAmzDate: "perspiciatis",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "nihil",
            XAmzSignedHeaders: "fuga",
        },
        Request: operations.AssociateDeviceWithPlacementRequestBody{
            DeviceID: "facilis",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateDeviceWithPlacement(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDeviceWithPlacementResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->