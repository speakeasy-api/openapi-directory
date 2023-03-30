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

    req := operations.CreateAccessRequest{
        Headers: operations.CreateAccessHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "TransferService.CreateAccess",
        },
        Request: shared.CreateAccessRequest{
            ExternalID: "illum",
            HomeDirectory: "vel",
            HomeDirectoryMappings: []shared.HomeDirectoryMapEntry{
                shared.HomeDirectoryMapEntry{
                    Entry: "deserunt",
                    Target: "suscipit",
                },
                shared.HomeDirectoryMapEntry{
                    Entry: "iure",
                    Target: "magnam",
                },
                shared.HomeDirectoryMapEntry{
                    Entry: "debitis",
                    Target: "ipsa",
                },
            },
            HomeDirectoryType: "LOGICAL",
            Policy: "tempora",
            PosixProfile: &shared.PosixProfile{
                Gid: 383441,
                SecondaryGids: []int64{
                    791725,
                    812169,
                },
                UID: 528895,
            },
            Role: "iusto",
            ServerID: "excepturi",
        },
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