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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateAccessPointRequestBody{
            ClientToken: "nulla",
            FileSystemID: "nihil",
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
                    Permissions: "enim",
                },
                Path: "eum",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "autem",
                    Value: "vel",
                },
                shared.Tag{
                    Key: "non",
                    Value: "deleniti",
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