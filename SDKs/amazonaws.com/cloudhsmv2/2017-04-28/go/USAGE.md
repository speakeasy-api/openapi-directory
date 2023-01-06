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
    
    req := operations.CopyBackupToRegionRequest{
        Headers: operations.CopyBackupToRegionHeaders{
            XAmzAlgorithm: "animi",
            XAmzContentSha256: "est",
            XAmzCredential: "voluptas",
            XAmzDate: "ea",
            XAmzSecurityToken: "voluptas",
            XAmzSignature: "necessitatibus",
            XAmzSignedHeaders: "iure",
            XAmzTarget: "BaldrApiService.CopyBackupToRegion",
        },
        Request: shared.CopyBackupToRegionRequest{
            BackupID: "quaerat",
            DestinationRegion: "aut",
            TagList: []shared.Tag{
                shared.Tag{
                    Key: "omnis",
                    Value: "debitis",
                },
                shared.Tag{
                    Key: "nihil",
                    Value: "magni",
                },
                shared.Tag{
                    Key: "vitae",
                    Value: "excepturi",
                },
            },
        },
    }
    
    res, err := s.CopyBackupToRegion(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CopyBackupToRegionResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->