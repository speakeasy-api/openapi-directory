# dataIntegrity

## Overview

Data integrity is important

### Available Operations

* [getDataIntegrityDetails](#getdataintegritydetails) - Lists data integrity details for date type
* [getDataIntegrityStatus](#getdataintegritystatus) - Get data integrity status
* [getDataIntegritySummaries](#getdataintegritysummaries) - Get data integrity summary

## getDataIntegrityDetails

Gets record-by-record match results for a given company and datatype, optionally restricted by a Codat query string.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDataIntegrityDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataIntegrityDataTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDataIntegrityDetailsRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->dataType = DataIntegrityDataTypeEnum::BANKING_ACCOUNTS;
    $request->orderBy = '-modifiedDate';
    $request->page = 1;
    $request->pageSize = 100;
    $request->query = 'vel';

    $response = $sdk->dataIntegrity->getDataIntegrityDetails($request);

    if ($response->details !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataIntegrityStatus

Gets match status for a given company and datatype.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDataIntegrityStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataIntegrityDataTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDataIntegrityStatusRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->dataType = DataIntegrityDataTypeEnum::BANKING_ACCOUNTS;

    $response = $sdk->dataIntegrity->getDataIntegrityStatus($request);

    if ($response->status !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataIntegritySummaries

Gets match summary for a given company and datatype, optionally restricted by a Codat query string.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDataIntegritySummariesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataIntegrityDataTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDataIntegritySummariesRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->dataType = DataIntegrityDataTypeEnum::BANKING_ACCOUNTS;
    $request->query = 'error';

    $response = $sdk->dataIntegrity->getDataIntegritySummaries($request);

    if ($response->summaries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
