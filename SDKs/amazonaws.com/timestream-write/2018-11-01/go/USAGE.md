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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateBatchLoadTaskRequest{
        CreateBatchLoadTaskRequest: shared.CreateBatchLoadTaskRequest{
            ClientToken: "corrupti",
            DataModelConfiguration: &shared.DataModelConfiguration{
                DataModel: &shared.DataModel{
                    DimensionMappings: []shared.DimensionMapping{
                        shared.DimensionMapping{
                            DestinationColumn: "distinctio",
                            SourceColumn: "quibusdam",
                        },
                        shared.DimensionMapping{
                            DestinationColumn: "unde",
                            SourceColumn: "nulla",
                        },
                        shared.DimensionMapping{
                            DestinationColumn: "corrupti",
                            SourceColumn: "illum",
                        },
                    },
                    MeasureNameColumn: "vel",
                    MixedMeasureMappings: []shared.MixedMeasureMapping{
                        shared.MixedMeasureMapping{
                            MeasureName: "deserunt",
                            MeasureValueType: "VARCHAR",
                            MultiMeasureAttributeMappings: []shared.MultiMeasureAttributeMapping{
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "BIGINT",
                                    SourceColumn: "debitis",
                                    TargetMultiMeasureAttributeName: "ipsa",
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "TIMESTAMP",
                                    SourceColumn: "tempora",
                                    TargetMultiMeasureAttributeName: "suscipit",
                                },
                            },
                            SourceColumn: "molestiae",
                            TargetMeasureName: "minus",
                        },
                        shared.MixedMeasureMapping{
                            MeasureName: "placeat",
                            MeasureValueType: "BOOLEAN",
                            MultiMeasureAttributeMappings: []shared.MultiMeasureAttributeMapping{
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "BOOLEAN",
                                    SourceColumn: "nisi",
                                    TargetMultiMeasureAttributeName: "recusandae",
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "TIMESTAMP",
                                    SourceColumn: "ab",
                                    TargetMultiMeasureAttributeName: "quis",
                                },
                            },
                            SourceColumn: "veritatis",
                            TargetMeasureName: "deserunt",
                        },
                        shared.MixedMeasureMapping{
                            MeasureName: "perferendis",
                            MeasureValueType: "VARCHAR",
                            MultiMeasureAttributeMappings: []shared.MultiMeasureAttributeMapping{
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "TIMESTAMP",
                                    SourceColumn: "quo",
                                    TargetMultiMeasureAttributeName: "odit",
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "TIMESTAMP",
                                    SourceColumn: "at",
                                    TargetMultiMeasureAttributeName: "maiores",
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "BOOLEAN",
                                    SourceColumn: "quod",
                                    TargetMultiMeasureAttributeName: "quod",
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "BOOLEAN",
                                    SourceColumn: "totam",
                                    TargetMultiMeasureAttributeName: "porro",
                                },
                            },
                            SourceColumn: "dolorum",
                            TargetMeasureName: "dicta",
                        },
                    },
                    MultiMeasureMappings: &shared.MultiMeasureMappings{
                        MultiMeasureAttributeMappings: []shared.MultiMeasureAttributeMapping{
                            shared.MultiMeasureAttributeMapping{
                                MeasureValueType: "VARCHAR",
                                SourceColumn: "occaecati",
                                TargetMultiMeasureAttributeName: "fugit",
                            },
                            shared.MultiMeasureAttributeMapping{
                                MeasureValueType: "BOOLEAN",
                                SourceColumn: "hic",
                                TargetMultiMeasureAttributeName: "optio",
                            },
                            shared.MultiMeasureAttributeMapping{
                                MeasureValueType: "BOOLEAN",
                                SourceColumn: "beatae",
                                TargetMultiMeasureAttributeName: "commodi",
                            },
                        },
                        TargetMultiMeasureName: "molestiae",
                    },
                    TimeColumn: "modi",
                    TimeUnit: "MILLISECONDS",
                },
                DataModelS3Configuration: &shared.DataModelS3Configuration{
                    BucketName: "impedit",
                    ObjectKey: "cum",
                },
            },
            DataSourceConfiguration: shared.DataSourceConfiguration{
                CsvConfiguration: &shared.CsvConfiguration{
                    ColumnSeparator: "esse",
                    EscapeChar: "ipsum",
                    NullValue: "excepturi",
                    QuoteChar: "aspernatur",
                    TrimWhiteSpace: false,
                },
                DataFormat: "CSV",
                DataSourceS3Configuration: shared.DataSourceS3Configuration{
                    BucketName: "perferendis",
                    ObjectKeyPrefix: "ad",
                },
            },
            RecordVersion: 617636,
            ReportConfiguration: shared.ReportConfiguration{
                ReportS3Configuration: &shared.ReportS3Configuration{
                    BucketName: "sed",
                    EncryptionOption: "SSE_KMS",
                    KmsKeyID: "dolor",
                    ObjectKeyPrefix: "natus",
                },
            },
            TargetDatabaseName: "laboriosam",
            TargetTableName: "hic",
        },
        XAmzAlgorithm: "saepe",
        XAmzContentSha256: "fuga",
        XAmzCredential: "in",
        XAmzDate: "corporis",
        XAmzSecurityToken: "iste",
        XAmzSignature: "iure",
        XAmzSignedHeaders: "saepe",
        XAmzTarget: "Timestream_20181101.CreateBatchLoadTask",
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