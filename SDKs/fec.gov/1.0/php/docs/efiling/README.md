# efiling

## Overview

Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.

### Available Operations

* [getEfileFilings](#getefilefilings) - Basic information about electronic files coming into the FEC, posted as they are received.
* [getEfileReportsHouseSenate](#getefilereportshousesenate) - 
Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.

* [getEfileReportsPacParty](#getefilereportspacparty) - 
Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.

* [getEfileReportsPresidential](#getefilereportspresidential) - 
Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.


## getEfileFilings

Basic information about electronic files coming into the FEC, posted as they are received.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEfileFilingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEfileFilingsRequest();
    $request->apiKey = 'in';
    $request->committeeId = [
        'quidem',
        'explicabo',
    ];
    $request->fileNumber = [
        604118,
        100032,
    ];
    $request->maxReceiptDate = DateTime::createFromFormat('Y-m-d', '2022-01-15');
    $request->minReceiptDate = DateTime::createFromFormat('Y-m-d', '2022-10-13');
    $request->page = 967795;
    $request->perPage = 19300;
    $request->qFiler = [
        'maiores',
        'incidunt',
        'sed',
    ];
    $request->sort = 'provident';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->efiling->getEfileFilings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEfileReportsHouseSenate


Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEfileReportsHouseSenateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEfileReportsHouseSenateRequest();
    $request->apiKey = 'eius';
    $request->committeeId = [
        'ipsum',
        'ea',
        'occaecati',
        'quos',
    ];
    $request->fileNumber = [
        271653,
        273009,
        455444,
        970076,
    ];
    $request->maxReceiptDate = DateTime::createFromFormat('Y-m-d', '2022-12-22');
    $request->minReceiptDate = DateTime::createFromFormat('Y-m-d', '2022-02-10');
    $request->page = 505866;
    $request->perPage = 708609;
    $request->qFiler = [
        'incidunt',
        'ipsam',
    ];
    $request->sort = 'debitis';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->efiling->getEfileReportsHouseSenate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEfileReportsPacParty


Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEfileReportsPacPartyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEfileReportsPacPartyRequest();
    $request->apiKey = 'rem';
    $request->committeeId = [
        'nobis',
    ];
    $request->fileNumber = [
        333507,
        329543,
        924159,
    ];
    $request->maxReceiptDate = DateTime::createFromFormat('Y-m-d', '2020-05-31');
    $request->minReceiptDate = DateTime::createFromFormat('Y-m-d', '2022-12-14');
    $request->page = 901483;
    $request->perPage = 253642;
    $request->qFiler = [
        'in',
        'officiis',
    ];
    $request->sort = 'beatae';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->efiling->getEfileReportsPacParty($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEfileReportsPresidential


Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEfileReportsPresidentialRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEfileReportsPresidentialRequest();
    $request->apiKey = 'laudantium';
    $request->committeeId = [
        'praesentium',
        'cum',
    ];
    $request->fileNumber = [
        680515,
        530089,
    ];
    $request->maxReceiptDate = DateTime::createFromFormat('Y-m-d', '2021-02-10');
    $request->minReceiptDate = DateTime::createFromFormat('Y-m-d', '2021-03-20');
    $request->page = 204923;
    $request->perPage = 677115;
    $request->qFiler = [
        'officia',
        'dolorum',
    ];
    $request->sort = 'corrupti';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->efiling->getEfileReportsPresidential($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
