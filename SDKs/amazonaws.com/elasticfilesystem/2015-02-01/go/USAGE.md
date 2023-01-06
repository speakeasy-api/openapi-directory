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
    
    req := operations.CreateAccessPointRequest{
        Headers: operations.CreateAccessPointHeaders{
            XAmzAlgorithm: "accusantium",
            XAmzContentSha256: "atque",
            XAmzCredential: "amet",
            XAmzDate: "nisi",
            XAmzSecurityToken: "quidem",
            XAmzSignature: "est",
            XAmzSignedHeaders: "quo",
        },
        Request: operations.CreateAccessPointRequestBody{
            ClientToken: "vero",
            FileSystemID: "alias",
            PosixUser: &operations.CreateAccessPointRequestBodyPosixUser{
                Gid: 4176709158896497836,
                SecondaryGids: []int64{
                    1958777829936408748,
                },
                UID: 5294730593135495901,
            },
            RootDirectory: &operations.CreateAccessPointRequestBodyRootDirectory{
                CreationInfo: &shared.CreationInfo{
                    OwnerGid: 7470170325123997143,
                    OwnerUID: 5712992115651289762,
                    Permissions: "totam",
                },
                Path: "aut",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "magni",
                    Value: "necessitatibus",
                },
            },
        },
    }
    
    res, err := s.CreateAccessPoint(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessPointDescription != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->