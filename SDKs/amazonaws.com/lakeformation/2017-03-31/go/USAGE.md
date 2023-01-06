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
    
    req := operations.AddLfTagsToResourceRequest{
        Headers: operations.AddLfTagsToResourceHeaders{
            XAmzAlgorithm: "tempore",
            XAmzContentSha256: "veniam",
            XAmzCredential: "consequatur",
            XAmzDate: "corporis",
            XAmzSecurityToken: "est",
            XAmzSignature: "iure",
            XAmzSignedHeaders: "adipisci",
            XAmzTarget: "AWSLakeFormation.AddLFTagsToResource",
        },
        Request: shared.AddLfTagsToResourceRequest{
            CatalogID: "temporibus",
            LFTags: []shared.LfTagPair{
                shared.LfTagPair{
                    CatalogID: "non",
                    TagKey: "nulla",
                    TagValues: []string{
                        "reprehenderit",
                    },
                },
                shared.LfTagPair{
                    CatalogID: "quos",
                    TagKey: "saepe",
                    TagValues: []string{
                        "est",
                        "ab",
                    },
                },
            },
            Resource: shared.Resource{
                Catalog: map[string]interface{}{
                    "molestias": "voluptas",
                    "animi": "nesciunt",
                    "nihil": "aspernatur",
                },
                DataLocation: &shared.DataLocationResource{
                    CatalogID: "hic",
                    ResourceArn: "vitae",
                },
                Database: &shared.DatabaseResource{
                    CatalogID: "libero",
                    Name: "accusantium",
                },
                LFTag: &shared.LfTagKeyResource{
                    CatalogID: "facere",
                    TagKey: "pariatur",
                    TagValues: []string{
                        "doloremque",
                    },
                },
                LFTagPolicy: &shared.LfTagPolicyResource{
                    CatalogID: "architecto",
                    Expression: []shared.LfTag{
                        shared.LfTag{
                            TagKey: "est",
                            TagValues: []string{
                                "aut",
                                "voluptate",
                            },
                        },
                        shared.LfTag{
                            TagKey: "a",
                            TagValues: []string{
                                "dolore",
                                "assumenda",
                                "rerum",
                            },
                        },
                        shared.LfTag{
                            TagKey: "non",
                            TagValues: []string{
                                "nihil",
                                "labore",
                                "minima",
                            },
                        },
                    },
                    ResourceType: "DATABASE",
                },
                Table: &shared.TableResource{
                    CatalogID: "ipsam",
                    DatabaseName: "quia",
                    Name: "molestiae",
                    TableWildcard: map[string]interface{}{
                        "nostrum": "aut",
                        "ut": "neque",
                    },
                },
                TableWithColumns: &shared.TableWithColumnsResource{
                    CatalogID: "pariatur",
                    ColumnNames: []string{
                        "sed",
                        "aut",
                    },
                    ColumnWildcard: &shared.ColumnWildcard{
                        ExcludedColumnNames: []string{
                            "magnam",
                            "et",
                        },
                    },
                    DatabaseName: "et",
                    Name: "pariatur",
                },
            },
        },
    }
    
    res, err := s.AddLfTagsToResource(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddLFTagsToResourceResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->