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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AWSGlue.BatchCreatePartition",
        },
        Request: shared.BatchCreatePartitionRequest{
            CatalogID: "illum",
            DatabaseName: "vel",
            PartitionInputList: []shared.PartitionInput{
                shared.PartitionInput{
                    LastAccessTime: "2022-03-26T09:37:56.283Z",
                    LastAnalyzedTime: "2022-09-14T09:35:47.986Z",
                    Parameters: map[string]string{
                        "ipsa": "delectus",
                        "tempora": "suscipit",
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        AdditionalLocations: []string{
                            "excepturi",
                            "nisi",
                        },
                        BucketColumns: []string{
                            "temporibus",
                            "ab",
                            "quis",
                            "veritatis",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: "perferendis",
                                Name: "ipsam",
                                Parameters: map[string]string{
                                    "sapiente": "quo",
                                    "odit": "at",
                                    "at": "maiores",
                                    "molestiae": "quod",
                                },
                                Type: "quod",
                            },
                            shared.Column{
                                Comment: "esse",
                                Name: "totam",
                                Parameters: map[string]string{
                                    "dolorum": "dicta",
                                    "nam": "officia",
                                    "occaecati": "fugit",
                                    "deleniti": "hic",
                                },
                                Type: "optio",
                            },
                            shared.Column{
                                Comment: "totam",
                                Name: "beatae",
                                Parameters: map[string]string{
                                    "molestiae": "modi",
                                    "qui": "impedit",
                                },
                                Type: "cum",
                            },
                        },
                        Compressed: false,
                        InputFormat: "esse",
                        Location: "ipsum",
                        NumberOfBuckets: 568434,
                        OutputFormat: "aspernatur",
                        Parameters: map[string]string{
                            "ad": "natus",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: "sed",
                                SchemaArn: "iste",
                                SchemaName: "dolor",
                            },
                            SchemaVersionID: "natus",
                            SchemaVersionNumber: 386489,
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: "hic",
                            Parameters: map[string]string{
                                "fuga": "in",
                                "corporis": "iste",
                                "iure": "saepe",
                                "quidem": "architecto",
                            },
                            SerializationLibrary: "ipsa",
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "est",
                                "mollitia",
                                "laborum",
                                "dolores",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "corporis": "explicabo",
                            },
                            SkewedColumnValues: []string{
                                "enim",
                                "omnis",
                                "nemo",
                                "minima",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "accusantium",
                                SortOrder: 438601,
                            },
                            shared.Order{
                                Column: "culpa",
                                SortOrder: 988374,
                            },
                            shared.Order{
                                Column: "sapiente",
                                SortOrder: 102044,
                            },
                        },
                        StoredAsSubDirectories: false,
                    },
                    Values: []string{
                        "dolorem",
                        "culpa",
                        "consequuntur",
                    },
                },
                shared.PartitionInput{
                    LastAccessTime: "2021-01-15T20:18:47.519Z",
                    LastAnalyzedTime: "2022-06-30T02:19:51.375Z",
                    Parameters: map[string]string{
                        "quam": "molestiae",
                        "velit": "error",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        AdditionalLocations: []string{
                            "quis",
                        },
                        BucketColumns: []string{
                            "laborum",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: "enim",
                                Name: "odit",
                                Parameters: map[string]string{
                                    "sequi": "tenetur",
                                    "ipsam": "id",
                                    "possimus": "aut",
                                    "quasi": "error",
                                },
                                Type: "temporibus",
                            },
                            shared.Column{
                                Comment: "laborum",
                                Name: "quasi",
                                Parameters: map[string]string{
                                    "voluptatibus": "vero",
                                    "nihil": "praesentium",
                                    "voluptatibus": "ipsa",
                                    "omnis": "voluptate",
                                },
                                Type: "cum",
                            },
                            shared.Column{
                                Comment: "perferendis",
                                Name: "doloremque",
                                Parameters: map[string]string{
                                    "ut": "maiores",
                                    "dicta": "corporis",
                                },
                                Type: "dolore",
                            },
                        },
                        Compressed: false,
                        InputFormat: "iusto",
                        Location: "dicta",
                        NumberOfBuckets: 688661,
                        OutputFormat: "enim",
                        Parameters: map[string]string{
                            "commodi": "repudiandae",
                            "quae": "ipsum",
                            "quidem": "molestias",
                            "excepturi": "pariatur",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: "modi",
                                SchemaArn: "praesentium",
                                SchemaName: "rem",
                            },
                            SchemaVersionID: "voluptates",
                            SchemaVersionNumber: 93940,
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: "repudiandae",
                            Parameters: map[string]string{
                                "veritatis": "itaque",
                                "incidunt": "enim",
                                "consequatur": "est",
                            },
                            SerializationLibrary: "quibusdam",
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "deserunt",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "quibusdam": "labore",
                                "modi": "qui",
                                "aliquid": "cupiditate",
                            },
                            SkewedColumnValues: []string{
                                "perferendis",
                                "magni",
                                "assumenda",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "alias",
                                SortOrder: 146441,
                            },
                            shared.Order{
                                Column: "dolorum",
                                SortOrder: 569618,
                            },
                        },
                        StoredAsSubDirectories: false,
                    },
                    Values: []string{
                        "facilis",
                        "tempore",
                    },
                },
                shared.PartitionInput{
                    LastAccessTime: "2022-01-14T19:13:42.009Z",
                    LastAnalyzedTime: "2022-10-02T04:55:20.234Z",
                    Parameters: map[string]string{
                        "sint": "aliquid",
                        "provident": "necessitatibus",
                        "sint": "officia",
                        "dolor": "debitis",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        AdditionalLocations: []string{
                            "dolorum",
                            "in",
                            "in",
                            "illum",
                        },
                        BucketColumns: []string{
                            "rerum",
                            "dicta",
                            "magnam",
                            "cumque",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: "ea",
                                Name: "aliquid",
                                Parameters: map[string]string{
                                    "accusamus": "non",
                                    "occaecati": "enim",
                                    "accusamus": "delectus",
                                },
                                Type: "quidem",
                            },
                            shared.Column{
                                Comment: "provident",
                                Name: "nam",
                                Parameters: map[string]string{
                                    "blanditiis": "deleniti",
                                    "sapiente": "amet",
                                    "deserunt": "nisi",
                                },
                                Type: "vel",
                            },
                            shared.Column{
                                Comment: "natus",
                                Name: "omnis",
                                Parameters: map[string]string{
                                    "perferendis": "nihil",
                                    "magnam": "distinctio",
                                },
                                Type: "id",
                            },
                            shared.Column{
                                Comment: "labore",
                                Name: "labore",
                                Parameters: map[string]string{
                                    "natus": "nobis",
                                    "eum": "vero",
                                },
                                Type: "aspernatur",
                            },
                        },
                        Compressed: false,
                        InputFormat: "architecto",
                        Location: "magnam",
                        NumberOfBuckets: 92373,
                        OutputFormat: "excepturi",
                        Parameters: map[string]string{
                            "provident": "quos",
                            "sint": "accusantium",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: "mollitia",
                                SchemaArn: "reiciendis",
                                SchemaName: "mollitia",
                            },
                            SchemaVersionID: "ad",
                            SchemaVersionNumber: 431418,
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: "dolor",
                            Parameters: map[string]string{
                                "odit": "nemo",
                                "quasi": "iure",
                                "doloribus": "debitis",
                                "eius": "maxime",
                            },
                            SerializationLibrary: "deleniti",
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "in",
                                "architecto",
                                "architecto",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "ullam": "expedita",
                                "nihil": "repellat",
                                "quibusdam": "sed",
                                "saepe": "pariatur",
                            },
                            SkewedColumnValues: []string{
                                "consequuntur",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "natus",
                                SortOrder: 166847,
                            },
                            shared.Order{
                                Column: "sunt",
                                SortOrder: 779051,
                            },
                            shared.Order{
                                Column: "illum",
                                SortOrder: 864934,
                            },
                        },
                        StoredAsSubDirectories: false,
                    },
                    Values: []string{
                        "ea",
                        "excepturi",
                        "odit",
                        "ea",
                    },
                },
            },
            TableName: "accusantium",
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