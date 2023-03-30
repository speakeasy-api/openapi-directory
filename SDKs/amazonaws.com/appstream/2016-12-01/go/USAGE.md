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

    req := operations.AssociateApplicationFleetRequest{
        Headers: operations.AssociateApplicationFleetHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "PhotonAdminProxyService.AssociateApplicationFleet",
        },
        Request: shared.AssociateApplicationFleetRequest{
            ApplicationArn: "illum",
            FleetName: "vel",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateApplicationFleet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateApplicationFleetResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->