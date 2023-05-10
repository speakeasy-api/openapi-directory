# filerResources

## Overview

Useful tools for those who file with the FEC. 

 Look up RAD analyst with telephone extension by committee_id.

### Available Operations

* [getRadAnalyst](#getradanalyst) - 
Use this endpoint to look up the RAD Analyst for a committee.

The mission of the Reports Analysis Division (RAD) is to ensure that
campaigns and political committees file timely and accurate reports that fully disclose
their financial activities.  RAD is responsible for reviewing statements and financial
reports filed by political committees participating in federal elections, providing
assistance and guidance to the committees to properly file their reports, and for taking
appropriate action to ensure compliance with the Federal Election Campaign Act (FECA).

* [getStateElectionOffice](#getstateelectionoffice) - 
State laws and procedures govern elections for state or local offices as well as
how candidates appear on election ballots.
Contact the appropriate state election office for more information.


## getRadAnalyst


Use this endpoint to look up the RAD Analyst for a committee.

The mission of the Reports Analysis Division (RAD) is to ensure that
campaigns and political committees file timely and accurate reports that fully disclose
their financial activities.  RAD is responsible for reviewing statements and financial
reports filed by political committees participating in federal elections, providing
assistance and guidance to the committees to properly file their reports, and for taking
appropriate action to ensure compliance with the Federal Election Campaign Act (FECA).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRadAnalystRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRadAnalystRequest();
    $request->analystId = [
        813679,
        685092,
    ];
    $request->analystShortId = [
        648598,
        333965,
        29100,
    ];
    $request->apiKey = 'quisquam';
    $request->committeeId = [
        'quasi',
        'atque',
        'reprehenderit',
        'asperiores',
    ];
    $request->email = [
        'suscipit',
        'quidem',
        'maxime',
    ];
    $request->maxAssignmentUpdateDate = DateTime::createFromFormat('Y-m-d', '2022-07-16');
    $request->minAssignmentUpdateDate = DateTime::createFromFormat('Y-m-d', '2022-03-05');
    $request->name = [
        'atque',
        'error',
    ];
    $request->page = 887265;
    $request->perPage = 886961;
    $request->sort = 'accusamus';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->telephoneExt = [
        328303,
        133461,
        404425,
    ];
    $request->title = [
        'corrupti',
        'at',
        'error',
        'blanditiis',
    ];

    $response = $sdk->filerResources->getRadAnalyst($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStateElectionOffice


State laws and procedures govern elections for state or local offices as well as
how candidates appear on election ballots.
Contact the appropriate state election office for more information.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStateElectionOfficeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStateElectionOfficeRequest();
    $request->apiKey = 'suscipit';
    $request->page = 922348;
    $request->perPage = 542129;
    $request->sort = 'atque';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->state = 'sunt';

    $response = $sdk->filerResources->getStateElectionOffice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
