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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSGlue.BatchCreatePartition",
        },
        Request: shared.BatchCreatePartitionRequest{
            CatalogID: "fugit",
            DatabaseName: "et",
            PartitionInputList: []shared.PartitionInput{
                shared.PartitionInput{
                    LastAccessTime: "2004-06-02T10:14:12Z",
                    LastAnalyzedTime: "1981-07-21T06:30:48Z",
                    Parameters: map[string]string{
                        "ut": "dolorem",
                    },
                    StorageDescriptor: &shared.StorageDescriptor{
                        BucketColumns: []string{
                            "voluptate",
                            "iste",
                        },
                        Columns: []shared.Column{
                            shared.Column{
                                Comment: "totam",
                                Name: "dolores",
                                Parameters: map[string]string{
                                    "debitis": "vel",
                                    "odio": "dolore",
                                    "id": "aspernatur",
                                },
                                Type: "accusantium",
                            },
                        },
                        Compressed: false,
                        InputFormat: "commodi",
                        Location: "quis",
                        NumberOfBuckets: 3398579248012586914,
                        OutputFormat: "aut",
                        Parameters: map[string]string{
                            "non": "voluptas",
                            "omnis": "aut",
                        },
                        SchemaReference: &shared.SchemaReference{
                            SchemaID: &shared.SchemaID{
                                RegistryName: "illo",
                                SchemaArn: "sed",
                                SchemaName: "officiis",
                            },
                            SchemaVersionID: "autem",
                            SchemaVersionNumber: 8514850266767180993,
                        },
                        SerdeInfo: &shared.SerDeInfo{
                            Name: "nobis",
                            Parameters: map[string]string{
                                "qui": "recusandae",
                            },
                            SerializationLibrary: "at",
                        },
                        SkewedInfo: &shared.SkewedInfo{
                            SkewedColumnNames: []string{
                                "eveniet",
                            },
                            SkewedColumnValueLocationMaps: map[string]string{
                                "sint": "inventore",
                                "ut": "exercitationem",
                            },
                            SkewedColumnValues: []string{
                                "reprehenderit",
                                "tempore",
                                "maiores",
                            },
                        },
                        SortColumns: []shared.Order{
                            shared.Order{
                                Column: "dolor",
                                SortOrder: 7719717197379695442,
                            },
                            shared.Order{
                                Column: "veritatis",
                                SortOrder: 2671030200101705776,
                            },
                            shared.Order{
                                Column: "et",
                                SortOrder: 8565714761387219319,
                            },
                        },
                        StoredAsSubDirectories: false,
                    },
                    Values: []string{
                        "dolores",
                    },
                },
            },
            TableName: "placeat",
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