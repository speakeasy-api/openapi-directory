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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "BaldrApiService.CopyBackupToRegion",
        },
        Request: shared.CopyBackupToRegionRequest{
            BackupID: "fugit",
            DestinationRegion: "et",
            TagList: []shared.Tag{
                shared.Tag{
                    Key: "rerum",
                    Value: "dicta",
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