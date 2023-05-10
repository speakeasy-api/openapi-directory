# bankFeedAccounts

## Overview

Bank feed bank accounts

### Available Operations

* [createBankFeed](#createbankfeed) - Create bank feed bank accounts
* [getBankFeeds](#getbankfeeds) - List bank feed bank accounts
* [updateBankFeed](#updatebankfeed) - Update bank feed bank account

## createBankFeed

Put BankFeed BankAccounts for a single data source connected to a single company.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBankFeedRequest;
use \OpenAPI\OpenAPI\Models\Shared\BankFeedAccount;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBankFeedRequest();
    $request->requestBody = [
        new BankFeedAccount(),
        new BankFeedAccount(),
        new BankFeedAccount(),
        new BankFeedAccount(),
    ];
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';

    $response = $sdk->bankFeedAccounts->createBankFeed($request);

    if ($response->bankFeedAccounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBankFeeds

Get BankFeed BankAccounts for a single data source connected to a single company.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBankFeedsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBankFeedsRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';

    $response = $sdk->bankFeedAccounts->getBankFeeds($request);

    if ($response->bankFeedAccounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBankFeed

Update a single BankFeed BankAccount for a single data source connected to a single company.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBankFeedRequest;
use \OpenAPI\OpenAPI\Models\Shared\BankFeedAccount;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBankFeedRequest();
    $request->bankFeedAccount = new BankFeedAccount();
    $request->bankFeedAccount->accountName = 'vel';
    $request->bankFeedAccount->accountNumber = 'error';
    $request->bankFeedAccount->accountType = 'deserunt';
    $request->bankFeedAccount->balance = 3843.82;
    $request->bankFeedAccount->currency = 'iure';
    $request->bankFeedAccount->feedStartDate = '2022-10-23T00:00:00Z';
    $request->bankFeedAccount->id = '4e0f467c-c879-46ed-951a-05dfc2ddf7cc';
    $request->bankFeedAccount->modifiedDate = '2022-10-23T00:00:00Z';
    $request->bankFeedAccount->sortCode = 'esse';
    $request->bankFeedAccount->status = 'totam';
    $request->accountId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';

    $response = $sdk->bankFeedAccounts->updateBankFeed($request);

    if ($response->bankFeedAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
