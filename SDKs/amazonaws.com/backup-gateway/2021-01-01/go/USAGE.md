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

    req := operations.AssociateGatewayToServerRequest{
        Headers: operations.AssociateGatewayToServerHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "BackupOnPremises_v20210101.AssociateGatewayToServer",
        },
        Request: shared.AssociateGatewayToServerInput{
            GatewayArn: "nihil",
            ServerArn: "fuga",
        },
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