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

    req := operations.AddLFTagsToResourceRequest{
        RequestBody: operations.AddLFTagsToResourceRequestBody{
            CatalogID: "corrupti",
            LFTags: []shared.LFTagPair{
                shared.LFTagPair{
                    CatalogID: "distinctio",
                    TagKey: "quibusdam",
                    TagValues: []string{
                        "nulla",
                        "corrupti",
                        "illum",
                    },
                },
                shared.LFTagPair{
                    CatalogID: "vel",
                    TagKey: "error",
                    TagValues: []string{
                        "suscipit",
                        "iure",
                        "magnam",
                    },
                },
                shared.LFTagPair{
                    CatalogID: "debitis",
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
                    DatabaseName: "veritatis",
                    Name: "deserunt",
                    TableCatalogID: "perferendis",
                    TableName: "ipsam",
                },
                DataLocation: &shared.DataLocationResource{
                    CatalogID: "repellendus",
                    ResourceArn: "sapiente",
                },
                Database: &shared.DatabaseResource{
                    CatalogID: "quo",
                    Name: "odit",
                },
                LFTag: &shared.LFTagKeyResource{
                    CatalogID: "at",
                    TagKey: "at",
                    TagValues: []string{
                        "molestiae",
                        "quod",
                        "quod",
                        "esse",
                    },
                },
                LFTagPolicy: &shared.LFTagPolicyResource{
                    CatalogID: "totam",
                    Expression: []shared.LFTag{
                        shared.LFTag{
                            TagKey: "dolorum",
                            TagValues: []string{
                                "nam",
                            },
                        },
                        shared.LFTag{
                            TagKey: "officia",
                            TagValues: []string{
                                "fugit",
                                "deleniti",
                                "hic",
                            },
                        },
                        shared.LFTag{
                            TagKey: "optio",
                            TagValues: []string{
                                "beatae",
                                "commodi",
                                "molestiae",
                            },
                        },
                        shared.LFTag{
                            TagKey: "modi",
                            TagValues: []string{
                                "impedit",
                            },
                        },
                    },
                    ResourceType: "TABLE",
                },
                Table: &shared.TableResource{
                    CatalogID: "esse",
                    DatabaseName: "ipsum",
                    Name: "excepturi",
                    TableWildcard: map[string]interface{}{
                        "perferendis": "ad",
                    },
                },
                TableWithColumns: &shared.TableWithColumnsResource{
                    CatalogID: "natus",
                    ColumnNames: []string{
                        "iste",
                    },
                    ColumnWildcard: &shared.ColumnWildcard{
                        ExcludedColumnNames: []string{
                            "natus",
                        },
                    },
                    DatabaseName: "laboriosam",
                    Name: "hic",
                },
            },
        },
        XAmzAlgorithm: "saepe",
        XAmzContentSha256: "fuga",
        XAmzCredential: "in",
        XAmzDate: "corporis",
        XAmzSecurityToken: "iste",
        XAmzSignature: "iure",
        XAmzSignedHeaders: "saepe",
    }

    ctx := context.Background()
    res, err := s.AddLFTagsToResource(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddLFTagsToResourceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->