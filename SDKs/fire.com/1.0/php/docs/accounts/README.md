# accounts

## Overview

fire.com Accounts are the equivalent of a bank account from bank.

### Available Operations

* [addAccount](#addaccount) - Add a new account
* [getAccountById](#getaccountbyid) - Retrieve the details of a fire.com Account
* [getAccounts](#getaccounts) - List all fire.com Accounts

## addAccount

Creates a new fire.com account.

**Please note there is a charge associated with creating a new account.**


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddAccountNewAccount;
use \OpenAPI\OpenAPI\Models\Operations\AddAccountNewAccountCurrencyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddAccountNewAccount();
    $request->acceptFeesAndCharges = false;
    $request->accountName = 'Operating Account';
    $request->currency = AddAccountNewAccountCurrencyEnum::GBP;

    $response = $sdk->accounts->addAccount($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountById

You can retrieve the details of a fire.com Account by its `ican`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountByIdRequest();
    $request->ican = 384382;

    $response = $sdk->accounts->getAccountById($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccounts

Returns all your fire.com Accounts. Ordered by Alias ascending. Can be paginated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->accounts->getAccounts();

    if ($response->accounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
