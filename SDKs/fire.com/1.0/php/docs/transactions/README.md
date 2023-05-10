# transactions

## Overview

While there are many types of transactions, they are all represented by the same JSON object with a different txnType.

### Available Operations

* [~~getTransactionsByAccountIdFiltered~~](#gettransactionsbyaccountidfiltered) - Filtered list of transactions for an account (v1) :warning: **Deprecated**
* [~~getTransactionsByAccountIdv1~~](#gettransactionsbyaccountidv1) - List transactions for an account (v1) :warning: **Deprecated**
* [getTransactionsByAccountIdv3](#gettransactionsbyaccountidv3) - List transactions for an account (v3)

## ~~getTransactionsByAccountIdFiltered~~

Retrieve a filtered list of transactions against an account. Recommended to use the v3 endpoint instead.
* `dateRangeFrom` - A millisecond epoch time specifying the date range start date.
* `dateRangeTo` - A millisecond epoch time specifying the date range end date.
* `searchKeyword` - Search term to filter by from the reference field (`myRef`).
* `transactionTypes` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.
* `offset` - The page offset. Defaults to 0. This is the record number that the returned list will start at. E.g. offset = 40 and limit = 20 will return records 40 to 59.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsByAccountIdFilteredRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionsByAccountIdFilteredRequest();
    $request->dateRangeFrom = 568045;
    $request->dateRangeTo = 392785;
    $request->ican = 925597;
    $request->offset = 836079;
    $request->searchKeyword = 'ab';
    $request->transactionTypes = [
        'veritatis',
        'deserunt',
    ];

    $response = $sdk->transactions->getTransactionsByAccountIdFiltered($request);

    if ($response->cardTransactionsv1 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getTransactionsByAccountIdv1~~

Retrieve a list of transactions against an account. Recommended to use the v3 endpoint instead.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsByAccountIdv1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionsByAccountIdv1Request();
    $request->ican = 20218;
    $request->limit = 368241;
    $request->offset = 832620;

    $response = $sdk->transactions->getTransactionsByAccountIdv1($request);

    if ($response->cardTransactionsv1 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactionsByAccountIdv3

Retrieve a list of transactions against an account. Initially, use the optional `limit`, `dateRangeFrom` and `dateRangeTo` query params to limit your query, then use the embedded `next` or `prev` links in the response to get newer or older pages.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionsByAccountIdv3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionsByAccountIdv3Request();
    $request->dateRangeFrom = 957156;
    $request->dateRangeTo = 778157;
    $request->ican = 140350;
    $request->limit = 870013;
    $request->startAfter = 'at';

    $response = $sdk->transactions->getTransactionsByAccountIdv3($request);

    if ($response->cardTransactionsv3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
