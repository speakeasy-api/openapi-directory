# SDK

## Overview

<fullname>Amazon Timestream Write</fullname> <p>Amazon Timestream is a fast, scalable, fully managed time-series database service that makes it easy to store and analyze trillions of time-series data points per day. With Timestream, you can easily store and analyze IoT sensor data to derive insights from your IoT applications. You can analyze industrial telemetry to streamline equipment management and maintenance. You can also store and analyze log data and metrics to improve the performance and availability of your applications. </p> <p>Timestream is built from the ground up to effectively ingest, process, and store time-series data. It organizes data to optimize query processing. It automatically scales based on the volume of data ingested and on the query volume to ensure you receive optimal performance while inserting and querying data. As your data grows over time, Timestream’s adaptive query processing engine spans across storage tiers to provide fast analysis while reducing costs.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/timestream/>
### Available Operations

* [createBatchLoadTask](#createbatchloadtask) - Creates a new Timestream batch load task. A batch load task processes data from a CSV source in an S3 location and writes to a Timestream table. A mapping from source to target is defined in a batch load task. Errors and events are written to a report at an S3 location. For the report, if the KMS key is not specified, the batch load task will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-batch-load.html">code sample</a>.
* [createDatabase](#createdatabase) - Creates a new Timestream database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-db.html">code sample</a>. 
* [createTable](#createtable) - Adds a new table to an existing database in your account. In an Amazon Web Services account, table names must be at least unique within each Region if they are in the same database. You might have identical table names in the same Region if the tables are in separate databases. While creating the table, you must specify the table name, database name, and the retention properties. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-table.html">code sample</a> for details. 
* [deleteDatabase](#deletedatabase) - <p>Deletes a given Timestream database. <i>This is an irreversible operation. After a database is deleted, the time-series data from its tables cannot be recovered.</i> </p> <note> <p>All tables in the database must be deleted first, or a ValidationException error will be thrown. </p> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-db.html">code sample</a> for details.</p>
* [deleteTable](#deletetable) - <p>Deletes a given Timestream table. This is an irreversible operation. After a Timestream database table is deleted, the time-series data stored in the table cannot be recovered. </p> <note> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-table.html">code sample</a> for details.</p>
* [describeBatchLoadTask](#describebatchloadtask) - Returns information about the batch load task, including configurations, mappings, progress, and other details. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-batch-load.html">code sample</a> for details.
* [describeDatabase](#describedatabase) - Returns information about the database, including the database name, time that the database was created, and the total number of tables found within the database. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-db.html">code sample</a> for details.
* [describeEndpoints](#describeendpoints) - <p>Returns a list of available endpoints to make Timestream API calls against. This API operation is available through both the Write and Query APIs.</p> <p>Because the Timestream SDKs are designed to transparently work with the service’s architecture, including the management and mapping of the service endpoints, <i>we don't recommend that you use this API operation unless</i>:</p> <ul> <li> <p>You are using <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/VPCEndpoints">VPC endpoints (Amazon Web Services PrivateLink) with Timestream</a> </p> </li> <li> <p>Your application uses a programming language that does not yet have SDK support</p> </li> <li> <p>You require better control over the client-side implementation</p> </li> </ul> <p>For detailed information on how and when to use and implement DescribeEndpoints, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using.API.html#Using-API.endpoint-discovery">The Endpoint Discovery Pattern</a>.</p>
* [describeTable](#describetable) - Returns information about the table, including the table name, database name, retention duration of the memory store and the magnetic store. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-table.html">code sample</a> for details. 
* [listBatchLoadTasks](#listbatchloadtasks) - Provides a list of batch load tasks, along with the name, status, when the task is resumable until, and other details. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-batch-load-tasks.html">code sample</a> for details.
* [listDatabases](#listdatabases) - Returns a list of your Timestream databases. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-db.html">code sample</a> for details. 
* [listTables](#listtables) - Provides a list of tables, along with the name, status, and retention properties of each table. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-table.html">code sample</a> for details. 
* [listTagsForResource](#listtagsforresource) -  Lists all tags on a Timestream resource. 
* [resumeBatchLoadTask](#resumebatchloadtask) -  
* [tagResource](#tagresource) -  Associates a set of tags with a Timestream resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. 
* [untagResource](#untagresource) -  Removes the association of tags from a Timestream resource. 
* [updateDatabase](#updatedatabase) - <p> Modifies the KMS key for an existing database. While updating the database, you must specify the database name and the identifier of the new KMS key to be used (<code>KmsKeyId</code>). If there are any concurrent <code>UpdateDatabase</code> requests, first writer wins. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-db.html">code sample</a> for details.</p>
* [updateTable](#updatetable) - <p>Modifies the retention duration of the memory store and magnetic store for your Timestream table. Note that the change in retention duration takes effect immediately. For example, if the retention period of the memory store was initially set to 2 hours and then changed to 24 hours, the memory store will be capable of holding 24 hours of data, but will be populated with 24 hours of data 22 hours after this change was made. Timestream does not retrieve data from the magnetic store to populate the memory store. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-table.html">code sample</a> for details.</p>
* [writeRecords](#writerecords) - <p>Enables you to write your time-series data into Timestream. You can specify a single data point or a batch of data points to be inserted into the system. Timestream offers you a flexible schema that auto detects the column names and data types for your Timestream tables based on the dimension names and data types of the data points you specify when invoking writes into the database. </p> <p>Timestream supports eventual consistency read semantics. This means that when you query data immediately after writing a batch of data into Timestream, the query results might not reflect the results of a recently completed write operation. The results may also include some stale data. If you repeat the query request after a short time, the results should return the latest data. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.write.html">code sample</a> for details.</p> <p> <b>Upserts</b> </p> <p>You can use the <code>Version</code> parameter in a <code>WriteRecords</code> request to update data points. Timestream tracks a version number with each record. <code>Version</code> defaults to <code>1</code> when it's not specified for the record in the request. Timestream updates an existing record’s measure value along with its <code>Version</code> when it receives a write request with a higher <code>Version</code> number for that record. When it receives an update request where the measure value is the same as that of the existing record, Timestream still updates <code>Version</code>, if it is greater than the existing value of <code>Version</code>. You can update a data point as many times as desired, as long as the value of <code>Version</code> continuously increases. </p> <p> For example, suppose you write a new record without indicating <code>Version</code> in the request. Timestream stores this record, and set <code>Version</code> to <code>1</code>. Now, suppose you try to update this record with a <code>WriteRecords</code> request of the same record with a different measure value but, like before, do not provide <code>Version</code>. In this case, Timestream will reject this update with a <code>RejectedRecordsException</code> since the updated record’s version is not greater than the existing value of Version. </p> <p>However, if you were to resend the update request with <code>Version</code> set to <code>2</code>, Timestream would then succeed in updating the record’s value, and the <code>Version</code> would be set to <code>2</code>. Next, suppose you sent a <code>WriteRecords</code> request with this same record and an identical measure value, but with <code>Version</code> set to <code>3</code>. In this case, Timestream would only update <code>Version</code> to <code>3</code>. Any further updates would need to send a version number greater than <code>3</code>, or the update requests would receive a <code>RejectedRecordsException</code>. </p>

## createBatchLoadTask

Creates a new Timestream batch load task. A batch load task processes data from a CSV source in an S3 location and writes to a Timestream table. A mapping from source to target is defined in a batch load task. Errors and events are written to a report at an S3 location. For the report, if the KMS key is not specified, the batch load task will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-batch-load.html">code sample</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBatchLoadTaskRequest;
import org.openapis.openapi.models.operations.CreateBatchLoadTaskResponse;
import org.openapis.openapi.models.operations.CreateBatchLoadTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchLoadDataFormatEnum;
import org.openapis.openapi.models.shared.CreateBatchLoadTaskRequest;
import org.openapis.openapi.models.shared.CsvConfiguration;
import org.openapis.openapi.models.shared.DataModel;
import org.openapis.openapi.models.shared.DataModelConfiguration;
import org.openapis.openapi.models.shared.DataModelS3Configuration;
import org.openapis.openapi.models.shared.DataSourceConfiguration;
import org.openapis.openapi.models.shared.DataSourceS3Configuration;
import org.openapis.openapi.models.shared.DimensionMapping;
import org.openapis.openapi.models.shared.MeasureValueTypeEnum;
import org.openapis.openapi.models.shared.MixedMeasureMapping;
import org.openapis.openapi.models.shared.MultiMeasureAttributeMapping;
import org.openapis.openapi.models.shared.MultiMeasureMappings;
import org.openapis.openapi.models.shared.ReportConfiguration;
import org.openapis.openapi.models.shared.ReportS3Configuration;
import org.openapis.openapi.models.shared.S3EncryptionOptionEnum;
import org.openapis.openapi.models.shared.ScalarMeasureValueTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBatchLoadTaskRequest req = new CreateBatchLoadTaskRequest(                new CreateBatchLoadTaskRequest(                new DataSourceConfiguration(BatchLoadDataFormatEnum.CSV,                 new DataSourceS3Configuration("nemo") {{
                                                                objectKeyPrefix = "minima";
                                                            }};) {{
                                                csvConfiguration = new CsvConfiguration() {{
                                                    columnSeparator = "excepturi";
                                                    escapeChar = "accusantium";
                                                    nullValue = "iure";
                                                    quoteChar = "culpa";
                                                    trimWhiteSpace = false;
                                                }};;
                                            }};,                 new ReportConfiguration() {{
                                                reportS3Configuration = new ReportS3Configuration("doloribus") {{
                                                    encryptionOption = S3EncryptionOptionEnum.SSE_KMS;
                                                    kmsKeyId = "architecto";
                                                    objectKeyPrefix = "mollitia";
                                                }};;
                                            }};, "dolorem", "culpa") {{
                                clientToken = "consequuntur";
                                dataModelConfiguration = new DataModelConfiguration() {{
                                    dataModel = new DataModel(                new org.openapis.openapi.models.shared.DimensionMapping[]{{
                                                        add(new DimensionMapping() {{
                                                            destinationColumn = "mollitia";
                                                            sourceColumn = "occaecati";
                                                        }}),
                                                        add(new DimensionMapping() {{
                                                            destinationColumn = "numquam";
                                                            sourceColumn = "commodi";
                                                        }}),
                                                        add(new DimensionMapping() {{
                                                            destinationColumn = "quam";
                                                            sourceColumn = "molestiae";
                                                        }}),
                                                        add(new DimensionMapping() {{
                                                            destinationColumn = "velit";
                                                            sourceColumn = "error";
                                                        }}),
                                                    }}) {{
                                        measureNameColumn = "quia";
                                        mixedMeasureMappings = new org.openapis.openapi.models.shared.MixedMeasureMapping[]{{
                                            add(new MixedMeasureMapping(MeasureValueTypeEnum.MULTI) {{
                                                measureName = "vitae";
                                                measureValueType = MeasureValueTypeEnum.TIMESTAMP;
                                                multiMeasureAttributeMappings = new org.openapis.openapi.models.shared.MultiMeasureAttributeMapping[]{{
                                                    add(new MultiMeasureAttributeMapping("sequi") {{
                                                        measureValueType = ScalarMeasureValueTypeEnum.BIGINT;
                                                        sourceColumn = "odit";
                                                        targetMultiMeasureAttributeName = "quo";
                                                    }}),
                                                    add(new MultiMeasureAttributeMapping("possimus") {{
                                                        measureValueType = ScalarMeasureValueTypeEnum.TIMESTAMP;
                                                        sourceColumn = "ipsam";
                                                        targetMultiMeasureAttributeName = "id";
                                                    }}),
                                                    add(new MultiMeasureAttributeMapping("temporibus") {{
                                                        measureValueType = ScalarMeasureValueTypeEnum.DOUBLE;
                                                        sourceColumn = "quasi";
                                                        targetMultiMeasureAttributeName = "error";
                                                    }}),
                                                }};
                                                sourceColumn = "laborum";
                                                targetMeasureName = "quasi";
                                            }}),
                                            add(new MixedMeasureMapping(MeasureValueTypeEnum.MULTI) {{
                                                measureName = "voluptatibus";
                                                measureValueType = MeasureValueTypeEnum.MULTI;
                                                multiMeasureAttributeMappings = new org.openapis.openapi.models.shared.MultiMeasureAttributeMapping[]{{
                                                    add(new MultiMeasureAttributeMapping("omnis") {{
                                                        measureValueType = ScalarMeasureValueTypeEnum.BOOLEAN_;
                                                        sourceColumn = "voluptatibus";
                                                        targetMultiMeasureAttributeName = "ipsa";
                                                    }}),
                                                    add(new MultiMeasureAttributeMapping("doloremque") {{
                                                        measureValueType = ScalarMeasureValueTypeEnum.BOOLEAN_;
                                                        sourceColumn = "cum";
                                                        targetMultiMeasureAttributeName = "perferendis";
                                                    }}),
                                                }};
                                                sourceColumn = "reprehenderit";
                                                targetMeasureName = "ut";
                                            }}),
                                        }};
                                        multiMeasureMappings = new MultiMeasureMappings(                new org.openapis.openapi.models.shared.MultiMeasureAttributeMapping[]{{
                                                            add(new MultiMeasureAttributeMapping("dicta") {{
                                                                measureValueType = ScalarMeasureValueTypeEnum.BIGINT;
                                                                sourceColumn = "dolore";
                                                                targetMultiMeasureAttributeName = "iusto";
                                                            }}),
                                                        }}) {{
                                            targetMultiMeasureName = "harum";
                                        }};;
                                        timeColumn = "enim";
                                        timeUnit = TimeUnitEnum.NANOSECONDS;
                                    }};;
                                    dataModelS3Configuration = new DataModelS3Configuration() {{
                                        bucketName = "commodi";
                                        objectKey = "repudiandae";
                                    }};;
                                }};;
                                recordVersion = 64147L;
                            }};, CreateBatchLoadTaskXAmzTargetEnum.TIMESTREAM20181101_CREATE_BATCH_LOAD_TASK) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "molestias";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "praesentium";
            }};            

            CreateBatchLoadTaskResponse res = sdk.sdk.createBatchLoadTask(req);

            if (res.createBatchLoadTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDatabase

Creates a new Timestream database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-db.html">code sample</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDatabaseRequest;
import org.openapis.openapi.models.operations.CreateDatabaseResponse;
import org.openapis.openapi.models.operations.CreateDatabaseXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDatabaseRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDatabaseRequest req = new CreateDatabaseRequest(                new CreateDatabaseRequest("voluptates") {{
                                kmsKeyId = "quasi";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("itaque", "incidunt") {{
                                        key = "sint";
                                        value = "veritatis";
                                    }}),
                                    add(new Tag("est", "quibusdam") {{
                                        key = "enim";
                                        value = "consequatur";
                                    }}),
                                    add(new Tag("distinctio", "quibusdam") {{
                                        key = "explicabo";
                                        value = "deserunt";
                                    }}),
                                    add(new Tag("qui", "aliquid") {{
                                        key = "labore";
                                        value = "modi";
                                    }}),
                                }};
                            }};, CreateDatabaseXAmzTargetEnum.TIMESTREAM20181101_CREATE_DATABASE) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "quos";
                xAmzCredential = "perferendis";
                xAmzDate = "magni";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "alias";
            }};            

            CreateDatabaseResponse res = sdk.sdk.createDatabase(req);

            if (res.createDatabaseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTable

Adds a new table to an existing database in your account. In an Amazon Web Services account, table names must be at least unique within each Region if they are in the same database. You might have identical table names in the same Region if the tables are in separate databases. While creating the table, you must specify the table name, database name, and the retention properties. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-table.html">code sample</a> for details. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTableRequest;
import org.openapis.openapi.models.operations.CreateTableResponse;
import org.openapis.openapi.models.operations.CreateTableXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateTableRequest;
import org.openapis.openapi.models.shared.MagneticStoreRejectedDataLocation;
import org.openapis.openapi.models.shared.MagneticStoreWriteProperties;
import org.openapis.openapi.models.shared.RetentionProperties;
import org.openapis.openapi.models.shared.S3Configuration;
import org.openapis.openapi.models.shared.S3EncryptionOptionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTableRequest req = new CreateTableRequest(                new CreateTableRequest("dolorum", "excepturi") {{
                                magneticStoreWriteProperties = new MagneticStoreWriteProperties(false) {{
                                    magneticStoreRejectedDataLocation = new MagneticStoreRejectedDataLocation() {{
                                        s3Configuration = new S3Configuration() {{
                                            bucketName = "tempora";
                                            encryptionOption = S3EncryptionOptionEnum.SSE_KMS;
                                            kmsKeyId = "tempore";
                                            objectKeyPrefix = "labore";
                                        }};;
                                    }};;
                                }};;
                                retentionProperties = new RetentionProperties(962189L, 433288L);;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("aliquid", "provident") {{
                                        key = "eligendi";
                                        value = "sint";
                                    }}),
                                }};
                            }};, CreateTableXAmzTargetEnum.TIMESTREAM20181101_CREATE_TABLE) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "sint";
                xAmzCredential = "officia";
                xAmzDate = "dolor";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "a";
                xAmzSignedHeaders = "dolorum";
            }};            

            CreateTableResponse res = sdk.sdk.createTable(req);

            if (res.createTableResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDatabase

<p>Deletes a given Timestream database. <i>This is an irreversible operation. After a database is deleted, the time-series data from its tables cannot be recovered.</i> </p> <note> <p>All tables in the database must be deleted first, or a ValidationException error will be thrown. </p> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-db.html">code sample</a> for details.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDatabaseRequest;
import org.openapis.openapi.models.operations.DeleteDatabaseResponse;
import org.openapis.openapi.models.operations.DeleteDatabaseXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDatabaseRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDatabaseRequest req = new DeleteDatabaseRequest(                new DeleteDatabaseRequest("in");, DeleteDatabaseXAmzTargetEnum.TIMESTREAM20181101_DELETE_DATABASE) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "rerum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "facere";
            }};            

            DeleteDatabaseResponse res = sdk.sdk.deleteDatabase(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTable

<p>Deletes a given Timestream table. This is an irreversible operation. After a Timestream database table is deleted, the time-series data stored in the table cannot be recovered. </p> <note> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-table.html">code sample</a> for details.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTableRequest;
import org.openapis.openapi.models.operations.DeleteTableResponse;
import org.openapis.openapi.models.operations.DeleteTableXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteTableRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTableRequest req = new DeleteTableRequest(                new DeleteTableRequest("aliquid", "laborum");, DeleteTableXAmzTargetEnum.TIMESTREAM20181101_DELETE_TABLE) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "non";
                xAmzCredential = "occaecati";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quidem";
            }};            

            DeleteTableResponse res = sdk.sdk.deleteTable(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeBatchLoadTask

Returns information about the batch load task, including configurations, mappings, progress, and other details. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-batch-load.html">code sample</a> for details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeBatchLoadTaskRequest;
import org.openapis.openapi.models.operations.DescribeBatchLoadTaskResponse;
import org.openapis.openapi.models.operations.DescribeBatchLoadTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeBatchLoadTaskRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeBatchLoadTaskRequest req = new DescribeBatchLoadTaskRequest(                new DescribeBatchLoadTaskRequest("nam");, DescribeBatchLoadTaskXAmzTargetEnum.TIMESTREAM20181101_DESCRIBE_BATCH_LOAD_TASK) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "deleniti";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "amet";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "nisi";
            }};            

            DescribeBatchLoadTaskResponse res = sdk.sdk.describeBatchLoadTask(req);

            if (res.describeBatchLoadTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDatabase

Returns information about the database, including the database name, time that the database was created, and the total number of tables found within the database. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-db.html">code sample</a> for details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDatabaseRequest;
import org.openapis.openapi.models.operations.DescribeDatabaseResponse;
import org.openapis.openapi.models.operations.DescribeDatabaseXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDatabaseRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDatabaseRequest req = new DescribeDatabaseRequest(                new DescribeDatabaseRequest("natus");, DescribeDatabaseXAmzTargetEnum.TIMESTREAM20181101_DESCRIBE_DATABASE) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "perferendis";
                xAmzDate = "nihil";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "id";
            }};            

            DescribeDatabaseResponse res = sdk.sdk.describeDatabase(req);

            if (res.describeDatabaseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEndpoints

<p>Returns a list of available endpoints to make Timestream API calls against. This API operation is available through both the Write and Query APIs.</p> <p>Because the Timestream SDKs are designed to transparently work with the service’s architecture, including the management and mapping of the service endpoints, <i>we don't recommend that you use this API operation unless</i>:</p> <ul> <li> <p>You are using <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/VPCEndpoints">VPC endpoints (Amazon Web Services PrivateLink) with Timestream</a> </p> </li> <li> <p>Your application uses a programming language that does not yet have SDK support</p> </li> <li> <p>You require better control over the client-side implementation</p> </li> </ul> <p>For detailed information on how and when to use and implement DescribeEndpoints, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using.API.html#Using-API.endpoint-discovery">The Endpoint Discovery Pattern</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEndpointsRequest;
import org.openapis.openapi.models.operations.DescribeEndpointsResponse;
import org.openapis.openapi.models.operations.DescribeEndpointsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEndpointsRequest req = new DescribeEndpointsRequest(                new java.util.HashMap<String, Object>() {{
                                put("suscipit", "natus");
                                put("nobis", "eum");
                            }}, DescribeEndpointsXAmzTargetEnum.TIMESTREAM20181101_DESCRIBE_ENDPOINTS) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "architecto";
                xAmzDate = "magnam";
                xAmzSecurityToken = "et";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "ullam";
            }};            

            DescribeEndpointsResponse res = sdk.sdk.describeEndpoints(req);

            if (res.describeEndpointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTable

Returns information about the table, including the table name, database name, retention duration of the memory store and the magnetic store. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-table.html">code sample</a> for details. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTableRequest;
import org.openapis.openapi.models.operations.DescribeTableResponse;
import org.openapis.openapi.models.operations.DescribeTableXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTableRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTableRequest req = new DescribeTableRequest(                new DescribeTableRequest("quos", "sint");, DescribeTableXAmzTargetEnum.TIMESTREAM20181101_DESCRIBE_TABLE) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "reiciendis";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "ad";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "dolor";
            }};            

            DescribeTableResponse res = sdk.sdk.describeTable(req);

            if (res.describeTableResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBatchLoadTasks

Provides a list of batch load tasks, along with the name, status, when the task is resumable until, and other details. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-batch-load-tasks.html">code sample</a> for details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBatchLoadTasksRequest;
import org.openapis.openapi.models.operations.ListBatchLoadTasksResponse;
import org.openapis.openapi.models.operations.ListBatchLoadTasksXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchLoadStatusEnum;
import org.openapis.openapi.models.shared.ListBatchLoadTasksRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBatchLoadTasksRequest req = new ListBatchLoadTasksRequest(                new ListBatchLoadTasksRequest() {{
                                maxResults = 141264L;
                                nextToken = "nemo";
                                taskStatus = BatchLoadStatusEnum.CREATED;
                            }};, ListBatchLoadTasksXAmzTargetEnum.TIMESTREAM20181101_LIST_BATCH_LOAD_TASKS) {{
                maxResults = "iure";
                nextToken = "doloribus";
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "eius";
                xAmzCredential = "maxime";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "in";
                xAmzSignedHeaders = "architecto";
            }};            

            ListBatchLoadTasksResponse res = sdk.sdk.listBatchLoadTasks(req);

            if (res.listBatchLoadTasksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDatabases

Returns a list of your Timestream databases. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-db.html">code sample</a> for details. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatabasesRequest;
import org.openapis.openapi.models.operations.ListDatabasesResponse;
import org.openapis.openapi.models.operations.ListDatabasesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDatabasesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDatabasesRequest req = new ListDatabasesRequest(                new ListDatabasesRequest() {{
                                maxResults = 919483L;
                                nextToken = "ullam";
                            }};, ListDatabasesXAmzTargetEnum.TIMESTREAM20181101_LIST_DATABASES) {{
                maxResults = "expedita";
                nextToken = "nihil";
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "sed";
                xAmzDate = "saepe";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "consequuntur";
            }};            

            ListDatabasesResponse res = sdk.sdk.listDatabases(req);

            if (res.listDatabasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTables

Provides a list of tables, along with the name, status, and retention properties of each table. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-table.html">code sample</a> for details. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTablesRequest;
import org.openapis.openapi.models.operations.ListTablesResponse;
import org.openapis.openapi.models.operations.ListTablesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTablesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTablesRequest req = new ListTablesRequest(                new ListTablesRequest() {{
                                databaseName = "natus";
                                maxResults = 166847L;
                                nextToken = "sunt";
                            }};, ListTablesXAmzTargetEnum.TIMESTREAM20181101_LIST_TABLES) {{
                maxResults = "quo";
                nextToken = "illum";
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "ea";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "odit";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "accusantium";
            }};            

            ListTablesResponse res = sdk.sdk.listTables(req);

            if (res.listTablesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

 Lists all tags on a Timestream resource. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("maiores");, ListTagsForResourceXAmzTargetEnum.TIMESTREAM20181101_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "voluptate";
                xAmzDate = "autem";
                xAmzSecurityToken = "nam";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "pariatur";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resumeBatchLoadTask

 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResumeBatchLoadTaskRequest;
import org.openapis.openapi.models.operations.ResumeBatchLoadTaskResponse;
import org.openapis.openapi.models.operations.ResumeBatchLoadTaskXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResumeBatchLoadTaskRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResumeBatchLoadTaskRequest req = new ResumeBatchLoadTaskRequest(                new ResumeBatchLoadTaskRequest("voluptatibus");, ResumeBatchLoadTaskXAmzTargetEnum.TIMESTREAM20181101_RESUME_BATCH_LOAD_TASK) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "amet";
                xAmzDate = "aut";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "hic";
            }};            

            ResumeBatchLoadTaskResponse res = sdk.sdk.resumeBatchLoadTask(req);

            if (res.resumeBatchLoadTaskResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

 Associates a set of tags with a Timestream resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("nobis",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("dignissimos", "eaque") {{
                                                    key = "quis";
                                                    value = "totam";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.TIMESTREAM20181101_TAG_RESOURCE) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "eos";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "quam";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

 Removes the association of tags from a Timestream resource. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("vero",                 new String[]{{
                                                add("hic"),
                                                add("recusandae"),
                                            }});, UntagResourceXAmzTargetEnum.TIMESTREAM20181101_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "perspiciatis";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "porro";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "blanditiis";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDatabase

<p> Modifies the KMS key for an existing database. While updating the database, you must specify the database name and the identifier of the new KMS key to be used (<code>KmsKeyId</code>). If there are any concurrent <code>UpdateDatabase</code> requests, first writer wins. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-db.html">code sample</a> for details.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDatabaseRequest;
import org.openapis.openapi.models.operations.UpdateDatabaseResponse;
import org.openapis.openapi.models.operations.UpdateDatabaseXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDatabaseRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDatabaseRequest req = new UpdateDatabaseRequest(                new UpdateDatabaseRequest("eaque", "occaecati");, UpdateDatabaseXAmzTargetEnum.TIMESTREAM20181101_UPDATE_DATABASE) {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "asperiores";
                xAmzDate = "earum";
                xAmzSecurityToken = "modi";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolorum";
            }};            

            UpdateDatabaseResponse res = sdk.sdk.updateDatabase(req);

            if (res.updateDatabaseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTable

<p>Modifies the retention duration of the memory store and magnetic store for your Timestream table. Note that the change in retention duration takes effect immediately. For example, if the retention period of the memory store was initially set to 2 hours and then changed to 24 hours, the memory store will be capable of holding 24 hours of data, but will be populated with 24 hours of data 22 hours after this change was made. Timestream does not retrieve data from the magnetic store to populate the memory store. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-table.html">code sample</a> for details.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTableRequest;
import org.openapis.openapi.models.operations.UpdateTableResponse;
import org.openapis.openapi.models.operations.UpdateTableXAmzTargetEnum;
import org.openapis.openapi.models.shared.MagneticStoreRejectedDataLocation;
import org.openapis.openapi.models.shared.MagneticStoreWriteProperties;
import org.openapis.openapi.models.shared.RetentionProperties;
import org.openapis.openapi.models.shared.S3Configuration;
import org.openapis.openapi.models.shared.S3EncryptionOptionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateTableRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTableRequest req = new UpdateTableRequest(                new UpdateTableRequest("pariatur", "provident") {{
                                magneticStoreWriteProperties = new MagneticStoreWriteProperties(false) {{
                                    magneticStoreRejectedDataLocation = new MagneticStoreRejectedDataLocation() {{
                                        s3Configuration = new S3Configuration() {{
                                            bucketName = "nobis";
                                            encryptionOption = S3EncryptionOptionEnum.SSE_KMS;
                                            kmsKeyId = "delectus";
                                            objectKeyPrefix = "quaerat";
                                        }};;
                                    }};;
                                }};;
                                retentionProperties = new RetentionProperties(554242L, 398221L);;
                            }};, UpdateTableXAmzTargetEnum.TIMESTREAM20181101_UPDATE_TABLE) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolor";
                xAmzDate = "qui";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "excepturi";
            }};            

            UpdateTableResponse res = sdk.sdk.updateTable(req);

            if (res.updateTableResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## writeRecords

<p>Enables you to write your time-series data into Timestream. You can specify a single data point or a batch of data points to be inserted into the system. Timestream offers you a flexible schema that auto detects the column names and data types for your Timestream tables based on the dimension names and data types of the data points you specify when invoking writes into the database. </p> <p>Timestream supports eventual consistency read semantics. This means that when you query data immediately after writing a batch of data into Timestream, the query results might not reflect the results of a recently completed write operation. The results may also include some stale data. If you repeat the query request after a short time, the results should return the latest data. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.write.html">code sample</a> for details.</p> <p> <b>Upserts</b> </p> <p>You can use the <code>Version</code> parameter in a <code>WriteRecords</code> request to update data points. Timestream tracks a version number with each record. <code>Version</code> defaults to <code>1</code> when it's not specified for the record in the request. Timestream updates an existing record’s measure value along with its <code>Version</code> when it receives a write request with a higher <code>Version</code> number for that record. When it receives an update request where the measure value is the same as that of the existing record, Timestream still updates <code>Version</code>, if it is greater than the existing value of <code>Version</code>. You can update a data point as many times as desired, as long as the value of <code>Version</code> continuously increases. </p> <p> For example, suppose you write a new record without indicating <code>Version</code> in the request. Timestream stores this record, and set <code>Version</code> to <code>1</code>. Now, suppose you try to update this record with a <code>WriteRecords</code> request of the same record with a different measure value but, like before, do not provide <code>Version</code>. In this case, Timestream will reject this update with a <code>RejectedRecordsException</code> since the updated record’s version is not greater than the existing value of Version. </p> <p>However, if you were to resend the update request with <code>Version</code> set to <code>2</code>, Timestream would then succeed in updating the record’s value, and the <code>Version</code> would be set to <code>2</code>. Next, suppose you sent a <code>WriteRecords</code> request with this same record and an identical measure value, but with <code>Version</code> set to <code>3</code>. In this case, Timestream would only update <code>Version</code> to <code>3</code>. Any further updates would need to send a version number greater than <code>3</code>, or the update requests would receive a <code>RejectedRecordsException</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WriteRecordsRequest;
import org.openapis.openapi.models.operations.WriteRecordsResponse;
import org.openapis.openapi.models.operations.WriteRecordsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Dimension;
import org.openapis.openapi.models.shared.DimensionValueTypeEnum;
import org.openapis.openapi.models.shared.MeasureValue;
import org.openapis.openapi.models.shared.MeasureValueTypeEnum;
import org.openapis.openapi.models.shared.Record;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeUnitEnum;
import org.openapis.openapi.models.shared.WriteRecordsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            WriteRecordsRequest req = new WriteRecordsRequest(                new WriteRecordsRequest("voluptate",                 new org.openapis.openapi.models.shared.Record[]{{
                                                add(new Record() {{
                                                    dimensions = new org.openapis.openapi.models.shared.Dimension[]{{
                                                        add(new Dimension("quaerat", "accusamus") {{
                                                            dimensionValueType = DimensionValueTypeEnum.VARCHAR;
                                                            name = "Mr. Lee Funk III";
                                                            value = "odio";
                                                        }}),
                                                        add(new Dimension("sit", "fugiat") {{
                                                            dimensionValueType = DimensionValueTypeEnum.VARCHAR;
                                                            name = "Jan Hodkiewicz";
                                                            value = "atque";
                                                        }}),
                                                        add(new Dimension("deleniti", "omnis") {{
                                                            dimensionValueType = DimensionValueTypeEnum.VARCHAR;
                                                            name = "Latoya Parisian";
                                                            value = "dolorum";
                                                        }}),
                                                        add(new Dimension("id", "saepe") {{
                                                            dimensionValueType = DimensionValueTypeEnum.VARCHAR;
                                                            name = "Kelvin Zboncak";
                                                            value = "voluptate";
                                                        }}),
                                                    }};
                                                    measureName = "eius";
                                                    measureValue = "aspernatur";
                                                    measureValueType = MeasureValueTypeEnum.DOUBLE;
                                                    measureValues = new org.openapis.openapi.models.shared.MeasureValue[]{{
                                                        add(new MeasureValue("minima", MeasureValueTypeEnum.TIMESTAMP, "totam") {{
                                                            name = "Tomas Hammes";
                                                            type = MeasureValueTypeEnum.BOOLEAN_;
                                                            value = "provident";
                                                        }}),
                                                    }};
                                                    time = "similique";
                                                    timeUnit = TimeUnitEnum.MILLISECONDS;
                                                    version = 872651L;
                                                }}),
                                                add(new Record() {{
                                                    dimensions = new org.openapis.openapi.models.shared.Dimension[]{{
                                                        add(new Dimension("a", "esse") {{
                                                            dimensionValueType = DimensionValueTypeEnum.VARCHAR;
                                                            name = "Gina Schmeler";
                                                            value = "dolorum";
                                                        }}),
                                                        add(new Dimension("tempore", "accusamus") {{
                                                            dimensionValueType = DimensionValueTypeEnum.VARCHAR;
                                                            name = "Tyrone Emard";
                                                            value = "amet";
                                                        }}),
                                                    }};
                                                    measureName = "numquam";
                                                    measureValue = "enim";
                                                    measureValueType = MeasureValueTypeEnum.BIGINT;
                                                    measureValues = new org.openapis.openapi.models.shared.MeasureValue[]{{
                                                        add(new MeasureValue("libero", MeasureValueTypeEnum.VARCHAR, "deserunt") {{
                                                            name = "Christian Balistreri";
                                                            type = MeasureValueTypeEnum.DOUBLE;
                                                            value = "vel";
                                                        }}),
                                                        add(new MeasureValue("soluta", MeasureValueTypeEnum.DOUBLE, "laborum") {{
                                                            name = "Tracy Gottlieb";
                                                            type = MeasureValueTypeEnum.TIMESTAMP;
                                                            value = "pariatur";
                                                        }}),
                                                        add(new MeasureValue("quam", MeasureValueTypeEnum.BOOLEAN_, "temporibus") {{
                                                            name = "Randall Cole";
                                                            type = MeasureValueTypeEnum.TIMESTAMP;
                                                            value = "aliquid";
                                                        }}),
                                                        add(new MeasureValue("nam", MeasureValueTypeEnum.MULTI, "voluptatem") {{
                                                            name = "Gladys Considine";
                                                            type = MeasureValueTypeEnum.DOUBLE;
                                                            value = "ullam";
                                                        }}),
                                                    }};
                                                    time = "cumque";
                                                    timeUnit = TimeUnitEnum.MICROSECONDS;
                                                    version = 748664L;
                                                }}),
                                            }}, "et") {{
                                commonAttributes = new Record() {{
                                    dimensions = new org.openapis.openapi.models.shared.Dimension[]{{
                                        add(new Dimension("aperiam", "delectus") {{
                                            dimensionValueType = DimensionValueTypeEnum.VARCHAR;
                                            name = "Carolyn Rohan";
                                            value = "cupiditate";
                                        }}),
                                        add(new Dimension("quae", "aut") {{
                                            dimensionValueType = DimensionValueTypeEnum.VARCHAR;
                                            name = "Joanne Grant";
                                            value = "architecto";
                                        }}),
                                        add(new Dimension("doloribus", "ut") {{
                                            dimensionValueType = DimensionValueTypeEnum.VARCHAR;
                                            name = "Percy Altenwerth";
                                            value = "porro";
                                        }}),
                                        add(new Dimension("voluptatibus", "quisquam") {{
                                            dimensionValueType = DimensionValueTypeEnum.VARCHAR;
                                            name = "Ms. Terrance Davis";
                                            value = "occaecati";
                                        }}),
                                    }};
                                    measureName = "vero";
                                    measureValue = "omnis";
                                    measureValueType = MeasureValueTypeEnum.VARCHAR;
                                    measureValues = new org.openapis.openapi.models.shared.MeasureValue[]{{
                                        add(new MeasureValue("distinctio", MeasureValueTypeEnum.TIMESTAMP, "odio") {{
                                            name = "Karl Feeney";
                                            type = MeasureValueTypeEnum.VARCHAR;
                                            value = "hic";
                                        }}),
                                    }};
                                    time = "similique";
                                    timeUnit = TimeUnitEnum.MICROSECONDS;
                                    version = 874288L;
                                }};;
                            }};, WriteRecordsXAmzTargetEnum.TIMESTREAM20181101_WRITE_RECORDS) {{
                xAmzAlgorithm = "ducimus";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "quibusdam";
                xAmzDate = "illum";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "impedit";
            }};            

            WriteRecordsResponse res = sdk.sdk.writeRecords(req);

            if (res.writeRecordsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
