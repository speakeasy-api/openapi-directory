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
    $request->requestBody->database = 'corrupti';
    $request->requestBody->parameterSets = [
        [
            new SqlParameter(),
            new SqlParameter(),
            new SqlParameter(),
        ],
        [
            new SqlParameter(),
            new SqlParameter(),
            new SqlParameter(),
            new SqlParameter(),
        ],
        [
            new SqlParameter(),
            new SqlParameter(),
            new SqlParameter(),
        ],
    ];
    $request->requestBody->resourceArn = 'nulla';
    $request->requestBody->schema = 'corrupti';
    $request->requestBody->secretArn = 'illum';
    $request->requestBody->sql = 'vel';
    $request->requestBody->transactionId = 'error';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->batchExecuteStatement($request);

    if ($response->batchExecuteStatementResponse !== null) {
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

* [batchExecuteStatement](docs/sdk/README.md#batchexecutestatement) - <p>Runs a batch SQL statement over an array of data.</p> <p>You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and the size of each parameter set.</p> <p>The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.</p> </note>
* [beginTransaction](docs/sdk/README.md#begintransaction) - <p>Starts a SQL transaction.</p> <note> <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.</p> <p>A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.</p> <p>DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate <code>ExecuteStatement</code> call with <code>continueAfterTimeout</code> enabled.</p> </note>
* [commitTransaction](docs/sdk/README.md#committransaction) - Ends a SQL transaction started with the <code>BeginTransaction</code> operation and commits the changes.
* [~~executeSql~~](docs/sdk/README.md#executesql) - <p>Runs one or more SQL statements.</p> <note> <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p> </note> :warning: **Deprecated**
* [executeStatement](docs/sdk/README.md#executestatement) - <p>Runs a SQL statement against a database.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>If the binary response data from the database is more than 1 MB, the call is terminated.</p> </note>
* [rollbackTransaction](docs/sdk/README.md#rollbacktransaction) - Performs a rollback of a transaction. Rolling back a transaction cancels its changes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
