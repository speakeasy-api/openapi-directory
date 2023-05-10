# filings

## Overview

All official records and reports filed by or delivered to the FEC. 

 Note: because the filings data includes many records, counts for large result sets are approximate; you will want to page through the records until no records are returned.

### Available Operations

* [getCandidateCandidateIdFilings](#getcandidatecandidateidfilings) - 
All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.

* [getCommitteeCommitteeIdFilings](#getcommitteecommitteeidfilings) - 
All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.

* [getFilings](#getfilings) - 
All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.

* [getOperationsLog](#getoperationslog) - 
The Operations log contains details of each report loaded into the database. It is primarily
used as status check to determine when all of the data processes, from initial entry through
review are complete.


## getCandidateCandidateIdFilings


All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidateCandidateIdFilingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidateCandidateIdFilingsAmendmentIndicatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidateCandidateIdFilingsFilerTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidateCandidateIdFilingsOfficeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCandidateCandidateIdFilingsRequest();
    $request->amendmentIndicator = [
        GetCandidateCandidateIdFilingsAmendmentIndicatorEnum::C,
        GetCandidateCandidateIdFilingsAmendmentIndicatorEnum::M,
        GetCandidateCandidateIdFilingsAmendmentIndicatorEnum::A,
        GetCandidateCandidateIdFilingsAmendmentIndicatorEnum::S,
    ];
    $request->apiKey = 'doloremque';
    $request->beginningImageNumber = [
        'dicta',
        'accusantium',
        'beatae',
        'dolores',
    ];
    $request->candidateId = 'enim';
    $request->committeeType = 'laboriosam';
    $request->cycle = [
        952143,
    ];
    $request->district = [
        'magnam',
        'saepe',
        'consequuntur',
    ];
    $request->documentType = [
        'officiis',
        'perspiciatis',
        'in',
    ];
    $request->fileNumber = [
        907876,
    ];
    $request->filerType = GetCandidateCandidateIdFilingsFilerTypeEnum::PAPER;
    $request->formCategory = [
        'fugit',
    ];
    $request->formType = [
        'quis',
        'reprehenderit',
        'error',
    ];
    $request->isAmended = false;
    $request->maxReceiptDate = DateTime::createFromFormat('Y-m-d', '2022-08-22');
    $request->minReceiptDate = DateTime::createFromFormat('Y-m-d', '2021-03-06');
    $request->mostRecent = false;
    $request->office = [
        GetCandidateCandidateIdFilingsOfficeEnum::P,
    ];
    $request->page = 39615;
    $request->party = [
        'ipsa',
        'totam',
    ];
    $request->perPage = 61078;
    $request->primaryGeneralIndicator = [
        'eveniet',
        'qui',
    ];
    $request->qFiler = [
        'iure',
        'necessitatibus',
        'ratione',
    ];
    $request->reportType = [
        'distinctio',
        'voluptatum',
        'rem',
    ];
    $request->reportYear = [
        320565,
        997963,
    ];
    $request->requestType = [
        'corporis',
    ];
    $request->sort = [
        'nihil',
        'mollitia',
        'voluptas',
    ];
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->state = [
        'maiores',
    ];

    $response = $sdk->filings->getCandidateCandidateIdFilings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommitteeCommitteeIdFilings


All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteeCommitteeIdFilingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteeCommitteeIdFilingsFilerTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteeCommitteeIdFilingsOfficeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommitteeCommitteeIdFilingsRequest();
    $request->amendmentIndicator = [
        GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum::N,
        GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum::C,
        GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum::A,
        GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum::A,
    ];
    $request->apiKey = 'dolorum';
    $request->beginningImageNumber = [
        'quae',
    ];
    $request->committeeId = 'recusandae';
    $request->committeeType = 'omnis';
    $request->cycle = [
        477646,
        403218,
    ];
    $request->district = [
        'culpa',
        'adipisci',
    ];
    $request->documentType = [
        'laudantium',
        'eum',
        'nemo',
        'recusandae',
    ];
    $request->fileNumber = [
        592081,
        337477,
    ];
    $request->filerType = GetCommitteeCommitteeIdFilingsFilerTypeEnum::E_FILE;
    $request->formCategory = [
        'provident',
        'aspernatur',
        'ullam',
        'quasi',
    ];
    $request->formType = [
        'nostrum',
        'mollitia',
        'provident',
    ];
    $request->isAmended = false;
    $request->maxReceiptDate = DateTime::createFromFormat('Y-m-d', '2021-01-09');
    $request->minReceiptDate = DateTime::createFromFormat('Y-m-d', '2022-08-09');
    $request->mostRecent = false;
    $request->office = [
        GetCommitteeCommitteeIdFilingsOfficeEnum::P,
    ];
    $request->page = 984632;
    $request->party = [
        'in',
        'nam',
    ];
    $request->perPage = 937636;
    $request->primaryGeneralIndicator = [
        'laborum',
        'placeat',
        'modi',
    ];
    $request->qFiler = [
        'molestias',
        'officiis',
        'sapiente',
        'cumque',
    ];
    $request->reportType = [
        'rerum',
    ];
    $request->reportYear = [
        335498,
        82057,
    ];
    $request->requestType = [
        'cumque',
    ];
    $request->sort = [
        'perferendis',
    ];
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->state = [
        'aspernatur',
    ];

    $response = $sdk->filings->getCommitteeCommitteeIdFilings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFilings


All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFilingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFilingsAmendmentIndicatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFilingsFilerTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFilingsOfficeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFilingsRequest();
    $request->amendmentIndicator = [
        GetFilingsAmendmentIndicatorEnum::N,
        GetFilingsAmendmentIndicatorEnum::T,
    ];
    $request->apiKey = 'at';
    $request->beginningImageNumber = [
        'eos',
        'sapiente',
        'eum',
        'dicta',
    ];
    $request->candidateId = [
        'beatae',
        'cupiditate',
    ];
    $request->committeeId = [
        'earum',
        'soluta',
        'hic',
    ];
    $request->committeeType = 'illum';
    $request->cycle = [
        935833,
    ];
    $request->district = [
        'maiores',
        'debitis',
        'aliquid',
    ];
    $request->documentType = [
        'suscipit',
        'dolorem',
        'fugit',
        'cumque',
    ];
    $request->fileNumber = [
        189062,
        656762,
        898760,
    ];
    $request->filerType = GetFilingsFilerTypeEnum::PAPER;
    $request->formCategory = [
        'quasi',
    ];
    $request->formType = [
        'ducimus',
    ];
    $request->isAmended = false;
    $request->maxReceiptDate = DateTime::createFromFormat('Y-m-d', '2021-11-02');
    $request->minReceiptDate = DateTime::createFromFormat('Y-m-d', '2022-10-04');
    $request->mostRecent = false;
    $request->office = [
        GetFilingsOfficeEnum::UNKNOWN,
    ];
    $request->page = 984934;
    $request->party = [
        'necessitatibus',
        'ipsa',
        'tempora',
        'nihil',
    ];
    $request->perPage = 473190;
    $request->primaryGeneralIndicator = [
        'iusto',
    ];
    $request->qFiler = [
        'praesentium',
        'maiores',
    ];
    $request->reportType = [
        'vel',
        'architecto',
        'fugiat',
        'doloremque',
    ];
    $request->reportYear = [
        483706,
    ];
    $request->requestType = [
        'esse',
        'ex',
    ];
    $request->sort = [
        'aliquid',
    ];
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->state = [
        'laborum',
    ];

    $response = $sdk->filings->getFilings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOperationsLog


The Operations log contains details of each report loaded into the database. It is primarily
used as status check to determine when all of the data processes, from initial entry through
review are complete.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOperationsLogRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOperationsLogStatusNumEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOperationsLogRequest();
    $request->amendmentIndicator = [
        'nostrum',
    ];
    $request->apiKey = 'fugiat';
    $request->beginningImageNumber = [
        'aliquid',
        'officia',
        'suscipit',
    ];
    $request->candidateCommitteeId = [
        'perferendis',
        'eum',
    ];
    $request->formType = [
        'iste',
        'id',
    ];
    $request->maxCoverageEndDate = DateTime::createFromFormat('Y-m-d', '2022-05-17');
    $request->maxReceiptDate = DateTime::createFromFormat('Y-m-d', '2020-04-05');
    $request->maxTransactionDataCompleteDate = DateTime::createFromFormat('Y-m-d', '2021-08-28');
    $request->minCoverageEndDate = DateTime::createFromFormat('Y-m-d', '2022-05-09');
    $request->minReceiptDate = DateTime::createFromFormat('Y-m-d', '2022-05-15');
    $request->minTransactionDataCompleteDate = DateTime::createFromFormat('Y-m-d', '2022-03-02');
    $request->page = 405036;
    $request->perPage = 775803;
    $request->reportType = [
        'ut',
        'ad',
    ];
    $request->reportYear = [
        29950,
        561577,
        737254,
    ];
    $request->sort = [
        'beatae',
        'voluptatum',
    ];
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->statusNum = [
        GetOperationsLogStatusNumEnum::ZERO,
        GetOperationsLogStatusNumEnum::ONE,
        GetOperationsLogStatusNumEnum::ONE,
    ];

    $response = $sdk->filings->getOperationsLog($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
