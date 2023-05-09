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
    res, err := s.AddLFTagsToResource(ctx, operations.AddLFTagsToResourceRequest{
        RequestBody: operations.AddLFTagsToResourceRequestBody{
            CatalogID: sdk.String("corrupti"),
            LFTags: []shared.LFTagPair{
                shared.LFTagPair{
                    CatalogID: sdk.String("distinctio"),
                    TagKey: "quibusdam",
                    TagValues: []string{
                        "nulla",
                        "corrupti",
                        "illum",
                    },
                },
                shared.LFTagPair{
                    CatalogID: sdk.String("vel"),
                    TagKey: "error",
                    TagValues: []string{
                        "suscipit",
                        "iure",
                        "magnam",
                    },
                },
                shared.LFTagPair{
                    CatalogID: sdk.String("debitis"),
                    TagKey: "ipsa",
                    TagValues: []string{
                        "tempora",
                        "suscipit",
                        "molestiae",
                        "minus",
                    },
                },
            },
            Resource: operations.AddLFTagsToResourceRequestBodyResource{
                Catalog: map[string]interface{}{
                    "voluptatum": "iusto",
                    "excepturi": "nisi",
                    "recusandae": "temporibus",
                    "ab": "quis",
                },
                DataCellsFilter: &shared.DataCellsFilterResource{
                    DatabaseName: sdk.String("veritatis"),
                    Name: sdk.String("Christopher Hills"),
                    TableCatalogID: sdk.String("quo"),
                    TableName: sdk.String("odit"),
                },
                DataLocation: &shared.DataLocationResource{
                    CatalogID: sdk.String("at"),
                    ResourceArn: "at",
                },
                Database: &shared.DatabaseResource{
                    CatalogID: sdk.String("maiores"),
                    Name: "Bernadette Schmidt",
                },
                LFTag: &shared.LFTagKeyResource{
                    CatalogID: sdk.String("porro"),
                    TagKey: "dolorum",
                    TagValues: []string{
                        "nam",
                    },
                },
                LFTagPolicy: &shared.LFTagPolicyResource{
                    CatalogID: sdk.String("officia"),
                    Expression: []shared.LFTag{
                        shared.LFTag{
                            TagKey: "fugit",
                            TagValues: []string{
                                "hic",
                                "optio",
                                "totam",
                            },
                        },
                        shared.LFTag{
                            TagKey: "beatae",
                            TagValues: []string{
                                "molestiae",
                                "modi",
                            },
                        },
                        shared.LFTag{
                            TagKey: "qui",
                            TagValues: []string{
                                "cum",
                                "esse",
                                "ipsum",
                                "excepturi",
                            },
                        },
                    },
                    ResourceType: shared.ResourceTypeEnumDatabase,
                },
                Table: &shared.TableResource{
                    CatalogID: sdk.String("perferendis"),
                    DatabaseName: "ad",
                    Name: sdk.String("Louis Moore"),
                    TableWildcard: map[string]interface{}{
                        "hic": "saepe",
                        "fuga": "in",
                    },
                },
                TableWithColumns: &shared.TableWithColumnsResource{
                    CatalogID: sdk.String("corporis"),
                    ColumnNames: []string{
                        "iure",
                        "saepe",
                        "quidem",
                    },
                    ColumnWildcard: &shared.ColumnWildcard{
                        ExcludedColumnNames: []string{
                            "ipsa",
                        },
                    },
                    DatabaseName: "reiciendis",
                    Name: "Shaun Osinski",
                },
            },
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddLFTagsToResourceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->