# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->createBatchLoadTaskRequest->clientToken = 'corrupti';
    $request->createBatchLoadTaskRequest->dataModelConfiguration = new DataModelConfiguration();
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel = new DataModel();
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->dimensionMappings = [
        new DimensionMapping(),
        new DimensionMapping(),
        new DimensionMapping(),
    ];
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->measureNameColumn = 'distinctio';
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->mixedMeasureMappings = [
        new MixedMeasureMapping(),
        new MixedMeasureMapping(),
        new MixedMeasureMapping(),
        new MixedMeasureMapping(),
    ];
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->multiMeasureMappings = new MultiMeasureMappings();
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->multiMeasureMappings->multiMeasureAttributeMappings = [
        new MultiMeasureAttributeMapping(),
        new MultiMeasureAttributeMapping(),
        new MultiMeasureAttributeMapping(),
    ];
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->multiMeasureMappings->targetMultiMeasureName = 'nulla';
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->timeColumn = 'corrupti';
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModel->timeUnit = TimeUnitEnum::NANOSECONDS;
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModelS3Configuration = new DataModelS3Configuration();
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModelS3Configuration->bucketName = 'vel';
    $request->createBatchLoadTaskRequest->dataModelConfiguration->dataModelS3Configuration->objectKey = 'error';
    $request->createBatchLoadTaskRequest->dataSourceConfiguration = new DataSourceConfiguration();
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->csvConfiguration = new CsvConfiguration();
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->csvConfiguration->columnSeparator = 'deserunt';
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->csvConfiguration->escapeChar = 'suscipit';
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->csvConfiguration->nullValue = 'iure';
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->csvConfiguration->quoteChar = 'magnam';
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->csvConfiguration->trimWhiteSpace = false;
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->dataFormat = BatchLoadDataFormatEnum::CSV;
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->dataSourceS3Configuration = new DataSourceS3Configuration();
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->dataSourceS3Configuration->bucketName = 'debitis';
    $request->createBatchLoadTaskRequest->dataSourceConfiguration->dataSourceS3Configuration->objectKeyPrefix = 'ipsa';
    $request->createBatchLoadTaskRequest->recordVersion = 963663;
    $request->createBatchLoadTaskRequest->reportConfiguration = new ReportConfiguration();
    $request->createBatchLoadTaskRequest->reportConfiguration->reportS3Configuration = new ReportS3Configuration();
    $request->createBatchLoadTaskRequest->reportConfiguration->reportS3Configuration->bucketName = 'tempora';
    $request->createBatchLoadTaskRequest->reportConfiguration->reportS3Configuration->encryptionOption = S3EncryptionOptionEnum::SSE_S3;
    $request->createBatchLoadTaskRequest->reportConfiguration->reportS3Configuration->kmsKeyId = 'molestiae';
    $request->createBatchLoadTaskRequest->reportConfiguration->reportS3Configuration->objectKeyPrefix = 'minus';
    $request->createBatchLoadTaskRequest->targetDatabaseName = 'placeat';
    $request->createBatchLoadTaskRequest->targetTableName = 'voluptatum';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = CreateBatchLoadTaskXAmzTargetEnum::TIMESTREAM20181101_CREATE_BATCH_LOAD_TASK;

    $response = $sdk->createBatchLoadTask($request);

    if ($response->createBatchLoadTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createBatchLoadTask](docs/sdk/README.md#createbatchloadtask) - Creates a new Timestream batch load task. A batch load task processes data from a CSV source in an S3 location and writes to a Timestream table. A mapping from source to target is defined in a batch load task. Errors and events are written to a report at an S3 location. For the report, if the KMS key is not specified, the batch load task will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-batch-load.html">code sample</a>.
* [createDatabase](docs/sdk/README.md#createdatabase) - Creates a new Timestream database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-db.html">code sample</a>. 
* [createTable](docs/sdk/README.md#createtable) - Adds a new table to an existing database in your account. In an Amazon Web Services account, table names must be at least unique within each Region if they are in the same database. You might have identical table names in the same Region if the tables are in separate databases. While creating the table, you must specify the table name, database name, and the retention properties. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-table.html">code sample</a> for details. 
* [deleteDatabase](docs/sdk/README.md#deletedatabase) - <p>Deletes a given Timestream database. <i>This is an irreversible operation. After a database is deleted, the time-series data from its tables cannot be recovered.</i> </p> <note> <p>All tables in the database must be deleted first, or a ValidationException error will be thrown. </p> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-db.html">code sample</a> for details.</p>
* [deleteTable](docs/sdk/README.md#deletetable) - <p>Deletes a given Timestream table. This is an irreversible operation. After a Timestream database table is deleted, the time-series data stored in the table cannot be recovered. </p> <note> <p>Due to the nature of distributed retries, the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p> </note> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.delete-table.html">code sample</a> for details.</p>
* [describeBatchLoadTask](docs/sdk/README.md#describebatchloadtask) - Returns information about the batch load task, including configurations, mappings, progress, and other details. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-batch-load.html">code sample</a> for details.
* [describeDatabase](docs/sdk/README.md#describedatabase) - Returns information about the database, including the database name, time that the database was created, and the total number of tables found within the database. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-db.html">code sample</a> for details.
* [describeEndpoints](docs/sdk/README.md#describeendpoints) - <p>Returns a list of available endpoints to make Timestream API calls against. This API operation is available through both the Write and Query APIs.</p> <p>Because the Timestream SDKs are designed to transparently work with the service’s architecture, including the management and mapping of the service endpoints, <i>we don't recommend that you use this API operation unless</i>:</p> <ul> <li> <p>You are using <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/VPCEndpoints">VPC endpoints (Amazon Web Services PrivateLink) with Timestream</a> </p> </li> <li> <p>Your application uses a programming language that does not yet have SDK support</p> </li> <li> <p>You require better control over the client-side implementation</p> </li> </ul> <p>For detailed information on how and when to use and implement DescribeEndpoints, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using.API.html#Using-API.endpoint-discovery">The Endpoint Discovery Pattern</a>.</p>
* [describeTable](docs/sdk/README.md#describetable) - Returns information about the table, including the table name, database name, retention duration of the memory store and the magnetic store. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-table.html">code sample</a> for details. 
* [listBatchLoadTasks](docs/sdk/README.md#listbatchloadtasks) - Provides a list of batch load tasks, along with the name, status, when the task is resumable until, and other details. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-batch-load-tasks.html">code sample</a> for details.
* [listDatabases](docs/sdk/README.md#listdatabases) - Returns a list of your Timestream databases. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-db.html">code sample</a> for details. 
* [listTables](docs/sdk/README.md#listtables) - Provides a list of tables, along with the name, status, and retention properties of each table. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-table.html">code sample</a> for details. 
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) -  Lists all tags on a Timestream resource. 
* [resumeBatchLoadTask](docs/sdk/README.md#resumebatchloadtask) -  
* [tagResource](docs/sdk/README.md#tagresource) -  Associates a set of tags with a Timestream resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. 
* [untagResource](docs/sdk/README.md#untagresource) -  Removes the association of tags from a Timestream resource. 
* [updateDatabase](docs/sdk/README.md#updatedatabase) - <p> Modifies the KMS key for an existing database. While updating the database, you must specify the database name and the identifier of the new KMS key to be used (<code>KmsKeyId</code>). If there are any concurrent <code>UpdateDatabase</code> requests, first writer wins. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-db.html">code sample</a> for details.</p>
* [updateTable](docs/sdk/README.md#updatetable) - <p>Modifies the retention duration of the memory store and magnetic store for your Timestream table. Note that the change in retention duration takes effect immediately. For example, if the retention period of the memory store was initially set to 2 hours and then changed to 24 hours, the memory store will be capable of holding 24 hours of data, but will be populated with 24 hours of data 22 hours after this change was made. Timestream does not retrieve data from the magnetic store to populate the memory store. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.update-table.html">code sample</a> for details.</p>
* [writeRecords](docs/sdk/README.md#writerecords) - <p>Enables you to write your time-series data into Timestream. You can specify a single data point or a batch of data points to be inserted into the system. Timestream offers you a flexible schema that auto detects the column names and data types for your Timestream tables based on the dimension names and data types of the data points you specify when invoking writes into the database. </p> <p>Timestream supports eventual consistency read semantics. This means that when you query data immediately after writing a batch of data into Timestream, the query results might not reflect the results of a recently completed write operation. The results may also include some stale data. If you repeat the query request after a short time, the results should return the latest data. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. </p> <p>See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.write.html">code sample</a> for details.</p> <p> <b>Upserts</b> </p> <p>You can use the <code>Version</code> parameter in a <code>WriteRecords</code> request to update data points. Timestream tracks a version number with each record. <code>Version</code> defaults to <code>1</code> when it's not specified for the record in the request. Timestream updates an existing record’s measure value along with its <code>Version</code> when it receives a write request with a higher <code>Version</code> number for that record. When it receives an update request where the measure value is the same as that of the existing record, Timestream still updates <code>Version</code>, if it is greater than the existing value of <code>Version</code>. You can update a data point as many times as desired, as long as the value of <code>Version</code> continuously increases. </p> <p> For example, suppose you write a new record without indicating <code>Version</code> in the request. Timestream stores this record, and set <code>Version</code> to <code>1</code>. Now, suppose you try to update this record with a <code>WriteRecords</code> request of the same record with a different measure value but, like before, do not provide <code>Version</code>. In this case, Timestream will reject this update with a <code>RejectedRecordsException</code> since the updated record’s version is not greater than the existing value of Version. </p> <p>However, if you were to resend the update request with <code>Version</code> set to <code>2</code>, Timestream would then succeed in updating the record’s value, and the <code>Version</code> would be set to <code>2</code>. Next, suppose you sent a <code>WriteRecords</code> request with this same record and an identical measure value, but with <code>Version</code> set to <code>3</code>. In this case, Timestream would only update <code>Version</code> to <code>3</code>. Any further updates would need to send a version number greater than <code>3</code>, or the update requests would receive a <code>RejectedRecordsException</code>. </p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
