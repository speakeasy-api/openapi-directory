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
    $request->id = '61d01747-6360-4a15-9b6a-660659a1adea';

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
    $request->id = 'ab5851d6-c645-4b08-b618-91baa0fe1ade';

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
    $request->transferInstrumentInfo->bankAccount->accountNumber = 'voluptatem';
    $request->transferInstrumentInfo->bankAccount->accountType = 'alias';
    $request->transferInstrumentInfo->bankAccount->bankBicSwift = 'deleniti';
    $request->transferInstrumentInfo->bankAccount->bankCity = 'earum';
    $request->transferInstrumentInfo->bankAccount->bankCode = 'ex';
    $request->transferInstrumentInfo->bankAccount->bankName = 'sapiente';
    $request->transferInstrumentInfo->bankAccount->branchCode = 'rem';
    $request->transferInstrumentInfo->bankAccount->checkCode = 'minus';
    $request->transferInstrumentInfo->bankAccount->countryCode = 'GT';
    $request->transferInstrumentInfo->bankAccount->currencyCode = 'asperiores';
    $request->transferInstrumentInfo->bankAccount->iban = 'ratione';
    $request->transferInstrumentInfo->legalEntityId = 'ullam';
    $request->transferInstrumentInfo->type = TransferInstrumentInfoTypeEnum::BANK_ACCOUNT;
    $request->id = 'd8cdb5a3-4181-4430-9042-1813d5208ece';

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
    $request->bankAccount->accountNumber = 'esse';
    $request->bankAccount->accountType = 'necessitatibus';
    $request->bankAccount->bankBicSwift = 'sed';
    $request->bankAccount->bankCity = 'veniam';
    $request->bankAccount->bankCode = 'nesciunt';
    $request->bankAccount->bankName = 'expedita';
    $request->bankAccount->branchCode = 'eum';
    $request->bankAccount->checkCode = 'vel';
    $request->bankAccount->countryCode = 'LS';
    $request->bankAccount->currencyCode = 'magnam';
    $request->bankAccount->iban = 'exercitationem';
    $request->legalEntityId = 'ab';
    $request->type = TransferInstrumentInfoTypeEnum::RECURRING_DETAIL;

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
