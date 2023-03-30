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

    req := operations.SendSSHPublicKeyRequest{
        Headers: operations.SendSSHPublicKeyHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AWSEC2InstanceConnectService.SendSSHPublicKey",
        },
        Request: shared.SendSSHPublicKeyRequest{
            AvailabilityZone: "illum",
            InstanceID: "vel",
            InstanceOSUser: "error",
            SSHPublicKey: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.SendSSHPublicKey(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SendSSHPublicKeyResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->