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
                    LastAccessTime: "2022-08-06T08:21:14.935Z",
                    LastAnalyzedTime: "2022-11-09T19:12:09.937Z",
                    Parameters: map[string]string{
                        "magnam": "debitis",
                        "ipsa": "delectus",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        AdditionalLocations: []string{
                            "suscipit",
                            "molestiae",
                        },
                        BucketColumns: []string{
                            "placeat",
                            "voluptatum",
                            "iusto",
                            "excepturi",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: "recusandae",
                                Name: "temporibus",
                                Parameters: map[string]string{
                                    "quis": "veritatis",
                                },
                                Type: "deserunt",
                            },
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
                        },
                        Compressed: false,
                        InputFormat: "esse",
                        Location: "totam",
                        NumberOfBuckets: 780529,
                        OutputFormat: "dolorum",
                        Parameters: map[string]string{
                            "nam": "officia",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: "occaecati",
                                SchemaArn: "fugit",
                                SchemaName: "deleniti",
                            },
                            SchemaVersionID: "hic",
                            SchemaVersionNumber: 758616,
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: "totam",
                            Parameters: map[string]string{
                                "commodi": "molestiae",
                            },
                            SerializationLibrary: "modi",
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "impedit",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "esse": "ipsum",
                                "excepturi": "aspernatur",
                                "perferendis": "ad",
                            },
                            SkewedColumnValues: []string{
                                "sed",
                                "iste",
                                "dolor",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "laboriosam",
                                SortOrder: 943749,
                            },
                            shared.Order{
                                Column: "saepe",
                                SortOrder: 681820,
                            },
                            shared.Order{
                                Column: "in",
                                SortOrder: 359508,
                            },
                        },
                        StoredAsSubDirectories: false,
                    },
                    Values: []string{
                        "iure",
                        "saepe",
                        "quidem",
                    },
                },
                shared.PartitionInput{
                    LastAccessTime: "2023-02-21T20:41:26.047Z",
                    LastAnalyzedTime: "2023-03-08T02:48:40.862Z",
                    Parameters: map[string]string{
                        "est": "mollitia",
                        "laborum": "dolores",
                        "dolorem": "corporis",
                        "explicabo": "nobis",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        AdditionalLocations: []string{
                            "omnis",
                            "nemo",
                        },
                        BucketColumns: []string{
                            "excepturi",
                            "accusantium",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: "culpa",
                                Name: "doloribus",
                                Parameters: map[string]string{
                                    "architecto": "mollitia",
                                    "dolorem": "culpa",
                                    "consequuntur": "repellat",
                                    "mollitia": "occaecati",
                                },
                                Type: "numquam",
                            },
                            shared.Column{
                                Comment: "commodi",
                                Name: "quam",
                                Parameters: map[string]string{
                                    "velit": "error",
                                    "quia": "quis",
                                },
                                Type: "vitae",
                            },
                        },
                        Compressed: false,
                        InputFormat: "laborum",
                        Location: "animi",
                        NumberOfBuckets: 317202,
                        OutputFormat: "odit",
                        Parameters: map[string]string{
                            "sequi": "tenetur",
                            "ipsam": "id",
                            "possimus": "aut",
                            "quasi": "error",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: "temporibus",
                                SchemaArn: "laborum",
                                SchemaName: "quasi",
                            },
                            SchemaVersionID: "reiciendis",
                            SchemaVersionNumber: 976460,
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: "vero",
                            Parameters: map[string]string{
                                "praesentium": "voluptatibus",
                                "ipsa": "omnis",
                            },
                            SerializationLibrary: "voluptate",
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "perferendis",
                                "doloremque",
                                "reprehenderit",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "maiores": "dicta",
                                "corporis": "dolore",
                            },
                            SkewedColumnValues: []string{
                                "dicta",
                                "harum",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "accusamus",
                                SortOrder: 414263,
                            },
                            shared.Order{
                                Column: "repudiandae",
                                SortOrder: 64147,
                            },
                        },
                        StoredAsSubDirectories: false,
                    },
                    Values: []string{
                        "quidem",
                    },
                },
                shared.PartitionInput{
                    LastAccessTime: "2022-09-04T19:19:55.621Z",
                    LastAnalyzedTime: "2022-09-04T06:57:28.411Z",
                    Parameters: map[string]string{
                        "modi": "praesentium",
                        "rem": "voluptates",
                        "quasi": "repudiandae",
                        "sint": "veritatis",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        AdditionalLocations: []string{
                            "incidunt",
                            "enim",
                            "consequatur",
                            "est",
                        },
                        BucketColumns: []string{
                            "explicabo",
                            "deserunt",
                            "distinctio",
                            "quibusdam",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: "modi",
                                Name: "qui",
                                Parameters: map[string]string{
                                    "cupiditate": "quos",
                                    "perferendis": "magni",
                                },
                                Type: "assumenda",
                            },
                            shared.Column{
                                Comment: "ipsam",
                                Name: "alias",
                                Parameters: map[string]string{
                                    "dolorum": "excepturi",
                                },
                                Type: "tempora",
                            },
                        },
                        Compressed: false,
                        InputFormat: "facilis",
                        Location: "tempore",
                        NumberOfBuckets: 288476,
                        OutputFormat: "delectus",
                        Parameters: map[string]string{
                            "non": "eligendi",
                            "sint": "aliquid",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: "provident",
                                SchemaArn: "necessitatibus",
                                SchemaName: "sint",
                            },
                            SchemaVersionID: "officia",
                            SchemaVersionNumber: 223081,
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: "debitis",
                            Parameters: map[string]string{
                                "dolorum": "in",
                                "in": "illum",
                                "maiores": "rerum",
                                "dicta": "magnam",
                            },
                            SerializationLibrary: "cumque",
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "ea",
                                "aliquid",
                                "laborum",
                                "accusamus",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "occaecati": "enim",
                            },
                            SkewedColumnValues: []string{
                                "delectus",
                                "quidem",
                                "provident",
                                "nam",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "blanditiis",
                                SortOrder: 533206,
                            },
                            shared.Order{
                                Column: "sapiente",
                                SortOrder: 230533,
                            },
                            shared.Order{
                                Column: "deserunt",
                                SortOrder: 394869,
                            },
                        },
                        StoredAsSubDirectories: false,
                    },
                    Values: []string{
                        "natus",
                        "omnis",
                    },
                },
            },
            TableName: "molestiae",
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