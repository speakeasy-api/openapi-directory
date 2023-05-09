<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AddCustomRoutingEndpoints(ctx, operations.AddCustomRoutingEndpointsRequest{
        AddCustomRoutingEndpointsRequest: shared.AddCustomRoutingEndpointsRequest{
            EndpointConfigurations: []shared.CustomRoutingEndpointConfiguration{
                shared.CustomRoutingEndpointConfiguration{
                    EndpointID: sdk.String("provident"),
                },
                shared.CustomRoutingEndpointConfiguration{
                    EndpointID: sdk.String("distinctio"),
                },
                shared.CustomRoutingEndpointConfiguration{
                    EndpointID: sdk.String("quibusdam"),
                },
            },
            EndpointGroupArn: "unde",
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.AddCustomRoutingEndpointsXAmzTargetEnumGlobalAcceleratorV20180706AddCustomRoutingEndpoints,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddCustomRoutingEndpointsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->