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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "StarlingDoveService.BatchGetAggregateResourceConfig",
        },
        Request: shared.BatchGetAggregateResourceConfigRequest{
            ConfigurationAggregatorName: "nihil",
            ResourceIdentifiers: []shared.AggregateResourceIdentifier{
                shared.AggregateResourceIdentifier{
                    ResourceID: "facilis",
                    ResourceName: "eum",
                    ResourceType: "AWS::EC2::TransitGateway",
                    SourceAccountID: "ullam",
                    SourceRegion: "saepe",
                },
                shared.AggregateResourceIdentifier{
                    ResourceID: "inventore",
                    ResourceName: "sapiente",
                    ResourceType: "AWS::ElasticBeanstalk::Application",
                    SourceAccountID: "eum",
                    SourceRegion: "voluptatum",
                },
                shared.AggregateResourceIdentifier{
                    ResourceID: "autem",
                    ResourceName: "vel",
                    ResourceType: "AWS::Batch::JobQueue",
                    SourceAccountID: "deleniti",
                    SourceRegion: "similique",
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