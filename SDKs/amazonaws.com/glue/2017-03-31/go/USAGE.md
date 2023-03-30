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

    req := operations.BatchCreatePartitionRequest{
        Headers: operations.BatchCreatePartitionHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSGlue.BatchCreatePartition",
        },
        Request: shared.BatchCreatePartitionRequest{
            CatalogID: "nihil",
            DatabaseName: "fuga",
            PartitionInputList: []shared.PartitionInput{
                shared.PartitionInput{
                    LastAccessTime: "2022-11-09T16:45:28.236Z",
                    LastAnalyzedTime: "2022-10-21T06:40:39.586Z",
                    Parameters: map[string]string{
                        "saepe": "inventore",
                        "sapiente": "enim",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        AdditionalLocations: []string{
                            "voluptatum",
                            "autem",
                        },
                        BucketColumns: []string{
                            "non",
                            "deleniti",
                            "similique",
                            "reprehenderit",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: "quo",
                                Name: "quasi",
                                Parameters: map[string]string{
                                    "dicta": "est",
                                    "voluptatem": "consequatur",
                                },
                                Type: "fugiat",
                            },
                            shared.Column{
                                Comment: "a",
                                Name: "omnis",
                                Parameters: map[string]string{
                                    "accusamus": "accusamus",
                                },
                                Type: "reiciendis",
                            },
                            shared.Column{
                                Comment: "rem",
                                Name: "quibusdam",
                                Parameters: map[string]string{
                                    "praesentium": "occaecati",
                                    "dolor": "soluta",
                                    "sed": "quisquam",
                                    "rerum": "culpa",
                                },
                                Type: "qui",
                            },
                            shared.Column{
                                Comment: "sed",
                                Name: "rerum",
                                Parameters: map[string]string{
                                    "occaecati": "odit",
                                    "esse": "rem",
                                    "voluptatem": "amet",
                                    "est": "id",
                                },
                                Type: "blanditiis",
                            },
                        },
                        Compressed: false,
                        InputFormat: "numquam",
                        Location: "similique",
                        NumberOfBuckets: 135218,
                        OutputFormat: "sit",
                        Parameters: map[string]string{
                            "et": "voluptatem",
                            "laborum": "modi",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: "et",
                                SchemaArn: "iure",
                                SchemaName: "earum",
                            },
                            SchemaVersionID: "ut",
                            SchemaVersionNumber: 681820,
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: "qui",
                            Parameters: map[string]string{
                                "laborum": "iusto",
                                "ut": "optio",
                            },
                            SerializationLibrary: "aspernatur",
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "ut",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "et": "libero",
                                "ipsum": "non",
                                "ea": "magni",
                            },
                            SkewedColumnValues: []string{
                                "ipsam",
                                "est",
                                "commodi",
                                "quia",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "eaque",
                                SortOrder: 438601,
                            },
                            shared.Order{
                                Column: "harum",
                                SortOrder: 988374,
                            },
                            shared.Order{
                                Column: "a",
                                SortOrder: 102044,
                            },
                        },
                        StoredAsSubDirectories: false,
                    },
                    Values: []string{
                        "non",
                        "quidem",
                        "neque",
                    },
                },
                shared.PartitionInput{
                    LastAccessTime: "2022-03-31T17:07:03.299Z",
                    LastAnalyzedTime: "2022-08-03T14:42:46.013Z",
                    Parameters: map[string]string{
                        "aliquam": "esse",
                        "totam": "voluptatum",
                        "et": "fuga",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        AdditionalLocations: []string{
                            "laboriosam",
                        },
                        BucketColumns: []string{
                            "cum",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: "ipsam",
                                Name: "eos",
                                Parameters: map[string]string{
                                    "adipisci": "hic",
                                    "consequatur": "distinctio",
                                    "qui": "perferendis",
                                    "aspernatur": "fuga",
                                },
                                Type: "quo",
                            },
                            shared.Column{
                                Comment: "tempore",
                                Name: "explicabo",
                                Parameters: map[string]string{
                                    "reiciendis": "debitis",
                                    "totam": "molestias",
                                    "reiciendis": "illo",
                                    "id": "qui",
                                },
                                Type: "quod",
                            },
                            shared.Column{
                                Comment: "sit",
                                Name: "eaque",
                                Parameters: map[string]string{
                                    "veniam": "reiciendis",
                                    "sed": "ea",
                                },
                                Type: "exercitationem",
                            },
                        },
                        Compressed: false,
                        InputFormat: "deleniti",
                        Location: "sed",
                        NumberOfBuckets: 688661,
                        OutputFormat: "voluptatem",
                        Parameters: map[string]string{
                            "esse": "sint",
                            "veritatis": "numquam",
                            "eligendi": "error",
                            "similique": "et",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: "ut",
                                SchemaArn: "molestias",
                                SchemaName: "cupiditate",
                            },
                            SchemaVersionID: "sint",
                            SchemaVersionNumber: 93940,
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: "et",
                            Parameters: map[string]string{
                                "vitae": "non",
                                "minima": "voluptatem",
                                "aut": "libero",
                            },
                            SerializationLibrary: "voluptas",
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "est",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "voluptas": "nostrum",
                                "voluptatem": "sit",
                                "in": "officia",
                            },
                            SkewedColumnValues: []string{
                                "voluptatem",
                                "dolorem",
                                "eum",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "consequatur",
                                SortOrder: 146441,
                            },
                            shared.Order{
                                Column: "cum",
                                SortOrder: 569618,
                            },
                        },
                        StoredAsSubDirectories: false,
                    },
                    Values: []string{
                        "nihil",
                        "id",
                    },
                },
                shared.PartitionInput{
                    LastAccessTime: "2022-12-14T16:53:16.922Z",
                    LastAnalyzedTime: "2022-04-12T19:10:12.416Z",
                    Parameters: map[string]string{
                        "dolore": "possimus",
                        "in": "qui",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        AdditionalLocations: []string{
                            "eveniet",
                            "sunt",
                            "rerum",
                        },
                        BucketColumns: []string{
                            "necessitatibus",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: "soluta",
                                Name: "ducimus",
                                Parameters: map[string]string{
                                    "nulla": "reiciendis",
                                    "cumque": "fugit",
                                },
                                Type: "ullam",
                            },
                            shared.Column{
                                Comment: "voluptas",
                                Name: "vel",
                                Parameters: map[string]string{
                                    "qui": "cum",
                                    "aut": "magnam",
                                },
                                Type: "culpa",
                            },
                            shared.Column{
                                Comment: "enim",
                                Name: "aut",
                                Parameters: map[string]string{
                                    "eligendi": "officia",
                                    "est": "distinctio",
                                    "et": "provident",
                                    "a": "incidunt",
                                },
                                Type: "facilis",
                            },
                            shared.Column{
                                Comment: "qui",
                                Name: "nihil",
                                Parameters: map[string]string{
                                    "id": "voluptatum",
                                    "sit": "rem",
                                    "corporis": "porro",
                                },
                                Type: "distinctio",
                            },
                        },
                        Compressed: false,
                        InputFormat: "quis",
                        Location: "nostrum",
                        NumberOfBuckets: 383462,
                        OutputFormat: "et",
                        Parameters: map[string]string{
                            "molestiae": "debitis",
                            "dolores": "aut",
                            "ullam": "explicabo",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: "similique",
                                SchemaArn: "ex",
                                SchemaName: "deserunt",
                            },
                            SchemaVersionID: "omnis",
                            SchemaVersionNumber: 574325,
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: "aperiam",
                            Parameters: map[string]string{
                                "ut": "et",
                                "voluptatem": "et",
                                "modi": "eveniet",
                            },
                            SerializationLibrary: "qui",
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "aspernatur",
                                "iusto",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "saepe": "quaerat",
                                "aut": "sed",
                                "nihil": "ducimus",
                                "aspernatur": "aspernatur",
                            },
                            SkewedColumnValues: []string{
                                "aliquid",
                                "quo",
                                "totam",
                                "repellat",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "voluptatem",
                                SortOrder: 904648,
                            },
                            shared.Order{
                                Column: "accusamus",
                                SortOrder: 37559,
                            },
                            shared.Order{
                                Column: "neque",
                                SortOrder: 508315,
                            },
                            shared.Order{
                                Column: "et",
                                SortOrder: 166847,
                            },
                        },
                        StoredAsSubDirectories: false,
                    },
                    Values: []string{
                        "omnis",
                    },
                },
            },
            TableName: "pariatur",
        },
    }

    ctx := context.Background()
    res, err := s.BatchCreatePartition(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCreatePartitionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->