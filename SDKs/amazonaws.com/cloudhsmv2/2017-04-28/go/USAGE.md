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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "BaldrApiService.CopyBackupToRegion",
        },
        Request: shared.CopyBackupToRegionRequest{
            BackupID: "nihil",
            DestinationRegion: "fuga",
            TagList: []shared.Tag{
                shared.Tag{
                    Key: "eum",
                    Value: "iusto",
                },
                shared.Tag{
                    Key: "ullam",
                    Value: "saepe",
                },
                shared.Tag{
                    Key: "inventore",
                    Value: "sapiente",
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