# bankAccount

## Overview

BankAccount object represents your bank account information.

### Available Operations

* [createBankAccount](#createbankaccount) - Create a bank account
* [deleteBankAccount](#deletebankaccount) - Delete a bank account
* [getBankAccount](#getbankaccount) - Retrieve a bank account
* [listBankAccount](#listbankaccount) - List all bank account
* [updateBankAccount](#updatebankaccount) - Update a bank account

## createBankAccount

Create a new bank account. Returns a bank account object if the create is succeded.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BankAccountInput();
    $request->accountNumber = 'error';
    $request->accountNumberIban = 'deserunt';
    $request->currency = CurrencyEnum::ILS;
    $request->name = 'Dr. Valerie Toy';
    $request->needQr = false;
    $request->swift = 'suscipit';

    $response = $sdk->bankAccount->createBankAccount($request);

    if ($response->bankAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBankAccount

Delete an existing bank account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBankAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBankAccountRequest();
    $request->id = 477665;

    $response = $sdk->bankAccount->deleteBankAccount($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBankAccount

Retrieves the details of an existing bank account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBankAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBankAccountRequest();
    $request->id = 791725;

    $response = $sdk->bankAccount->getBankAccount($request);

    if ($response->bankAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBankAccount

Returns a list of your bank accounts. The bank accounts are returned sorted by creation date, with the most recent bank account appearing first.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBankAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBankAccountRequest();
    $request->page = 812169;
    $request->perPage = 528895;

    $response = $sdk->bankAccount->listBankAccount($request);

    if ($response->bankAccountList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBankAccount

Update an existing bank accounts. Returns a bank account object if the update is succeded.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBankAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBankAccountRequest();
    $request->bankAccountInput = new BankAccountInput();
    $request->bankAccountInput->accountNumber = 'iusto';
    $request->bankAccountInput->accountNumberIban = 'excepturi';
    $request->bankAccountInput->currency = CurrencyEnum::ILS;
    $request->bankAccountInput->name = 'Jake Bernier MD';
    $request->bankAccountInput->needQr = false;
    $request->bankAccountInput->swift = 'perferendis';
    $request->id = 368241;

    $response = $sdk->bankAccount->updateBankAccount($request);

    if ($response->bankAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
