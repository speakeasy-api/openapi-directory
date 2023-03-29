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

    req := operations.GetRoutingControlStateRequest{
        Headers: operations.GetRoutingControlStateHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "ToggleCustomerAPI.GetRoutingControlState",
        },
        Request: shared.GetRoutingControlStateRequest{
            RoutingControlArn: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.GetRoutingControlState(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRoutingControlStateResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->