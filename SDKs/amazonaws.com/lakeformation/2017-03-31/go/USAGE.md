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
            XAmzAlgorithm: "velit",
            XAmzContentSha256: "maiores",
            XAmzCredential: "sunt",
            XAmzDate: "et",
            XAmzSecurityToken: "est",
            XAmzSignature: "reprehenderit",
            XAmzSignedHeaders: "totam",
            XAmzTarget: "AWSLakeFormation.AddLFTagsToResource",
        },
        Request: shared.AddLfTagsToResourceRequest{
            CatalogID: "voluptas",
            LFTags: []shared.LfTagPair{
                shared.LfTagPair{
                    CatalogID: "consequatur",
                    TagKey: "veritatis",
                    TagValues: []string{
                        "et",
                        "nisi",
                        "cupiditate",
                    },
                },
            },
            Resource: shared.Resource{
                Catalog: map[string]interface{}{
                    "quos": "et",
                },
                DataLocation: &shared.DataLocationResource{
                    CatalogID: "perspiciatis",
                    ResourceArn: "quo",
                },
                Database: &shared.DatabaseResource{
                    CatalogID: "nulla",
                    Name: "modi",
                },
                LFTag: &shared.LfTagKeyResource{
                    CatalogID: "est",
                    TagKey: "impedit",
                    TagValues: []string{
                        "qui",
                        "ut",
                    },
                },
                LFTagPolicy: &shared.LfTagPolicyResource{
                    CatalogID: "possimus",
                    Expression: []shared.LfTag{
                        shared.LfTag{
                            TagKey: "iusto",
                            TagValues: []string{
                                "qui",
                            },
                        },
                    },
                    ResourceType: "TABLE",
                },
                Table: &shared.TableResource{
                    CatalogID: "totam",
                    DatabaseName: "at",
                    Name: "aliquam",
                    TableWildcard: map[string]interface{}{
                        "inventore": "esse",
                        "consectetur": "cumque",
                        "fugit": "qui",
                    },
                },
                TableWithColumns: &shared.TableWithColumnsResource{
                    CatalogID: "quia",
                    ColumnNames: []string{
                        "incidunt",
                    },
                    ColumnWildcard: &shared.ColumnWildcard{
                        ExcludedColumnNames: []string{
                            "neque",
                        },
                    },
                    DatabaseName: "alias",
                    Name: "tempore",
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