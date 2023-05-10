# accounts

### Available Operations

* [createAccount](#createaccount) - Create a new account
* [getAccount](#getaccount) - Get a specific account
* [getAccounts](#getaccounts) - Overview of accounts

## createAccount

The creation of an account requires some background processing. There is no instant feedback of the creation status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateAccount;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccount();
    $request->ftpPassword = 'quibusdam';
    $request->identifier = 'unde';
    $request->servicepackId = 857946;

    $response = $sdk->accounts->createAccount($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccount

Get a specific account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountRequest();
    $request->accountIdPathParameter = 'corrupti';
    $request->accountIdQueryParameter = 847252;

    $response = $sdk->accounts->getAccount($request);

    if ($response->accountDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccounts

Overview of accounts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssetTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsRequest();
    $request->assetType = AssetTypeEnum::MYSQL;
    $request->identifier = 'error';
    $request->skip = 645894;
    $request->take = 384382;

    $response = $sdk->accounts->getAccounts($request);

    if ($response->accounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
