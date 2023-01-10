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
    
    req := operations.GetRoutingControlStateRequest{
        Headers: operations.GetRoutingControlStateHeaders{
            XAmzAlgorithm: "sed",
            XAmzContentSha256: "expedita",
            XAmzCredential: "maxime",
            XAmzDate: "eos",
            XAmzSecurityToken: "aut",
            XAmzSignature: "autem",
            XAmzSignedHeaders: "deleniti",
            XAmzTarget: "ToggleCustomerAPI.GetRoutingControlState",
        },
        Request: shared.GetRoutingControlStateRequest{
            RoutingControlArn: "asperiores",
        },
    }
    
    res, err := s.GetRoutingControlState(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRoutingControlStateResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->