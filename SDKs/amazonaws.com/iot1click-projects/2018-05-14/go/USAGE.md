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
            DeviceTemplateName: "corrupti",
            PlacementName: "provident",
            ProjectName: "distinctio",
        },
        Headers: operations.AssociateDeviceWithPlacementHeaders{
            XAmzAlgorithm: "quibusdam",
            XAmzContentSha256: "unde",
            XAmzCredential: "nulla",
            XAmzDate: "corrupti",
            XAmzSecurityToken: "illum",
            XAmzSignature: "vel",
            XAmzSignedHeaders: "error",
        },
        Request: operations.AssociateDeviceWithPlacementRequestBody{
            DeviceID: "deserunt",
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