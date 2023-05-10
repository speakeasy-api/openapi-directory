# SDK

## Overview

<p>Amazon DynamoDB is a fast, highly scalable, highly available, cost-effective non-relational database service.</p> <p>Amazon DynamoDB removes traditional scalability limitations on data storage while maintaining low latency and predictable performance.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/dynamodb/>
### Available Operations

* [batchGetItem](#batchgetitem) - <p>Retrieves the attributes for multiple items from multiple tables using their primary keys.</p> <p>The maximum number of item attributes that can be retrieved for a single operation is 100. Also, the number of items retrieved is constrained by a 1 MB the size limit. If the response size limit is exceeded or a partial result is returned due to an internal processing failure, Amazon DynamoDB returns an <code>UnprocessedKeys</code> value so you can retry the operation starting with the next item to get.</p> <p>Amazon DynamoDB automatically adjusts the number of items returned per page to enforce this limit. For example, even if you ask to retrieve 100 items, but each individual item is 50k in size, the system returns 20 items and an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If necessary, your application needs its own logic to assemble the pages of results into one set.</p>
* [batchWriteItem](#batchwriteitem) - <p>Allows to execute a batch of Put and/or Delete Requests for many tables in a single call. A total of 25 requests are allowed.</p> <p>There are no transaction guarantees provided by this API. It does not allow conditional puts nor does it support return values.</p>
* [createTable](#createtable) - <p>Adds a new table to your account.</p> <p>The table name must be unique among those associated with the AWS Account issuing the request, and the AWS Region that receives the request (e.g. <code>us-east-1</code>).</p> <p>The <code>CreateTable</code> operation triggers an asynchronous workflow to begin creating the table. Amazon DynamoDB immediately returns the state of the table (<code>CREATING</code>) until the table is in the <code>ACTIVE</code> state. Once the table is in the <code>ACTIVE</code> state, you can perform data plane operations.</p>
* [deleteItem](#deleteitem) - <p>Deletes a single item in a table by primary key.</p> <p>You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p>
* [deleteTable](#deletetable) - <p>Deletes a table and all of its items.</p> <p>If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states then Amazon DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
* [describeTable](#describetable) - <p>Retrieves information about the table, including the current status of the table, the primary key schema and when the table was created.</p> <p>If the table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
* [getItem](#getitem) - <p>Retrieves a set of Attributes for an item that matches the primary key.</p> <p>The <code>GetItem</code> operation provides an eventually-consistent read by default. If eventually-consistent reads are not acceptable for your application, use <code>ConsistentRead</code>. Although this operation might take longer than a standard read, it always returns the last updated value.</p>
* [listTables](#listtables) - Retrieves a paginated list of table names created by the AWS Account of the caller in the AWS Region (e.g. <code>us-east-1</code>).
* [putItem](#putitem) - <p>Creates a new item, or replaces an old item with a new item (including all the attributes).</p> <p>If an item already exists in the specified table with the same primary key, the new item completely replaces the existing item. You can perform a conditional put (insert a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values.</p>
* [query](#query) - <p>Gets the values of one or more items and its attributes by primary key (composite primary key, only).</p> <p>Narrow the scope of the query using comparison operators on the <code>RangeKeyValue</code> of the composite key. Use the <code>ScanIndexForward</code> parameter to get results in forward or reverse order by range key.</p>
* [scan](#scan) - <p>Retrieves one or more items and its attributes by performing a full scan of a table.</p> <p>Provide a <code>ScanFilter</code> to get more specific results.</p>
* [updateItem](#updateitem) - <p>Edits an existing item's attributes.</p> <p>You can perform a conditional update (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p>
* [updateTable](#updatetable) - <p>Updates the provisioned throughput for the given table.</p> <p>Setting the throughput for a table helps you manage performance and is part of the Provisioned Throughput feature of Amazon DynamoDB.</p>

## batchGetItem

<p>Retrieves the attributes for multiple items from multiple tables using their primary keys.</p> <p>The maximum number of item attributes that can be retrieved for a single operation is 100. Also, the number of items retrieved is constrained by a 1 MB the size limit. If the response size limit is exceeded or a partial result is returned due to an internal processing failure, Amazon DynamoDB returns an <code>UnprocessedKeys</code> value so you can retry the operation starting with the next item to get.</p> <p>Amazon DynamoDB automatically adjusts the number of items returned per page to enforce this limit. For example, even if you ask to retrieve 100 items, but each individual item is 50k in size, the system returns 20 items and an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If necessary, your application needs its own logic to assemble the pages of results into one set.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetItemInput;
use \OpenAPI\OpenAPI\Models\Shared\KeysAndAttributes;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetItemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetItemRequest();
    $request->batchGetItemInput = new BatchGetItemInput();
    $request->batchGetItemInput->requestItems = [
        'magnam' => new KeysAndAttributes(),
        'debitis' => new KeysAndAttributes(),
    ];
    $request->requestItems = 'ipsa';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'voluptatum';
    $request->xAmzTarget = BatchGetItemXAmzTargetEnum::DYNAMO_DB20111205_BATCH_GET_ITEM;

    $response = $sdk->sdk->batchGetItem($request);

    if ($response->batchGetItemOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchWriteItem

<p>Allows to execute a batch of Put and/or Delete Requests for many tables in a single call. A total of 25 requests are allowed.</p> <p>There are no transaction guarantees provided by this API. It does not allow conditional puts nor does it support return values.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchWriteItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchWriteItemInput;
use \OpenAPI\OpenAPI\Models\Shared\WriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\PutRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchWriteItemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchWriteItemRequest();
    $request->batchWriteItemInput = new BatchWriteItemInput();
    $request->batchWriteItemInput->requestItems = [
        'excepturi' => [
            new WriteRequest(),
            new WriteRequest(),
        ],
        'recusandae' => [
            new WriteRequest(),
            new WriteRequest(),
            new WriteRequest(),
            new WriteRequest(),
        ],
    ];
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->xAmzTarget = BatchWriteItemXAmzTargetEnum::DYNAMO_DB20111205_BATCH_WRITE_ITEM;

    $response = $sdk->sdk->batchWriteItem($request);

    if ($response->batchWriteItemOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTable

<p>Adds a new table to your account.</p> <p>The table name must be unique among those associated with the AWS Account issuing the request, and the AWS Region that receives the request (e.g. <code>us-east-1</code>).</p> <p>The <code>CreateTable</code> operation triggers an asynchronous workflow to begin creating the table. Amazon DynamoDB immediately returns the state of the table (<code>CREATING</code>) until the table is in the <code>ACTIVE</code> state. Once the table is in the <code>ACTIVE</code> state, you can perform data plane operations.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTableInput;
use \OpenAPI\OpenAPI\Models\Shared\KeySchema;
use \OpenAPI\OpenAPI\Models\Shared\KeySchemaElement;
use \OpenAPI\OpenAPI\Models\Shared\ScalarAttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProvisionedThroughput;
use \OpenAPI\OpenAPI\Models\Operations\CreateTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTableRequest();
    $request->createTableInput = new CreateTableInput();
    $request->createTableInput->keySchema = new KeySchema();
    $request->createTableInput->keySchema->hashKeyElement = new KeySchemaElement();
    $request->createTableInput->keySchema->hashKeyElement->attributeName = 'sapiente';
    $request->createTableInput->keySchema->hashKeyElement->attributeType = ScalarAttributeTypeEnum::B;
    $request->createTableInput->keySchema->rangeKeyElement = new KeySchemaElement();
    $request->createTableInput->keySchema->rangeKeyElement->attributeName = 'odit';
    $request->createTableInput->keySchema->rangeKeyElement->attributeType = ScalarAttributeTypeEnum::B;
    $request->createTableInput->provisionedThroughput = new ProvisionedThroughput();
    $request->createTableInput->provisionedThroughput->readCapacityUnits = 870088;
    $request->createTableInput->provisionedThroughput->writeCapacityUnits = 978619;
    $request->createTableInput->tableName = 'molestiae';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = CreateTableXAmzTargetEnum::DYNAMO_DB20111205_CREATE_TABLE;

    $response = $sdk->sdk->createTable($request);

    if ($response->createTableOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteItem

<p>Deletes a single item in a table by primary key.</p> <p>You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteItemInput;
use \OpenAPI\OpenAPI\Models\Shared\ExpectedAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\ReturnValueEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteItemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteItemRequest();
    $request->deleteItemInput = new DeleteItemInput();
    $request->deleteItemInput->expected = [
        'officia' => new ExpectedAttributeValue(),
        'occaecati' => new ExpectedAttributeValue(),
        'fugit' => new ExpectedAttributeValue(),
    ];
    $request->deleteItemInput->key = new Key();
    $request->deleteItemInput->key->hashKeyElement = new AttributeValue();
    $request->deleteItemInput->key->hashKeyElement->b = 'deleniti';
    $request->deleteItemInput->key->hashKeyElement->bs = [
        'optio',
        'totam',
        'beatae',
        'commodi',
    ];
    $request->deleteItemInput->key->hashKeyElement->n = 'molestiae';
    $request->deleteItemInput->key->hashKeyElement->ns = [
        'qui',
        'impedit',
    ];
    $request->deleteItemInput->key->hashKeyElement->s = 'cum';
    $request->deleteItemInput->key->hashKeyElement->ss = [
        'ipsum',
        'excepturi',
    ];
    $request->deleteItemInput->key->rangeKeyElement = new AttributeValue();
    $request->deleteItemInput->key->rangeKeyElement->b = 'aspernatur';
    $request->deleteItemInput->key->rangeKeyElement->bs = [
        'ad',
    ];
    $request->deleteItemInput->key->rangeKeyElement->n = 'natus';
    $request->deleteItemInput->key->rangeKeyElement->ns = [
        'iste',
    ];
    $request->deleteItemInput->key->rangeKeyElement->s = 'dolor';
    $request->deleteItemInput->key->rangeKeyElement->ss = [
        'laboriosam',
        'hic',
        'saepe',
    ];
    $request->deleteItemInput->returnValues = ReturnValueEnum::ALL_NEW;
    $request->deleteItemInput->tableName = 'in';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = DeleteItemXAmzTargetEnum::DYNAMO_DB20111205_DELETE_ITEM;

    $response = $sdk->sdk->deleteItem($request);

    if ($response->deleteItemOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTable

<p>Deletes a table and all of its items.</p> <p>If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states then Amazon DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTableInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTableRequest();
    $request->deleteTableInput = new DeleteTableInput();
    $request->deleteTableInput->tableName = 'reiciendis';
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = DeleteTableXAmzTargetEnum::DYNAMO_DB20111205_DELETE_TABLE;

    $response = $sdk->sdk->deleteTable($request);

    if ($response->deleteTableOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTable

<p>Retrieves information about the table, including the current status of the table, the primary key schema and when the table was created.</p> <p>If the table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTableInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTableRequest();
    $request->describeTableInput = new DescribeTableInput();
    $request->describeTableInput->tableName = 'nobis';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = DescribeTableXAmzTargetEnum::DYNAMO_DB20111205_DESCRIBE_TABLE;

    $response = $sdk->sdk->describeTable($request);

    if ($response->describeTableOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItem

<p>Retrieves a set of Attributes for an item that matches the primary key.</p> <p>The <code>GetItem</code> operation provides an eventually-consistent read by default. If eventually-consistent reads are not acceptable for your application, use <code>ConsistentRead</code>. Although this operation might take longer than a standard read, it always returns the last updated value.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetItemInput;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Operations\GetItemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemRequest();
    $request->getItemInput = new GetItemInput();
    $request->getItemInput->attributesToGet = [
        'doloribus',
        'sapiente',
        'architecto',
    ];
    $request->getItemInput->consistentRead = false;
    $request->getItemInput->key = new Key();
    $request->getItemInput->key->hashKeyElement = new AttributeValue();
    $request->getItemInput->key->hashKeyElement->b = 'mollitia';
    $request->getItemInput->key->hashKeyElement->bs = [
        'culpa',
    ];
    $request->getItemInput->key->hashKeyElement->n = 'consequuntur';
    $request->getItemInput->key->hashKeyElement->ns = [
        'mollitia',
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->getItemInput->key->hashKeyElement->s = 'quam';
    $request->getItemInput->key->hashKeyElement->ss = [
        'velit',
        'error',
    ];
    $request->getItemInput->key->rangeKeyElement = new AttributeValue();
    $request->getItemInput->key->rangeKeyElement->b = 'quia';
    $request->getItemInput->key->rangeKeyElement->bs = [
        'vitae',
        'laborum',
    ];
    $request->getItemInput->key->rangeKeyElement->n = 'animi';
    $request->getItemInput->key->rangeKeyElement->ns = [
        'odit',
        'quo',
    ];
    $request->getItemInput->key->rangeKeyElement->s = 'sequi';
    $request->getItemInput->key->rangeKeyElement->ss = [
        'ipsam',
        'id',
        'possimus',
        'aut',
    ];
    $request->getItemInput->tableName = 'quasi';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = GetItemXAmzTargetEnum::DYNAMO_DB20111205_GET_ITEM;

    $response = $sdk->sdk->getItem($request);

    if ($response->getItemOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTables

Retrieves a paginated list of table names created by the AWS Account of the caller in the AWS Region (e.g. <code>us-east-1</code>).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTablesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTablesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListTablesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTablesRequest();
    $request->exclusiveStartTableName = 'nihil';
    $request->limit = 'praesentium';
    $request->listTablesInput = new ListTablesInput();
    $request->listTablesInput->exclusiveStartTableName = 'voluptatibus';
    $request->listTablesInput->limit = 55714;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'ut';
    $request->xAmzTarget = ListTablesXAmzTargetEnum::DYNAMO_DB20111205_LIST_TABLES;

    $response = $sdk->sdk->listTables($request);

    if ($response->listTablesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putItem

<p>Creates a new item, or replaces an old item with a new item (including all the attributes).</p> <p>If an item already exists in the specified table with the same primary key, the new item completely replaces the existing item. You can perform a conditional put (insert a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutItemInput;
use \OpenAPI\OpenAPI\Models\Shared\ExpectedAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\ReturnValueEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutItemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutItemRequest();
    $request->putItemInput = new PutItemInput();
    $request->putItemInput->expected = [
        'dicta' => new ExpectedAttributeValue(),
        'corporis' => new ExpectedAttributeValue(),
        'dolore' => new ExpectedAttributeValue(),
        'iusto' => new ExpectedAttributeValue(),
    ];
    $request->putItemInput->item = [
        'harum' => new AttributeValue(),
    ];
    $request->putItemInput->returnValues = ReturnValueEnum::ALL_OLD;
    $request->putItemInput->tableName = 'accusamus';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = PutItemXAmzTargetEnum::DYNAMO_DB20111205_PUT_ITEM;

    $response = $sdk->sdk->putItem($request);

    if ($response->putItemOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## query

<p>Gets the values of one or more items and its attributes by primary key (composite primary key, only).</p> <p>Narrow the scope of the query using comparison operators on the <code>RangeKeyValue</code> of the composite key. Use the <code>ScanIndexForward</code> parameter to get results in forward or reverse order by range key.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\QueryInput;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryRequest();
    $request->exclusiveStartKey = 'pariatur';
    $request->limit = 'modi';
    $request->queryInput = new QueryInput();
    $request->queryInput->attributesToGet = [
        'rem',
        'voluptates',
        'quasi',
    ];
    $request->queryInput->consistentRead = false;
    $request->queryInput->count = false;
    $request->queryInput->exclusiveStartKey = new Key();
    $request->queryInput->exclusiveStartKey->hashKeyElement = new AttributeValue();
    $request->queryInput->exclusiveStartKey->hashKeyElement->b = 'repudiandae';
    $request->queryInput->exclusiveStartKey->hashKeyElement->bs = [
        'veritatis',
        'itaque',
        'incidunt',
    ];
    $request->queryInput->exclusiveStartKey->hashKeyElement->n = 'enim';
    $request->queryInput->exclusiveStartKey->hashKeyElement->ns = [
        'est',
    ];
    $request->queryInput->exclusiveStartKey->hashKeyElement->s = 'quibusdam';
    $request->queryInput->exclusiveStartKey->hashKeyElement->ss = [
        'deserunt',
    ];
    $request->queryInput->exclusiveStartKey->rangeKeyElement = new AttributeValue();
    $request->queryInput->exclusiveStartKey->rangeKeyElement->b = 'distinctio';
    $request->queryInput->exclusiveStartKey->rangeKeyElement->bs = [
        'labore',
        'modi',
        'qui',
        'aliquid',
    ];
    $request->queryInput->exclusiveStartKey->rangeKeyElement->n = 'cupiditate';
    $request->queryInput->exclusiveStartKey->rangeKeyElement->ns = [
        'perferendis',
        'magni',
        'assumenda',
    ];
    $request->queryInput->exclusiveStartKey->rangeKeyElement->s = 'ipsam';
    $request->queryInput->exclusiveStartKey->rangeKeyElement->ss = [
        'fugit',
    ];
    $request->queryInput->hashKeyValue = new AttributeValue();
    $request->queryInput->hashKeyValue->b = 'dolorum';
    $request->queryInput->hashKeyValue->bs = [
        'tempora',
        'facilis',
        'tempore',
    ];
    $request->queryInput->hashKeyValue->n = 'labore';
    $request->queryInput->hashKeyValue->ns = [
        'eum',
        'non',
        'eligendi',
        'sint',
    ];
    $request->queryInput->hashKeyValue->s = 'aliquid';
    $request->queryInput->hashKeyValue->ss = [
        'necessitatibus',
        'sint',
        'officia',
    ];
    $request->queryInput->limit = 223081;
    $request->queryInput->rangeKeyCondition = new Condition();
    $request->queryInput->rangeKeyCondition->attributeValueList = [
        new AttributeValue(),
        new AttributeValue(),
        new AttributeValue(),
        new AttributeValue(),
    ];
    $request->queryInput->rangeKeyCondition->comparisonOperator = ComparisonOperatorEnum::BEGINS_WITH;
    $request->queryInput->scanIndexForward = false;
    $request->queryInput->tableName = 'dolorum';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = QueryXAmzTargetEnum::DYNAMO_DB20111205_QUERY;

    $response = $sdk->sdk->query($request);

    if ($response->queryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scan

<p>Retrieves one or more items and its attributes by performing a full scan of a table.</p> <p>Provide a <code>ScanFilter</code> to get more specific results.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ScanRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScanInput;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScanXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScanRequest();
    $request->exclusiveStartKey = 'cumque';
    $request->limit = 'facere';
    $request->scanInput = new ScanInput();
    $request->scanInput->attributesToGet = [
        'aliquid',
        'laborum',
    ];
    $request->scanInput->count = false;
    $request->scanInput->exclusiveStartKey = new Key();
    $request->scanInput->exclusiveStartKey->hashKeyElement = new AttributeValue();
    $request->scanInput->exclusiveStartKey->hashKeyElement->b = 'accusamus';
    $request->scanInput->exclusiveStartKey->hashKeyElement->bs = [
        'occaecati',
    ];
    $request->scanInput->exclusiveStartKey->hashKeyElement->n = 'enim';
    $request->scanInput->exclusiveStartKey->hashKeyElement->ns = [
        'delectus',
        'quidem',
        'provident',
        'nam',
    ];
    $request->scanInput->exclusiveStartKey->hashKeyElement->s = 'id';
    $request->scanInput->exclusiveStartKey->hashKeyElement->ss = [
        'deleniti',
        'sapiente',
        'amet',
    ];
    $request->scanInput->exclusiveStartKey->rangeKeyElement = new AttributeValue();
    $request->scanInput->exclusiveStartKey->rangeKeyElement->b = 'deserunt';
    $request->scanInput->exclusiveStartKey->rangeKeyElement->bs = [
        'vel',
        'natus',
    ];
    $request->scanInput->exclusiveStartKey->rangeKeyElement->n = 'omnis';
    $request->scanInput->exclusiveStartKey->rangeKeyElement->ns = [
        'perferendis',
        'nihil',
    ];
    $request->scanInput->exclusiveStartKey->rangeKeyElement->s = 'magnam';
    $request->scanInput->exclusiveStartKey->rangeKeyElement->ss = [
        'id',
        'labore',
        'labore',
    ];
    $request->scanInput->limit = 383462;
    $request->scanInput->scanFilter = [
        'nobis' => new Condition(),
        'eum' => new Condition(),
        'vero' => new Condition(),
    ];
    $request->scanInput->tableName = 'aspernatur';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'quos';
    $request->xAmzTarget = ScanXAmzTargetEnum::DYNAMO_DB20111205_SCAN;

    $response = $sdk->sdk->scan($request);

    if ($response->scanOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateItem

<p>Edits an existing item's attributes.</p> <p>You can perform a conditional update (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateItemInput;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValueUpdate;
use \OpenAPI\OpenAPI\Models\Shared\AttributeActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\ExpectedAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\ReturnValueEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateItemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateItemRequest();
    $request->updateItemInput = new UpdateItemInput();
    $request->updateItemInput->attributeUpdates = [
        'accusantium' => new AttributeValueUpdate(),
        'mollitia' => new AttributeValueUpdate(),
        'reiciendis' => new AttributeValueUpdate(),
    ];
    $request->updateItemInput->expected = [
        'ad' => new ExpectedAttributeValue(),
        'eum' => new ExpectedAttributeValue(),
        'dolor' => new ExpectedAttributeValue(),
    ];
    $request->updateItemInput->key = new Key();
    $request->updateItemInput->key->hashKeyElement = new AttributeValue();
    $request->updateItemInput->key->hashKeyElement->b = 'necessitatibus';
    $request->updateItemInput->key->hashKeyElement->bs = [
        'nemo',
    ];
    $request->updateItemInput->key->hashKeyElement->n = 'quasi';
    $request->updateItemInput->key->hashKeyElement->ns = [
        'doloribus',
        'debitis',
    ];
    $request->updateItemInput->key->hashKeyElement->s = 'eius';
    $request->updateItemInput->key->hashKeyElement->ss = [
        'deleniti',
        'facilis',
        'in',
        'architecto',
    ];
    $request->updateItemInput->key->rangeKeyElement = new AttributeValue();
    $request->updateItemInput->key->rangeKeyElement->b = 'architecto';
    $request->updateItemInput->key->rangeKeyElement->bs = [
        'ullam',
        'expedita',
        'nihil',
        'repellat',
    ];
    $request->updateItemInput->key->rangeKeyElement->n = 'quibusdam';
    $request->updateItemInput->key->rangeKeyElement->ns = [
        'saepe',
    ];
    $request->updateItemInput->key->rangeKeyElement->s = 'pariatur';
    $request->updateItemInput->key->rangeKeyElement->ss = [
        'consequuntur',
    ];
    $request->updateItemInput->returnValues = ReturnValueEnum::UPDATED_OLD;
    $request->updateItemInput->tableName = 'natus';
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = UpdateItemXAmzTargetEnum::DYNAMO_DB20111205_UPDATE_ITEM;

    $response = $sdk->sdk->updateItem($request);

    if ($response->updateItemOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTable

<p>Updates the provisioned throughput for the given table.</p> <p>Setting the throughput for a table helps you manage performance and is part of the Provisioned Throughput feature of Amazon DynamoDB.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTableInput;
use \OpenAPI\OpenAPI\Models\Shared\ProvisionedThroughput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTableRequest();
    $request->updateTableInput = new UpdateTableInput();
    $request->updateTableInput->provisionedThroughput = new ProvisionedThroughput();
    $request->updateTableInput->provisionedThroughput->readCapacityUnits = 569101;
    $request->updateTableInput->provisionedThroughput->writeCapacityUnits = 139972;
    $request->updateTableInput->tableName = 'ea';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'autem';
    $request->xAmzTarget = UpdateTableXAmzTargetEnum::DYNAMO_DB20111205_UPDATE_TABLE;

    $response = $sdk->sdk->updateTable($request);

    if ($response->updateTableOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
