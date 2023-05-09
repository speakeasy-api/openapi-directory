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
    res, err := s.CreateAccess(ctx, operations.CreateAccessRequest{
        CreateAccessRequest: shared.CreateAccessRequest{
            ExternalID: "corrupti",
            HomeDirectory: sdk.String("provident"),
            HomeDirectoryMappings: []shared.HomeDirectoryMapEntry{
                shared.HomeDirectoryMapEntry{
                    Entry: "quibusdam",
                    Target: "unde",
                },
                shared.HomeDirectoryMapEntry{
                    Entry: "nulla",
                    Target: "corrupti",
                },
                shared.HomeDirectoryMapEntry{
                    Entry: "illum",
                    Target: "vel",
                },
            },
            HomeDirectoryType: shared.HomeDirectoryTypeEnumLogical.ToPointer(),
            Policy: sdk.String("deserunt"),
            PosixProfile: &shared.PosixProfile{
                Gid: 384382,
                SecondaryGids: []int64{
                    297534,
                    891773,
                },
                UID: 56713,
            },
            Role: "delectus",
            ServerID: "tempora",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.CreateAccessXAmzTargetEnumTransferServiceCreateAccess,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAccessResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->