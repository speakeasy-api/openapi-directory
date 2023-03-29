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

    req := operations.AddLFTagsToResourceRequest{
        Headers: operations.AddLFTagsToResourceHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.AddLFTagsToResourceRequestBody{
            CatalogID: "nulla",
            LFTags: []shared.LFTagPair{
                shared.LFTagPair{
                    CatalogID: "fuga",
                    TagKey: "facilis",
                    TagValues: []string{
                        "iusto",
                        "ullam",
                    },
                },
                shared.LFTagPair{
                    CatalogID: "saepe",
                    TagKey: "inventore",
                    TagValues: []string{
                        "enim",
                        "eum",
                        "voluptatum",
                        "autem",
                    },
                },
            },
            Resource: operations.AddLFTagsToResourceRequestBodyResource{
                Catalog: map[string]interface{}{
                    "non": "deleniti",
                    "similique": "reprehenderit",
                    "molestiae": "quo",
                    "quasi": "laboriosam",
                },
                DataCellsFilter: &shared.DataCellsFilterResource{
                    DatabaseName: "dicta",
                    Name: "est",
                    TableCatalogID: "voluptatem",
                    TableName: "consequatur",
                },
                DataLocation: &shared.DataLocationResource{
                    CatalogID: "fugiat",
                    ResourceArn: "a",
                },
                Database: &shared.DatabaseResource{
                    CatalogID: "omnis",
                    Name: "eos",
                },
                LFTag: &shared.LFTagKeyResource{
                    CatalogID: "accusamus",
                    TagKey: "accusamus",
                    TagValues: []string{
                        "rem",
                        "quibusdam",
                        "et",
                        "praesentium",
                    },
                },
                LFTagPolicy: &shared.LFTagPolicyResource{
                    CatalogID: "occaecati",
                    Expression: []shared.LFTag{
                        shared.LFTag{
                            TagKey: "soluta",
                            TagValues: []string{
                                "quisquam",
                            },
                        },
                        shared.LFTag{
                            TagKey: "rerum",
                            TagValues: []string{
                                "qui",
                                "sed",
                                "rerum",
                            },
                        },
                        shared.LFTag{
                            TagKey: "possimus",
                            TagValues: []string{
                                "odit",
                                "esse",
                                "rem",
                            },
                        },
                        shared.LFTag{
                            TagKey: "voluptatem",
                            TagValues: []string{
                                "est",
                            },
                        },
                    },
                    ResourceType: "TABLE",
                },
                Table: &shared.TableResource{
                    CatalogID: "blanditiis",
                    DatabaseName: "numquam",
                    Name: "similique",
                    TableWildcard: map[string]interface{}{
                        "sit": "quia",
                    },
                },
                TableWithColumns: &shared.TableWithColumnsResource{
                    CatalogID: "et",
                    ColumnNames: []string{
                        "laborum",
                    },
                    ColumnWildcard: &shared.ColumnWildcard{
                        ExcludedColumnNames: []string{
                            "et",
                        },
                    },
                    DatabaseName: "iure",
                    Name: "earum",
                },
            },
        },
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