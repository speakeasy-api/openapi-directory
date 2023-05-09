<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateBatchLoadTask(ctx, operations.CreateBatchLoadTaskRequest{
        CreateBatchLoadTaskRequest: shared.CreateBatchLoadTaskRequest{
            ClientToken: sdk.String("corrupti"),
            DataModelConfiguration: &shared.DataModelConfiguration{
                DataModel: &shared.DataModel{
                    DimensionMappings: []shared.DimensionMapping{
                        shared.DimensionMapping{
                            DestinationColumn: sdk.String("distinctio"),
                            SourceColumn: sdk.String("quibusdam"),
                        },
                        shared.DimensionMapping{
                            DestinationColumn: sdk.String("unde"),
                            SourceColumn: sdk.String("nulla"),
                        },
                        shared.DimensionMapping{
                            DestinationColumn: sdk.String("corrupti"),
                            SourceColumn: sdk.String("illum"),
                        },
                    },
                    MeasureNameColumn: sdk.String("vel"),
                    MixedMeasureMappings: []shared.MixedMeasureMapping{
                        shared.MixedMeasureMapping{
                            MeasureName: sdk.String("deserunt"),
                            MeasureValueType: shared.MeasureValueTypeEnumVarchar,
                            MultiMeasureAttributeMappings: []shared.MultiMeasureAttributeMapping{
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: shared.ScalarMeasureValueTypeEnumBigint.ToPointer(),
                                    SourceColumn: "debitis",
                                    TargetMultiMeasureAttributeName: sdk.String("ipsa"),
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: shared.ScalarMeasureValueTypeEnumTimestamp.ToPointer(),
                                    SourceColumn: "tempora",
                                    TargetMultiMeasureAttributeName: sdk.String("suscipit"),
                                },
                            },
                            SourceColumn: sdk.String("molestiae"),
                            TargetMeasureName: sdk.String("minus"),
                        },
                        shared.MixedMeasureMapping{
                            MeasureName: sdk.String("placeat"),
                            MeasureValueType: shared.MeasureValueTypeEnumBoolean,
                            MultiMeasureAttributeMappings: []shared.MultiMeasureAttributeMapping{
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: shared.ScalarMeasureValueTypeEnumBoolean.ToPointer(),
                                    SourceColumn: "nisi",
                                    TargetMultiMeasureAttributeName: sdk.String("recusandae"),
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: shared.ScalarMeasureValueTypeEnumTimestamp.ToPointer(),
                                    SourceColumn: "ab",
                                    TargetMultiMeasureAttributeName: sdk.String("quis"),
                                },
                            },
                            SourceColumn: sdk.String("veritatis"),
                            TargetMeasureName: sdk.String("deserunt"),
                        },
                        shared.MixedMeasureMapping{
                            MeasureName: sdk.String("perferendis"),
                            MeasureValueType: shared.MeasureValueTypeEnumVarchar,
                            MultiMeasureAttributeMappings: []shared.MultiMeasureAttributeMapping{
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: shared.ScalarMeasureValueTypeEnumTimestamp.ToPointer(),
                                    SourceColumn: "quo",
                                    TargetMultiMeasureAttributeName: sdk.String("odit"),
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: shared.ScalarMeasureValueTypeEnumTimestamp.ToPointer(),
                                    SourceColumn: "at",
                                    TargetMultiMeasureAttributeName: sdk.String("maiores"),
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: shared.ScalarMeasureValueTypeEnumBoolean.ToPointer(),
                                    SourceColumn: "quod",
                                    TargetMultiMeasureAttributeName: sdk.String("quod"),
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: shared.ScalarMeasureValueTypeEnumBoolean.ToPointer(),
                                    SourceColumn: "totam",
                                    TargetMultiMeasureAttributeName: sdk.String("porro"),
                                },
                            },
                            SourceColumn: sdk.String("dolorum"),
                            TargetMeasureName: sdk.String("dicta"),
                        },
                    },
                    MultiMeasureMappings: &shared.MultiMeasureMappings{
                        MultiMeasureAttributeMappings: []shared.MultiMeasureAttributeMapping{
                            shared.MultiMeasureAttributeMapping{
                                MeasureValueType: shared.ScalarMeasureValueTypeEnumVarchar.ToPointer(),
                                SourceColumn: "occaecati",
                                TargetMultiMeasureAttributeName: sdk.String("fugit"),
                            },
                            shared.MultiMeasureAttributeMapping{
                                MeasureValueType: shared.ScalarMeasureValueTypeEnumBoolean.ToPointer(),
                                SourceColumn: "hic",
                                TargetMultiMeasureAttributeName: sdk.String("optio"),
                            },
                            shared.MultiMeasureAttributeMapping{
                                MeasureValueType: shared.ScalarMeasureValueTypeEnumBoolean.ToPointer(),
                                SourceColumn: "beatae",
                                TargetMultiMeasureAttributeName: sdk.String("commodi"),
                            },
                        },
                        TargetMultiMeasureName: sdk.String("molestiae"),
                    },
                    TimeColumn: sdk.String("modi"),
                    TimeUnit: shared.TimeUnitEnumMilliseconds.ToPointer(),
                },
                DataModelS3Configuration: &shared.DataModelS3Configuration{
                    BucketName: sdk.String("impedit"),
                    ObjectKey: sdk.String("cum"),
                },
            },
            DataSourceConfiguration: shared.DataSourceConfiguration{
                CsvConfiguration: &shared.CsvConfiguration{
                    ColumnSeparator: sdk.String("esse"),
                    EscapeChar: sdk.String("ipsum"),
                    NullValue: sdk.String("excepturi"),
                    QuoteChar: sdk.String("aspernatur"),
                    TrimWhiteSpace: sdk.Bool(false),
                },
                DataFormat: shared.BatchLoadDataFormatEnumCsv,
                DataSourceS3Configuration: shared.DataSourceS3Configuration{
                    BucketName: "perferendis",
                    ObjectKeyPrefix: sdk.String("ad"),
                },
            },
            RecordVersion: sdk.Int64(617636),
            ReportConfiguration: shared.ReportConfiguration{
                ReportS3Configuration: &shared.ReportS3Configuration{
                    BucketName: "sed",
                    EncryptionOption: shared.S3EncryptionOptionEnumSseKms.ToPointer(),
                    KmsKeyID: sdk.String("dolor"),
                    ObjectKeyPrefix: sdk.String("natus"),
                },
            },
            TargetDatabaseName: "laboriosam",
            TargetTableName: "hic",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.CreateBatchLoadTaskXAmzTargetEnumTimestream20181101CreateBatchLoadTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBatchLoadTaskResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->