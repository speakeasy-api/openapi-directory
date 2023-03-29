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

    req := operations.CreateBatchLoadTaskRequest{
        Headers: operations.CreateBatchLoadTaskHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "Timestream_20181101.CreateBatchLoadTask",
        },
        Request: shared.CreateBatchLoadTaskRequest{
            ClientToken: "nihil",
            DataModelConfiguration: &shared.DataModelConfiguration{
                DataModel: &shared.DataModel{
                    DimensionMappings: []shared.DimensionMapping{
                        shared.DimensionMapping{
                            DestinationColumn: "facilis",
                            SourceColumn: "eum",
                        },
                        shared.DimensionMapping{
                            DestinationColumn: "iusto",
                            SourceColumn: "ullam",
                        },
                        shared.DimensionMapping{
                            DestinationColumn: "saepe",
                            SourceColumn: "inventore",
                        },
                    },
                    MeasureNameColumn: "sapiente",
                    MixedMeasureMappings: []shared.MixedMeasureMapping{
                        shared.MixedMeasureMapping{
                            MeasureName: "eum",
                            MeasureValueType: "VARCHAR",
                            MultiMeasureAttributeMappings: []shared.MultiMeasureAttributeMapping{
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "TIMESTAMP",
                                    SourceColumn: "non",
                                    TargetMultiMeasureAttributeName: "deleniti",
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "BOOLEAN",
                                    SourceColumn: "reprehenderit",
                                    TargetMultiMeasureAttributeName: "molestiae",
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "TIMESTAMP",
                                    SourceColumn: "quasi",
                                    TargetMultiMeasureAttributeName: "laboriosam",
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "DOUBLE",
                                    SourceColumn: "est",
                                    TargetMultiMeasureAttributeName: "voluptatem",
                                },
                            },
                            SourceColumn: "consequatur",
                            TargetMeasureName: "fugiat",
                        },
                        shared.MixedMeasureMapping{
                            MeasureName: "a",
                            MeasureValueType: "TIMESTAMP",
                            MultiMeasureAttributeMappings: []shared.MultiMeasureAttributeMapping{
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "TIMESTAMP",
                                    SourceColumn: "accusamus",
                                    TargetMultiMeasureAttributeName: "reiciendis",
                                },
                            },
                            SourceColumn: "rem",
                            TargetMeasureName: "quibusdam",
                        },
                    },
                    MultiMeasureMappings: &shared.MultiMeasureMappings{
                        MultiMeasureAttributeMappings: []shared.MultiMeasureAttributeMapping{
                            shared.MultiMeasureAttributeMapping{
                                MeasureValueType: "BOOLEAN",
                                SourceColumn: "occaecati",
                                TargetMultiMeasureAttributeName: "dolor",
                            },
                            shared.MultiMeasureAttributeMapping{
                                MeasureValueType: "VARCHAR",
                                SourceColumn: "sed",
                                TargetMultiMeasureAttributeName: "quisquam",
                            },
                            shared.MultiMeasureAttributeMapping{
                                MeasureValueType: "VARCHAR",
                                SourceColumn: "culpa",
                                TargetMultiMeasureAttributeName: "qui",
                            },
                            shared.MultiMeasureAttributeMapping{
                                MeasureValueType: "BOOLEAN",
                                SourceColumn: "rerum",
                                TargetMultiMeasureAttributeName: "possimus",
                            },
                        },
                        TargetMultiMeasureName: "occaecati",
                    },
                    TimeColumn: "odit",
                    TimeUnit: "SECONDS",
                },
                DataModelS3Configuration: &shared.DataModelS3Configuration{
                    BucketName: "rem",
                    ObjectKey: "voluptatem",
                },
            },
            DataSourceConfiguration: shared.DataSourceConfiguration{
                CsvConfiguration: &shared.CsvConfiguration{
                    ColumnSeparator: "amet",
                    EscapeChar: "est",
                    NullValue: "id",
                    QuoteChar: "blanditiis",
                    TrimWhiteSpace: false,
                },
                DataFormat: "CSV",
                DataSourceS3Configuration: shared.DataSourceS3Configuration{
                    BucketName: "similique",
                    ObjectKeyPrefix: "dolores",
                },
            },
            RecordVersion: 18789,
            ReportConfiguration: shared.ReportConfiguration{
                ReportS3Configuration: &shared.ReportS3Configuration{
                    BucketName: "quia",
                    EncryptionOption: "SSE_KMS",
                    KmsKeyID: "voluptatem",
                    ObjectKeyPrefix: "laborum",
                },
            },
            TargetDatabaseName: "modi",
            TargetTableName: "et",
        },
    }

    ctx := context.Background()
    res, err := s.CreateBatchLoadTask(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBatchLoadTaskResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->