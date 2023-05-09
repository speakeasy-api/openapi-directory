# SDK

## Overview

<fullname>Amazon Timestream Write</fullname> <p>Amazon Timestream is a fast, scalable, fully managed time-series database service that makes it easy to store and analyze trillions of time-series data points per day. With Timestream, you can easily store and analyze IoT sensor data to derive insights from your IoT applications. You can analyze industrial telemetry to streamline equipment management and maintenance. You can also store and analyze log data and metrics to improve the performance and availability of your applications. </p> <p>Timestream is built from the ground up to effectively ingest, process, and store time-series data. It organizes data to optimize query processing. It automatically scales based on the volume of data ingested and on the query volume to ensure you receive optimal performance while inserting and querying data. As your data grows over time, Timestream’s adaptive query processing engine spans across storage tiers to provide fast analysis while reducing costs.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/timestream/>
### Available Operations

* [CreateBatchLoadTask](#createbatchloadtask) - Creates a new Timestream batch load task. A batch load task processes data from a CSV source in an S3 location and writes to a Timestream table. A mapping from source to target is defined in a batch load task. Errors and events are written to a report at an S3 location. For the report, if the KMS key is not specified, the batch load task will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-batch-load.html">code sample</a>.
* [CreateDatabase](#createdatabase) - Creates a new Timestream database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-db.html">code sample</a>. 
* [CreateTable](#createtable) - Adds a new table to an existing database in your account. In an Amazon Web Services account, table names must be at least unique within each Region if they are in the same database. You might have identical table names in the same Region if the tables are in separate databases. While creating the table, you must specify the table name, database name, and the retention properties. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-table.html">code sample</a> for details. 
* [DeleteDatabase](#deletedatabase) - <p>Deletes a given Timestream database. <i>This is an irreversible operation. After a database is deleted, the time-series data from its tables cannot be recovered.</i> </p> <note> <p>All tables in the database must be deleted first, or a ValidationException error will be thrown. </p> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-db.html">code sample</a> for details.</p>
* [DeleteTable](#deletetable) - <p>Deletes a given Timestream table. This is an irreversible operation. After a Timestream database table is deleted, the time-series data stored in the table cannot be recovered. </p> <note> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-table.html">code sample</a> for details.</p>
* [DescribeBatchLoadTask](#describebatchloadtask) - Returns information about the batch load task, including configurations, mappings, progress, and other details. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-batch-load.html">code sample</a> for details.
* [DescribeDatabase](#describedatabase) - Returns information about the database, including the database name, time that the database was created, and the total number of tables found within the database. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-db.html">code sample</a> for details.
* [DescribeEndpoints](#describeendpoints) - <p>Returns a list of available endpoints to make Timestream API calls against. This API operation is available through both the Write and Query APIs.</p> <p>Because the Timestream SDKs are designed to transparently work with the service’s architecture, including the management and mapping of the service endpoints, <i>we don't recommend that you use this API operation unless</i>:</p> <ul> <li> <p>You are using <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/VPCEndpoints">VPC endpoints (Amazon Web Services PrivateLink) with Timestream</a> </p> </li> <li> <p>Your application uses a programming language that does not yet have SDK support</p> </li> <li> <p>You require better control over the client-side implementation</p> </li> </ul> <p>For detailed information on how and when to use and implement DescribeEndpoints, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using.API.html#Using-API.endpoint-discovery">The Endpoint Discovery Pattern</a>.</p>
* [DescribeTable](#describetable) - Returns information about the table, including the table name, database name, retention duration of the memory store and the magnetic store. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-table.html">code sample</a> for details. 
* [ListBatchLoadTasks](#listbatchloadtasks) - Provides a list of batch load tasks, along with the name, status, when the task is resumable until, and other details. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-batch-load-tasks.html">code sample</a> for details.
* [ListDatabases](#listdatabases) - Returns a list of your Timestream databases. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-db.html">code sample</a> for details. 
* [ListTables](#listtables) - Provides a list of tables, along with the name, status, and retention properties of each table. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-table.html">code sample</a> for details. 
* [ListTagsForResource](#listtagsforresource) -  Lists all tags on a Timestream resource. 
* [ResumeBatchLoadTask](#resumebatchloadtask) -  
* [TagResource](#tagresource) -  Associates a set of tags with a Timestream resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. 
* [UntagResource](#untagresource) -  Removes the association of tags from a Timestream resource. 
* [UpdateDatabase](#updatedatabase) - <p> Modifies the KMS key for an existing database. While updating the database, you must specify the database name and the identifier of the new KMS key to be used (<code>KmsKeyId</code>). If there are any concurrent <code>UpdateDatabase</code> requests, first writer wins. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-db.html">code sample</a> for details.</p>
* [UpdateTable](#updatetable) - <p>Modifies the retention duration of the memory store and magnetic store for your Timestream table. Note that the change in retention duration takes effect immediately. For example, if the retention period of the memory store was initially set to 2 hours and then changed to 24 hours, the memory store will be capable of holding 24 hours of data, but will be populated with 24 hours of data 22 hours after this change was made. Timestream does not retrieve data from the magnetic store to populate the memory store. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-table.html">code sample</a> for details.</p>
* [WriteRecords](#writerecords) - <p>Enables you to write your time-series data into Timestream. You can specify a single data point or a batch of data points to be inserted into the system. Timestream offers you a flexible schema that auto detects the column names and data types for your Timestream tables based on the dimension names and data types of the data points you specify when invoking writes into the database. </p> <p>Timestream supports eventual consistency read semantics. This means that when you query data immediately after writing a batch of data into Timestream, the query results might not reflect the results of a recently completed write operation. The results may also include some stale data. If you repeat the query request after a short time, the results should return the latest data. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.write.html">code sample</a> for details.</p> <p> <b>Upserts</b> </p> <p>You can use the <code>Version</code> parameter in a <code>WriteRecords</code> request to update data points. Timestream tracks a version number with each record. <code>Version</code> defaults to <code>1</code> when it's not specified for the record in the request. Timestream updates an existing record’s measure value along with its <code>Version</code> when it receives a write request with a higher <code>Version</code> number for that record. When it receives an update request where the measure value is the same as that of the existing record, Timestream still updates <code>Version</code>, if it is greater than the existing value of <code>Version</code>. You can update a data point as many times as desired, as long as the value of <code>Version</code> continuously increases. </p> <p> For example, suppose you write a new record without indicating <code>Version</code> in the request. Timestream stores this record, and set <code>Version</code> to <code>1</code>. Now, suppose you try to update this record with a <code>WriteRecords</code> request of the same record with a different measure value but, like before, do not provide <code>Version</code>. In this case, Timestream will reject this update with a <code>RejectedRecordsException</code> since the updated record’s version is not greater than the existing value of Version. </p> <p>However, if you were to resend the update request with <code>Version</code> set to <code>2</code>, Timestream would then succeed in updating the record’s value, and the <code>Version</code> would be set to <code>2</code>. Next, suppose you sent a <code>WriteRecords</code> request with this same record and an identical measure value, but with <code>Version</code> set to <code>3</code>. In this case, Timestream would only update <code>Version</code> to <code>3</code>. Any further updates would need to send a version number greater than <code>3</code>, or the update requests would receive a <code>RejectedRecordsException</code>. </p>

## CreateBatchLoadTask

Creates a new Timestream batch load task. A batch load task processes data from a CSV source in an S3 location and writes to a Timestream table. A mapping from source to target is defined in a batch load task. Errors and events are written to a report at an S3 location. For the report, if the KMS key is not specified, the batch load task will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-batch-load.html">code sample</a>.

### Example Usage

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
    res, err := s.SDK.CreateBatchLoadTask(ctx, operations.CreateBatchLoadTaskRequest{
        CreateBatchLoadTaskRequest: shared.CreateBatchLoadTaskRequest{
            ClientToken: sdk.String("quidem"),
            DataModelConfiguration: &shared.DataModelConfiguration{
                DataModel: &shared.DataModel{
                    DimensionMappings: []shared.DimensionMapping{
                        shared.DimensionMapping{
                            DestinationColumn: sdk.String("ipsa"),
                            SourceColumn: sdk.String("reiciendis"),
                        },
                    },
                    MeasureNameColumn: sdk.String("est"),
                    MixedMeasureMappings: []shared.MixedMeasureMapping{
                        shared.MixedMeasureMapping{
                            MeasureName: sdk.String("laborum"),
                            MeasureValueType: shared.MeasureValueTypeEnumBigint,
                            MultiMeasureAttributeMappings: []shared.MultiMeasureAttributeMapping{
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: shared.ScalarMeasureValueTypeEnumBigint.ToPointer(),
                                    SourceColumn: "explicabo",
                                    TargetMultiMeasureAttributeName: sdk.String("nobis"),
                                },
                            },
                            SourceColumn: sdk.String("enim"),
                            TargetMeasureName: sdk.String("omnis"),
                        },
                        shared.MixedMeasureMapping{
                            MeasureName: sdk.String("nemo"),
                            MeasureValueType: shared.MeasureValueTypeEnumBigint,
                            MultiMeasureAttributeMappings: []shared.MultiMeasureAttributeMapping{
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: shared.ScalarMeasureValueTypeEnumDouble.ToPointer(),
                                    SourceColumn: "iure",
                                    TargetMultiMeasureAttributeName: sdk.String("culpa"),
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: shared.ScalarMeasureValueTypeEnumTimestamp.ToPointer(),
                                    SourceColumn: "sapiente",
                                    TargetMultiMeasureAttributeName: sdk.String("architecto"),
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: shared.ScalarMeasureValueTypeEnumVarchar.ToPointer(),
                                    SourceColumn: "dolorem",
                                    TargetMultiMeasureAttributeName: sdk.String("culpa"),
                                },
                            },
                            SourceColumn: sdk.String("consequuntur"),
                            TargetMeasureName: sdk.String("repellat"),
                        },
                        shared.MixedMeasureMapping{
                            MeasureName: sdk.String("mollitia"),
                            MeasureValueType: shared.MeasureValueTypeEnumBoolean,
                            MultiMeasureAttributeMappings: []shared.MultiMeasureAttributeMapping{
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: shared.ScalarMeasureValueTypeEnumBoolean.ToPointer(),
                                    SourceColumn: "quam",
                                    TargetMultiMeasureAttributeName: sdk.String("molestiae"),
                                },
                                shared.MultiMeasureAttributeMapping{
                                    MeasureValueType: shared.ScalarMeasureValueTypeEnumBigint.ToPointer(),
                                    SourceColumn: "error",
                                    TargetMultiMeasureAttributeName: sdk.String("quia"),
                                },
                            },
                            SourceColumn: sdk.String("quis"),
                            TargetMeasureName: sdk.String("vitae"),
                        },
                    },
                    MultiMeasureMappings: &shared.MultiMeasureMappings{
                        MultiMeasureAttributeMappings: []shared.MultiMeasureAttributeMapping{
                            shared.MultiMeasureAttributeMapping{
                                MeasureValueType: shared.ScalarMeasureValueTypeEnumVarchar.ToPointer(),
                                SourceColumn: "enim",
                                TargetMultiMeasureAttributeName: sdk.String("odit"),
                            },
                            shared.MultiMeasureAttributeMapping{
                                MeasureValueType: shared.ScalarMeasureValueTypeEnumVarchar.ToPointer(),
                                SourceColumn: "sequi",
                                TargetMultiMeasureAttributeName: sdk.String("tenetur"),
                            },
                            shared.MultiMeasureAttributeMapping{
                                MeasureValueType: shared.ScalarMeasureValueTypeEnumBigint.ToPointer(),
                                SourceColumn: "id",
                                TargetMultiMeasureAttributeName: sdk.String("possimus"),
                            },
                        },
                        TargetMultiMeasureName: sdk.String("aut"),
                    },
                    TimeColumn: sdk.String("quasi"),
                    TimeUnit: shared.TimeUnitEnumMicroseconds.ToPointer(),
                },
                DataModelS3Configuration: &shared.DataModelS3Configuration{
                    BucketName: sdk.String("temporibus"),
                    ObjectKey: sdk.String("laborum"),
                },
            },
            DataSourceConfiguration: shared.DataSourceConfiguration{
                CsvConfiguration: &shared.CsvConfiguration{
                    ColumnSeparator: sdk.String("quasi"),
                    EscapeChar: sdk.String("reiciendis"),
                    NullValue: sdk.String("voluptatibus"),
                    QuoteChar: sdk.String("vero"),
                    TrimWhiteSpace: sdk.Bool(false),
                },
                DataFormat: shared.BatchLoadDataFormatEnumCsv,
                DataSourceS3Configuration: shared.DataSourceS3Configuration{
                    BucketName: "nihil",
                    ObjectKeyPrefix: sdk.String("praesentium"),
                },
            },
            RecordVersion: sdk.Int64(976762),
            ReportConfiguration: shared.ReportConfiguration{
                ReportS3Configuration: &shared.ReportS3Configuration{
                    BucketName: "ipsa",
                    EncryptionOption: shared.S3EncryptionOptionEnumSseKms.ToPointer(),
                    KmsKeyID: sdk.String("voluptate"),
                    ObjectKeyPrefix: sdk.String("cum"),
                },
            },
            TargetDatabaseName: "perferendis",
            TargetTableName: "doloremque",
        },
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("iusto"),
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

## CreateDatabase

Creates a new Timestream database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-db.html">code sample</a>. 

### Example Usage

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
    res, err := s.SDK.CreateDatabase(ctx, operations.CreateDatabaseRequest{
        CreateDatabaseRequest: shared.CreateDatabaseRequest{
            DatabaseName: "dicta",
            KmsKeyID: sdk.String("harum"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "accusamus",
                    Value: "commodi",
                },
                shared.Tag{
                    Key: "repudiandae",
                    Value: "quae",
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.CreateDatabaseXAmzTargetEnumTimestream20181101CreateDatabase,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatabaseResponse != nil {
        // handle response
    }
}
```

## CreateTable

Adds a new table to an existing database in your account. In an Amazon Web Services account, table names must be at least unique within each Region if they are in the same database. You might have identical table names in the same Region if the tables are in separate databases. While creating the table, you must specify the table name, database name, and the retention properties. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-table.html">code sample</a> for details. 

### Example Usage

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
    res, err := s.SDK.CreateTable(ctx, operations.CreateTableRequest{
        CreateTableRequest: shared.CreateTableRequest{
            DatabaseName: "rem",
            MagneticStoreWriteProperties: &shared.MagneticStoreWriteProperties{
                EnableMagneticStoreWrites: false,
                MagneticStoreRejectedDataLocation: &shared.MagneticStoreRejectedDataLocation{
                    S3Configuration: &shared.S3Configuration{
                        BucketName: sdk.String("voluptates"),
                        EncryptionOption: shared.S3EncryptionOptionEnumSseS3.ToPointer(),
                        KmsKeyID: sdk.String("repudiandae"),
                        ObjectKeyPrefix: sdk.String("sint"),
                    },
                },
            },
            RetentionProperties: &shared.RetentionProperties{
                MagneticStoreRetentionPeriodInDays: 83112,
                MemoryStoreRetentionPeriodInHours: 929297,
            },
            TableName: "incidunt",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "consequatur",
                    Value: "est",
                },
                shared.Tag{
                    Key: "quibusdam",
                    Value: "explicabo",
                },
            },
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.CreateTableXAmzTargetEnumTimestream20181101CreateTable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTableResponse != nil {
        // handle response
    }
}
```

## DeleteDatabase

<p>Deletes a given Timestream database. <i>This is an irreversible operation. After a database is deleted, the time-series data from its tables cannot be recovered.</i> </p> <note> <p>All tables in the database must be deleted first, or a ValidationException error will be thrown. </p> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-db.html">code sample</a> for details.</p>

### Example Usage

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
    res, err := s.SDK.DeleteDatabase(ctx, operations.DeleteDatabaseRequest{
        DeleteDatabaseRequest: shared.DeleteDatabaseRequest{
            DatabaseName: "cupiditate",
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.DeleteDatabaseXAmzTargetEnumTimestream20181101DeleteDatabase,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteTable

<p>Deletes a given Timestream table. This is an irreversible operation. After a Timestream database table is deleted, the time-series data stored in the table cannot be recovered. </p> <note> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-table.html">code sample</a> for details.</p>

### Example Usage

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
    res, err := s.SDK.DeleteTable(ctx, operations.DeleteTableRequest{
        DeleteTableRequest: shared.DeleteTableRequest{
            DatabaseName: "dolorum",
            TableName: "excepturi",
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("non"),
        XAmzTarget: operations.DeleteTableXAmzTargetEnumTimestream20181101DeleteTable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeBatchLoadTask

Returns information about the batch load task, including configurations, mappings, progress, and other details. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-batch-load.html">code sample</a> for details.

### Example Usage

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
    res, err := s.SDK.DescribeBatchLoadTask(ctx, operations.DescribeBatchLoadTaskRequest{
        DescribeBatchLoadTaskRequest: shared.DescribeBatchLoadTaskRequest{
            TaskID: "eligendi",
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.DescribeBatchLoadTaskXAmzTargetEnumTimestream20181101DescribeBatchLoadTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeBatchLoadTaskResponse != nil {
        // handle response
    }
}
```

## DescribeDatabase

Returns information about the database, including the database name, time that the database was created, and the total number of tables found within the database. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-db.html">code sample</a> for details.

### Example Usage

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
    res, err := s.SDK.DescribeDatabase(ctx, operations.DescribeDatabaseRequest{
        DescribeDatabaseRequest: shared.DescribeDatabaseRequest{
            DatabaseName: "debitis",
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzTarget: operations.DescribeDatabaseXAmzTargetEnumTimestream20181101DescribeDatabase,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDatabaseResponse != nil {
        // handle response
    }
}
```

## DescribeEndpoints

<p>Returns a list of available endpoints to make Timestream API calls against. This API operation is available through both the Write and Query APIs.</p> <p>Because the Timestream SDKs are designed to transparently work with the service’s architecture, including the management and mapping of the service endpoints, <i>we don't recommend that you use this API operation unless</i>:</p> <ul> <li> <p>You are using <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/VPCEndpoints">VPC endpoints (Amazon Web Services PrivateLink) with Timestream</a> </p> </li> <li> <p>Your application uses a programming language that does not yet have SDK support</p> </li> <li> <p>You require better control over the client-side implementation</p> </li> </ul> <p>For detailed information on how and when to use and implement DescribeEndpoints, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using.API.html#Using-API.endpoint-discovery">The Endpoint Discovery Pattern</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeEndpoints(ctx, operations.DescribeEndpointsRequest{
        RequestBody: map[string]interface{}{
            "magnam": "cumque",
        },
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.DescribeEndpointsXAmzTargetEnumTimestream20181101DescribeEndpoints,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEndpointsResponse != nil {
        // handle response
    }
}
```

## DescribeTable

Returns information about the table, including the table name, database name, retention duration of the memory store and the magnetic store. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-table.html">code sample</a> for details. 

### Example Usage

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
    res, err := s.SDK.DescribeTable(ctx, operations.DescribeTableRequest{
        DescribeTableRequest: shared.DescribeTableRequest{
            DatabaseName: "enim",
            TableName: "accusamus",
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.DescribeTableXAmzTargetEnumTimestream20181101DescribeTable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTableResponse != nil {
        // handle response
    }
}
```

## ListBatchLoadTasks

Provides a list of batch load tasks, along with the name, status, when the task is resumable until, and other details. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-batch-load-tasks.html">code sample</a> for details.

### Example Usage

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
    res, err := s.SDK.ListBatchLoadTasks(ctx, operations.ListBatchLoadTasksRequest{
        ListBatchLoadTasksRequest: shared.ListBatchLoadTasksRequest{
            MaxResults: sdk.Int64(956084),
            NextToken: sdk.String("amet"),
            TaskStatus: shared.BatchLoadStatusEnumSucceeded.ToPointer(),
        },
        MaxResults: sdk.String("nisi"),
        NextToken: sdk.String("vel"),
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.ListBatchLoadTasksXAmzTargetEnumTimestream20181101ListBatchLoadTasks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBatchLoadTasksResponse != nil {
        // handle response
    }
}
```

## ListDatabases

Returns a list of your Timestream databases. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-db.html">code sample</a> for details. 

### Example Usage

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
    res, err := s.SDK.ListDatabases(ctx, operations.ListDatabasesRequest{
        ListDatabasesRequest: shared.ListDatabasesRequest{
            MaxResults: sdk.Int64(660174),
            NextToken: sdk.String("labore"),
        },
        MaxResults: sdk.String("labore"),
        NextToken: sdk.String("suscipit"),
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.ListDatabasesXAmzTargetEnumTimestream20181101ListDatabases,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDatabasesResponse != nil {
        // handle response
    }
}
```

## ListTables

Provides a list of tables, along with the name, status, and retention properties of each table. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-table.html">code sample</a> for details. 

### Example Usage

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
    res, err := s.SDK.ListTables(ctx, operations.ListTablesRequest{
        ListTablesRequest: shared.ListTablesRequest{
            DatabaseName: sdk.String("et"),
            MaxResults: sdk.Int64(569965),
            NextToken: sdk.String("ullam"),
        },
        MaxResults: sdk.String("provident"),
        NextToken: sdk.String("quos"),
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.ListTablesXAmzTargetEnumTimestream20181101ListTables,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTablesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

 Lists all tags on a Timestream resource. 

### Example Usage

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceARN: "dolor",
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumTimestream20181101ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ResumeBatchLoadTask

 

### Example Usage

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
    res, err := s.SDK.ResumeBatchLoadTask(ctx, operations.ResumeBatchLoadTaskRequest{
        ResumeBatchLoadTaskRequest: shared.ResumeBatchLoadTaskRequest{
            TaskID: "eius",
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        XAmzTarget: operations.ResumeBatchLoadTaskXAmzTargetEnumTimestream20181101ResumeBatchLoadTask,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResumeBatchLoadTaskResponse != nil {
        // handle response
    }
}
```

## TagResource

 Associates a set of tags with a Timestream resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. 

### Example Usage

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceARN: "ullam",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "nihil",
                    Value: "repellat",
                },
                shared.Tag{
                    Key: "quibusdam",
                    Value: "sed",
                },
                shared.Tag{
                    Key: "saepe",
                    Value: "pariatur",
                },
            },
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumTimestream20181101TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

 Removes the association of tags from a Timestream resource. 

### Example Usage

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceARN: "illum",
            TagKeys: []string{
                "maxime",
                "ea",
                "excepturi",
                "odit",
            },
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumTimestream20181101UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateDatabase

<p> Modifies the KMS key for an existing database. While updating the database, you must specify the database name and the identifier of the new KMS key to be used (<code>KmsKeyId</code>). If there are any concurrent <code>UpdateDatabase</code> requests, first writer wins. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-db.html">code sample</a> for details.</p>

### Example Usage

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
    res, err := s.SDK.UpdateDatabase(ctx, operations.UpdateDatabaseRequest{
        UpdateDatabaseRequest: shared.UpdateDatabaseRequest{
            DatabaseName: "autem",
            KmsKeyID: "nam",
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.UpdateDatabaseXAmzTargetEnumTimestream20181101UpdateDatabase,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDatabaseResponse != nil {
        // handle response
    }
}
```

## UpdateTable

<p>Modifies the retention duration of the memory store and magnetic store for your Timestream table. Note that the change in retention duration takes effect immediately. For example, if the retention period of the memory store was initially set to 2 hours and then changed to 24 hours, the memory store will be capable of holding 24 hours of data, but will be populated with 24 hours of data 22 hours after this change was made. Timestream does not retrieve data from the magnetic store to populate the memory store. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-table.html">code sample</a> for details.</p>

### Example Usage

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
    res, err := s.SDK.UpdateTable(ctx, operations.UpdateTableRequest{
        UpdateTableRequest: shared.UpdateTableRequest{
            DatabaseName: "aut",
            MagneticStoreWriteProperties: &shared.MagneticStoreWriteProperties{
                EnableMagneticStoreWrites: false,
                MagneticStoreRejectedDataLocation: &shared.MagneticStoreRejectedDataLocation{
                    S3Configuration: &shared.S3Configuration{
                        BucketName: sdk.String("cumque"),
                        EncryptionOption: shared.S3EncryptionOptionEnumSseS3.ToPointer(),
                        KmsKeyID: sdk.String("hic"),
                        ObjectKeyPrefix: sdk.String("libero"),
                    },
                },
            },
            RetentionProperties: &shared.RetentionProperties{
                MagneticStoreRetentionPeriodInDays: 749999,
                MemoryStoreRetentionPeriodInHours: 171629,
            },
            TableName: "quis",
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("nesciunt"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.UpdateTableXAmzTargetEnumTimestream20181101UpdateTable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTableResponse != nil {
        // handle response
    }
}
```

## WriteRecords

<p>Enables you to write your time-series data into Timestream. You can specify a single data point or a batch of data points to be inserted into the system. Timestream offers you a flexible schema that auto detects the column names and data types for your Timestream tables based on the dimension names and data types of the data points you specify when invoking writes into the database. </p> <p>Timestream supports eventual consistency read semantics. This means that when you query data immediately after writing a batch of data into Timestream, the query results might not reflect the results of a recently completed write operation. The results may also include some stale data. If you repeat the query request after a short time, the results should return the latest data. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.write.html">code sample</a> for details.</p> <p> <b>Upserts</b> </p> <p>You can use the <code>Version</code> parameter in a <code>WriteRecords</code> request to update data points. Timestream tracks a version number with each record. <code>Version</code> defaults to <code>1</code> when it's not specified for the record in the request. Timestream updates an existing record’s measure value along with its <code>Version</code> when it receives a write request with a higher <code>Version</code> number for that record. When it receives an update request where the measure value is the same as that of the existing record, Timestream still updates <code>Version</code>, if it is greater than the existing value of <code>Version</code>. You can update a data point as many times as desired, as long as the value of <code>Version</code> continuously increases. </p> <p> For example, suppose you write a new record without indicating <code>Version</code> in the request. Timestream stores this record, and set <code>Version</code> to <code>1</code>. Now, suppose you try to update this record with a <code>WriteRecords</code> request of the same record with a different measure value but, like before, do not provide <code>Version</code>. In this case, Timestream will reject this update with a <code>RejectedRecordsException</code> since the updated record’s version is not greater than the existing value of Version. </p> <p>However, if you were to resend the update request with <code>Version</code> set to <code>2</code>, Timestream would then succeed in updating the record’s value, and the <code>Version</code> would be set to <code>2</code>. Next, suppose you sent a <code>WriteRecords</code> request with this same record and an identical measure value, but with <code>Version</code> set to <code>3</code>. In this case, Timestream would only update <code>Version</code> to <code>3</code>. Any further updates would need to send a version number greater than <code>3</code>, or the update requests would receive a <code>RejectedRecordsException</code>. </p>

### Example Usage

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
    res, err := s.SDK.WriteRecords(ctx, operations.WriteRecordsRequest{
        WriteRecordsRequest: shared.WriteRecordsRequest{
            CommonAttributes: &shared.Record{
                Dimensions: []shared.Dimension{
                    shared.Dimension{
                        DimensionValueType: shared.DimensionValueTypeEnumVarchar.ToPointer(),
                        Name: "Darryl Fadel",
                        Value: "hic",
                    },
                },
                MeasureName: sdk.String("recusandae"),
                MeasureValue: sdk.String("omnis"),
                MeasureValueType: shared.MeasureValueTypeEnumTimestamp.ToPointer(),
                MeasureValues: []shared.MeasureValue{
                    shared.MeasureValue{
                        Name: "Robyn Cruickshank",
                        Type: shared.MeasureValueTypeEnumDouble,
                        Value: "occaecati",
                    },
                    shared.MeasureValue{
                        Name: "Travis Zemlak",
                        Type: shared.MeasureValueTypeEnumBoolean,
                        Value: "dolorum",
                    },
                    shared.MeasureValue{
                        Name: "Ervin McLaughlin",
                        Type: shared.MeasureValueTypeEnumMulti,
                        Value: "quaerat",
                    },
                },
                Time: sdk.String("quos"),
                TimeUnit: shared.TimeUnitEnumSeconds.ToPointer(),
                Version: sdk.Int64(212390),
            },
            DatabaseName: "dolorem",
            Records: []shared.Record{
                shared.Record{
                    Dimensions: []shared.Dimension{
                        shared.Dimension{
                            DimensionValueType: shared.DimensionValueTypeEnumVarchar.ToPointer(),
                            Name: "Mindy Marks",
                            Value: "dignissimos",
                        },
                    },
                    MeasureName: sdk.String("reiciendis"),
                    MeasureValue: sdk.String("amet"),
                    MeasureValueType: shared.MeasureValueTypeEnumTimestamp.ToPointer(),
                    MeasureValues: []shared.MeasureValue{
                        shared.MeasureValue{
                            Name: "Melissa Bednar",
                            Type: shared.MeasureValueTypeEnumBigint,
                            Value: "accusamus",
                        },
                        shared.MeasureValue{
                            Name: "Jan Hodkiewicz",
                            Type: shared.MeasureValueTypeEnumBoolean,
                            Value: "sit",
                        },
                    },
                    Time: sdk.String("fugiat"),
                    TimeUnit: shared.TimeUnitEnumMilliseconds.ToPointer(),
                    Version: sdk.Int64(743835),
                },
            },
            TableName: "dolorum",
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.WriteRecordsXAmzTargetEnumTimestream20181101WriteRecords,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WriteRecordsResponse != nil {
        // handle response
    }
}
```
