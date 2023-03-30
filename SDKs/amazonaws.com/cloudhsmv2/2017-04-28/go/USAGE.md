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

    req := operations.CopyBackupToRegionRequest{
        Headers: operations.CopyBackupToRegionHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "BaldrApiService.CopyBackupToRegion",
        },
        Request: shared.CopyBackupToRegionRequest{
            BackupID: "illum",
            DestinationRegion: "vel",
            TagList: []shared.Tag{
                shared.Tag{
                    Key: "deserunt",
                    Value: "suscipit",
                },
                shared.Tag{
                    Key: "iure",
                    Value: "magnam",
                },
                shared.Tag{
                    Key: "debitis",
                    Value: "ipsa",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.CopyBackupToRegion(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CopyBackupToRegionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->