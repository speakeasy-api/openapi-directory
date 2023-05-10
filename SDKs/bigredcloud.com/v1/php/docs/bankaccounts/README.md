# bankAccounts

### Available Operations

* [bankAccountsDelete](#bankaccountsdelete) - Removes an existing Bank Account.
* [bankAccountsGet](#bankaccountsget) - Returns a list of company's Bank Account. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "acCode" fields.
* [bankAccountsPost](#bankaccountspost) - Creates a new Bank Account.
* [bankAccountsProcessBatch](#bankaccountsprocessbatch) - Processes a batch of Bank Accounts.
* [bankAccountsPut](#bankaccountsput) - Updates an existing Bank Account.
* [getV1BankAccountsId](#getv1bankaccountsid) - Returns information about a single Bank Account.

## bankAccountsDelete

Removes an existing Bank Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BankAccountsDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BankAccountsDeleteRequest();
    $request->id = 548814;
    $request->timestamp = 'provident';

    $response = $sdk->bankAccounts->bankAccountsDelete($request);

    if ($response->bankAccountsDelete200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bankAccountsGet

Returns a list of company's Bank Account. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "acCode" fields.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->bankAccounts->bankAccountsGet();

    if ($response->pageResultBankAccountQueryDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bankAccountsPost

Creates a new Bank Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BankAccountDto();
    $request->acCode = 'distinctio';
    $request->accountName = 'quibusdam';
    $request->accountNumber = 'unde';
    $request->address = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->bankFeedSource = 645894;
    $request->businessIdentifierCodes = 'suscipit';
    $request->categoryId = 437587;
    $request->creditorScheme = 'magnam';
    $request->details = 'debitis';
    $request->id = 56713;
    $request->internationalBankAccountNumber = 'delectus';
    $request->isDefaultBank = false;
    $request->lastChq = 'tempora';
    $request->nominalAcCode = 'suscipit';
    $request->oBalance = 4776.65;
    $request->sortCode = 'minus';
    $request->timestamp = 'placeat';

    $response = $sdk->bankAccounts->bankAccountsPost($request);

    if ($response->bankAccountsPost200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bankAccountsProcessBatch

Processes a batch of Bank Accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemBankAccountDto;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountDto;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemBankAccountDtoOpCodeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new BatchItemBankAccountDto(),
        new BatchItemBankAccountDto(),
        new BatchItemBankAccountDto(),
    ]

    $response = $sdk->bankAccounts->bankAccountsProcessBatch($request);

    if ($response->bankAccountsProcessBatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bankAccountsPut

Updates an existing Bank Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BankAccountsPutRequest;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BankAccountsPutRequest();
    $request->bankAccountDto = new BankAccountDto();
    $request->bankAccountDto->acCode = 'iusto';
    $request->bankAccountDto->accountName = 'excepturi';
    $request->bankAccountDto->accountNumber = 'nisi';
    $request->bankAccountDto->address = [
        'temporibus',
        'ab',
        'quis',
        'veritatis',
    ];
    $request->bankAccountDto->bankFeedSource = 648172;
    $request->bankAccountDto->businessIdentifierCodes = 'perferendis';
    $request->bankAccountDto->categoryId = 368241;
    $request->bankAccountDto->creditorScheme = 'repellendus';
    $request->bankAccountDto->details = 'sapiente';
    $request->bankAccountDto->id = 778157;
    $request->bankAccountDto->internationalBankAccountNumber = 'odit';
    $request->bankAccountDto->isDefaultBank = false;
    $request->bankAccountDto->lastChq = 'at';
    $request->bankAccountDto->nominalAcCode = 'at';
    $request->bankAccountDto->oBalance = 9786.19;
    $request->bankAccountDto->sortCode = 'molestiae';
    $request->bankAccountDto->timestamp = 'quod';
    $request->id = 800911;

    $response = $sdk->bankAccounts->bankAccountsPut($request);

    if ($response->bankAccountsPut200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV1BankAccountsId

Returns information about a single Bank Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1BankAccountsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1BankAccountsIdRequest();
    $request->id = 461479;

    $response = $sdk->bankAccounts->getV1BankAccountsId($request);

    if ($response->bankAccountDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
