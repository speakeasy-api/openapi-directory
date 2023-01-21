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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSEC2InstanceConnectService.SendSSHPublicKey",
        },
        Request: shared.SendSSHPublicKeyRequest{
            AvailabilityZone: "fugit",
            InstanceID: "et",
            InstanceOSUser: "nihil",
            SSHPublicKey: "rerum",
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