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
            XAmzAlgorithm: "asperiores",
            XAmzContentSha256: "maxime",
            XAmzCredential: "ratione",
            XAmzDate: "voluptatem",
            XAmzSecurityToken: "sit",
            XAmzSignature: "eum",
            XAmzSignedHeaders: "sed",
            XAmzTarget: "AWSGlue.BatchCreatePartition",
        },
        Request: shared.BatchCreatePartitionRequest{
            CatalogID: "et",
            DatabaseName: "consequatur",
            PartitionInputList: []shared.PartitionInput{
                shared.PartitionInput{
                    LastAccessTime: "1997-07-21T05:28:20Z",
                    LastAnalyzedTime: "2006-05-10T12:05:18Z",
                    Parameters: map[string]string{
                        "placeat": "ipsam",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        BucketColumns: []string{
                            "facilis",
                            "ipsa",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: "doloremque",
                                Name: "minus",
                                Parameters: map[string]string{
                                    "dolores": "quaerat",
                                },
                                Type: "iste",
                            },
                            shared.Column{
                                Comment: "harum",
                                Name: "id",
                                Parameters: map[string]string{
                                    "quibusdam": "ullam",
                                    "veniam": "expedita",
                                    "error": "omnis",
                                },
                                Type: "aliquid",
                            },
                        },
                        Compressed: false,
                        InputFormat: "dolore",
                        Location: "commodi",
                        NumberOfBuckets: 5035491284427618254,
                        OutputFormat: "et",
                        Parameters: map[string]string{
                            "saepe": "sit",
                            "esse": "voluptate",
                            "tenetur": "exercitationem",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: "animi",
                                SchemaArn: "facere",
                                SchemaName: "consequatur",
                            },
                            SchemaVersionID: "ipsum",
                            SchemaVersionNumber: 4716196713450287375,
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: "amet",
                            Parameters: map[string]string{
                                "nostrum": "et",
                                "eum": "aut",
                            },
                            SerializationLibrary: "beatae",
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "est",
                                "a",
                                "quia",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "quaerat": "pariatur",
                            },
                            SkewedColumnValues: []string{
                                "nobis",
                                "quasi",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "non",
                                SortOrder: 6267281124700323461,
                            },
                        },
                        StoredAsSubDirectories: false,
                    },
                    Values: []string{
                        "eos",
                        "quas",
                    },
                },
                shared.PartitionInput{
                    LastAccessTime: "1985-02-09T13:21:52Z",
                    LastAnalyzedTime: "1972-10-26T02:41:50Z",
                    Parameters: map[string]string{
                        "deleniti": "eum",
                        "ut": "dolorum",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        BucketColumns: []string{
                            "ab",
                            "inventore",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: "voluptas",
                                Name: "neque",
                                Parameters: map[string]string{
                                    "sit": "quibusdam",
                                    "dolore": "ut",
                                    "deserunt": "est",
                                },
                                Type: "cupiditate",
                            },
                            shared.Column{
                                Comment: "culpa",
                                Name: "est",
                                Parameters: map[string]string{
                                    "qui": "doloribus",
                                    "ad": "minus",
                                    "sit": "est",
                                },
                                Type: "voluptas",
                            },
                            shared.Column{
                                Comment: "quisquam",
                                Name: "ipsum",
                                Parameters: map[string]string{
                                    "nihil": "error",
                                    "sunt": "quia",
                                },
                                Type: "sed",
                            },
                        },
                        Compressed: true,
                        InputFormat: "quae",
                        Location: "id",
                        NumberOfBuckets: 8239657596927683099,
                        OutputFormat: "et",
                        Parameters: map[string]string{
                            "ea": "aliquid",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: "voluptate",
                                SchemaArn: "beatae",
                                SchemaName: "tempore",
                            },
                            SchemaVersionID: "reprehenderit",
                            SchemaVersionNumber: 2038449797144002420,
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: "velit",
                            Parameters: map[string]string{
                                "illo": "aut",
                                "quis": "quia",
                            },
                            SerializationLibrary: "ab",
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "eveniet",
                                "id",
                                "placeat",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "odio": "qui",
                            },
                            SkewedColumnValues: []string{
                                "ad",
                                "et",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "illo",
                                SortOrder: 1408706972460457468,
                            },
                            shared.Order{
                                Column: "earum",
                                SortOrder: 1593157718086992465,
                            },
                            shared.Order{
                                Column: "vero",
                                SortOrder: 959559124305670872,
                            },
                        },
                        StoredAsSubDirectories: true,
                    },
                    Values: []string{
                        "architecto",
                        "eos",
                        "aut",
                    },
                },
                shared.PartitionInput{
                    LastAccessTime: "1990-06-22T10:15:32Z",
                    LastAnalyzedTime: "1975-11-18T11:26:33Z",
                    Parameters: map[string]string{
                        "cupiditate": "aperiam",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        BucketColumns: []string{
                            "molestiae",
                            "explicabo",
                            "cumque",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: "et",
                                Name: "sunt",
                                Parameters: map[string]string{
                                    "cum": "placeat",
                                },
                                Type: "ullam",
                            },
                            shared.Column{
                                Comment: "minima",
                                Name: "exercitationem",
                                Parameters: map[string]string{
                                    "unde": "modi",
                                    "dolor": "omnis",
                                },
                                Type: "explicabo",
                            },
                        },
                        Compressed: false,
                        InputFormat: "quia",
                        Location: "perferendis",
                        NumberOfBuckets: 4216081296653578688,
                        OutputFormat: "incidunt",
                        Parameters: map[string]string{
                            "velit": "voluptatem",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: "maxime",
                                SchemaArn: "omnis",
                                SchemaName: "dolor",
                            },
                            SchemaVersionID: "non",
                            SchemaVersionNumber: 1308406844759816204,
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: "dolorem",
                            Parameters: map[string]string{
                                "sint": "iste",
                            },
                            SerializationLibrary: "magni",
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "omnis",
                                "iste",
                                "unde",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "impedit": "tempora",
                                "aut": "omnis",
                            },
                            SkewedColumnValues: []string{
                                "animi",
                                "cum",
                                "occaecati",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "architecto",
                                SortOrder: 9100209240926073616,
                            },
                        },
                        StoredAsSubDirectories: false,
                    },
                    Values: []string{
                        "dolore",
                    },
                },
            },
            TableName: "non",
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