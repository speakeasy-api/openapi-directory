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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.AddDraftAppVersionResourceMappingsRequestBody{
            AppArn: "illum",
            ResourceMappings: []shared.ResourceMapping{
                shared.ResourceMapping{
                    AppRegistryAppName: "error",
                    EksSourceName: "deserunt",
                    LogicalStackName: "suscipit",
                    MappingType: "AppRegistryApp",
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: "magnam",
                        AwsRegion: "debitis",
                        Identifier: "ipsa",
                        Type: "Native",
                    },
                    ResourceGroupName: "tempora",
                    ResourceName: "suscipit",
                    TerraformSourceName: "molestiae",
                },
                shared.ResourceMapping{
                    AppRegistryAppName: "minus",
                    EksSourceName: "placeat",
                    LogicalStackName: "voluptatum",
                    MappingType: "AppRegistryApp",
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: "excepturi",
                        AwsRegion: "nisi",
                        Identifier: "recusandae",
                        Type: "Native",
                    },
                    ResourceGroupName: "ab",
                    ResourceName: "quis",
                    TerraformSourceName: "veritatis",
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