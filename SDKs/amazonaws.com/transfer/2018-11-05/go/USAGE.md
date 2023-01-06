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
            XAmzAlgorithm: "doloribus",
            XAmzContentSha256: "architecto",
            XAmzCredential: "est",
            XAmzDate: "beatae",
            XAmzSecurityToken: "odio",
            XAmzSignature: "blanditiis",
            XAmzSignedHeaders: "voluptatem",
            XAmzTarget: "TransferService.CreateAccess",
        },
        Request: shared.CreateAccessRequest{
            ExternalID: "eum",
            HomeDirectory: "at",
            HomeDirectoryMappings: []shared.HomeDirectoryMapEntry{
                shared.HomeDirectoryMapEntry{
                    Entry: "dolore",
                    Target: "voluptatem",
                },
            },
            HomeDirectoryType: "PATH",
            Policy: "impedit",
            PosixProfile: &shared.PosixProfile{
                Gid: 4594625245081249193,
                SecondaryGids: []int64{
                    7609203895733566797,
                    5118155005328491642,
                },
                UID: 6153116969609004781,
            },
            Role: "ut",
            ServerID: "possimus",
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