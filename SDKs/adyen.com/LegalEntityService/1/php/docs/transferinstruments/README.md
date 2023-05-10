# transferInstruments

### Available Operations

* [deleteTransferInstrumentsId](#deletetransferinstrumentsid) - Delete a transfer instrument
* [getTransferInstrumentsId](#gettransferinstrumentsid) - Get a transfer instrument
* [patchTransferInstrumentsId](#patchtransferinstrumentsid) - Update a transfer instrument
* [postTransferInstruments](#posttransferinstruments) - Create a transfer instrument

## deleteTransferInstrumentsId

Deletes a transfer instrument.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTransferInstrumentsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTransferInstrumentsIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTransferInstrumentsIdRequest();
    $request->id = '6fbee41f-3331-47fe-b5b6-0eb1ea426555';

    $requestSecurity = new DeleteTransferInstrumentsIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->transferInstruments->deleteTransferInstrumentsId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransferInstrumentsId

Returns the details of a transfer instrument.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTransferInstrumentsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTransferInstrumentsIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransferInstrumentsIdRequest();
    $request->id = 'ba3c2874-4ed5-43b8-8f3a-8d8f5c0b2f2f';

    $requestSecurity = new GetTransferInstrumentsIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->transferInstruments->getTransferInstrumentsId($request, $requestSecurity);

    if ($response->transferInstrument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchTransferInstrumentsId

Updates a transfer instrument.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchTransferInstrumentsIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransferInstrumentInfo;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountInfo;
use \OpenAPI\OpenAPI\Models\Shared\TransferInstrumentInfoTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchTransferInstrumentsIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchTransferInstrumentsIdRequest();
    $request->transferInstrumentInfo = new TransferInstrumentInfo();
    $request->transferInstrumentInfo->bankAccount = new BankAccountInfo();
    $request->transferInstrumentInfo->bankAccount->accountNumber = 'facilis';
    $request->transferInstrumentInfo->bankAccount->accountType = 'voluptate';
    $request->transferInstrumentInfo->bankAccount->bankBicSwift = 'expedita';
    $request->transferInstrumentInfo->bankAccount->bankCity = 'ab';
    $request->transferInstrumentInfo->bankAccount->bankCode = 'iste';
    $request->transferInstrumentInfo->bankAccount->bankName = 'dolore';
    $request->transferInstrumentInfo->bankAccount->branchCode = 'laborum';
    $request->transferInstrumentInfo->bankAccount->checkCode = 'sed';
    $request->transferInstrumentInfo->bankAccount->countryCode = 'JM';
    $request->transferInstrumentInfo->bankAccount->currencyCode = 'commodi';
    $request->transferInstrumentInfo->bankAccount->iban = 'quidem';
    $request->transferInstrumentInfo->legalEntityId = 'explicabo';
    $request->transferInstrumentInfo->type = TransferInstrumentInfoTypeEnum::BANK_ACCOUNT;
    $request->id = '916fe1f0-8f42-494e-b698-f447f603e8b4';

    $requestSecurity = new PatchTransferInstrumentsIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->transferInstruments->patchTransferInstrumentsId($request, $requestSecurity);

    if ($response->transferInstrument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTransferInstruments

Creates a transfer instrument. 

A transfer instrument is a bank account that a legal entity owns. Adyen performs verification checks on the transfer instrument as required by payment industry regulations. We inform you of the verification results through webhooks or API responses.

When the transfer instrument passes the verification checks, you can start sending funds from the balance platform to the transfer instrument (such as payouts).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\TransferInstrumentInfo;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountInfo;
use \OpenAPI\OpenAPI\Models\Shared\TransferInstrumentInfoTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTransferInstrumentsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferInstrumentInfo();
    $request->bankAccount = new BankAccountInfo();
    $request->bankAccount->accountNumber = 'incidunt';
    $request->bankAccount->accountType = 'ipsam';
    $request->bankAccount->bankBicSwift = 'debitis';
    $request->bankAccount->bankCity = 'rem';
    $request->bankAccount->bankCode = 'sit';
    $request->bankAccount->bankName = 'nobis';
    $request->bankAccount->branchCode = 'error';
    $request->bankAccount->checkCode = 'veniam';
    $request->bankAccount->countryCode = 'GI';
    $request->bankAccount->currencyCode = 'recusandae';
    $request->bankAccount->iban = 'reiciendis';
    $request->legalEntityId = 'nulla';
    $request->type = TransferInstrumentInfoTypeEnum::BANK_ACCOUNT;

    $requestSecurity = new PostTransferInstrumentsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->transferInstruments->postTransferInstruments($request, $requestSecurity);

    if ($response->transferInstrument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
