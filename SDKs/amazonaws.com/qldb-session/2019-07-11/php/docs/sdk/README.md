# SDK

## Overview

<p>The transactional data APIs for Amazon QLDB</p> <note> <p>Instead of interacting directly with this API, we recommend using the QLDB driver or the QLDB shell to execute data transactions on a ledger.</p> <ul> <li> <p>If you are working with an AWS SDK, use the QLDB driver. The driver provides a high-level abstraction layer above this <i>QLDB Session</i> data plane and manages <code>SendCommand</code> API calls for you. For information and a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started with the driver</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> <li> <p>If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB shell. The shell is a command line interface that uses the QLDB driver to interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the QLDB shell</a>.</p> </li> </ul> </note>

Amazon Web Services documentation
<https://docs.aws.amazon.com/qldb/>
### Available Operations

* [sendCommand](#sendcommand) - <p>Sends a command to an Amazon QLDB ledger.</p> <note> <p>Instead of interacting directly with this API, we recommend using the QLDB driver or the QLDB shell to execute data transactions on a ledger.</p> <ul> <li> <p>If you are working with an AWS SDK, use the QLDB driver. The driver provides a high-level abstraction layer above this <i>QLDB Session</i> data plane and manages <code>SendCommand</code> API calls for you. For information and a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started with the driver</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> <li> <p>If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB shell. The shell is a command line interface that uses the QLDB driver to interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the QLDB shell</a>.</p> </li> </ul> </note>

## sendCommand

<p>Sends a command to an Amazon QLDB ledger.</p> <note> <p>Instead of interacting directly with this API, we recommend using the QLDB driver or the QLDB shell to execute data transactions on a ledger.</p> <ul> <li> <p>If you are working with an AWS SDK, use the QLDB driver. The driver provides a high-level abstraction layer above this <i>QLDB Session</i> data plane and manages <code>SendCommand</code> API calls for you. For information and a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started with the driver</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> <li> <p>If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB shell. The shell is a command line interface that uses the QLDB driver to interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the QLDB shell</a>.</p> </li> </ul> </note>

### Example Usage

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
        'quo' => 'odit',
        'at' => 'at',
        'maiores' => 'molestiae',
        'quod' => 'quod',
    ];
    $request->sendCommandRequest->commitTransaction = new CommitTransactionRequest();
    $request->sendCommandRequest->commitTransaction->commitDigest = 'esse';
    $request->sendCommandRequest->commitTransaction->transactionId = 'totam';
    $request->sendCommandRequest->endSession = [
        'dolorum' => 'dicta',
        'nam' => 'officia',
        'occaecati' => 'fugit',
        'deleniti' => 'hic',
    ];
    $request->sendCommandRequest->executeStatement = new ExecuteStatementRequest();
    $request->sendCommandRequest->executeStatement->parameters = [
        new ValueHolder(),
        new ValueHolder(),
        new ValueHolder(),
        new ValueHolder(),
    ];
    $request->sendCommandRequest->executeStatement->statement = 'totam';
    $request->sendCommandRequest->executeStatement->transactionId = 'beatae';
    $request->sendCommandRequest->fetchPage = new FetchPageRequest();
    $request->sendCommandRequest->fetchPage->nextPageToken = 'commodi';
    $request->sendCommandRequest->fetchPage->transactionId = 'molestiae';
    $request->sendCommandRequest->sessionToken = 'modi';
    $request->sendCommandRequest->startSession = new StartSessionRequest();
    $request->sendCommandRequest->startSession->ledgerName = 'qui';
    $request->sendCommandRequest->startTransaction = [
        'cum' => 'esse',
        'ipsum' => 'excepturi',
        'aspernatur' => 'perferendis',
        'ad' => 'natus',
    ];
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = SendCommandXAmzTargetEnum::QLDB_SESSION_SEND_COMMAND;

    $response = $sdk->sdk->sendCommand($request);

    if ($response->sendCommandResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
