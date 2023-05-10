# SDK

## Overview

<p>Amazon Keyspaces (for Apache Cassandra) is a scalable, highly available, and managed Apache Cassandra-compatible database service. Amazon Keyspaces makes it easy to migrate, run, and scale Cassandra workloads in the Amazon Web Services Cloud. With just a few clicks on the Amazon Web Services Management Console or a few lines of code, you can create keyspaces and tables in Amazon Keyspaces, without deploying any infrastructure or installing software. </p> <p>In addition to supporting Cassandra Query Language (CQL) requests via open-source Cassandra drivers, Amazon Keyspaces supports data definition language (DDL) operations to manage keyspaces and tables using the Amazon Web Services SDK and CLI, as well as infrastructure as code (IaC) services and tools such as CloudFormation and Terraform. This API reference describes the supported DDL operations in detail.</p> <p>For the list of all supported CQL APIs, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/cassandra-apis.html">Supported Cassandra APIs, operations, and data types in Amazon Keyspaces</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>To learn how Amazon Keyspaces API actions are recorded with CloudTrail, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/logging-using-cloudtrail.html#service-name-info-in-cloudtrail">Amazon Keyspaces information in CloudTrail</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>For more information about Amazon Web Services APIs, for example how to implement retry logic or how to sign Amazon Web Services API requests, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-apis.html">Amazon Web Services APIs</a> in the <i>General Reference</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cassandra/>
### Available Operations

* [createKeyspace](#createkeyspace) - <p>The <code>CreateKeyspace</code> operation adds a new keyspace to your account. In an Amazon Web Services account, keyspace names must be unique within each Region.</p> <p> <code>CreateKeyspace</code> is an asynchronous operation. You can monitor the creation status of the new keyspace by using the <code>GetKeyspace</code> operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/working-with-keyspaces.html#keyspaces-create">Creating keyspaces</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
* [createTable](#createtable) - <p>The <code>CreateTable</code> operation adds a new table to the specified keyspace. Within a keyspace, table names must be unique.</p> <p> <code>CreateTable</code> is an asynchronous operation. When the request is received, the status of the table is set to <code>CREATING</code>. You can monitor the creation status of the new table by using the <code>GetTable</code> operation, which returns the current <code>status</code> of the table. You can start using a table when the status is <code>ACTIVE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/working-with-tables.html#tables-create">Creating tables</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
* [deleteKeyspace](#deletekeyspace) - The <code>DeleteKeyspace</code> operation deletes a keyspace and all of its tables. 
* [deleteTable](#deletetable) - The <code>DeleteTable</code> operation deletes a table and all of its data. After a <code>DeleteTable</code> request is received, the specified table is in the <code>DELETING</code> state until Amazon Keyspaces completes the deletion. If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is either in the <code>CREATING</code> or <code>UPDATING</code> states, then Amazon Keyspaces returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon Keyspaces returns a <code>ResourceNotFoundException</code>. If the table is already in the <code>DELETING</code> state, no error is returned.
* [getKeyspace](#getkeyspace) - Returns the name and the Amazon Resource Name (ARN) of the specified table.
* [getTable](#gettable) - <p>Returns information about the table, including the table's name and current status, the keyspace name, configuration settings, and metadata.</p> <p>To read table metadata using <code>GetTable</code>, <code>Select</code> action permissions for the table and system tables are required to complete the operation.</p>
* [listKeyspaces](#listkeyspaces) - Returns a list of keyspaces.
* [listTables](#listtables) - Returns a list of tables for a specified keyspace.
* [listTagsForResource](#listtagsforresource) - Returns a list of all tags associated with the specified Amazon Keyspaces resource.
* [restoreTable](#restoretable) - <p>Restores the specified table to the specified point in time within the <code>earliest_restorable_timestamp</code> and the current time. For more information about restore points, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_window"> Time window for PITR continuous backups</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account.</p> <p>When you restore using point in time recovery, Amazon Keyspaces restores your source table's schema and data to the state based on the selected timestamp <code>(day:hour:minute:second)</code> to a new table. The Time to Live (TTL) settings are also restored to the state based on the selected timestamp.</p> <p>In addition to the table's schema, data, and TTL settings, <code>RestoreTable</code> restores the capacity mode, encryption, and point-in-time recovery settings from the source table. Unlike the table's schema data and TTL settings, which are restored based on the selected timestamp, these settings are always restored based on the table's settings as of the current time or when the table was deleted.</p> <p>You can also overwrite these settings during restore:</p> <ul> <li> <p>Read/write capacity mode</p> </li> <li> <p>Provisioned throughput capacity settings</p> </li> <li> <p>Point-in-time (PITR) settings</p> </li> <li> <p>Tags</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_settings">PITR restore settings</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>Note that the following settings are not restored, and you must configure them manually for the new table:</p> <ul> <li> <p>Automatic scaling policies (for tables that use provisioned capacity mode)</p> </li> <li> <p>Identity and Access Management (IAM) policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> </ul>
* [tagResource](#tagresource) - <p>Associates a set of tags with a Amazon Keyspaces resource. You can then activate these user-defined tags so that they appear on the Cost Management Console for cost allocation tracking. For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>For IAM policy examples that show how to control access to Amazon Keyspaces resources based on tags, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/security_iam_id-based-policy-examples-tags">Amazon Keyspaces resource access based on tags</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
* [untagResource](#untagresource) - Removes the association of tags from a Amazon Keyspaces resource.
* [updateTable](#updatetable) - Adds new columns to the table or updates one of the table's settings, for example capacity mode, encryption, point-in-time recovery, or ttl settings. Note that you can only update one specific table setting per update operation.

## createKeyspace

<p>The <code>CreateKeyspace</code> operation adds a new keyspace to your account. In an Amazon Web Services account, keyspace names must be unique within each Region.</p> <p> <code>CreateKeyspace</code> is an asynchronous operation. You can monitor the creation status of the new keyspace by using the <code>GetKeyspace</code> operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/working-with-keyspaces.html#keyspaces-create">Creating keyspaces</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateKeyspaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateKeyspaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateKeyspaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateKeyspaceRequest();
    $request->createKeyspaceRequest = new CreateKeyspaceRequest();
    $request->createKeyspaceRequest->keyspaceName = 'error';
    $request->createKeyspaceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = CreateKeyspaceXAmzTargetEnum::KEYSPACES_SERVICE_CREATE_KEYSPACE;

    $response = $sdk->sdk->createKeyspace($request);

    if ($response->createKeyspaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTable

<p>The <code>CreateTable</code> operation adds a new table to the specified keyspace. Within a keyspace, table names must be unique.</p> <p> <code>CreateTable</code> is an asynchronous operation. When the request is received, the status of the table is set to <code>CREATING</code>. You can monitor the creation status of the new table by using the <code>GetTable</code> operation, which returns the current <code>status</code> of the table. You can start using a table when the status is <code>ACTIVE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/working-with-tables.html#tables-create">Creating tables</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\CapacitySpecification;
use \OpenAPI\OpenAPI\Models\Shared\ThroughputModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClientSideTimestamps;
use \OpenAPI\OpenAPI\Models\Shared\ClientSideTimestampsStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Comment;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionSpecification;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PointInTimeRecovery;
use \OpenAPI\OpenAPI\Models\Shared\PointInTimeRecoveryStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchemaDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ColumnDefinition;
use \OpenAPI\OpenAPI\Models\Shared\ClusteringKey;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartitionKey;
use \OpenAPI\OpenAPI\Models\Shared\StaticColumn;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TimeToLive;
use \OpenAPI\OpenAPI\Models\Shared\TimeToLiveStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTableRequest();
    $request->createTableRequest = new CreateTableRequest();
    $request->createTableRequest->capacitySpecification = new CapacitySpecification();
    $request->createTableRequest->capacitySpecification->readCapacityUnits = 383441;
    $request->createTableRequest->capacitySpecification->throughputMode = ThroughputModeEnum::PAY_PER_REQUEST;
    $request->createTableRequest->capacitySpecification->writeCapacityUnits = 791725;
    $request->createTableRequest->clientSideTimestamps = new ClientSideTimestamps();
    $request->createTableRequest->clientSideTimestamps->status = ClientSideTimestampsStatusEnum::ENABLED;
    $request->createTableRequest->comment = new Comment();
    $request->createTableRequest->comment->message = 'placeat';
    $request->createTableRequest->defaultTimeToLive = 528895;
    $request->createTableRequest->encryptionSpecification = new EncryptionSpecification();
    $request->createTableRequest->encryptionSpecification->kmsKeyIdentifier = 'iusto';
    $request->createTableRequest->encryptionSpecification->type = EncryptionTypeEnum::AWS_OWNED_KMS_KEY;
    $request->createTableRequest->keyspaceName = 'nisi';
    $request->createTableRequest->pointInTimeRecovery = new PointInTimeRecovery();
    $request->createTableRequest->pointInTimeRecovery->status = PointInTimeRecoveryStatusEnum::DISABLED;
    $request->createTableRequest->schemaDefinition = new SchemaDefinition();
    $request->createTableRequest->schemaDefinition->allColumns = [
        new ColumnDefinition(),
        new ColumnDefinition(),
        new ColumnDefinition(),
        new ColumnDefinition(),
    ];
    $request->createTableRequest->schemaDefinition->clusteringKeys = [
        new ClusteringKey(),
    ];
    $request->createTableRequest->schemaDefinition->partitionKeys = [
        new PartitionKey(),
        new PartitionKey(),
    ];
    $request->createTableRequest->schemaDefinition->staticColumns = [
        new StaticColumn(),
    ];
    $request->createTableRequest->tableName = 'deserunt';
    $request->createTableRequest->tags = [
        new Tag(),
    ];
    $request->createTableRequest->ttl = new TimeToLive();
    $request->createTableRequest->ttl->status = TimeToLiveStatusEnum::ENABLED;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = CreateTableXAmzTargetEnum::KEYSPACES_SERVICE_CREATE_TABLE;

    $response = $sdk->sdk->createTable($request);

    if ($response->createTableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteKeyspace

The <code>DeleteKeyspace</code> operation deletes a keyspace and all of its tables. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteKeyspaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteKeyspaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteKeyspaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteKeyspaceRequest();
    $request->deleteKeyspaceRequest = new DeleteKeyspaceRequest();
    $request->deleteKeyspaceRequest->keyspaceName = 'maiores';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = DeleteKeyspaceXAmzTargetEnum::KEYSPACES_SERVICE_DELETE_KEYSPACE;

    $response = $sdk->sdk->deleteKeyspace($request);

    if ($response->deleteKeyspaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTable

The <code>DeleteTable</code> operation deletes a table and all of its data. After a <code>DeleteTable</code> request is received, the specified table is in the <code>DELETING</code> state until Amazon Keyspaces completes the deletion. If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is either in the <code>CREATING</code> or <code>UPDATING</code> states, then Amazon Keyspaces returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon Keyspaces returns a <code>ResourceNotFoundException</code>. If the table is already in the <code>DELETING</code> state, no error is returned.

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
    $request->deleteTableRequest->keyspaceName = 'dicta';
    $request->deleteTableRequest->tableName = 'nam';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = DeleteTableXAmzTargetEnum::KEYSPACES_SERVICE_DELETE_TABLE;

    $response = $sdk->sdk->deleteTable($request);

    if ($response->deleteTableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getKeyspace

Returns the name and the Amazon Resource Name (ARN) of the specified table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetKeyspaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetKeyspaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetKeyspaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetKeyspaceRequest();
    $request->getKeyspaceRequest = new GetKeyspaceRequest();
    $request->getKeyspaceRequest->keyspaceName = 'beatae';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = GetKeyspaceXAmzTargetEnum::KEYSPACES_SERVICE_GET_KEYSPACE;

    $response = $sdk->sdk->getKeyspace($request);

    if ($response->getKeyspaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTable

<p>Returns information about the table, including the table's name and current status, the keyspace name, configuration settings, and metadata.</p> <p>To read table metadata using <code>GetTable</code>, <code>Select</code> action permissions for the table and system tables are required to complete the operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTableRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTableRequest();
    $request->getTableRequest = new GetTableRequest();
    $request->getTableRequest->keyspaceName = 'ipsum';
    $request->getTableRequest->tableName = 'excepturi';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = GetTableXAmzTargetEnum::KEYSPACES_SERVICE_GET_TABLE;

    $response = $sdk->sdk->getTable($request);

    if ($response->getTableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listKeyspaces

Returns a list of keyspaces.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListKeyspacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListKeyspacesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListKeyspacesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListKeyspacesRequest();
    $request->listKeyspacesRequest = new ListKeyspacesRequest();
    $request->listKeyspacesRequest->maxResults = 616934;
    $request->listKeyspacesRequest->nextToken = 'laboriosam';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = ListKeyspacesXAmzTargetEnum::KEYSPACES_SERVICE_LIST_KEYSPACES;
    $request->maxResults = 'saepe';
    $request->nextToken = 'quidem';

    $response = $sdk->sdk->listKeyspaces($request);

    if ($response->listKeyspacesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTables

Returns a list of tables for a specified keyspace.

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
    $request->listTablesRequest->keyspaceName = 'architecto';
    $request->listTablesRequest->maxResults = 60225;
    $request->listTablesRequest->nextToken = 'reiciendis';
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = ListTablesXAmzTargetEnum::KEYSPACES_SERVICE_LIST_TABLES;
    $request->maxResults = 'nobis';
    $request->nextToken = 'enim';

    $response = $sdk->sdk->listTables($request);

    if ($response->listTablesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Returns a list of all tags associated with the specified Amazon Keyspaces resource.

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
    $request->listTagsForResourceRequest->maxResults = 607831;
    $request->listTagsForResourceRequest->nextToken = 'nemo';
    $request->listTagsForResourceRequest->resourceArn = 'minima';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::KEYSPACES_SERVICE_LIST_TAGS_FOR_RESOURCE;
    $request->maxResults = 'mollitia';
    $request->nextToken = 'dolorem';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## restoreTable

<p>Restores the specified table to the specified point in time within the <code>earliest_restorable_timestamp</code> and the current time. For more information about restore points, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_window"> Time window for PITR continuous backups</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account.</p> <p>When you restore using point in time recovery, Amazon Keyspaces restores your source table's schema and data to the state based on the selected timestamp <code>(day:hour:minute:second)</code> to a new table. The Time to Live (TTL) settings are also restored to the state based on the selected timestamp.</p> <p>In addition to the table's schema, data, and TTL settings, <code>RestoreTable</code> restores the capacity mode, encryption, and point-in-time recovery settings from the source table. Unlike the table's schema data and TTL settings, which are restored based on the selected timestamp, these settings are always restored based on the table's settings as of the current time or when the table was deleted.</p> <p>You can also overwrite these settings during restore:</p> <ul> <li> <p>Read/write capacity mode</p> </li> <li> <p>Provisioned throughput capacity settings</p> </li> <li> <p>Point-in-time (PITR) settings</p> </li> <li> <p>Tags</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery_HowItWorks.html#howitworks_backup_settings">PITR restore settings</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>Note that the following settings are not restored, and you must configure them manually for the new table:</p> <ul> <li> <p>Automatic scaling policies (for tables that use provisioned capacity mode)</p> </li> <li> <p>Identity and Access Management (IAM) policies</p> </li> <li> <p>Amazon CloudWatch metrics and alarms</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RestoreTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\RestoreTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\CapacitySpecification;
use \OpenAPI\OpenAPI\Models\Shared\ThroughputModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionSpecification;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PointInTimeRecovery;
use \OpenAPI\OpenAPI\Models\Shared\PointInTimeRecoveryStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\RestoreTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RestoreTableRequest();
    $request->restoreTableRequest = new RestoreTableRequest();
    $request->restoreTableRequest->capacitySpecificationOverride = new CapacitySpecification();
    $request->restoreTableRequest->capacitySpecificationOverride->readCapacityUnits = 635059;
    $request->restoreTableRequest->capacitySpecificationOverride->throughputMode = ThroughputModeEnum::PAY_PER_REQUEST;
    $request->restoreTableRequest->capacitySpecificationOverride->writeCapacityUnits = 995300;
    $request->restoreTableRequest->encryptionSpecificationOverride = new EncryptionSpecification();
    $request->restoreTableRequest->encryptionSpecificationOverride->kmsKeyIdentifier = 'mollitia';
    $request->restoreTableRequest->encryptionSpecificationOverride->type = EncryptionTypeEnum::AWS_OWNED_KMS_KEY;
    $request->restoreTableRequest->pointInTimeRecoveryOverride = new PointInTimeRecovery();
    $request->restoreTableRequest->pointInTimeRecoveryOverride->status = PointInTimeRecoveryStatusEnum::ENABLED;
    $request->restoreTableRequest->restoreTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-14T19:07:02.935Z');
    $request->restoreTableRequest->sourceKeyspaceName = 'molestiae';
    $request->restoreTableRequest->sourceTableName = 'velit';
    $request->restoreTableRequest->tagsOverride = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->restoreTableRequest->targetKeyspaceName = 'quia';
    $request->restoreTableRequest->targetTableName = 'quis';
    $request->xAmzAlgorithm = 'vitae';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'animi';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'sequi';
    $request->xAmzTarget = RestoreTableXAmzTargetEnum::KEYSPACES_SERVICE_RESTORE_TABLE;

    $response = $sdk->sdk->restoreTable($request);

    if ($response->restoreTableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Associates a set of tags with a Amazon Keyspaces resource. You can then activate these user-defined tags so that they appear on the Cost Management Console for cost allocation tracking. For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html">Adding tags and labels to Amazon Keyspaces resources</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>For IAM policy examples that show how to control access to Amazon Keyspaces resources based on tags, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/security_iam_id-based-policy-examples-tags">Amazon Keyspaces resource access based on tags</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>

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
    $request->tagResourceRequest->resourceArn = 'tenetur';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::KEYSPACES_SERVICE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes the association of tags from a Amazon Keyspaces resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceArn = 'quasi';
    $request->untagResourceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::KEYSPACES_SERVICE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTable

Adds new columns to the table or updates one of the table's settings, for example capacity mode, encryption, point-in-time recovery, or ttl settings. Note that you can only update one specific table setting per update operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\ColumnDefinition;
use \OpenAPI\OpenAPI\Models\Shared\CapacitySpecification;
use \OpenAPI\OpenAPI\Models\Shared\ThroughputModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClientSideTimestamps;
use \OpenAPI\OpenAPI\Models\Shared\ClientSideTimestampsStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionSpecification;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PointInTimeRecovery;
use \OpenAPI\OpenAPI\Models\Shared\PointInTimeRecoveryStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeToLive;
use \OpenAPI\OpenAPI\Models\Shared\TimeToLiveStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTableRequest();
    $request->updateTableRequest = new UpdateTableRequest();
    $request->updateTableRequest->addColumns = [
        new ColumnDefinition(),
        new ColumnDefinition(),
    ];
    $request->updateTableRequest->capacitySpecification = new CapacitySpecification();
    $request->updateTableRequest->capacitySpecification->readCapacityUnits = 739264;
    $request->updateTableRequest->capacitySpecification->throughputMode = ThroughputModeEnum::PAY_PER_REQUEST;
    $request->updateTableRequest->capacitySpecification->writeCapacityUnits = 39187;
    $request->updateTableRequest->clientSideTimestamps = new ClientSideTimestamps();
    $request->updateTableRequest->clientSideTimestamps->status = ClientSideTimestampsStatusEnum::ENABLED;
    $request->updateTableRequest->defaultTimeToLive = 441711;
    $request->updateTableRequest->encryptionSpecification = new EncryptionSpecification();
    $request->updateTableRequest->encryptionSpecification->kmsKeyIdentifier = 'ut';
    $request->updateTableRequest->encryptionSpecification->type = EncryptionTypeEnum::AWS_OWNED_KMS_KEY;
    $request->updateTableRequest->keyspaceName = 'dicta';
    $request->updateTableRequest->pointInTimeRecovery = new PointInTimeRecovery();
    $request->updateTableRequest->pointInTimeRecovery->status = PointInTimeRecoveryStatusEnum::ENABLED;
    $request->updateTableRequest->tableName = 'dolore';
    $request->updateTableRequest->ttl = new TimeToLive();
    $request->updateTableRequest->ttl->status = TimeToLiveStatusEnum::ENABLED;
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = UpdateTableXAmzTargetEnum::KEYSPACES_SERVICE_UPDATE_TABLE;

    $response = $sdk->sdk->updateTable($request);

    if ($response->updateTableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
