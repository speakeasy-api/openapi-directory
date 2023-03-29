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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "GlobalAccelerator_V20180706.AddCustomRoutingEndpoints",
        },
        Request: shared.AddCustomRoutingEndpointsRequest{
            EndpointConfigurations: []shared.CustomRoutingEndpointConfiguration{
                shared.CustomRoutingEndpointConfiguration{
                    EndpointID: "fuga",
                },
                shared.CustomRoutingEndpointConfiguration{
                    EndpointID: "facilis",
                },
            },
            EndpointGroupArn: "eum",
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