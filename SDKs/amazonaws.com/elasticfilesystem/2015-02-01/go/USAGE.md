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
            XAmzAlgorithm: "vero",
            XAmzContentSha256: "debitis",
            XAmzCredential: "vitae",
            XAmzDate: "illo",
            XAmzSecurityToken: "dolor",
            XAmzSignature: "aut",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateAccessPointRequestBody{
            ClientToken: "iusto",
            FileSystemID: "necessitatibus",
            PosixUser: &operations.CreateAccessPointRequestBodyPosixUser{
                Gid: 9099396917438780945,
                SecondaryGids: []int64{
                    7393415062790344033,
                    5573655011999427817,
                },
                UID: 3450856630666814463,
            },
            RootDirectory: &operations.CreateAccessPointRequestBodyRootDirectory{
                CreationInfo: &shared.CreationInfo{
                    OwnerGid: 2817162217093611776,
                    OwnerUID: 2020632354827331984,
                    Permissions: "magni",
                },
                Path: "nostrum",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "tenetur",
                    Value: "numquam",
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