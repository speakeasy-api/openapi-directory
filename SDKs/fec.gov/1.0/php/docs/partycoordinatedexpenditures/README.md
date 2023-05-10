# partyCoordinatedExpenditures

## Overview

Schedule F, it shows all special expenditures a national or state party committee makes in connection with the general election campaigns of federal candidates.

### Available Operations

* [getSchedulesScheduleF](#getschedulesschedulef) - 
Schedule F, it shows all special expenditures a national or state party committee
makes in connection with the general election campaigns of federal candidates.

These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.

* [getSchedulesScheduleFSubId](#getschedulesschedulefsubid) - 
Schedule F, it shows all special expenditures a national or state party committee
makes in connection with the general election campaigns of federal candidates.

These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.


## getSchedulesScheduleF


Schedule F, it shows all special expenditures a national or state party committee
makes in connection with the general election campaigns of federal candidates.

These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleFRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleFRequest();
    $request->apiKey = 'eligendi';
    $request->candidateId = [
        'non',
        'magnam',
        'itaque',
        'sed',
    ];
    $request->committeeId = [
        'veniam',
        'consequuntur',
        'facere',
        'laudantium',
    ];
    $request->cycle = [
        863477,
    ];
    $request->imageNumber = [
        'exercitationem',
    ];
    $request->lineNumber = 'ab';
    $request->maxAmount = 'velit';
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2021-07-16');
    $request->maxImageNumber = 'nisi';
    $request->minAmount = 'voluptatibus';
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2022-07-01');
    $request->minImageNumber = 'distinctio';
    $request->page = 392430;
    $request->payeeName = [
        'nisi',
        'libero',
    ];
    $request->perPage = 794507;
    $request->sort = 'facere';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->partyCoordinatedExpenditures->getSchedulesScheduleF($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedulesScheduleFSubId


Schedule F, it shows all special expenditures a national or state party committee
makes in connection with the general election campaigns of federal candidates.

These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleFSubIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleFSubIdRequest();
    $request->apiKey = 'facilis';
    $request->page = 217663;
    $request->perPage = 318917;
    $request->subId = 'voluptatibus';

    $response = $sdk->partyCoordinatedExpenditures->getSchedulesScheduleFSubId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
