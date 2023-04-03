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

    req := operations.CreateAccessPointRequest{
        RequestBody: operations.CreateAccessPointRequestBody{
            ClientToken: "corrupti",
            FileSystemID: "provident",
            PosixUser: &operations.CreateAccessPointRequestBodyPosixUser{
                Gid: 715190,
                SecondaryGids: []int64{
                    602763,
                    857946,
                    544883,
                    847252,
                },
                UID: 423655,
            },
            RootDirectory: &operations.CreateAccessPointRequestBodyRootDirectory{
                CreationInfo: &shared.CreationInfo{
                    OwnerGid: 623564,
                    OwnerUID: 645894,
                    Permissions: "suscipit",
                },
                Path: "iure",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "debitis",
                    Value: "ipsa",
                },
                shared.Tag{
                    Key: "delectus",
                    Value: "tempora",
                },
            },
        },
        XAmzAlgorithm: "suscipit",
        XAmzContentSha256: "molestiae",
        XAmzCredential: "minus",
        XAmzDate: "placeat",
        XAmzSecurityToken: "voluptatum",
        XAmzSignature: "iusto",
        XAmzSignedHeaders: "excepturi",
    }

    ctx := context.Background()
    res, err := s.CreateAccessPoint(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessPointDescription != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->