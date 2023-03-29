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

    req := operations.AddDraftAppVersionResourceMappingsRequest{
        Headers: operations.AddDraftAppVersionResourceMappingsHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.AddDraftAppVersionResourceMappingsRequestBody{
            AppArn: "nulla",
            ResourceMappings: []shared.ResourceMapping{
                shared.ResourceMapping{
                    AppRegistryAppName: "fuga",
                    LogicalStackName: "facilis",
                    MappingType: "Resource",
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: "iusto",
                        AwsRegion: "ullam",
                        Identifier: "saepe",
                        Type: "Arn",
                    },
                    ResourceGroupName: "sapiente",
                    ResourceName: "enim",
                    TerraformSourceName: "eum",
                },
                shared.ResourceMapping{
                    AppRegistryAppName: "voluptatum",
                    LogicalStackName: "autem",
                    MappingType: "Terraform",
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: "non",
                        AwsRegion: "deleniti",
                        Identifier: "similique",
                        Type: "Arn",
                    },
                    ResourceGroupName: "molestiae",
                    ResourceName: "quo",
                    TerraformSourceName: "quasi",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.AddDraftAppVersionResourceMappings(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddDraftAppVersionResourceMappingsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->