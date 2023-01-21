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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "TransferService.CreateAccess",
        },
        Request: shared.CreateAccessRequest{
            ExternalID: "fugit",
            HomeDirectory: "et",
            HomeDirectoryMappings: []shared.HomeDirectoryMapEntry{
                shared.HomeDirectoryMapEntry{
                    Entry: "rerum",
                    Target: "dicta",
                },
            },
            HomeDirectoryType: "PATH",
            Policy: "voluptatum",
            PosixProfile: &shared.PosixProfile{
                Gid: 2339563716805116249,
                SecondaryGids: []int64{
                    161231572858529631,
                    7259475919510918339,
                    7373105480197164748,
                },
                UID: 3287288577352441706,
            },
            Role: "vitae",
            ServerID: "totam",
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