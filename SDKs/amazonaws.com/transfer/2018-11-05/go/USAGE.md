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

    req := operations.CreateAccessRequest{
        CreateAccessRequest: shared.CreateAccessRequest{
            ExternalID: "corrupti",
            HomeDirectory: "provident",
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
            HomeDirectoryType: "LOGICAL",
            Policy: "deserunt",
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
        XAmzAlgorithm: "suscipit",
        XAmzContentSha256: "molestiae",
        XAmzCredential: "minus",
        XAmzDate: "placeat",
        XAmzSecurityToken: "voluptatum",
        XAmzSignature: "iusto",
        XAmzSignedHeaders: "excepturi",
        XAmzTarget: "TransferService.CreateAccess",
    }

    ctx := context.Background()
    res, err := s.CreateAccess(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAccessResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->