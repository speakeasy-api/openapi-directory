# independentExpenditures

## Overview

Schedule E covers the line item expenditures for independent expenditures. For example, if a super PAC bought ads on TV to oppose a federal candidate, each ad purchase would be recorded here with the expenditure amount, name and id of the candidate, and whether the ad supported or opposed the candidate. 

 An independent expenditure is an expenditure for a communication "expressly advocating the election or defeat of a clearly identified candidate that is not made in cooperation, consultation, or concert with, or at the request or suggestion of, a candidate, a candidate’s authorized committee, or their agents, or a political party or its agents." 

 Aggregates by candidate do not include 24 and 48 hour reports. This ensures we don't double count expenditures and the totals are more accurate. You can still find the information from 24 and 48 hour reports in `/schedule/schedule_e/`.

### Available Operations

* [getSchedulesScheduleE](#getschedulesschedulee) - 
Schedule E covers the line item expenditures for independent expenditures. For example, if a super PAC
bought ads on TV to oppose a federal candidate, each ad purchase would be recorded here with
the expenditure amount, name and id of the candidate, and whether the ad supported or opposed the candidate.

An independent expenditure is an expenditure for a communication "expressly advocating the election or
defeat of a clearly identified candidate that is not made in cooperation, consultation, or concert with,
or at the request or suggestion of, a candidate, a candidate’s authorized committee, or their agents, or
a political party or its agents."

Aggregates by candidate do not include 24 and 48 hour reports. This ensures we don't double count expenditures
and the totals are more accurate. You can still find the information from 24 and 48 hour reports in
`/schedule/schedule_e/`.

Due to the large quantity of Schedule E filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `expenditure_amount`, you might receive a page of
results with the following pagination information:

```
 "pagination": {
    "count": 152623,
    "last_indexes": {
      "last_index": "3023037",
      "last_expenditure_amount": -17348.5
    },
    "per_page": 20,
    "pages": 7632
  }
}
```

To fetch the next page of sorted results, append `last_index=3023037` and
`last_expenditure_amount=` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date,
e.g. `last_disbursement_date`), otherwise some resources may be unintentionally
filtered out.  This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule E data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.

* [getSchedulesScheduleEByCandidate](#getschedulesscheduleebycandidate) - 
Schedule E receipts aggregated by recipient candidate. To avoid double
counting, memoed items are not included.

* [getSchedulesScheduleEEfile](#getschedulesscheduleeefile) - 
Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.

* [getSchedulesScheduleETotalsByCandidate](#getschedulesscheduleetotalsbycandidate) - 
Total independent expenditure on supported or opposed candidates by cycle or candidate election year.


## getSchedulesScheduleE


Schedule E covers the line item expenditures for independent expenditures. For example, if a super PAC
bought ads on TV to oppose a federal candidate, each ad purchase would be recorded here with
the expenditure amount, name and id of the candidate, and whether the ad supported or opposed the candidate.

An independent expenditure is an expenditure for a communication "expressly advocating the election or
defeat of a clearly identified candidate that is not made in cooperation, consultation, or concert with,
or at the request or suggestion of, a candidate, a candidate’s authorized committee, or their agents, or
a political party or its agents."

Aggregates by candidate do not include 24 and 48 hour reports. This ensures we don't double count expenditures
and the totals are more accurate. You can still find the information from 24 and 48 hour reports in
`/schedule/schedule_e/`.

Due to the large quantity of Schedule E filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `expenditure_amount`, you might receive a page of
results with the following pagination information:

```
 "pagination": {
    "count": 152623,
    "last_indexes": {
      "last_index": "3023037",
      "last_expenditure_amount": -17348.5
    },
    "per_page": 20,
    "pages": 7632
  }
}
```

To fetch the next page of sorted results, append `last_index=3023037` and
`last_expenditure_amount=` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date,
e.g. `last_disbursement_date`), otherwise some resources may be unintentionally
filtered out.  This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule E data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleERequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleECandidateOfficeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleESupportOpposeIndicatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleERequest();
    $request->apiKey = 'perspiciatis';
    $request->candidateId = [
        'dicta',
        'impedit',
        'voluptatibus',
        'iste',
    ];
    $request->candidateOffice = [
        GetSchedulesScheduleECandidateOfficeEnum::UNKNOWN,
        GetSchedulesScheduleECandidateOfficeEnum::H,
        GetSchedulesScheduleECandidateOfficeEnum::P,
        GetSchedulesScheduleECandidateOfficeEnum::UNKNOWN,
    ];
    $request->candidateOfficeDistrict = [
        'non',
        'dolor',
        'iusto',
    ];
    $request->candidateOfficeState = [
        'doloremque',
    ];
    $request->candidateParty = [
        'officia',
    ];
    $request->committeeId = [
        'ea',
        'quidem',
        'voluptas',
        'facilis',
    ];
    $request->cycle = [
        596065,
        709036,
        537236,
        954334,
    ];
    $request->filingForm = [
        'ullam',
        'unde',
    ];
    $request->imageNumber = [
        'animi',
        'impedit',
        'ipsam',
        'corporis',
    ];
    $request->isNotice = [
        false,
        false,
        false,
    ];
    $request->lastExpenditureAmount = 6216.66;
    $request->lastExpenditureDate = DateTime::createFromFormat('Y-m-d', '2022-09-17');
    $request->lastIndex = 85066;
    $request->lastOfficeTotalYtd = 8744;
    $request->lastSupportOpposeIndicator = 'consectetur';
    $request->lineNumber = 'vitae';
    $request->maxAmount = 'inventore';
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2022-09-05');
    $request->maxDisseminationDate = DateTime::createFromFormat('Y-m-d', '2022-05-22');
    $request->maxFilingDate = DateTime::createFromFormat('Y-m-d', '2022-08-19');
    $request->maxImageNumber = 'soluta';
    $request->minAmount = 'libero';
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2021-08-24');
    $request->minDisseminationDate = DateTime::createFromFormat('Y-m-d', '2022-11-09');
    $request->minFilingDate = DateTime::createFromFormat('Y-m-d', '2022-10-31');
    $request->minImageNumber = 'vel';
    $request->mostRecent = false;
    $request->payeeName = [
        'quae',
    ];
    $request->perPage = 264333;
    $request->qSpender = [
        'exercitationem',
    ];
    $request->sort = 'itaque';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->supportOpposeIndicator = [
        GetSchedulesScheduleESupportOpposeIndicatorEnum::S,
    ];

    $response = $sdk->independentExpenditures->getSchedulesScheduleE($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedulesScheduleEByCandidate


Schedule E receipts aggregated by recipient candidate. To avoid double
counting, memoed items are not included.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleEByCandidateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleEByCandidateOfficeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleEByCandidateSupportOpposeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleEByCandidateRequest();
    $request->apiKey = 'unde';
    $request->candidateId = [
        'distinctio',
        'maxime',
        'quia',
        'quia',
    ];
    $request->committeeId = [
        'omnis',
        'libero',
    ];
    $request->cycle = [
        663318,
    ];
    $request->district = 'libero';
    $request->electionFull = false;
    $request->office = GetSchedulesScheduleEByCandidateOfficeEnum::PRESIDENT;
    $request->page = 637462;
    $request->perPage = 554603;
    $request->sort = 'placeat';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->state = 'sit';
    $request->supportOppose = GetSchedulesScheduleEByCandidateSupportOpposeEnum::S;

    $response = $sdk->independentExpenditures->getSchedulesScheduleEByCandidate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedulesScheduleEEfile


Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleEEfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleEEfileCandidateOfficeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleEEfileRequest();
    $request->apiKey = 'ipsa';
    $request->candidateId = [
        'inventore',
        'aperiam',
        'totam',
        'dolore',
    ];
    $request->candidateOffice = GetSchedulesScheduleEEfileCandidateOfficeEnum::P;
    $request->candidateOfficeDistrict = [
        'voluptatem',
        'autem',
        'esse',
    ];
    $request->candidateOfficeState = [
        'assumenda',
    ];
    $request->candidateParty = [
        'est',
    ];
    $request->candidateSearch = [
        'corrupti',
        'molestiae',
        'provident',
        'accusamus',
    ];
    $request->committeeId = [
        'tempore',
        'sint',
        'ea',
        'autem',
    ];
    $request->filingForm = [
        'rerum',
        'laudantium',
    ];
    $request->imageNumber = [
        'officiis',
        'voluptatibus',
    ];
    $request->isNotice = false;
    $request->maxDisseminationDate = DateTime::createFromFormat('Y-m-d', '2021-04-04');
    $request->maxExpenditureAmount = 5152;
    $request->maxExpenditureDate = DateTime::createFromFormat('Y-m-d', '2022-04-22');
    $request->maxFiledDate = DateTime::createFromFormat('Y-m-d', '2021-02-28');
    $request->minDisseminationDate = DateTime::createFromFormat('Y-m-d', '2022-04-16');
    $request->minExpenditureAmount = 885208;
    $request->minExpenditureDate = DateTime::createFromFormat('Y-m-d', '2022-02-26');
    $request->minFiledDate = DateTime::createFromFormat('Y-m-d', '2022-06-28');
    $request->mostRecent = false;
    $request->page = 140316;
    $request->payeeName = [
        'corporis',
    ];
    $request->perPage = 621473;
    $request->sort = 'earum';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->spenderName = [
        'recusandae',
    ];
    $request->supportOpposeIndicator = [
        GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum::S,
        GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum::O,
        GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum::S,
    ];

    $response = $sdk->independentExpenditures->getSchedulesScheduleEEfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedulesScheduleETotalsByCandidate


Total independent expenditure on supported or opposed candidates by cycle or candidate election year.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchedulesScheduleETotalsByCandidateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchedulesScheduleETotalsByCandidateRequest();
    $request->apiKey = 'beatae';
    $request->candidateId = [
        'molestiae',
        'delectus',
        'cupiditate',
    ];
    $request->cycle = [
        253625,
    ];
    $request->electionFull = false;
    $request->page = 256916;
    $request->perPage = 201010;
    $request->sort = 'at';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->independentExpenditures->getSchedulesScheduleETotalsByCandidate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
