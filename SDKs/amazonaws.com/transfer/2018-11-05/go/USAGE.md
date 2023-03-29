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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "TransferService.CreateAccess",
        },
        Request: shared.CreateAccessRequest{
            ExternalID: "nihil",
            HomeDirectory: "fuga",
            HomeDirectoryMappings: []shared.HomeDirectoryMapEntry{
                shared.HomeDirectoryMapEntry{
                    Entry: "eum",
                    Target: "iusto",
                },
                shared.HomeDirectoryMapEntry{
                    Entry: "ullam",
                    Target: "saepe",
                },
                shared.HomeDirectoryMapEntry{
                    Entry: "inventore",
                    Target: "sapiente",
                },
            },
            HomeDirectoryType: "PATH",
            Policy: "eum",
            PosixProfile: &shared.PosixProfile{
                Gid: 477665,
                SecondaryGids: []int64{
                    812169,
                    528895,
                    479977,
                    568045,
                },
                UID: 392785,
            },
            Role: "molestiae",
            ServerID: "quo",
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