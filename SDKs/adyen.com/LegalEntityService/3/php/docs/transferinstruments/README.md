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
    $request->id = '8abf603a-79f9-4dfe-8ab7-da8a50ce187f';

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
    $request->id = '86bc173d-689e-4ee9-926f-8d986e881ead';

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
    $request->transferInstrumentInfo->bankAccount->accountIdentification = new DKLocalAccountIdentification();
    $request->transferInstrumentInfo->bankAccount->accountIdentification->accountNumber = 'reiciendis';
    $request->transferInstrumentInfo->bankAccount->accountIdentification->bankCode = 'doloremque';
    $request->transferInstrumentInfo->bankAccount->accountIdentification->type = DKLocalAccountIdentificationTypeEnum::DK_LOCAL;
    $request->transferInstrumentInfo->bankAccount->accountType = 'repudiandae';
    $request->transferInstrumentInfo->bankAccount->countryCode = 'BO';
    $request->transferInstrumentInfo->legalEntityId = 'accusantium';
    $request->transferInstrumentInfo->type = TransferInstrumentInfoTypeEnum::BANK_ACCOUNT;
    $request->id = '2563f94e-29e9-473e-922a-57a15be3e060';

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
    $request->bankAccount->accountIdentification = new NOLocalAccountIdentification();
    $request->bankAccount->accountIdentification->accountNumber = 'quae';
    $request->bankAccount->accountIdentification->type = NOLocalAccountIdentificationTypeEnum::NO_LOCAL;
    $request->bankAccount->accountType = 'molestiae';
    $request->bankAccount->countryCode = 'TV';
    $request->legalEntityId = 'qui';
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
