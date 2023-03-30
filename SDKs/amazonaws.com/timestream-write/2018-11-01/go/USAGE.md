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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "Timestream_20181101.CreateBatchLoadTask",
        },
        Request: shared.CreateBatchLoadTaskRequest{
            ClientToken: "illum",
            DataModelConfiguration: &shared.DataModelConfiguration{
                DataModel: &shared.DataModel{
                    DimensionMappings: []shared.DimensionMapping{
                        shared.DimensionMapping{
                            DestinationColumn: "error",
                            SourceColumn: "deserunt",
                        },
                        shared.DimensionMapping{
                            DestinationColumn: "suscipit",
                            SourceColumn: "iure",
                        },
                    },
                    MeasureNameColumn: "magnam",
                    MixedMeasureMappings: []shared.MixedMeasureMapping{
                        shared.MixedMeasureMapping{
                            MeasureName: "ipsa",
                            MeasureValueType: "MULTI",
                            MultiMeasureAttributeMappings: []shared.MultiMeasureAttributeMapping{
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "BIGINT",
                                    SourceColumn: "molestiae",
                                    TargetMultiMeasureAttributeName: "minus",
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "TIMESTAMP",
                                    SourceColumn: "voluptatum",
                                    TargetMultiMeasureAttributeName: "iusto",
                                },
                            },
                            SourceColumn: "excepturi",
                            TargetMeasureName: "nisi",
                        },
                        shared.MixedMeasureMapping{
                            MeasureName: "recusandae",
                            MeasureValueType: "MULTI",
                            MultiMeasureAttributeMappings: []shared.MultiMeasureAttributeMapping{
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "BIGINT",
                                    SourceColumn: "veritatis",
                                    TargetMultiMeasureAttributeName: "deserunt",
                                },
                            },
                            SourceColumn: "perferendis",
                            TargetMeasureName: "ipsam",
                        },
                        shared.MixedMeasureMapping{
                            MeasureName: "repellendus",
                            MeasureValueType: "MULTI",
                            MultiMeasureAttributeMappings: []shared.MultiMeasureAttributeMapping{
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "DOUBLE",
                                    SourceColumn: "at",
                                    TargetMultiMeasureAttributeName: "at",
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "TIMESTAMP",
                                    SourceColumn: "molestiae",
                                    TargetMultiMeasureAttributeName: "quod",
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "TIMESTAMP",
                                    SourceColumn: "esse",
                                    TargetMultiMeasureAttributeName: "totam",
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "VARCHAR",
                                    SourceColumn: "dolorum",
                                    TargetMultiMeasureAttributeName: "dicta",
                                },
                            },
                            SourceColumn: "nam",
                            TargetMeasureName: "officia",
                        },
                        shared.MixedMeasureMapping{
                            MeasureName: "occaecati",
                            MeasureValueType: "DOUBLE",
                            MultiMeasureAttributeMappings: []shared.MultiMeasureAttributeMapping{
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "TIMESTAMP",
                                    SourceColumn: "optio",
                                    TargetMultiMeasureAttributeName: "totam",
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "DOUBLE",
                                    SourceColumn: "commodi",
                                    TargetMultiMeasureAttributeName: "molestiae",
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: "BIGINT",
                                    SourceColumn: "qui",
                                    TargetMultiMeasureAttributeName: "impedit",
                                },
                            },
                            SourceColumn: "cum",
                            TargetMeasureName: "esse",
                        },
                    },
                    MultiMeasureMappings: &shared.MultiMeasureMappings{
                        MultiMeasureAttributeMappings: []shared.MultiMeasureAttributeMapping{
                            shared.MultiMeasureAttributeMapping{
                                MeasureValueType: "BOOLEAN",
                                SourceColumn: "aspernatur",
                                TargetMultiMeasureAttributeName: "perferendis",
                            },
                        },
                        TargetMultiMeasureName: "ad",
                    },
                    TimeColumn: "natus",
                    TimeUnit: "MILLISECONDS",
                },
                DataModelS3Configuration: &shared.DataModelS3Configuration{
                    BucketName: "iste",
                    ObjectKey: "dolor",
                },
            },
            DataSourceConfiguration: shared.DataSourceConfiguration{
                CsvConfiguration: &shared.CsvConfiguration{
                    ColumnSeparator: "natus",
                    EscapeChar: "laboriosam",
                    NullValue: "hic",
                    QuoteChar: "saepe",
                    TrimWhiteSpace: false,
                },
                DataFormat: "CSV",
                DataSourceS3Configuration: shared.DataSourceS3Configuration{
                    BucketName: "fuga",
                    ObjectKeyPrefix: "in",
                },
            },
            RecordVersion: 359508,
            ReportConfiguration: shared.ReportConfiguration{
                ReportS3Configuration: &shared.ReportS3Configuration{
                    BucketName: "iste",
                    EncryptionOption: "SSE_S3",
                    KmsKeyID: "saepe",
                    ObjectKeyPrefix: "quidem",
                },
            },
            TargetDatabaseName: "architecto",
            TargetTableName: "ipsa",
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