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

    req := operations.CreateHomeRegionControlRequest{
        Headers: operations.CreateHomeRegionControlHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSMigrationHubMultiAccountService.CreateHomeRegionControl",
        },
        Request: shared.CreateHomeRegionControlRequest{
            DryRun: false,
            HomeRegion: "nihil",
            Target: shared.Target{
                ID: "fuga",
                Type: "ACCOUNT",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateHomeRegionControl(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateHomeRegionControlResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->