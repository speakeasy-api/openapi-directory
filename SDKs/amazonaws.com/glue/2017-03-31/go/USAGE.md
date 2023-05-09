<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BatchCreatePartition(ctx, operations.BatchCreatePartitionRequest{
        BatchCreatePartitionRequest: shared.BatchCreatePartitionRequest{
            CatalogID: sdk.String("corrupti"),
            DatabaseName: "provident",
            PartitionInputList: []shared.PartitionInput{
                shared.PartitionInput{
                    LastAccessTime: types.MustTimeFromString("2021-03-11T23:22:42.658Z"),
                    LastAnalyzedTime: types.MustTimeFromString("2021-05-14T08:28:11.899Z"),
                    Parameters: map[string]string{
                        "vel": "error",
                        "deserunt": "suscipit",
                        "iure": "magnam",
                        "debitis": "ipsa",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        AdditionalLocations: []string{
                            "tempora",
                            "suscipit",
                            "molestiae",
                            "minus",
                        },
                        BucketColumns: []string{
                            "voluptatum",
                            "iusto",
                            "excepturi",
                            "nisi",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: sdk.String("temporibus"),
                                Name: "Erica Bogisich III",
                                Parameters: map[string]string{
                                    "sapiente": "quo",
                                    "odit": "at",
                                    "at": "maiores",
                                    "molestiae": "quod",
                                },
                                Type: sdk.String("quod"),
                            },
                            shared.Column{
                                Comment: sdk.String("esse"),
                                Name: "Miss Lowell Parisian",
                                Parameters: map[string]string{
                                    "fugit": "deleniti",
                                    "hic": "optio",
                                    "totam": "beatae",
                                },
                                Type: sdk.String("commodi"),
                            },
                            shared.Column{
                                Comment: sdk.String("molestiae"),
                                Name: "Norma Ryan",
                                Parameters: map[string]string{
                                    "excepturi": "aspernatur",
                                },
                                Type: sdk.String("perferendis"),
                            },
                            shared.Column{
                                Comment: sdk.String("ad"),
                                Name: "Louis Moore",
                                Parameters: map[string]string{
                                    "hic": "saepe",
                                    "fuga": "in",
                                },
                                Type: sdk.String("corporis"),
                            },
                        },
                        Compressed: sdk.Bool(false),
                        InputFormat: sdk.String("iste"),
                        Location: sdk.String("iure"),
                        NumberOfBuckets: sdk.Int64(902349),
                        OutputFormat: sdk.String("quidem"),
                        Parameters: map[string]string{
                            "ipsa": "reiciendis",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: sdk.String("est"),
                                SchemaArn: sdk.String("mollitia"),
                                SchemaName: sdk.String("laborum"),
                            },
                            SchemaVersionID: sdk.String("dolores"),
                            SchemaVersionNumber: sdk.Int64(210382),
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: sdk.String("Rose Rolfson"),
                            Parameters: map[string]string{
                                "minima": "excepturi",
                                "accusantium": "iure",
                            },
                            SerializationLibrary: sdk.String("culpa"),
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "sapiente",
                                "architecto",
                                "mollitia",
                                "dolorem",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "consequuntur": "repellat",
                                "mollitia": "occaecati",
                                "numquam": "commodi",
                            },
                            SkewedColumnValues: []string{
                                "molestiae",
                                "velit",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "quia",
                                SortOrder: 338007,
                            },
                            shared.Order{
                                Column: "vitae",
                                SortOrder: 674752,
                            },
                            shared.Order{
                                Column: "animi",
                                SortOrder: 317202,
                            },
                        },
                        StoredAsSubDirectories: sdk.Bool(false),
                    },
                    Values: []string{
                        "quo",
                    },
                },
                shared.PartitionInput{
                    LastAccessTime: types.MustTimeFromString("2022-01-19T09:45:27.272Z"),
                    LastAnalyzedTime: types.MustTimeFromString("2022-05-04T04:15:52.352Z"),
                    Parameters: map[string]string{
                        "aut": "quasi",
                        "error": "temporibus",
                        "laborum": "quasi",
                        "reiciendis": "voluptatibus",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        AdditionalLocations: []string{
                            "nihil",
                            "praesentium",
                            "voluptatibus",
                            "ipsa",
                        },
                        BucketColumns: []string{
                            "voluptate",
                            "cum",
                            "perferendis",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: sdk.String("reprehenderit"),
                                Name: "Shawna Carter",
                                Parameters: map[string]string{
                                    "dicta": "harum",
                                    "enim": "accusamus",
                                },
                                Type: sdk.String("commodi"),
                            },
                        },
                        Compressed: sdk.Bool(false),
                        InputFormat: sdk.String("repudiandae"),
                        Location: sdk.String("quae"),
                        NumberOfBuckets: sdk.Int64(216822),
                        OutputFormat: sdk.String("quidem"),
                        Parameters: map[string]string{
                            "excepturi": "pariatur",
                            "modi": "praesentium",
                            "rem": "voluptates",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: sdk.String("quasi"),
                                SchemaArn: sdk.String("repudiandae"),
                                SchemaName: sdk.String("sint"),
                            },
                            SchemaVersionID: sdk.String("veritatis"),
                            SchemaVersionNumber: sdk.Int64(929297),
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: sdk.String("Erin Altenwerth"),
                            Parameters: map[string]string{
                                "deserunt": "distinctio",
                            },
                            SerializationLibrary: sdk.String("quibusdam"),
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "modi",
                                "qui",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "cupiditate": "quos",
                                "perferendis": "magni",
                            },
                            SkewedColumnValues: []string{
                                "ipsam",
                                "alias",
                                "fugit",
                                "dolorum",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "tempora",
                                SortOrder: 703737,
                            },
                            shared.Order{
                                Column: "tempore",
                                SortOrder: 288476,
                            },
                            shared.Order{
                                Column: "delectus",
                                SortOrder: 433288,
                            },
                        },
                        StoredAsSubDirectories: sdk.Bool(false),
                    },
                    Values: []string{
                        "eligendi",
                    },
                },
                shared.PartitionInput{
                    LastAccessTime: types.MustTimeFromString("2022-03-17T20:21:28.792Z"),
                    LastAnalyzedTime: types.MustTimeFromString("2021-03-17T21:24:26.606Z"),
                    Parameters: map[string]string{
                        "officia": "dolor",
                        "debitis": "a",
                        "dolorum": "in",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        AdditionalLocations: []string{
                            "illum",
                            "maiores",
                        },
                        BucketColumns: []string{
                            "dicta",
                            "magnam",
                            "cumque",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: sdk.String("ea"),
                                Name: "Kayla Thompson",
                                Parameters: map[string]string{
                                    "accusamus": "delectus",
                                    "quidem": "provident",
                                },
                                Type: sdk.String("nam"),
                            },
                            shared.Column{
                                Comment: sdk.String("id"),
                                Name: "Jaime Will",
                                Parameters: map[string]string{
                                    "vel": "natus",
                                    "omnis": "molestiae",
                                },
                                Type: sdk.String("perferendis"),
                            },
                            shared.Column{
                                Comment: sdk.String("nihil"),
                                Name: "Verna Olson",
                                Parameters: map[string]string{
                                    "natus": "nobis",
                                    "eum": "vero",
                                },
                                Type: sdk.String("aspernatur"),
                            },
                            shared.Column{
                                Comment: sdk.String("architecto"),
                                Name: "Frances Marks",
                                Parameters: map[string]string{
                                    "sint": "accusantium",
                                    "mollitia": "reiciendis",
                                    "mollitia": "ad",
                                },
                                Type: sdk.String("eum"),
                            },
                        },
                        Compressed: sdk.Bool(false),
                        InputFormat: sdk.String("dolor"),
                        Location: sdk.String("necessitatibus"),
                        NumberOfBuckets: sdk.Int64(141264),
                        OutputFormat: sdk.String("nemo"),
                        Parameters: map[string]string{
                            "iure": "doloribus",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: sdk.String("debitis"),
                                SchemaArn: sdk.String("eius"),
                                SchemaName: sdk.String("maxime"),
                            },
                            SchemaVersionID: sdk.String("deleniti"),
                            SchemaVersionNumber: sdk.Int64(703889),
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: sdk.String("Alice Bradtke"),
                            Parameters: map[string]string{
                                "nihil": "repellat",
                                "quibusdam": "sed",
                                "saepe": "pariatur",
                            },
                            SerializationLibrary: sdk.String("accusantium"),
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "praesentium",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "magni": "sunt",
                                "quo": "illum",
                                "pariatur": "maxime",
                            },
                            SkewedColumnValues: []string{
                                "excepturi",
                                "odit",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "accusantium",
                                SortOrder: 69167,
                            },
                            shared.Order{
                                Column: "maiores",
                                SortOrder: 697429,
                            },
                        },
                        StoredAsSubDirectories: sdk.Bool(false),
                    },
                    Values: []string{
                        "voluptate",
                        "autem",
                    },
                },
            },
            TableName: "nam",
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.BatchCreatePartitionXAmzTargetEnumAwsGlueBatchCreatePartition,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCreatePartitionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->