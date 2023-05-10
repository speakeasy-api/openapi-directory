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