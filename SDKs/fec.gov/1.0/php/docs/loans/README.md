# loans

## Overview

Schedule C shows all loans, endorsements and loan guarantees a committee receives or makes.

### Available Operations

* [getSchedulesScheduleC](#getschedulesschedulec) - 
Schedule C shows all loans, endorsements and loan guarantees a committee
receives or makes.

The committee continues to report the loan until it is repaid.

* [getSchedulesScheduleCSubId](#getschedulesschedulecsubid) - 
Schedule C shows all loans, endorsements and loan guarantees a committee
receives or makes.

The committee continues to report the loan until it is repaid.


## getSchedulesScheduleC


Schedule C shows all loans, endorsements and loan guarantees a committee
receives or makes.

The committee continues to report the loan until it is repaid.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleCRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleCRequest();
    $request->apiKey = 'occaecati';
    $request->candidateName = [
        'aliquam',
        'nostrum',
    ];
    $request->committeeId = [
        'eligendi',
        'sint',
        'enim',
        'hic',
    ];
    $request->imageNumber = [
        'quas',
        'totam',
        'molestias',
    ];
    $request->lastIndex = 484966;
    $request->lineNumber = 'eaque';
    $request->loanSourceName = [
        'architecto',
        'quos',
        'iste',
        'assumenda',
    ];
    $request->maxAmount = 'tempore';
    $request->maxImageNumber = 'libero';
    $request->maxIncurredDate = DateTime::createFromFormat('Y-m-d', '2022-12-17');
    $request->maxPaymentToDate = 963976;
    $request->minAmount = 'impedit';
    $request->minImageNumber = 'cum';
    $request->minIncurredDate = DateTime::createFromFormat('Y-m-d', '2022-10-06');
    $request->minPaymentToDate = 903150;
    $request->page = 644420;
    $request->perPage = 42924;
    $request->sort = 'quis';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->loans->getSchedulesScheduleC($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedulesScheduleCSubId


Schedule C shows all loans, endorsements and loan guarantees a committee
receives or makes.

The committee continues to report the loan until it is repaid.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleCSubIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleCSubIdRequest();
    $request->apiKey = 'veniam';
    $request->page = 727481;
    $request->perPage = 99733;
    $request->sort = 'cupiditate';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->subId = 'molestiae';

    $response = $sdk->loans->getSchedulesScheduleCSubId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
