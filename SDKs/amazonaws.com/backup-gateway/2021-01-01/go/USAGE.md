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

    req := operations.AssociateGatewayToServerRequest{
        AssociateGatewayToServerInput: shared.AssociateGatewayToServerInput{
            GatewayArn: "corrupti",
            ServerArn: "provident",
        },
        XAmzAlgorithm: "distinctio",
        XAmzContentSha256: "quibusdam",
        XAmzCredential: "unde",
        XAmzDate: "nulla",
        XAmzSecurityToken: "corrupti",
        XAmzSignature: "illum",
        XAmzSignedHeaders: "vel",
        XAmzTarget: "BackupOnPremises_v20210101.AssociateGatewayToServer",
    }

    ctx := context.Background()
    res, err := s.AssociateGatewayToServer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateGatewayToServerOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->