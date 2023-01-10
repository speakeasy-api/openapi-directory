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
    
    req := operations.CreateAccessRequest{
        Headers: operations.CreateAccessHeaders{
            XAmzAlgorithm: "eos",
            XAmzContentSha256: "modi",
            XAmzCredential: "et",
            XAmzDate: "culpa",
            XAmzSecurityToken: "unde",
            XAmzSignature: "quae",
            XAmzSignedHeaders: "incidunt",
            XAmzTarget: "TransferService.CreateAccess",
        },
        Request: shared.CreateAccessRequest{
            ExternalID: "nam",
            HomeDirectory: "optio",
            HomeDirectoryMappings: []shared.HomeDirectoryMapEntry{
                shared.HomeDirectoryMapEntry{
                    Entry: "ratione",
                    Target: "quaerat",
                },
                shared.HomeDirectoryMapEntry{
                    Entry: "qui",
                    Target: "modi",
                },
                shared.HomeDirectoryMapEntry{
                    Entry: "cum",
                    Target: "rem",
                },
            },
            HomeDirectoryType: "LOGICAL",
            Policy: "cum",
            PosixProfile: &shared.PosixProfile{
                Gid: 5917608095681824334,
                SecondaryGids: []int64{
                    7738685661617987022,
                },
                UID: 3301601712436159733,
            },
            Role: "dolore",
            ServerID: "placeat",
        },
    }
    
    res, err := s.CreateAccess(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAccessResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->