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
    res, err := s.SendSSHPublicKey(ctx, operations.SendSSHPublicKeyRequest{
        SendSSHPublicKeyRequest: shared.SendSSHPublicKeyRequest{
            AvailabilityZone: sdk.String("corrupti"),
            InstanceID: "provident",
            InstanceOSUser: "distinctio",
            SSHPublicKey: "quibusdam",
        },
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.SendSSHPublicKeyXAmzTargetEnumAwsec2InstanceConnectServiceSendSSHPublicKey,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendSSHPublicKeyResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->