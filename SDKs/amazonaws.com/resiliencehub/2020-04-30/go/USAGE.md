<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AddDraftAppVersionResourceMappings(ctx, operations.AddDraftAppVersionResourceMappingsRequest{
        RequestBody: operations.AddDraftAppVersionResourceMappingsRequestBody{
            AppArn: "corrupti",
            ResourceMappings: []shared.ResourceMapping{
                shared.ResourceMapping{
                    AppRegistryAppName: sdk.String("distinctio"),
                    EksSourceName: sdk.String("quibusdam"),
                    LogicalStackName: sdk.String("unde"),
                    MappingType: shared.ResourceMappingTypeEnumEks,
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: sdk.String("corrupti"),
                        AwsRegion: sdk.String("illum"),
                        Identifier: "vel",
                        Type: shared.PhysicalIdentifierTypeEnumNative,
                    },
                    ResourceGroupName: sdk.String("deserunt"),
                    ResourceName: sdk.String("suscipit"),
                    TerraformSourceName: sdk.String("iure"),
                },
                shared.ResourceMapping{
                    AppRegistryAppName: sdk.String("magnam"),
                    EksSourceName: sdk.String("debitis"),
                    LogicalStackName: sdk.String("ipsa"),
                    MappingType: shared.ResourceMappingTypeEnumEks,
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: sdk.String("tempora"),
                        AwsRegion: sdk.String("suscipit"),
                        Identifier: "molestiae",
                        Type: shared.PhysicalIdentifierTypeEnumNative,
                    },
                    ResourceGroupName: sdk.String("placeat"),
                    ResourceName: sdk.String("voluptatum"),
                    TerraformSourceName: sdk.String("iusto"),
                },
                shared.ResourceMapping{
                    AppRegistryAppName: sdk.String("excepturi"),
                    EksSourceName: sdk.String("nisi"),
                    LogicalStackName: sdk.String("recusandae"),
                    MappingType: shared.ResourceMappingTypeEnumEks,
                    PhysicalResourceID: shared.PhysicalResourceID{
                        AwsAccountID: sdk.String("ab"),
                        AwsRegion: sdk.String("quis"),
                        Identifier: "veritatis",
                        Type: shared.PhysicalIdentifierTypeEnumNative,
                    },
                    ResourceGroupName: sdk.String("perferendis"),
                    ResourceName: sdk.String("ipsam"),
                    TerraformSourceName: sdk.String("repellendus"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddDraftAppVersionResourceMappingsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->