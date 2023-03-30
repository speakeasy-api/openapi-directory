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

    req := operations.CreateAccessPointRequest{
        Headers: operations.CreateAccessPointHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateAccessPointRequestBody{
            ClientToken: "illum",
            FileSystemID: "vel",
            PosixUser: &operations.CreateAccessPointRequestBodyPosixUser{
                Gid: 623564,
                SecondaryGids: []int64{
                    384382,
                    437587,
                    297534,
                },
                UID: 891773,
            },
            RootDirectory: &operations.CreateAccessPointRequestBodyRootDirectory{
                CreationInfo: &shared.CreationInfo{
                    OwnerGid: 56713,
                    OwnerUID: 963663,
                    Permissions: "tempora",
                },
                Path: "suscipit",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "minus",
                    Value: "placeat",
                },
                shared.Tag{
                    Key: "voluptatum",
                    Value: "iusto",
                },
            },
        },
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