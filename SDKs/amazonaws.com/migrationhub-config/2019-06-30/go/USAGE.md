<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateHomeRegionControl(ctx, operations.CreateHomeRegionControlRequest{
        CreateHomeRegionControlRequest: shared.CreateHomeRegionControlRequest{
            DryRun: sdk.Bool(false),
            HomeRegion: "corrupti",
            Target: shared.Target{
                ID: sdk.String("9bd9d8d6-9a67-44e0-b467-cc8796ed151a"),
                Type: shared.TargetTypeEnumAccount,
            },
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.CreateHomeRegionControlXAmzTargetEnumAwsMigrationHubMultiAccountServiceCreateHomeRegionControl,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateHomeRegionControlResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->