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
            XAmzAlgorithm: "doloribus",
            XAmzContentSha256: "ratione",
            XAmzCredential: "voluptas",
            XAmzDate: "omnis",
            XAmzSecurityToken: "rerum",
            XAmzSignature: "possimus",
            XAmzSignedHeaders: "quo",
            XAmzTarget: "AWSEC2InstanceConnectService.SendSSHPublicKey",
        },
        Request: shared.SendSSHPublicKeyRequest{
            AvailabilityZone: "eos",
            InstanceID: "enim",
            InstanceOSUser: "temporibus",
            SSHPublicKey: "exercitationem",
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