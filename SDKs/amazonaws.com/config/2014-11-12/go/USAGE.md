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
    res, err := s.BatchGetAggregateResourceConfig(ctx, operations.BatchGetAggregateResourceConfigRequest{
        BatchGetAggregateResourceConfigRequest: shared.BatchGetAggregateResourceConfigRequest{
            ConfigurationAggregatorName: "corrupti",
            ResourceIdentifiers: []shared.AggregateResourceIdentifier{
                shared.AggregateResourceIdentifier{
                    ResourceID: "distinctio",
                    ResourceName: sdk.String("quibusdam"),
                    ResourceType: shared.ResourceTypeEnumAwsIoTEventsDetectorModel,
                    SourceAccountID: "nulla",
                    SourceRegion: "corrupti",
                },
                shared.AggregateResourceIdentifier{
                    ResourceID: "illum",
                    ResourceName: sdk.String("vel"),
                    ResourceType: shared.ResourceTypeEnumAwsImageBuilderDistributionConfiguration,
                    SourceAccountID: "deserunt",
                    SourceRegion: "suscipit",
                },
                shared.AggregateResourceIdentifier{
                    ResourceID: "iure",
                    ResourceName: sdk.String("magnam"),
                    ResourceType: shared.ResourceTypeEnumAwsIoTAccountAuditConfiguration,
                    SourceAccountID: "ipsa",
                    SourceRegion: "delectus",
                },
            },
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.BatchGetAggregateResourceConfigXAmzTargetEnumStarlingDoveServiceBatchGetAggregateResourceConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetAggregateResourceConfigResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->