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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSLakeFormation.AddLFTagsToResource",
        },
        Request: shared.AddLfTagsToResourceRequest{
            CatalogID: "fugit",
            LFTags: []shared.LfTagPair{
                shared.LfTagPair{
                    CatalogID: "nihil",
                    TagKey: "rerum",
                    TagValues: []string{
                        "debitis",
                        "voluptatum",
                        "et",
                    },
                },
            },
            Resource: shared.Resource{
                Catalog: map[string]interface{}{
                    "dolorem": "et",
                    "voluptate": "iste",
                    "vitae": "totam",
                },
                DataLocation: &shared.DataLocationResource{
                    CatalogID: "dolores",
                    ResourceArn: "illum",
                },
                Database: &shared.DatabaseResource{
                    CatalogID: "debitis",
                    Name: "vel",
                },
                LFTag: &shared.LfTagKeyResource{
                    CatalogID: "odio",
                    TagKey: "dolore",
                    TagValues: []string{
                        "aspernatur",
                        "accusantium",
                    },
                },
                LFTagPolicy: &shared.LfTagPolicyResource{
                    CatalogID: "totam",
                    Expression: []shared.LfTag{
                        shared.LfTag{
                            TagKey: "quis",
                            TagValues: []string{
                                "aut",
                                "odit",
                            },
                        },
                        shared.LfTag{
                            TagKey: "non",
                            TagValues: []string{
                                "omnis",
                            },
                        },
                    },
                    ResourceType: "DATABASE",
                },
                Table: &shared.TableResource{
                    CatalogID: "illo",
                    DatabaseName: "sed",
                    Name: "officiis",
                    TableWildcard: map[string]interface{}{
                        "consectetur": "nobis",
                        "odio": "qui",
                    },
                },
                TableWithColumns: &shared.TableWithColumnsResource{
                    CatalogID: "recusandae",
                    ColumnNames: []string{
                        "ipsum",
                        "eveniet",
                    },
                    ColumnWildcard: &shared.ColumnWildcard{
                        ExcludedColumnNames: []string{
                            "sint",
                            "inventore",
                        },
                    },
                    DatabaseName: "ut",
                    Name: "exercitationem",
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