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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AddCustomRoutingEndpointsRequest{
        AddCustomRoutingEndpointsRequest: shared.AddCustomRoutingEndpointsRequest{
            EndpointConfigurations: []shared.CustomRoutingEndpointConfiguration{
                shared.CustomRoutingEndpointConfiguration{
                    EndpointID: "provident",
                },
                shared.CustomRoutingEndpointConfiguration{
                    EndpointID: "distinctio",
                },
                shared.CustomRoutingEndpointConfiguration{
                    EndpointID: "quibusdam",
                },
            },
            EndpointGroupArn: "unde",
        },
        XAmzAlgorithm: "nulla",
        XAmzContentSha256: "corrupti",
        XAmzCredential: "illum",
        XAmzDate: "vel",
        XAmzSecurityToken: "error",
        XAmzSignature: "deserunt",
        XAmzSignedHeaders: "suscipit",
        XAmzTarget: "GlobalAccelerator_V20180706.AddCustomRoutingEndpoints",
    }

    ctx := context.Background()
    res, err := s.AddCustomRoutingEndpoints(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddCustomRoutingEndpointsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->