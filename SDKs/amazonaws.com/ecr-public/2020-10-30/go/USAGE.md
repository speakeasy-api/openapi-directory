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
    res, err := s.BatchCheckLayerAvailability(ctx, operations.BatchCheckLayerAvailabilityRequest{
        BatchCheckLayerAvailabilityRequest: shared.BatchCheckLayerAvailabilityRequest{
            LayerDigests: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            RegistryID: sdk.String("unde"),
            RepositoryName: "nulla",
        },
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.BatchCheckLayerAvailabilityXAmzTargetEnumSpencerFrontendServiceBatchCheckLayerAvailability,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCheckLayerAvailabilityResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->