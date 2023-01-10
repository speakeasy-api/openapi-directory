<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.BatchGetAggregateResourceConfigRequest{
        Headers: operations.BatchGetAggregateResourceConfigHeaders{
            XAmzAlgorithm: "dolor",
            XAmzContentSha256: "nulla",
            XAmzCredential: "ipsa",
            XAmzDate: "ipsum",
            XAmzSecurityToken: "ab",
            XAmzSignature: "dolores",
            XAmzSignedHeaders: "sunt",
            XAmzTarget: "StarlingDoveService.BatchGetAggregateResourceConfig",
        },
        Request: shared.BatchGetAggregateResourceConfigRequest{
            ConfigurationAggregatorName: "quas",
            ResourceIdentifiers: []shared.AggregateResourceIdentifier{
                shared.AggregateResourceIdentifier{
                    ResourceID: "dicta",
                    ResourceName: "minima",
                    ResourceType: "AWS::ShieldRegional::Protection",
                    SourceAccountID: "nesciunt",
                    SourceRegion: "ducimus",
                },
                shared.AggregateResourceIdentifier{
                    ResourceID: "dolores",
                    ResourceName: "magni",
                    ResourceType: "AWS::RDS::DBCluster",
                    SourceAccountID: "qui",
                    SourceRegion: "ab",
                },
                shared.AggregateResourceIdentifier{
                    ResourceID: "accusantium",
                    ResourceName: "aliquam",
                    ResourceType: "AWS::RDS::DBClusterSnapshot",
                    SourceAccountID: "et",
                    SourceRegion: "ipsa",
                },
            },
        },
    }
    
    res, err := s.BatchGetAggregateResourceConfig(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetAggregateResourceConfigResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->