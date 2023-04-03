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

    req := operations.BatchGetAggregateResourceConfigRequest{
        BatchGetAggregateResourceConfigRequest: shared.BatchGetAggregateResourceConfigRequest{
            ConfigurationAggregatorName: "corrupti",
            ResourceIdentifiers: []shared.AggregateResourceIdentifier{
                shared.AggregateResourceIdentifier{
                    ResourceID: "distinctio",
                    ResourceName: "quibusdam",
                    ResourceType: "AWS::DataSync::LocationNFS",
                    SourceAccountID: "nulla",
                    SourceRegion: "corrupti",
                },
                shared.AggregateResourceIdentifier{
                    ResourceID: "illum",
                    ResourceName: "vel",
                    ResourceType: "AWS::GuardDuty::IPSet",
                    SourceAccountID: "deserunt",
                    SourceRegion: "suscipit",
                },
                shared.AggregateResourceIdentifier{
                    ResourceID: "iure",
                    ResourceName: "magnam",
                    ResourceType: "AWS::IoTSiteWise::Dashboard",
                    SourceAccountID: "ipsa",
                    SourceRegion: "delectus",
                },
            },
        },
        XAmzAlgorithm: "tempora",
        XAmzContentSha256: "suscipit",
        XAmzCredential: "molestiae",
        XAmzDate: "minus",
        XAmzSecurityToken: "placeat",
        XAmzSignature: "voluptatum",
        XAmzSignedHeaders: "iusto",
        XAmzTarget: "StarlingDoveService.BatchGetAggregateResourceConfig",
    }

    ctx := context.Background()
    res, err := s.BatchGetAggregateResourceConfig(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetAggregateResourceConfigResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->