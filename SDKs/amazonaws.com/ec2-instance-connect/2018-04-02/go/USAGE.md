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
    
    req := operations.SendSSHPublicKeyRequest{
        Headers: operations.SendSSHPublicKeyHeaders{
            XAmzAlgorithm: "provident",
            XAmzContentSha256: "molestiae",
            XAmzCredential: "pariatur",
            XAmzDate: "quasi",
            XAmzSecurityToken: "corrupti",
            XAmzSignature: "enim",
            XAmzSignedHeaders: "qui",
            XAmzTarget: "AWSEC2InstanceConnectService.SendSSHPublicKey",
        },
        Request: shared.SendSSHPublicKeyRequest{
            AvailabilityZone: "possimus",
            InstanceID: "modi",
            InstanceOSUser: "neque",
            SSHPublicKey: "consequuntur",
        },
    }
    
    res, err := s.SendSSHPublicKey(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SendSSHPublicKeyResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->