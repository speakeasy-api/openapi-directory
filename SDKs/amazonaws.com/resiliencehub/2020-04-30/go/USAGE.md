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
                    EksSourceName: "facilis",
                    LogicalStackName: "eum",
                    MappingType: "AppRegistryApp",
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: "ullam",
                        AwsRegion: "saepe",
                        Identifier: "inventore",
                        Type: "Native",
                    },
                    ResourceGroupName: "enim",
                    ResourceName: "eum",
                    TerraformSourceName: "voluptatum",
                },
                shared.ResourceMapping{
                    AppRegistryAppName: "autem",
                    EksSourceName: "vel",
                    LogicalStackName: "non",
                    MappingType: "AppRegistryApp",
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: "similique",
                        AwsRegion: "reprehenderit",
                        Identifier: "molestiae",
                        Type: "Native",
                    },
                    ResourceGroupName: "quasi",
                    ResourceName: "laboriosam",
                    TerraformSourceName: "dicta",
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