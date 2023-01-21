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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "ToggleCustomerAPI.GetRoutingControlState",
        },
        Request: shared.GetRoutingControlStateRequest{
            RoutingControlArn: "fugit",
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