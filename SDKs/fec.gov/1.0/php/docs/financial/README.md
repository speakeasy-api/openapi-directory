# financial

## Overview

Fetch key information about a committee's Form 3, Form 3X, Form 13, or Form 3P financial reports. 

 Most committees are required to summarize their financial activity in each filing; those summaries are included in these files. Generally, committees file reports on a quarterly or monthly basis, but some must also submit a report 12 days before primary elections. Therefore, during the primary season, the period covered by this file may be different for different committees. These totals also incorporate any changes made by committees, if any report covering the period is amended. 

 Information is made available on the API as soon as it's processed. Keep in mind, complex paper filings take longer to process. 

 The financial endpoints use data from FEC [form 5](https://www.fec.gov/pdf/forms/fecfrm5.pdf), for independent expenditors; or the summary and detailed summary pages of the FEC [Form 3](https://www.fec.gov/pdf/forms/fecfrm3.pdf), for House and Senate committees; [Form 3X](https://www.fec.gov/pdf/forms/fecfrm3x.pdf), for PACs and parties; [Form 13](https://www.fec.gov/pdf/forms/fecfrm13.pdf) for inaugural committees; and [Form 3P](https://www.fec.gov/pdf/forms/fecfrm3p.pdf), for presidential committees.

### Available Operations

* [getCommitteeCommitteeIdReports](#getcommitteecommitteeidreports) - 
Each report represents the summary information from Form 3, Form 3X and Form 3P.
These reports have key statistics that illuminate the financial status of a given committee.
Things like cash on hand, debts owed by committee, total receipts, and total disbursements
are especially helpful for understanding a committee's financial dealings.

By default, this endpoint includes both amended and final versions of each report. To restrict
to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
have been amended, use `is_amended=true`.

Several different reporting structures exist, depending on the type of organization that
submits financial information. To see an example of these reporting requirements,
look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.

* [getCommitteeCommitteeIdTotals](#getcommitteecommitteeidtotals) - 
This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.


* [getElections](#getelections) - 
Look at the top-level financial information for all candidates running for the same
office.

Choose a 2-year cycle, and `house`, `senate` or `presidential`.

If you are looking for a Senate seat, you will need to select the state using a two-letter
abbreviation.

House races require state and a two-digit district number.

Since this endpoint reflects financial information, it will only have candidates once they file
financial reporting forms. Query the `/candidates` endpoint to retrieve an-up-to-date list of all the
candidates that filed to run for a particular seat.

* [getElectionsSearch](#getelectionssearch) - 
List elections by cycle, office, state, and district.

* [getElectionsSummary](#getelectionssummary) - 
List elections by cycle, office, state, and district.

* [getReportsEntityType](#getreportsentitytype) - 
Each report represents the summary information from Form 3, Form 3X and Form 3P.
These reports have key statistics that illuminate the financial status of a given committee.
Things like cash on hand, debts owed by committee, total receipts, and total disbursements
are especially helpful for understanding a committee's financial dealings.

By default, this endpoint includes both amended and final versions of each report. To restrict
to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
have been amended, use `is_amended=true`.

Several different reporting structures exist, depending on the type of organization that
submits financial information. To see an example of these reporting requirements,
look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.

* [getTotalsByEntity](#gettotalsbyentity) - 
Provides cumulative receipt totals by entity type, over a two year cycle. Totals are adjusted to avoid double counting.

This is [the sql](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V41__large_aggregates.sql) that creates these calculations.

* [getTotalsInauguralCommitteesByContributor](#gettotalsinauguralcommitteesbycontributor) - 
This endpoint provides information about an inaugural committee's Form 13 report of donations accepted.
The data is aggregated by the contributor and the two-year period. We refer to two-year periods as a `cycle`.


* [getTotalsEntityType](#gettotalsentitytype) - 
This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.



## getCommitteeCommitteeIdReports


Each report represents the summary information from Form 3, Form 3X and Form 3P.
These reports have key statistics that illuminate the financial status of a given committee.
Things like cash on hand, debts owed by committee, total receipts, and total disbursements
are especially helpful for understanding a committee's financial dealings.

By default, this endpoint includes both amended and final versions of each report. To restrict
to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
have been amended, use `is_amended=true`.

Several different reporting structures exist, depending on the type of organization that
submits financial information. To see an example of these reporting requirements,
look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteeCommitteeIdReportsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommitteeCommitteeIdReportsRequest();
    $request->apiKey = 'culpa';
    $request->beginningImageNumber = [
        'sapiente',
    ];
    $request->candidateId = 'officiis';
    $request->committeeId = 'architecto';
    $request->cycle = [
        867168,
        891315,
        29190,
    ];
    $request->isAmended = false;
    $request->maxCashOnHandEndPeriodAmount = 'alias';
    $request->maxDebtsOwedExpenditures = 'deleniti';
    $request->maxDisbursementsAmount = 'earum';
    $request->maxIndependentExpenditures = 'ex';
    $request->maxPartyCoordinatedExpenditures = 'sapiente';
    $request->maxReceiptsAmount = 'rem';
    $request->maxTotalContributions = 'minus';
    $request->minCashOnHandEndPeriodAmount = 'nemo';
    $request->minDebtsOwedAmount = 'asperiores';
    $request->minDisbursementsAmount = 'ratione';
    $request->minIndependentExpenditures = 'ullam';
    $request->minPartyCoordinatedExpenditures = 'perferendis';
    $request->minReceiptsAmount = 'illum';
    $request->minTotalContributions = 'totam';
    $request->page = 770675;
    $request->perPage = 842777;
    $request->reportType = [
        'ipsam',
        'culpa',
        'dolor',
    ];
    $request->sort = [
        'inventore',
        'deleniti',
    ];
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->type = [
        'tempora',
    ];
    $request->year = [
        8689,
    ];

    $response = $sdk->financial->getCommitteeCommitteeIdReports($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommitteeCommitteeIdTotals


This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.



### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteeCommitteeIdTotalsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommitteeCommitteeIdTotalsRequest();
    $request->apiKey = 'architecto';
    $request->committeeId = 'sit';
    $request->cycle = [
        144286,
        66149,
    ];
    $request->page = 513760;
    $request->perPage = 65604;
    $request->sort = 'dolor';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->financial->getCommitteeCommitteeIdTotals($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getElections


Look at the top-level financial information for all candidates running for the same
office.

Choose a 2-year cycle, and `house`, `senate` or `presidential`.

If you are looking for a Senate seat, you will need to select the state using a two-letter
abbreviation.

House races require state and a two-digit district number.

Since this endpoint reflects financial information, it will only have candidates once they file
financial reporting forms. Query the `/candidates` endpoint to retrieve an-up-to-date list of all the
candidates that filed to run for a particular seat.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetElectionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetElectionsOfficeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetElectionsRequest();
    $request->apiKey = 'fugiat';
    $request->cycle = 369490;
    $request->district = 'consequuntur';
    $request->electionFull = false;
    $request->office = GetElectionsOfficeEnum::HOUSE;
    $request->page = 559682;
    $request->perPage = 911198;
    $request->sort = 'impedit';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->state = 'officiis';

    $response = $sdk->financial->getElections($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getElectionsSearch


List elections by cycle, office, state, and district.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetElectionsSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetElectionsSearchOfficeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetElectionsSearchRequest();
    $request->apiKey = 'esse';
    $request->cycle = [
        153369,
        332191,
        199596,
        712927,
    ];
    $request->district = [
        'vel',
        'voluptatum',
    ];
    $request->office = [
        GetElectionsSearchOfficeEnum::SENATE,
        GetElectionsSearchOfficeEnum::HOUSE,
    ];
    $request->page = 781480;
    $request->perPage = 421844;
    $request->sort = [
        'laboriosam',
        'recusandae',
        'consequuntur',
        'voluptatem',
    ];
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->state = [
        'necessitatibus',
        'quasi',
    ];
    $request->zip = [
        871103,
        878373,
    ];

    $response = $sdk->financial->getElectionsSearch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getElectionsSummary


List elections by cycle, office, state, and district.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetElectionsSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetElectionsSummaryOfficeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetElectionsSummaryRequest();
    $request->apiKey = 'est';
    $request->cycle = 690785;
    $request->district = 'sequi';
    $request->electionFull = false;
    $request->office = GetElectionsSummaryOfficeEnum::PRESIDENT;
    $request->state = 'repudiandae';

    $response = $sdk->financial->getElectionsSummary($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReportsEntityType


Each report represents the summary information from Form 3, Form 3X and Form 3P.
These reports have key statistics that illuminate the financial status of a given committee.
Things like cash on hand, debts owed by committee, total receipts, and total disbursements
are especially helpful for understanding a committee's financial dealings.

By default, this endpoint includes both amended and final versions of each report. To restrict
to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
have been amended, use `is_amended=true`.

Several different reporting structures exist, depending on the type of organization that
submits financial information. To see an example of these reporting requirements,
look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReportsEntityTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetReportsEntityTypeAmendmentIndicatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetReportsEntityTypeEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetReportsEntityTypeFilerTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportsEntityTypeRequest();
    $request->amendmentIndicator = [
        GetReportsEntityTypeAmendmentIndicatorEnum::C,
        GetReportsEntityTypeAmendmentIndicatorEnum::A,
        GetReportsEntityTypeAmendmentIndicatorEnum::T,
        GetReportsEntityTypeAmendmentIndicatorEnum::T,
    ];
    $request->apiKey = 'officia';
    $request->beginningImageNumber = [
        'numquam',
        'nemo',
    ];
    $request->candidateId = 'quos';
    $request->committeeId = [
        'aspernatur',
        'ducimus',
    ];
    $request->committeeType = [
        'fuga',
    ];
    $request->cycle = [
        277340,
        97493,
        524380,
    ];
    $request->entityType = GetReportsEntityTypeEntityTypeEnum::IE_ONLY;
    $request->filerType = GetReportsEntityTypeFilerTypeEnum::E_FILE;
    $request->isAmended = false;
    $request->maxCashOnHandEndPeriodAmount = 'nisi';
    $request->maxDebtsOwedExpenditures = 'consequuntur';
    $request->maxDisbursementsAmount = 'consectetur';
    $request->maxIndependentExpenditures = 'aperiam';
    $request->maxPartyCoordinatedExpenditures = 'cupiditate';
    $request->maxReceiptDate = DateTime::createFromFormat('Y-m-d', '2020-10-05');
    $request->maxReceiptsAmount = 'alias';
    $request->maxTotalContributions = 'omnis';
    $request->minCashOnHandEndPeriodAmount = 'eos';
    $request->minDebtsOwedAmount = 'occaecati';
    $request->minDisbursementsAmount = 'iste';
    $request->minIndependentExpenditures = 'magni';
    $request->minPartyCoordinatedExpenditures = 'inventore';
    $request->minReceiptDate = DateTime::createFromFormat('Y-m-d', '2021-03-28');
    $request->minReceiptsAmount = 'voluptatibus';
    $request->minTotalContributions = 'distinctio';
    $request->mostRecent = false;
    $request->page = 608593;
    $request->perPage = 966390;
    $request->qFiler = [
        'praesentium',
        'maxime',
    ];
    $request->qSpender = [
        'temporibus',
        'quos',
    ];
    $request->reportType = [
        'itaque',
        'commodi',
    ];
    $request->sort = [
        'earum',
        'modi',
        'nam',
    ];
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->year = [
        32901,
        371919,
        425946,
        1383,
    ];

    $response = $sdk->financial->getReportsEntityType($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTotalsByEntity


Provides cumulative receipt totals by entity type, over a two year cycle. Totals are adjusted to avoid double counting.

This is [the sql](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V41__large_aggregates.sql) that creates these calculations.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTotalsByEntityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTotalsByEntityRequest();
    $request->apiKey = 'quasi';
    $request->cycle = 247685;
    $request->page = 978548;
    $request->perPage = 318233;
    $request->sort = 'sint';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->financial->getTotalsByEntity($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTotalsInauguralCommitteesByContributor


This endpoint provides information about an inaugural committee's Form 13 report of donations accepted.
The data is aggregated by the contributor and the two-year period. We refer to two-year periods as a `cycle`.



### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTotalsInauguralCommitteesByContributorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTotalsInauguralCommitteesByContributorRequest();
    $request->apiKey = 'nulla';
    $request->committeeId = [
        'esse',
        'nemo',
        'reprehenderit',
    ];
    $request->contributorName = [
        'quis',
        'sint',
        'accusamus',
    ];
    $request->cycle = [
        945027,
        900103,
        991891,
        404306,
    ];
    $request->page = 376741;
    $request->perPage = 895346;
    $request->sort = [
        'quae',
        'minus',
        'fuga',
        'laborum',
    ];
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->financial->getTotalsInauguralCommitteesByContributor($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTotalsEntityType


This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.



### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTotalsEntityTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTotalsEntityTypeEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTotalsEntityTypeFilingFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTotalsEntityTypeOrganizationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTotalsEntityTypeRequest();
    $request->apiKey = 'consectetur';
    $request->committeeDesignation = [
        'atque',
    ];
    $request->committeeId = [
        'impedit',
    ];
    $request->committeeState = [
        'soluta',
    ];
    $request->committeeType = [
        'nam',
        'dolore',
        'iusto',
        'voluptate',
    ];
    $request->cycle = [
        493958,
    ];
    $request->entityType = GetTotalsEntityTypeEntityTypeEnum::PAC;
    $request->filingFrequency = [
        GetTotalsEntityTypeFilingFrequencyEnum::Q,
        GetTotalsEntityTypeFilingFrequencyEnum::MINUS_A,
        GetTotalsEntityTypeFilingFrequencyEnum::N,
        GetTotalsEntityTypeFilingFrequencyEnum::A,
    ];
    $request->maxDisbursements = 'voluptatibus';
    $request->maxFirstF1Date = DateTime::createFromFormat('Y-m-d', '2022-09-13');
    $request->maxLastCashOnHandEndPeriod = 'quibusdam';
    $request->maxLastDebtsOwedByCommittee = 'inventore';
    $request->maxReceipts = 'facere';
    $request->minDisbursements = 'libero';
    $request->minFirstF1Date = DateTime::createFromFormat('Y-m-d', '2022-01-09');
    $request->minLastCashOnHandEndPeriod = 'quia';
    $request->minLastDebtsOwedByCommittee = 'porro';
    $request->minReceipts = 'aliquam';
    $request->organizationType = [
        GetTotalsEntityTypeOrganizationTypeEnum::UNKNOWN,
    ];
    $request->page = 36561;
    $request->perPage = 424663;
    $request->sort = 'ea';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->sponsorCandidateId = [
        'vero',
    ];
    $request->treasurerName = [
        'eum',
        'velit',
        'ut',
    ];

    $response = $sdk->financial->getTotalsEntityType($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
