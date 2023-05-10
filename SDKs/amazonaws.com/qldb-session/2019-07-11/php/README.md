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
use \OpenAPI\OpenAPI\Models\Operations\SendCommandRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendCommandRequest;
use \OpenAPI\OpenAPI\Models\Shared\CommitTransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExecuteStatementRequest;
use \OpenAPI\OpenAPI\Models\Shared\ValueHolder;
use \OpenAPI\OpenAPI\Models\Shared\FetchPageRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\SendCommandXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendCommandRequest();
    $request->sendCommandRequest = new SendCommandRequest();
    $request->sendCommandRequest->abortTransaction = [
        'provident' => 'distinctio',
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
    ];
    $request->sendCommandRequest->commitTransaction = new CommitTransactionRequest();
    $request->sendCommandRequest->commitTransaction->commitDigest = 'illum';
    $request->sendCommandRequest->commitTransaction->transactionId = 'vel';
    $request->sendCommandRequest->endSession = [
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->sendCommandRequest->executeStatement = new ExecuteStatementRequest();
    $request->sendCommandRequest->executeStatement->parameters = [
        new ValueHolder(),
        new ValueHolder(),
        new ValueHolder(),
        new ValueHolder(),
    ];
    $request->sendCommandRequest->executeStatement->statement = 'tempora';
    $request->sendCommandRequest->executeStatement->transactionId = 'suscipit';
    $request->sendCommandRequest->fetchPage = new FetchPageRequest();
    $request->sendCommandRequest->fetchPage->nextPageToken = 'molestiae';
    $request->sendCommandRequest->fetchPage->transactionId = 'minus';
    $request->sendCommandRequest->sessionToken = 'placeat';
    $request->sendCommandRequest->startSession = new StartSessionRequest();
    $request->sendCommandRequest->startSession->ledgerName = 'voluptatum';
    $request->sendCommandRequest->startTransaction = [
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
    ];
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->xAmzTarget = SendCommandXAmzTargetEnum::QLDB_SESSION_SEND_COMMAND;

    $response = $sdk->sendCommand($request);

    if ($response->sendCommandResult !== null) {
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

* [sendCommand](docs/sdk/README.md#sendcommand) - <p>Sends a command to an Amazon QLDB ledger.</p> <note> <p>Instead of interacting directly with this API, we recommend using the QLDB driver or the QLDB shell to execute data transactions on a ledger.</p> <ul> <li> <p>If you are working with an AWS SDK, use the QLDB driver. The driver provides a high-level abstraction layer above this <i>QLDB Session</i> data plane and manages <code>SendCommand</code> API calls for you. For information and a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started with the driver</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> <li> <p>If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB shell. The shell is a command line interface that uses the QLDB driver to interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the QLDB shell</a>.</p> </li> </ul> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
