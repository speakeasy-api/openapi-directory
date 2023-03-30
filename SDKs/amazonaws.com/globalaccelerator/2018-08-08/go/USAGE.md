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

    req := operations.AddCustomRoutingEndpointsRequest{
        Headers: operations.AddCustomRoutingEndpointsHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "GlobalAccelerator_V20180706.AddCustomRoutingEndpoints",
        },
        Request: shared.AddCustomRoutingEndpointsRequest{
            EndpointConfigurations: []shared.CustomRoutingEndpointConfiguration{
                shared.CustomRoutingEndpointConfiguration{
                    EndpointID: "vel",
                },
                shared.CustomRoutingEndpointConfiguration{
                    EndpointID: "error",
                },
                shared.CustomRoutingEndpointConfiguration{
                    EndpointID: "deserunt",
                },
                shared.CustomRoutingEndpointConfiguration{
                    EndpointID: "suscipit",
                },
            },
            EndpointGroupArn: "iure",
        },
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