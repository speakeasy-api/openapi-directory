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
    res, err := s.CreateAccessPoint(ctx, operations.CreateAccessPointRequest{
        RequestBody: operations.CreateAccessPointRequestBody{
            ClientToken: "corrupti",
            FileSystemID: "provident",
            PosixUser: &operations.CreateAccessPointRequestBodyPosixUser{
                Gid: sdk.Int64(715190),
                SecondaryGids: []int64{
                    602763,
                    857946,
                    544883,
                    847252,
                },
                UID: sdk.Int64(423655),
            },
            RootDirectory: &operations.CreateAccessPointRequestBodyRootDirectory{
                CreationInfo: &shared.CreationInfo{
                    OwnerGid: 623564,
                    OwnerUID: 645894,
                    Permissions: "suscipit",
                },
                Path: sdk.String("iure"),
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
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessPointDescription != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->