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

    req := operations.BatchGetAggregateResourceConfigRequest{
        Headers: operations.BatchGetAggregateResourceConfigHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "StarlingDoveService.BatchGetAggregateResourceConfig",
        },
        Request: shared.BatchGetAggregateResourceConfigRequest{
            ConfigurationAggregatorName: "illum",
            ResourceIdentifiers: []shared.AggregateResourceIdentifier{
                shared.AggregateResourceIdentifier{
                    ResourceID: "error",
                    ResourceName: "deserunt",
                    ResourceType: "AWS::SSM::FileData",
                    SourceAccountID: "iure",
                    SourceRegion: "magnam",
                },
                shared.AggregateResourceIdentifier{
                    ResourceID: "debitis",
                    ResourceName: "ipsa",
                    ResourceType: "AWS::IoTSiteWise::Gateway",
                    SourceAccountID: "tempora",
                    SourceRegion: "suscipit",
                },
            },
        },
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