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

    req := operations.AddDraftAppVersionResourceMappingsRequest{
        RequestBody: operations.AddDraftAppVersionResourceMappingsRequestBody{
            AppArn: "corrupti",
            ResourceMappings: []shared.ResourceMapping{
                shared.ResourceMapping{
                    AppRegistryAppName: "distinctio",
                    EksSourceName: "quibusdam",
                    LogicalStackName: "unde",
                    MappingType: "EKS",
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: "corrupti",
                        AwsRegion: "illum",
                        Identifier: "vel",
                        Type: "Native",
                    },
                    ResourceGroupName: "deserunt",
                    ResourceName: "suscipit",
                    TerraformSourceName: "iure",
                },
                shared.ResourceMapping{
                    AppRegistryAppName: "magnam",
                    EksSourceName: "debitis",
                    LogicalStackName: "ipsa",
                    MappingType: "EKS",
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: "tempora",
                        AwsRegion: "suscipit",
                        Identifier: "molestiae",
                        Type: "Native",
                    },
                    ResourceGroupName: "placeat",
                    ResourceName: "voluptatum",
                    TerraformSourceName: "iusto",
                },
                shared.ResourceMapping{
                    AppRegistryAppName: "excepturi",
                    EksSourceName: "nisi",
                    LogicalStackName: "recusandae",
                    MappingType: "EKS",
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: "ab",
                        AwsRegion: "quis",
                        Identifier: "veritatis",
                        Type: "Native",
                    },
                    ResourceGroupName: "perferendis",
                    ResourceName: "ipsam",
                    TerraformSourceName: "repellendus",
                },
            },
        },
        XAmzAlgorithm: "sapiente",
        XAmzContentSha256: "quo",
        XAmzCredential: "odit",
        XAmzDate: "at",
        XAmzSecurityToken: "at",
        XAmzSignature: "maiores",
        XAmzSignedHeaders: "molestiae",
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