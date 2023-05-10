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
    $request->id = '4d0ab407-5088-4e51-8620-65e904f3b119';

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
    $request->id = '4b8abf60-3a79-4f9d-be0a-b7da8a50ce18';

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
    $request->transferInstrumentInfo->bankAccount->accountNumber = 'reprehenderit';
    $request->transferInstrumentInfo->bankAccount->accountType = 'asperiores';
    $request->transferInstrumentInfo->bankAccount->bankBicSwift = 'totam';
    $request->transferInstrumentInfo->bankAccount->bankCity = 'suscipit';
    $request->transferInstrumentInfo->bankAccount->bankCode = 'quidem';
    $request->transferInstrumentInfo->bankAccount->bankName = 'maxime';
    $request->transferInstrumentInfo->bankAccount->branchCode = 'et';
    $request->transferInstrumentInfo->bankAccount->checkCode = 'esse';
    $request->transferInstrumentInfo->bankAccount->countryCode = 'DE';
    $request->transferInstrumentInfo->bankAccount->currencyCode = 'assumenda';
    $request->transferInstrumentInfo->bankAccount->iban = 'ea';
    $request->transferInstrumentInfo->legalEntityId = 'atque';
    $request->transferInstrumentInfo->type = TransferInstrumentInfoTypeEnum::RECURRING_DETAIL;
    $request->id = 'eee9526f-8d98-46e8-81ea-d4f0e1012563';

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
    $request->bankAccount->accountNumber = 'a';
    $request->bankAccount->accountType = 'molestias';
    $request->bankAccount->bankBicSwift = 'magnam';
    $request->bankAccount->bankCity = 'saepe';
    $request->bankAccount->bankCode = 'consequuntur';
    $request->bankAccount->bankName = 'occaecati';
    $request->bankAccount->branchCode = 'officiis';
    $request->bankAccount->checkCode = 'perspiciatis';
    $request->bankAccount->countryCode = 'JM';
    $request->bankAccount->currencyCode = 'adipisci';
    $request->bankAccount->iban = 'eveniet';
    $request->legalEntityId = 'occaecati';
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
