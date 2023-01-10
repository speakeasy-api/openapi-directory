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
    
    req := operations.BatchCreatePartitionRequest{
        Headers: operations.BatchCreatePartitionHeaders{
            XAmzAlgorithm: "molestias",
            XAmzContentSha256: "dicta",
            XAmzCredential: "voluptatum",
            XAmzDate: "numquam",
            XAmzSecurityToken: "et",
            XAmzSignature: "ducimus",
            XAmzSignedHeaders: "ducimus",
            XAmzTarget: "AWSGlue.BatchCreatePartition",
        },
        Request: shared.BatchCreatePartitionRequest{
            CatalogID: "et",
            DatabaseName: "nam",
            PartitionInputList: []shared.PartitionInput{
                shared.PartitionInput{
                    LastAccessTime: "1996-06-10T05:46:33Z",
                    LastAnalyzedTime: "2014-06-10T06:24:55Z",
                    Parameters: map[string]string{
                        "deserunt": "illo",
                        "tempore": "velit",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        BucketColumns: []string{
                            "quidem",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: "officiis",
                                Name: "veniam",
                                Parameters: map[string]string{
                                    "eius": "nobis",
                                    "aliquam": "qui",
                                },
                                Type: "debitis",
                            },
                        },
                        Compressed: false,
                        InputFormat: "consequatur",
                        Location: "iusto",
                        NumberOfBuckets: 8955101836556220093,
                        OutputFormat: "iusto",
                        Parameters: map[string]string{
                            "ut": "ut",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: "expedita",
                                SchemaArn: "repellendus",
                                SchemaName: "commodi",
                            },
                            SchemaVersionID: "exercitationem",
                            SchemaVersionNumber: 7459015832090057282,
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: "perferendis",
                            Parameters: map[string]string{
                                "autem": "dolore",
                                "aliquam": "soluta",
                            },
                            SerializationLibrary: "accusantium",
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "aut",
                                "accusamus",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "quisquam": "nihil",
                            },
                            SkewedColumnValues: []string{
                                "deleniti",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "rem",
                                SortOrder: 6277689859743485219,
                            },
                        },
                        StoredAsSubDirectories: false,
                    },
                    Values: []string{
                        "magni",
                    },
                },
                shared.PartitionInput{
                    LastAccessTime: "2010-12-14T23:38:35Z",
                    LastAnalyzedTime: "2011-08-21T18:57:31Z",
                    Parameters: map[string]string{
                        "quod": "corporis",
                        "modi": "soluta",
                        "odio": "expedita",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        BucketColumns: []string{
                            "ipsum",
                            "saepe",
                            "ad",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: "delectus",
                                Name: "suscipit",
                                Parameters: map[string]string{
                                    "dolor": "ipsa",
                                    "quos": "voluptas",
                                },
                                Type: "laborum",
                            },
                        },
                        Compressed: false,
                        InputFormat: "iusto",
                        Location: "et",
                        NumberOfBuckets: 3667925934151297536,
                        OutputFormat: "voluptas",
                        Parameters: map[string]string{
                            "quia": "voluptas",
                            "corporis": "omnis",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: "dolores",
                                SchemaArn: "expedita",
                                SchemaName: "enim",
                            },
                            SchemaVersionID: "quo",
                            SchemaVersionNumber: 515727864347354415,
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: "sequi",
                            Parameters: map[string]string{
                                "illo": "enim",
                                "et": "praesentium",
                                "iste": "omnis",
                            },
                            SerializationLibrary: "odio",
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "adipisci",
                                "quo",
                                "rerum",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "suscipit": "fugit",
                            },
                            SkewedColumnValues: []string{
                                "ullam",
                                "vero",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "et",
                                SortOrder: 4855648594445967323,
                            },
                        },
                        StoredAsSubDirectories: false,
                    },
                    Values: []string{
                        "nobis",
                        "sunt",
                    },
                },
                shared.PartitionInput{
                    LastAccessTime: "1971-09-25T18:10:01Z",
                    LastAnalyzedTime: "1981-12-08T04:40:49Z",
                    Parameters: map[string]string{
                        "repellendus": "error",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        BucketColumns: []string{
                            "fugit",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: "dolores",
                                Name: "aut",
                                Parameters: map[string]string{
                                    "nam": "molestias",
                                    "et": "cumque",
                                },
                                Type: "aut",
                            },
                        },
                        Compressed: false,
                        InputFormat: "voluptatem",
                        Location: "provident",
                        NumberOfBuckets: 1615352566432714451,
                        OutputFormat: "ullam",
                        Parameters: map[string]string{
                            "reprehenderit": "aut",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: "possimus",
                                SchemaArn: "voluptatibus",
                                SchemaName: "magni",
                            },
                            SchemaVersionID: "reiciendis",
                            SchemaVersionNumber: 2190221129833308991,
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: "laboriosam",
                            Parameters: map[string]string{
                                "laudantium": "nam",
                                "molestiae": "deserunt",
                                "voluptates": "possimus",
                            },
                            SerializationLibrary: "et",
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "placeat",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "vero": "tempore",
                                "rem": "cum",
                                "ut": "inventore",
                            },
                            SkewedColumnValues: []string{
                                "aliquam",
                                "ratione",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "hic",
                                SortOrder: 8404441515746634618,
                            },
                            shared.Order{
                                Column: "qui",
                                SortOrder: 4664529193248400784,
                            },
                        },
                        StoredAsSubDirectories: false,
                    },
                    Values: []string{
                        "officia",
                        "dolore",
                    },
                },
            },
            TableName: "hic",
        },
    }
    
    res, err := s.BatchCreatePartition(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCreatePartitionResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->