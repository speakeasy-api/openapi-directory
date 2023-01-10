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
    
    req := operations.AddCustomRoutingEndpointsRequest{
        Headers: operations.AddCustomRoutingEndpointsHeaders{
            XAmzAlgorithm: "modi",
            XAmzContentSha256: "cum",
            XAmzCredential: "similique",
            XAmzDate: "voluptatibus",
            XAmzSecurityToken: "quisquam",
            XAmzSignature: "quis",
            XAmzSignedHeaders: "autem",
            XAmzTarget: "GlobalAccelerator_V20180706.AddCustomRoutingEndpoints",
        },
        Request: shared.AddCustomRoutingEndpointsRequest{
            EndpointConfigurations: []shared.CustomRoutingEndpointConfiguration{
                shared.CustomRoutingEndpointConfiguration{
                    EndpointID: "ducimus",
                },
                shared.CustomRoutingEndpointConfiguration{
                    EndpointID: "provident",
                },
                shared.CustomRoutingEndpointConfiguration{
                    EndpointID: "commodi",
                },
            },
            EndpointGroupArn: "ut",
        },
    }
    
    res, err := s.AddCustomRoutingEndpoints(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddCustomRoutingEndpointsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->