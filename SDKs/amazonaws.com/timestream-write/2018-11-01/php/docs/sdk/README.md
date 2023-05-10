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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBatchLoadTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateBatchLoadTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataModelConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DataModel;
use \OpenAPI\OpenAPI\Models\Shared\DimensionMapping;
use \OpenAPI\OpenAPI\Models\Shared\MixedMeasureMapping;
use \OpenAPI\OpenAPI\Models\Shared\MeasureValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MultiMeasureAttributeMapping;
use \OpenAPI\OpenAPI\Models\Shared\ScalarMeasureValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MultiMeasureMappings;
use \OpenAPI\OpenAPI\Models\Shared\TimeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataModelS3Configuration;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CsvConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BatchLoadDataFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceS3Configuration;
use \OpenAPI\OpenAPI\Models\Shared\ReportConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ReportS3Configuration;
use \OpenAPI\OpenAPI\Models\Shared\S3EncryptionOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBatchLoadTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBatchLoadTaskRequest();
    $request->createBatchLoadTaskRequest = new CreateBatchLoadTaskRequest();
    $request->createBatchLoadTaskRequest->clientToken = 'veritatis';
    $request->createBatchLoadTaskRequest->dataModelConfiguration = new DataModelConfiguration();
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel = new DataModel();
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->dimensionMappings = [
        new DimensionMapping(),
        new DimensionMapping(),
        new DimensionMapping(),
    ];
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->measureNameColumn = 'perferendis';
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->mixedMeasureMappings = [
        new MixedMeasureMapping(),
        new MixedMeasureMapping(),
    ];
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->multiMeasureMappings = new MultiMeasureMappings();
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->multiMeasureMappings->multiMeasureAttributeMappings = [
        new MultiMeasureAttributeMapping(),
        new MultiMeasureAttributeMapping(),
        new MultiMeasureAttributeMapping(),
        new MultiMeasureAttributeMapping(),
    ];
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->multiMeasureMappings->targetMultiMeasureName = 'sapiente';
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->timeColumn = 'quo';
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->timeUnit = TimeUnitEnum::MILLISECONDS;
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModelS3Configuration = new DataModelS3Configuration();
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModelS3Configuration->bucketName = 'at';
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModelS3Configuration->objectKey = 'at';
    $request->createBatchLoadTaskRequest->dataSourceConfiguration = new DataSourceConfiguration();
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->csvConfiguration = new CsvConfiguration();
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->csvConfiguration->columnSeparator = 'maiores';
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->csvConfiguration->escapeChar = 'molestiae';
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->csvConfiguration->nullValue = 'quod';
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->csvConfiguration->quoteChar = 'quod';
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->csvConfiguration->trimWhiteSpace = false;
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->dataFormat = BatchLoadDataFormatEnum::CSV;
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->dataSourceS3Configuration = new DataSourceS3Configuration();
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->dataSourceS3Configuration->bucketName = 'esse';
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->dataSourceS3Configuration->objectKeyPrefix = 'totam';
    $request->createBatchLoadTaskRequest->recordVersion = 780529;
    $request->createBatchLoadTaskRequest->reportConfiguration = new ReportConfiguration();
    $request->createBatchLoadTaskRequest->reportConfiguration->reportS3Configuration = new ReportS3Configuration();
    $request->createBatchLoadTaskRequest->reportConfiguration->reportS3Configuration->bucketName = 'dolorum';
    $request->createBatchLoadTaskRequest->reportConfiguration->reportS3Configuration->encryptionOption = S3EncryptionOptionEnum::SSE_S3;
    $request->createBatchLoadTaskRequest->reportConfiguration->reportS3Configuration->kmsKeyId = 'nam';
    $request->createBatchLoadTaskRequest->reportConfiguration->reportS3Configuration->objectKeyPrefix = 'officia';
    $request->createBatchLoadTaskRequest->targetDatabaseName = 'occaecati';
    $request->createBatchLoadTaskRequest->targetTableName = 'fugit';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = CreateBatchLoadTaskXAmzTargetEnum::TIMESTREAM20181101_CREATE_BATCH_LOAD_TASK;

    $response = $sdk->sdk->createBatchLoadTask($request);

    if ($response->createBatchLoadTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDatabase

Creates a new Timestream database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-db.html">code sample</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatabaseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDatabaseRequest();
    $request->createDatabaseRequest = new CreateDatabaseRequest();
    $request->createDatabaseRequest->databaseName = 'modi';
    $request->createDatabaseRequest->kmsKeyId = 'qui';
    $request->createDatabaseRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ad';
    $request->xAmzTarget = CreateDatabaseXAmzTargetEnum::TIMESTREAM20181101_CREATE_DATABASE;

    $response = $sdk->sdk->createDatabase($request);

    if ($response->createDatabaseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTable

Adds a new table to an existing database in your account. In an Amazon Web Services account, table names must be at least unique within each Region if they are in the same database. You might have identical table names in the same Region if the tables are in separate databases. While creating the table, you must specify the table name, database name, and the retention properties. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-table.html">code sample</a> for details. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\MagneticStoreWriteProperties;
use \OpenAPI\OpenAPI\Models\Shared\MagneticStoreRejectedDataLocation;
use \OpenAPI\OpenAPI\Models\Shared\S3Configuration;
use \OpenAPI\OpenAPI\Models\Shared\S3EncryptionOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\RetentionProperties;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTableRequest();
    $request->createTableRequest = new CreateTableRequest();
    $request->createTableRequest->databaseName = 'natus';
    $request->createTableRequest->magneticStoreWriteProperties = new MagneticStoreWriteProperties();
    $request->createTableRequest->magneticStoreWriteProperties->enableMagneticStoreWrites = false;
    $request->createTableRequest->magneticStoreWriteProperties->magneticStoreRejectedDataLocation = new MagneticStoreRejectedDataLocation();
    $request->createTableRequest->magneticStoreWriteProperties->magneticStoreRejectedDataLocation->s3Configuration = new S3Configuration();
    $request->createTableRequest->magneticStoreWriteProperties->magneticStoreRejectedDataLocation->s3Configuration->bucketName = 'sed';
    $request->createTableRequest->magneticStoreWriteProperties->magneticStoreRejectedDataLocation->s3Configuration->encryptionOption = S3EncryptionOptionEnum::SSE_KMS;
    $request->createTableRequest->magneticStoreWriteProperties->magneticStoreRejectedDataLocation->s3Configuration->kmsKeyId = 'dolor';
    $request->createTableRequest->magneticStoreWriteProperties->magneticStoreRejectedDataLocation->s3Configuration->objectKeyPrefix = 'natus';
    $request->createTableRequest->retentionProperties = new RetentionProperties();
    $request->createTableRequest->retentionProperties->magneticStoreRetentionPeriodInDays = 386489;
    $request->createTableRequest->retentionProperties->memoryStoreRetentionPeriodInHours = 943749;
    $request->createTableRequest->tableName = 'saepe';
    $request->createTableRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = CreateTableXAmzTargetEnum::TIMESTREAM20181101_CREATE_TABLE;

    $response = $sdk->sdk->createTable($request);

    if ($response->createTableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDatabase

<p>Deletes a given Timestream database. <i>This is an irreversible operation. After a database is deleted, the time-series data from its tables cannot be recovered.</i> </p> <note> <p>All tables in the database must be deleted first, or a ValidationException error will be thrown. </p> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-db.html">code sample</a> for details.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatabaseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDatabaseRequest();
    $request->deleteDatabaseRequest = new DeleteDatabaseRequest();
    $request->deleteDatabaseRequest->databaseName = 'ipsa';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = DeleteDatabaseXAmzTargetEnum::TIMESTREAM20181101_DELETE_DATABASE;

    $response = $sdk->sdk->deleteDatabase($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTable

<p>Deletes a given Timestream table. This is an irreversible operation. After a Timestream database table is deleted, the time-series data stored in the table cannot be recovered. </p> <note> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-table.html">code sample</a> for details.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTableRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTableRequest();
    $request->deleteTableRequest = new DeleteTableRequest();
    $request->deleteTableRequest->databaseName = 'explicabo';
    $request->deleteTableRequest->tableName = 'nobis';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = DeleteTableXAmzTargetEnum::TIMESTREAM20181101_DELETE_TABLE;

    $response = $sdk->sdk->deleteTable($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeBatchLoadTask

Returns information about the batch load task, including configurations, mappings, progress, and other details. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-batch-load.html">code sample</a> for details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBatchLoadTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeBatchLoadTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeBatchLoadTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeBatchLoadTaskRequest();
    $request->describeBatchLoadTaskRequest = new DescribeBatchLoadTaskRequest();
    $request->describeBatchLoadTaskRequest->taskId = 'culpa';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = DescribeBatchLoadTaskXAmzTargetEnum::TIMESTREAM20181101_DESCRIBE_BATCH_LOAD_TASK;

    $response = $sdk->sdk->describeBatchLoadTask($request);

    if ($response->describeBatchLoadTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDatabase

Returns information about the database, including the database name, time that the database was created, and the total number of tables found within the database. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-db.html">code sample</a> for details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatabaseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDatabaseRequest();
    $request->describeDatabaseRequest = new DescribeDatabaseRequest();
    $request->describeDatabaseRequest->databaseName = 'repellat';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'velit';
    $request->xAmzTarget = DescribeDatabaseXAmzTargetEnum::TIMESTREAM20181101_DESCRIBE_DATABASE;

    $response = $sdk->sdk->describeDatabase($request);

    if ($response->describeDatabaseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEndpoints

<p>Returns a list of available endpoints to make Timestream API calls against. This API operation is available through both the Write and Query APIs.</p> <p>Because the Timestream SDKs are designed to transparently work with the service’s architecture, including the management and mapping of the service endpoints, <i>we don't recommend that you use this API operation unless</i>:</p> <ul> <li> <p>You are using <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/VPCEndpoints">VPC endpoints (Amazon Web Services PrivateLink) with Timestream</a> </p> </li> <li> <p>Your application uses a programming language that does not yet have SDK support</p> </li> <li> <p>You require better control over the client-side implementation</p> </li> </ul> <p>For detailed information on how and when to use and implement DescribeEndpoints, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using.API.html#Using-API.endpoint-discovery">The Endpoint Discovery Pattern</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEndpointsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEndpointsRequest();
    $request->requestBody = [
        'quia' => 'quis',
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'possimus';
    $request->xAmzTarget = DescribeEndpointsXAmzTargetEnum::TIMESTREAM20181101_DESCRIBE_ENDPOINTS;

    $response = $sdk->sdk->describeEndpoints($request);

    if ($response->describeEndpointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTable

Returns information about the table, including the table name, database name, retention duration of the memory store and the magnetic store. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-table.html">code sample</a> for details. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTableRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTableRequest();
    $request->describeTableRequest = new DescribeTableRequest();
    $request->describeTableRequest->databaseName = 'aut';
    $request->describeTableRequest->tableName = 'quasi';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = DescribeTableXAmzTargetEnum::TIMESTREAM20181101_DESCRIBE_TABLE;

    $response = $sdk->sdk->describeTable($request);

    if ($response->describeTableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBatchLoadTasks

Provides a list of batch load tasks, along with the name, status, when the task is resumable until, and other details. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-batch-load-tasks.html">code sample</a> for details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBatchLoadTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListBatchLoadTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchLoadStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListBatchLoadTasksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBatchLoadTasksRequest();
    $request->listBatchLoadTasksRequest = new ListBatchLoadTasksRequest();
    $request->listBatchLoadTasksRequest->maxResults = 468651;
    $request->listBatchLoadTasksRequest->nextToken = 'praesentium';
    $request->listBatchLoadTasksRequest->taskStatus = BatchLoadStatusEnum::PENDING_RESUME;
    $request->maxResults = 'ipsa';
    $request->nextToken = 'omnis';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = ListBatchLoadTasksXAmzTargetEnum::TIMESTREAM20181101_LIST_BATCH_LOAD_TASKS;

    $response = $sdk->sdk->listBatchLoadTasks($request);

    if ($response->listBatchLoadTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatabases

Returns a list of your Timestream databases. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-db.html">code sample</a> for details. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDatabasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDatabasesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDatabasesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatabasesRequest();
    $request->listDatabasesRequest = new ListDatabasesRequest();
    $request->listDatabasesRequest->maxResults = 120196;
    $request->listDatabasesRequest->nextToken = 'corporis';
    $request->maxResults = 'dolore';
    $request->nextToken = 'iusto';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = ListDatabasesXAmzTargetEnum::TIMESTREAM20181101_LIST_DATABASES;

    $response = $sdk->sdk->listDatabases($request);

    if ($response->listDatabasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTables

Provides a list of tables, along with the name, status, and retention properties of each table. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-table.html">code sample</a> for details. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTablesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTablesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTablesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTablesRequest();
    $request->listTablesRequest = new ListTablesRequest();
    $request->listTablesRequest->databaseName = 'ipsum';
    $request->listTablesRequest->maxResults = 692472;
    $request->listTablesRequest->nextToken = 'molestias';
    $request->maxResults = 'excepturi';
    $request->nextToken = 'pariatur';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'voluptates';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = ListTablesXAmzTargetEnum::TIMESTREAM20181101_LIST_TABLES;

    $response = $sdk->sdk->listTables($request);

    if ($response->listTablesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

 Lists all tags on a Timestream resource. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceARN = 'veritatis';
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::TIMESTREAM20181101_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resumeBatchLoadTask

 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResumeBatchLoadTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResumeBatchLoadTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResumeBatchLoadTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResumeBatchLoadTaskRequest();
    $request->resumeBatchLoadTaskRequest = new ResumeBatchLoadTaskRequest();
    $request->resumeBatchLoadTaskRequest->taskId = 'deserunt';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = ResumeBatchLoadTaskXAmzTargetEnum::TIMESTREAM20181101_RESUME_BATCH_LOAD_TASK;

    $response = $sdk->sdk->resumeBatchLoadTask($request);

    if ($response->resumeBatchLoadTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

 Associates a set of tags with a Timestream resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceARN = 'quos';
    $request->tagResourceRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::TIMESTREAM20181101_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

 Removes the association of tags from a Timestream resource. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceARN = 'tempora';
    $request->untagResourceRequest->tagKeys = [
        'tempore',
        'labore',
        'delectus',
    ];
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::TIMESTREAM20181101_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDatabase

<p> Modifies the KMS key for an existing database. While updating the database, you must specify the database name and the identifier of the new KMS key to be used (<code>KmsKeyId</code>). If there are any concurrent <code>UpdateDatabase</code> requests, first writer wins. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-db.html">code sample</a> for details.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatabaseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDatabaseRequest();
    $request->updateDatabaseRequest = new UpdateDatabaseRequest();
    $request->updateDatabaseRequest->databaseName = 'sint';
    $request->updateDatabaseRequest->kmsKeyId = 'officia';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = UpdateDatabaseXAmzTargetEnum::TIMESTREAM20181101_UPDATE_DATABASE;

    $response = $sdk->sdk->updateDatabase($request);

    if ($response->updateDatabaseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTable

<p>Modifies the retention duration of the memory store and magnetic store for your Timestream table. Note that the change in retention duration takes effect immediately. For example, if the retention period of the memory store was initially set to 2 hours and then changed to 24 hours, the memory store will be capable of holding 24 hours of data, but will be populated with 24 hours of data 22 hours after this change was made. Timestream does not retrieve data from the magnetic store to populate the memory store. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-table.html">code sample</a> for details.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\MagneticStoreWriteProperties;
use \OpenAPI\OpenAPI\Models\Shared\MagneticStoreRejectedDataLocation;
use \OpenAPI\OpenAPI\Models\Shared\S3Configuration;
use \OpenAPI\OpenAPI\Models\Shared\S3EncryptionOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\RetentionProperties;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTableRequest();
    $request->updateTableRequest = new UpdateTableRequest();
    $request->updateTableRequest->databaseName = 'maiores';
    $request->updateTableRequest->magneticStoreWriteProperties = new MagneticStoreWriteProperties();
    $request->updateTableRequest->magneticStoreWriteProperties->enableMagneticStoreWrites = false;
    $request->updateTableRequest->magneticStoreWriteProperties->magneticStoreRejectedDataLocation = new MagneticStoreRejectedDataLocation();
    $request->updateTableRequest->magneticStoreWriteProperties->magneticStoreRejectedDataLocation->s3Configuration = new S3Configuration();
    $request->updateTableRequest->magneticStoreWriteProperties->magneticStoreRejectedDataLocation->s3Configuration->bucketName = 'rerum';
    $request->updateTableRequest->magneticStoreWriteProperties->magneticStoreRejectedDataLocation->s3Configuration->encryptionOption = S3EncryptionOptionEnum::SSE_S3;
    $request->updateTableRequest->magneticStoreWriteProperties->magneticStoreRejectedDataLocation->s3Configuration->kmsKeyId = 'magnam';
    $request->updateTableRequest->magneticStoreWriteProperties->magneticStoreRejectedDataLocation->s3Configuration->objectKeyPrefix = 'cumque';
    $request->updateTableRequest->retentionProperties = new RetentionProperties();
    $request->updateTableRequest->retentionProperties->magneticStoreRetentionPeriodInDays = 813798;
    $request->updateTableRequest->retentionProperties->memoryStoreRetentionPeriodInHours = 411820;
    $request->updateTableRequest->tableName = 'aliquid';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = UpdateTableXAmzTargetEnum::TIMESTREAM20181101_UPDATE_TABLE;

    $response = $sdk->sdk->updateTable($request);

    if ($response->updateTableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## writeRecords

<p>Enables you to write your time-series data into Timestream. You can specify a single data point or a batch of data points to be inserted into the system. Timestream offers you a flexible schema that auto detects the column names and data types for your Timestream tables based on the dimension names and data types of the data points you specify when invoking writes into the database. </p> <p>Timestream supports eventual consistency read semantics. This means that when you query data immediately after writing a batch of data into Timestream, the query results might not reflect the results of a recently completed write operation. The results may also include some stale data. If you repeat the query request after a short time, the results should return the latest data. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.write.html">code sample</a> for details.</p> <p> <b>Upserts</b> </p> <p>You can use the <code>Version</code> parameter in a <code>WriteRecords</code> request to update data points. Timestream tracks a version number with each record. <code>Version</code> defaults to <code>1</code> when it's not specified for the record in the request. Timestream updates an existing record’s measure value along with its <code>Version</code> when it receives a write request with a higher <code>Version</code> number for that record. When it receives an update request where the measure value is the same as that of the existing record, Timestream still updates <code>Version</code>, if it is greater than the existing value of <code>Version</code>. You can update a data point as many times as desired, as long as the value of <code>Version</code> continuously increases. </p> <p> For example, suppose you write a new record without indicating <code>Version</code> in the request. Timestream stores this record, and set <code>Version</code> to <code>1</code>. Now, suppose you try to update this record with a <code>WriteRecords</code> request of the same record with a different measure value but, like before, do not provide <code>Version</code>. In this case, Timestream will reject this update with a <code>RejectedRecordsException</code> since the updated record’s version is not greater than the existing value of Version. </p> <p>However, if you were to resend the update request with <code>Version</code> set to <code>2</code>, Timestream would then succeed in updating the record’s value, and the <code>Version</code> would be set to <code>2</code>. Next, suppose you sent a <code>WriteRecords</code> request with this same record and an identical measure value, but with <code>Version</code> set to <code>3</code>. In this case, Timestream would only update <code>Version</code> to <code>3</code>. Any further updates would need to send a version number greater than <code>3</code>, or the update requests would receive a <code>RejectedRecordsException</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WriteRecordsRequest;
use \OpenAPI\OpenAPI\Models\Shared\WriteRecordsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Record;
use \OpenAPI\OpenAPI\Models\Shared\Dimension;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MeasureValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MeasureValue;
use \OpenAPI\OpenAPI\Models\Shared\TimeUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\WriteRecordsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WriteRecordsRequest();
    $request->writeRecordsRequest = new WriteRecordsRequest();
    $request->writeRecordsRequest->commonAttributes = new Record();
    $request->writeRecordsRequest->commonAttributes->dimensions = [
        new Dimension(),
        new Dimension(),
        new Dimension(),
    ];
    $request->writeRecordsRequest->commonAttributes->measureName = 'provident';
    $request->writeRecordsRequest->commonAttributes->measureValue = 'nam';
    $request->writeRecordsRequest->commonAttributes->measureValueType = MeasureValueTypeEnum::BOOLEAN;
    $request->writeRecordsRequest->commonAttributes->measureValues = [
        new MeasureValue(),
        new MeasureValue(),
        new MeasureValue(),
    ];
    $request->writeRecordsRequest->commonAttributes->time = 'deleniti';
    $request->writeRecordsRequest->commonAttributes->timeUnit = TimeUnitEnum::NANOSECONDS;
    $request->writeRecordsRequest->commonAttributes->version = 230533;
    $request->writeRecordsRequest->databaseName = 'deserunt';
    $request->writeRecordsRequest->records = [
        new Record(),
        new Record(),
    ];
    $request->writeRecordsRequest->tableName = 'vel';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->xAmzTarget = WriteRecordsXAmzTargetEnum::TIMESTREAM20181101_WRITE_RECORDS;

    $response = $sdk->sdk->writeRecords($request);

    if ($response->writeRecordsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
