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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "StarlingDoveService.BatchGetAggregateResourceConfig",
        },
        Request: shared.BatchGetAggregateResourceConfigRequest{
            ConfigurationAggregatorName: "fugit",
            ResourceIdentifiers: []shared.AggregateResourceIdentifier{
                shared.AggregateResourceIdentifier{
                    ResourceID: "nihil",
                    ResourceName: "rerum",
                    ResourceType: "AWS::ApiGateway::Stage",
                    SourceAccountID: "debitis",
                    SourceRegion: "voluptatum",
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