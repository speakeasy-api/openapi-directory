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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.CreateAccessPointRequestBody{
            ClientToken: "voluptas",
            FileSystemID: "fugit",
            PosixUser: &operations.CreateAccessPointRequestBodyPosixUser{
                Gid: 1543572285742637646,
                SecondaryGids: []int64{
                    8325060299420976708,
                },
                UID: 7837839688282259259,
            },
            RootDirectory: &operations.CreateAccessPointRequestBodyRootDirectory{
                CreationInfo: &shared.CreationInfo{
                    OwnerGid: 2518412263346885298,
                    OwnerUID: 5617773211005988520,
                    Permissions: "et",
                },
                Path: "ut",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "et",
                    Value: "voluptate",
                },
                shared.Tag{
                    Key: "iste",
                    Value: "vitae",
                },
                shared.Tag{
                    Key: "totam",
                    Value: "dolores",
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