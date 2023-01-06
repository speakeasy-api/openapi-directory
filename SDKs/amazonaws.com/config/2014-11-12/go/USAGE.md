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
            XAmzAlgorithm: "repellat",
            XAmzContentSha256: "non",
            XAmzCredential: "facilis",
            XAmzDate: "id",
            XAmzSecurityToken: "reprehenderit",
            XAmzSignature: "sit",
            XAmzSignedHeaders: "at",
            XAmzTarget: "StarlingDoveService.BatchGetAggregateResourceConfig",
        },
        Request: shared.BatchGetAggregateResourceConfigRequest{
            ConfigurationAggregatorName: "doloribus",
            ResourceIdentifiers: []shared.AggregateResourceIdentifier{
                shared.AggregateResourceIdentifier{
                    ResourceID: "eius",
                    ResourceName: "dolorum",
                    ResourceType: "AWS::NetworkFirewall::RuleGroup",
                    SourceAccountID: "enim",
                    SourceRegion: "sunt",
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