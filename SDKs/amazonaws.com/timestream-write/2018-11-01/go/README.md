# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/timestream-write/2018-11-01/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateBatchLoadTask` - Creates a new Timestream batch load task. A batch load task processes data from a CSV source in an S3 location and writes to a Timestream table. A mapping from source to target is defined in a batch load task. Errors and events are written to a report at an S3 location. For the report, if the KMS key is not specified, the batch load task will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-batch-load.html">code sample</a>.
* `CreateDatabase` - Creates a new Timestream database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-db.html">code sample</a>. 
* `CreateTable` - Adds a new table to an existing database in your account. In an Amazon Web Services account, table names must be at least unique within each Region if they are in the same database. You might have identical table names in the same Region if the tables are in separate databases. While creating the table, you must specify the table name, database name, and the retention properties. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-table.html">code sample</a> for details. 
* `DeleteDatabase` - <p>Deletes a given Timestream database. <i>This is an irreversible operation. After a database is deleted, the time-series data from its tables cannot be recovered.</i> </p> <note> <p>All tables in the database must be deleted first, or a ValidationException error will be thrown. </p> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-db.html">code sample</a> for details.</p>
* `DeleteTable` - <p>Deletes a given Timestream table. This is an irreversible operation. After a Timestream database table is deleted, the time-series data stored in the table cannot be recovered. </p> <note> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-table.html">code sample</a> for details.</p>
* `DescribeBatchLoadTask` - Returns information about the batch load task, including configurations, mappings, progress, and other details. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-batch-load.html">code sample</a> for details.
* `DescribeDatabase` - Returns information about the database, including the database name, time that the database was created, and the total number of tables found within the database. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-db.html">code sample</a> for details.
* `DescribeEndpoints` - <p>Returns a list of available endpoints to make Timestream API calls against. This API operation is available through both the Write and Query APIs.</p> <p>Because the Timestream SDKs are designed to transparently work with the service’s architecture, including the management and mapping of the service endpoints, <i>we don't recommend that you use this API operation unless</i>:</p> <ul> <li> <p>You are using <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/VPCEndpoints">VPC endpoints (Amazon Web Services PrivateLink) with Timestream</a> </p> </li> <li> <p>Your application uses a programming language that does not yet have SDK support</p> </li> <li> <p>You require better control over the client-side implementation</p> </li> </ul> <p>For detailed information on how and when to use and implement DescribeEndpoints, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using.API.html#Using-API.endpoint-discovery">The Endpoint Discovery Pattern</a>.</p>
* `DescribeTable` - Returns information about the table, including the table name, database name, retention duration of the memory store and the magnetic store. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-table.html">code sample</a> for details. 
* `ListBatchLoadTasks` - Provides a list of batch load tasks, along with the name, status, when the task is resumable until, and other details. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-batch-load-tasks.html">code sample</a> for details.
* `ListDatabases` - Returns a list of your Timestream databases. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-db.html">code sample</a> for details. 
* `ListTables` - Provides a list of tables, along with the name, status, and retention properties of each table. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-table.html">code sample</a> for details. 
* `ListTagsForResource` -  Lists all tags on a Timestream resource. 
* `ResumeBatchLoadTask` -  
* `TagResource` -  Associates a set of tags with a Timestream resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. 
* `UntagResource` -  Removes the association of tags from a Timestream resource. 
* `UpdateDatabase` - <p> Modifies the KMS key for an existing database. While updating the database, you must specify the database name and the identifier of the new KMS key to be used (<code>KmsKeyId</code>). If there are any concurrent <code>UpdateDatabase</code> requests, first writer wins. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-db.html">code sample</a> for details.</p>
* `UpdateTable` - <p>Modifies the retention duration of the memory store and magnetic store for your Timestream table. Note that the change in retention duration takes effect immediately. For example, if the retention period of the memory store was initially set to 2 hours and then changed to 24 hours, the memory store will be capable of holding 24 hours of data, but will be populated with 24 hours of data 22 hours after this change was made. Timestream does not retrieve data from the magnetic store to populate the memory store. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-table.html">code sample</a> for details.</p>
* `WriteRecords` - <p>Enables you to write your time-series data into Timestream. You can specify a single data point or a batch of data points to be inserted into the system. Timestream offers you a flexible schema that auto detects the column names and data types for your Timestream tables based on the dimension names and data types of the data points you specify when invoking writes into the database. </p> <p>Timestream supports eventual consistency read semantics. This means that when you query data immediately after writing a batch of data into Timestream, the query results might not reflect the results of a recently completed write operation. The results may also include some stale data. If you repeat the query request after a short time, the results should return the latest data. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.write.html">code sample</a> for details.</p> <p> <b>Upserts</b> </p> <p>You can use the <code>Version</code> parameter in a <code>WriteRecords</code> request to update data points. Timestream tracks a version number with each record. <code>Version</code> defaults to <code>1</code> when it's not specified for the record in the request. Timestream updates an existing record’s measure value along with its <code>Version</code> when it receives a write request with a higher <code>Version</code> number for that record. When it receives an update request where the measure value is the same as that of the existing record, Timestream still updates <code>Version</code>, if it is greater than the existing value of <code>Version</code>. You can update a data point as many times as desired, as long as the value of <code>Version</code> continuously increases. </p> <p> For example, suppose you write a new record without indicating <code>Version</code> in the request. Timestream stores this record, and set <code>Version</code> to <code>1</code>. Now, suppose you try to update this record with a <code>WriteRecords</code> request of the same record with a different measure value but, like before, do not provide <code>Version</code>. In this case, Timestream will reject this update with a <code>RejectedRecordsException</code> since the updated record’s version is not greater than the existing value of Version. </p> <p>However, if you were to resend the update request with <code>Version</code> set to <code>2</code>, Timestream would then succeed in updating the record’s value, and the <code>Version</code> would be set to <code>2</code>. Next, suppose you sent a <code>WriteRecords</code> request with this same record and an identical measure value, but with <code>Version</code> set to <code>3</code>. In this case, Timestream would only update <code>Version</code> to <code>3</code>. Any further updates would need to send a version number greater than <code>3</code>, or the update requests would receive a <code>RejectedRecordsException</code>. </p>
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
