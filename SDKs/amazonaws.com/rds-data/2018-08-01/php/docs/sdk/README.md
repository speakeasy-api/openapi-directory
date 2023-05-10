# SDK

## Overview

<p><fullname>Amazon RDS Data Service</fullname> <p>Amazon RDS provides an HTTP endpoint to run SQL statements on an Amazon Aurora Serverless v1 DB cluster. To run these statements, you work with the Data Service API.</p> <note> <p>The Data Service API isn't supported on Amazon Aurora Serverless v2 DB clusters.</p> </note> <p>For more information about the Data Service API, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API</a> in the <i>Amazon Aurora User Guide</i>.</p></p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/rds-data/>
### Available Operations

* [batchExecuteStatement](#batchexecutestatement) - <p>Runs a batch SQL statement over an array of data.</p> <p>You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and the size of each parameter set.</p> <p>The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.</p> </note>
* [beginTransaction](#begintransaction) - <p>Starts a SQL transaction.</p> <note> <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.</p> <p>A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.</p> <p>DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate <code>ExecuteStatement</code> call with <code>continueAfterTimeout</code> enabled.</p> </note>
* [commitTransaction](#committransaction) - Ends a SQL transaction started with the <code>BeginTransaction</code> operation and commits the changes.
* [~~executeSql~~](#executesql) - <p>Runs one or more SQL statements.</p> <note> <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p> </note> :warning: **Deprecated**
* [executeStatement](#executestatement) - <p>Runs a SQL statement against a database.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>If the binary response data from the database is more than 1 MB, the call is terminated.</p> </note>
* [rollbackTransaction](#rollbacktransaction) - Performs a rollback of a transaction. Rolling back a transaction cancels its changes.

## batchExecuteStatement

<p>Runs a batch SQL statement over an array of data.</p> <p>You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and the size of each parameter set.</p> <p>The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchExecuteStatementRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchExecuteStatementRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SqlParameter;
use \OpenAPI\OpenAPI\Models\Shared\TypeHintEnum;
use \OpenAPI\OpenAPI\Models\Shared\Field;
use \OpenAPI\OpenAPI\Models\Shared\ArrayValue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchExecuteStatementRequest();
    $request->requestBody = new BatchExecuteStatementRequestBody();
    $request->requestBody->database = 'tempora';
    $request->requestBody->parameterSets = [
        [
            new SqlParameter(),
            new SqlParameter(),
        ],
        [
            new SqlParameter(),
            new SqlParameter(),
            new SqlParameter(),
            new SqlParameter(),
        ],
    ];
    $request->requestBody->resourceArn = 'placeat';
    $request->requestBody->schema = 'voluptatum';
    $request->requestBody->secretArn = 'iusto';
    $request->requestBody->sql = 'excepturi';
    $request->requestBody->transactionId = 'nisi';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->batchExecuteStatement($request);

    if ($response->batchExecuteStatementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## beginTransaction

<p>Starts a SQL transaction.</p> <note> <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.</p> <p>A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.</p> <p>DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate <code>ExecuteStatement</code> call with <code>continueAfterTimeout</code> enabled.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BeginTransactionRequest;
use \OpenAPI\OpenAPI\Models\Operations\BeginTransactionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BeginTransactionRequest();
    $request->requestBody = new BeginTransactionRequestBody();
    $request->requestBody->database = 'ipsam';
    $request->requestBody->resourceArn = 'repellendus';
    $request->requestBody->schema = 'sapiente';
    $request->requestBody->secretArn = 'quo';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->beginTransaction($request);

    if ($response->beginTransactionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## commitTransaction

Ends a SQL transaction started with the <code>BeginTransaction</code> operation and commits the changes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CommitTransactionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CommitTransactionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CommitTransactionRequest();
    $request->requestBody = new CommitTransactionRequestBody();
    $request->requestBody->resourceArn = 'esse';
    $request->requestBody->secretArn = 'totam';
    $request->requestBody->transactionId = 'porro';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->commitTransaction($request);

    if ($response->commitTransactionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~executeSql~~

<p>Runs one or more SQL statements.</p> <note> <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p> </note>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteSqlRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteSqlRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExecuteSqlRequest();
    $request->requestBody = new ExecuteSqlRequestBody();
    $request->requestBody->awsSecretStoreArn = 'hic';
    $request->requestBody->database = 'optio';
    $request->requestBody->dbClusterOrInstanceArn = 'totam';
    $request->requestBody->schema = 'beatae';
    $request->requestBody->sqlStatements = 'commodi';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->executeSql($request);

    if ($response->executeSqlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## executeStatement

<p>Runs a SQL statement against a database.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>If the binary response data from the database is more than 1 MB, the call is terminated.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteStatementRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteStatementRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteStatementRequestBodyFormatRecordsAsEnum;
use \OpenAPI\OpenAPI\Models\Shared\SqlParameter;
use \OpenAPI\OpenAPI\Models\Shared\TypeHintEnum;
use \OpenAPI\OpenAPI\Models\Shared\Field;
use \OpenAPI\OpenAPI\Models\Shared\ArrayValue;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteStatementRequestBodyResultSetOptions;
use \OpenAPI\OpenAPI\Models\Shared\DecimalReturnTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LongReturnTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExecuteStatementRequest();
    $request->requestBody = new ExecuteStatementRequestBody();
    $request->requestBody->continueAfterTimeout = false;
    $request->requestBody->database = 'excepturi';
    $request->requestBody->formatRecordsAs = ExecuteStatementRequestBodyFormatRecordsAsEnum::NONE;
    $request->requestBody->includeResultMetadata = false;
    $request->requestBody->parameters = [
        new SqlParameter(),
    ];
    $request->requestBody->resourceArn = 'ad';
    $request->requestBody->resultSetOptions = new ExecuteStatementRequestBodyResultSetOptions();
    $request->requestBody->resultSetOptions->decimalReturnType = DecimalReturnTypeEnum::DOUBLE_OR_LONG;
    $request->requestBody->resultSetOptions->longReturnType = LongReturnTypeEnum::STRING;
    $request->requestBody->schema = 'iste';
    $request->requestBody->secretArn = 'dolor';
    $request->requestBody->sql = 'natus';
    $request->requestBody->transactionId = 'laboriosam';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->sdk->executeStatement($request);

    if ($response->executeStatementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rollbackTransaction

Performs a rollback of a transaction. Rolling back a transaction cancels its changes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RollbackTransactionRequest;
use \OpenAPI\OpenAPI\Models\Operations\RollbackTransactionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RollbackTransactionRequest();
    $request->requestBody = new RollbackTransactionRequestBody();
    $request->requestBody->resourceArn = 'saepe';
    $request->requestBody->secretArn = 'quidem';
    $request->requestBody->transactionId = 'architecto';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'dolorem';

    $response = $sdk->sdk->rollbackTransaction($request);

    if ($response->rollbackTransactionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
