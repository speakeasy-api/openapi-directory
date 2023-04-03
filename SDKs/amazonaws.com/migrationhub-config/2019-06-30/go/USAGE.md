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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateHomeRegionControlRequest{
        CreateHomeRegionControlRequest: shared.CreateHomeRegionControlRequest{
            DryRun: false,
            HomeRegion: "corrupti",
            Target: shared.Target{
                ID: "provident",
                Type: "ACCOUNT",
            },
        },
        XAmzAlgorithm: "distinctio",
        XAmzContentSha256: "quibusdam",
        XAmzCredential: "unde",
        XAmzDate: "nulla",
        XAmzSecurityToken: "corrupti",
        XAmzSignature: "illum",
        XAmzSignedHeaders: "vel",
        XAmzTarget: "AWSMigrationHubMultiAccountService.CreateHomeRegionControl",
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