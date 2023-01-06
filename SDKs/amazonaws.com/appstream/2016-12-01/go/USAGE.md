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
    
    req := operations.AssociateFleetRequest{
        Headers: operations.AssociateFleetHeaders{
            XAmzAlgorithm: "sapiente",
            XAmzContentSha256: "ipsam",
            XAmzCredential: "autem",
            XAmzDate: "placeat",
            XAmzSecurityToken: "velit",
            XAmzSignature: "minus",
            XAmzSignedHeaders: "praesentium",
            XAmzTarget: "PhotonAdminProxyService.AssociateFleet",
        },
        Request: shared.AssociateFleetRequest{
            FleetName: "voluptas",
            StackName: "consequatur",
        },
    }
    
    res, err := s.AssociateFleet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateFleetResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->