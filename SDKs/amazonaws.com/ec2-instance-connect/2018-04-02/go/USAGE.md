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

    req := operations.SendSSHPublicKeyRequest{
        SendSSHPublicKeyRequest: shared.SendSSHPublicKeyRequest{
            AvailabilityZone: "corrupti",
            InstanceID: "provident",
            InstanceOSUser: "distinctio",
            SSHPublicKey: "quibusdam",
        },
        XAmzAlgorithm: "unde",
        XAmzContentSha256: "nulla",
        XAmzCredential: "corrupti",
        XAmzDate: "illum",
        XAmzSecurityToken: "vel",
        XAmzSignature: "error",
        XAmzSignedHeaders: "deserunt",
        XAmzTarget: "AWSEC2InstanceConnectService.SendSSHPublicKey",
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