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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "GlobalAccelerator_V20180706.AddCustomRoutingEndpoints",
        },
        Request: shared.AddCustomRoutingEndpointsRequest{
            EndpointConfigurations: []shared.CustomRoutingEndpointConfiguration{
                shared.CustomRoutingEndpointConfiguration{
                    EndpointID: "et",
                },
            },
            EndpointGroupArn: "nihil",
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