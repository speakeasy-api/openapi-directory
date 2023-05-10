# candidate

## Overview

Candidate endpoints give you access to information about the people running for office. This information is organized by `candidate_id`. If you're unfamiliar with candidate IDs, using `/candidates/search/` will help you locate a particular candidate. 

 Officially, a candidate is an individual seeking nomination for election to a federal office. People become candidates when they (or agents working on their behalf) raise contributions or make expenditures that exceed $5,000. 

 The candidate endpoints primarily use data from FEC registration [Form 1](https://www.fec.gov/resources/cms-content/documents/fecfrm1.pdf) for committee information and [Form 2](https://www.fec.gov/resources/cms-content/documents/fecfrm2.pdf) for candidate information.

### Available Operations

* [getCandidateCandidateId](#getcandidatecandidateid) - 
This endpoint is useful for finding detailed information about a particular candidate. Use the
`candidate_id` to find the most recent information about that candidate.

* [getCandidateCandidateIdHistory](#getcandidatecandidateidhistory) - 
Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.

* [getCandidateCandidateIdHistoryCycle](#getcandidatecandidateidhistorycycle) - 
Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.

* [getCandidateCandidateIdTotals](#getcandidatecandidateidtotals) - 
This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.


* [getCandidates](#getcandidates) - 
Fetch basic information about candidates, and use parameters to filter results to the
candidates you're looking for.

Each result reflects a unique FEC candidate ID. That ID is particular to the candidate for a
particular office sought. If a candidate runs for the same office multiple times, the ID
stays the same. If the same person runs for another office — for example, a House
candidate runs for a Senate office — that candidate will get a unique ID for each office.

* [getCandidatesSearch](#getcandidatessearch) - 
Fetch basic information about candidates and their principal committees.

Each result reflects a unique FEC candidate ID. That ID is assigned to the candidate for a
particular office sought. If a candidate runs for the same office over time, that ID
stays the same. If the same person runs for multiple offices — for example, a House
candidate runs for a Senate office — that candidate will get a unique ID for each office.

The candidate endpoints primarily use data from FEC registration
[Form 1](https://www.fec.gov/pdf/forms/fecfrm1.pdf) for committee information and
[Form 2](https://www.fec.gov/pdf/forms/fecfrm2.pdf) for candidate information.

* [getCandidatesTotals](#getcandidatestotals) - 
Aggregated candidate receipts and disbursements grouped by cycle.

* [getCandidatesTotalsAggregates](#getcandidatestotalsaggregates) -  Candidate total receipts and disbursements aggregated by `aggregate_by`.

* [getCandidatesTotalsByOffice](#getcandidatestotalsbyoffice) -  Aggregated candidate receipts and disbursements grouped by office by cycle.

* [getCandidatesTotalsByOfficeByParty](#getcandidatestotalsbyofficebyparty) -  Aggregated candidate receipts and disbursements grouped by office by party by cycle.

* [getCommitteeCommitteeIdCandidates](#getcommitteecommitteeidcandidates) - 
This endpoint is useful for finding detailed information about a particular candidate. Use the
`candidate_id` to find the most recent information about that candidate.

* [getCommitteeCommitteeIdCandidatesHistory](#getcommitteecommitteeidcandidateshistory) - 
Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.

* [getCommitteeCommitteeIdCandidatesHistoryCycle](#getcommitteecommitteeidcandidateshistorycycle) - 
Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.


## getCandidateCandidateId


This endpoint is useful for finding detailed information about a particular candidate. Use the
`candidate_id` to find the most recent information about that candidate.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidateCandidateIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidateCandidateIdCandidateStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidateCandidateIdIncumbentChallengeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidateCandidateIdOfficeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCandidateCandidateIdRequest();
    $request->apiKey = 'sapiente';
    $request->candidateId = 'architecto';
    $request->candidateStatus = [
        GetCandidateCandidateIdCandidateStatusEnum::C,
        GetCandidateCandidateIdCandidateStatusEnum::N,
        GetCandidateCandidateIdCandidateStatusEnum::UNKNOWN,
    ];
    $request->cycle = [
        653108,
        581850,
        253291,
        414369,
    ];
    $request->district = [
        'molestiae',
        'velit',
    ];
    $request->electionYear = [
        158969,
        338007,
        110375,
    ];
    $request->federalFundsFlag = false;
    $request->hasRaisedFunds = false;
    $request->incumbentChallenge = [
        GetCandidateCandidateIdIncumbentChallengeEnum::C,
        GetCandidateCandidateIdIncumbentChallengeEnum::I,
        GetCandidateCandidateIdIncumbentChallengeEnum::UNKNOWN,
    ];
    $request->name = [
        'sequi',
        'tenetur',
        'ipsam',
        'id',
    ];
    $request->office = [
        GetCandidateCandidateIdOfficeEnum::UNKNOWN,
        GetCandidateCandidateIdOfficeEnum::UNKNOWN,
        GetCandidateCandidateIdOfficeEnum::S,
        GetCandidateCandidateIdOfficeEnum::P,
    ];
    $request->page = 673660;
    $request->party = [
        'reiciendis',
    ];
    $request->perPage = 976460;
    $request->sort = 'vero';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->state = [
        'praesentium',
        'voluptatibus',
    ];
    $request->year = 'ipsa';

    $response = $sdk->candidate->getCandidateCandidateId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCandidateCandidateIdHistory


Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidateCandidateIdHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCandidateCandidateIdHistoryRequest();
    $request->apiKey = 'omnis';
    $request->candidateId = 'voluptate';
    $request->electionFull = false;
    $request->page = 739264;
    $request->perPage = 19987;
    $request->sort = 'doloremque';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->candidate->getCandidateCandidateIdHistory($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCandidateCandidateIdHistoryCycle


Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidateCandidateIdHistoryCycleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCandidateCandidateIdHistoryCycleRequest();
    $request->apiKey = 'reprehenderit';
    $request->candidateId = 'ut';
    $request->cycle = 979587;
    $request->electionFull = false;
    $request->page = 120196;
    $request->perPage = 359444;
    $request->sort = 'dolore';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->candidate->getCandidateCandidateIdHistoryCycle($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCandidateCandidateIdTotals


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
use \OpenAPI\OpenAPI\Models\Operations\GetCandidateCandidateIdTotalsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCandidateCandidateIdTotalsRequest();
    $request->apiKey = 'iusto';
    $request->candidateId = 'dicta';
    $request->cycle = [
        317983,
        880476,
        414263,
    ];
    $request->electionFull = false;
    $request->page = 918236;
    $request->perPage = 64147;
    $request->sort = 'ipsum';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->candidate->getCandidateCandidateIdTotals($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCandidates


Fetch basic information about candidates, and use parameters to filter results to the
candidates you're looking for.

Each result reflects a unique FEC candidate ID. That ID is particular to the candidate for a
particular office sought. If a candidate runs for the same office multiple times, the ID
stays the same. If the same person runs for another office — for example, a House
candidate runs for a Senate office — that candidate will get a unique ID for each office.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidatesCandidateStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidatesIncumbentChallengeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidatesOfficeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCandidatesRequest();
    $request->apiKey = 'quidem';
    $request->candidateId = [
        'excepturi',
        'pariatur',
        'modi',
    ];
    $request->candidateStatus = [
        GetCandidatesCandidateStatusEnum::F,
        GetCandidatesCandidateStatusEnum::P,
        GetCandidatesCandidateStatusEnum::UNKNOWN,
    ];
    $request->cycle = [
        575947,
        83112,
        929297,
        277718,
    ];
    $request->district = [
        'consequatur',
        'est',
    ];
    $request->electionYear = [
        131797,
        647174,
        716327,
        841386,
    ];
    $request->federalFundsFlag = false;
    $request->hasRaisedFunds = false;
    $request->incumbentChallenge = [
        GetCandidatesIncumbentChallengeEnum::I,
        GetCandidatesIncumbentChallengeEnum::UNKNOWN,
    ];
    $request->isActiveCandidate = false;
    $request->maxFirstFileDate = DateTime::createFromFormat('Y-m-d', '2022-05-31');
    $request->minFirstFileDate = DateTime::createFromFormat('Y-m-d', '2022-12-17');
    $request->name = [
        'assumenda',
    ];
    $request->office = [
        GetCandidatesOfficeEnum::UNKNOWN,
        GetCandidatesOfficeEnum::UNKNOWN,
    ];
    $request->page = 677817;
    $request->party = [
        'tempora',
        'facilis',
        'tempore',
    ];
    $request->perPage = 288476;
    $request->q = [
        'eum',
        'non',
        'eligendi',
        'sint',
    ];
    $request->sort = 'aliquid';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->state = [
        'necessitatibus',
        'sint',
        'officia',
    ];
    $request->year = 'dolor';

    $response = $sdk->candidate->getCandidates($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCandidatesSearch


Fetch basic information about candidates and their principal committees.

Each result reflects a unique FEC candidate ID. That ID is assigned to the candidate for a
particular office sought. If a candidate runs for the same office over time, that ID
stays the same. If the same person runs for multiple offices — for example, a House
candidate runs for a Senate office — that candidate will get a unique ID for each office.

The candidate endpoints primarily use data from FEC registration
[Form 1](https://www.fec.gov/pdf/forms/fecfrm1.pdf) for committee information and
[Form 2](https://www.fec.gov/pdf/forms/fecfrm2.pdf) for candidate information.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidatesSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidatesSearchCandidateStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidatesSearchIncumbentChallengeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidatesSearchOfficeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCandidatesSearchRequest();
    $request->apiKey = 'debitis';
    $request->candidateId = [
        'dolorum',
        'in',
        'in',
        'illum',
    ];
    $request->candidateStatus = [
        GetCandidatesSearchCandidateStatusEnum::N,
        GetCandidatesSearchCandidateStatusEnum::UNKNOWN,
        GetCandidatesSearchCandidateStatusEnum::C,
        GetCandidatesSearchCandidateStatusEnum::N,
    ];
    $request->cycle = [
        411820,
        396506,
        675439,
        881104,
    ];
    $request->district = [
        'occaecati',
    ];
    $request->electionYear = [
        881736,
        965417,
    ];
    $request->federalFundsFlag = false;
    $request->hasRaisedFunds = false;
    $request->incumbentChallenge = [
        GetCandidatesSearchIncumbentChallengeEnum::C,
        GetCandidatesSearchIncumbentChallengeEnum::C,
        GetCandidatesSearchIncumbentChallengeEnum::C,
    ];
    $request->isActiveCandidate = false;
    $request->maxFirstFileDate = DateTime::createFromFormat('Y-m-d', '2021-12-07');
    $request->minFirstFileDate = DateTime::createFromFormat('Y-m-d', '2022-04-23');
    $request->name = [
        'nisi',
        'vel',
        'natus',
    ];
    $request->office = [
        GetCandidatesSearchOfficeEnum::H,
        GetCandidatesSearchOfficeEnum::UNKNOWN,
        GetCandidatesSearchOfficeEnum::H,
    ];
    $request->page = 301575;
    $request->party = [
        'id',
        'labore',
        'labore',
    ];
    $request->perPage = 383462;
    $request->q = [
        'nobis',
        'eum',
        'vero',
    ];
    $request->sort = 'aspernatur';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->state = [
        'magnam',
    ];
    $request->year = 'et';

    $response = $sdk->candidate->getCandidatesSearch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCandidatesTotals


Aggregated candidate receipts and disbursements grouped by cycle.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidatesTotalsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidatesTotalsOfficeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCandidatesTotalsRequest();
    $request->apiKey = 'excepturi';
    $request->candidateId = [
        'provident',
        'quos',
    ];
    $request->cycle = [
        33625,
        653201,
        968962,
    ];
    $request->district = [
        'ad',
        'eum',
        'dolor',
    ];
    $request->electionFull = false;
    $request->electionYear = [
        141264,
        367562,
        97260,
        435865,
    ];
    $request->federalFundsFlag = false;
    $request->hasRaisedFunds = false;
    $request->isActiveCandidate = false;
    $request->maxCashOnHandEndPeriod = 'doloribus';
    $request->maxDebtsOwedByCommittee = 'debitis';
    $request->maxDisbursements = 'eius';
    $request->maxReceipts = 'maxime';
    $request->minCashOnHandEndPeriod = 'deleniti';
    $request->minDebtsOwedByCommittee = 'facilis';
    $request->minDisbursements = 'in';
    $request->minReceipts = 'architecto';
    $request->office = [
        GetCandidatesTotalsOfficeEnum::P,
    ];
    $request->page = 352312;
    $request->party = [
        'nihil',
        'repellat',
        'quibusdam',
    ];
    $request->perPage = 149448;
    $request->q = [
        'pariatur',
        'accusantium',
        'consequuntur',
        'praesentium',
    ];
    $request->sort = 'natus';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->state = [
        'sunt',
    ];

    $response = $sdk->candidate->getCandidatesTotals($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCandidatesTotalsAggregates

 Candidate total receipts and disbursements aggregated by `aggregate_by`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidatesTotalsAggregatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidatesTotalsAggregatesAggregateByEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidatesTotalsAggregatesOfficeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidatesTotalsAggregatesPartyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCandidatesTotalsAggregatesRequest();
    $request->aggregateBy = GetCandidatesTotalsAggregatesAggregateByEnum::OFFICE_PARTY;
    $request->apiKey = 'illum';
    $request->district = [
        'maxime',
        'ea',
        'excepturi',
        'odit',
    ];
    $request->electionFull = false;
    $request->electionYear = [
        33222,
        69167,
    ];
    $request->isActiveCandidate = false;
    $request->maxElectionCycle = 982575;
    $request->minElectionCycle = 697429;
    $request->office = GetCandidatesTotalsAggregatesOfficeEnum::H;
    $request->page = 453543;
    $request->party = GetCandidatesTotalsAggregatesPartyEnum::DEM;
    $request->perPage = 722056;
    $request->sort = [
        'pariatur',
    ];
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->state = [
        'voluptatibus',
        'perferendis',
    ];

    $response = $sdk->candidate->getCandidatesTotalsAggregates($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCandidatesTotalsByOffice

 Aggregated candidate receipts and disbursements grouped by office by cycle.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidatesTotalsByOfficeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidatesTotalsByOfficeOfficeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCandidatesTotalsByOfficeRequest();
    $request->apiKey = 'fugiat';
    $request->electionFull = false;
    $request->electionYear = [
        11714,
    ];
    $request->isActiveCandidate = false;
    $request->maxElectionCycle = 764912;
    $request->minElectionCycle = 359978;
    $request->office = GetCandidatesTotalsByOfficeOfficeEnum::P;
    $request->page = 729991;
    $request->perPage = 749999;
    $request->sort = 'dolores';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->candidate->getCandidatesTotalsByOffice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCandidatesTotalsByOfficeByParty

 Aggregated candidate receipts and disbursements grouped by office by party by cycle.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidatesTotalsByOfficeByPartyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidatesTotalsByOfficeByPartyOfficeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCandidatesTotalsByOfficeByPartyRequest();
    $request->apiKey = 'quis';
    $request->electionFull = false;
    $request->electionYear = [
        489549,
        54338,
        338985,
    ];
    $request->isActiveCandidate = false;
    $request->office = GetCandidatesTotalsByOfficeByPartyOfficeEnum::UNKNOWN;
    $request->page = 179490;
    $request->perPage = 18521;
    $request->sort = 'dolores';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->candidate->getCandidatesTotalsByOfficeByParty($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommitteeCommitteeIdCandidates


This endpoint is useful for finding detailed information about a particular candidate. Use the
`candidate_id` to find the most recent information about that candidate.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteeCommitteeIdCandidatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteeCommitteeIdCandidatesCandidateStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteeCommitteeIdCandidatesOfficeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommitteeCommitteeIdCandidatesRequest();
    $request->apiKey = 'minus';
    $request->candidateStatus = [
        GetCommitteeCommitteeIdCandidatesCandidateStatusEnum::C,
        GetCommitteeCommitteeIdCandidatesCandidateStatusEnum::P,
    ];
    $request->committeeId = 'nostrum';
    $request->cycle = [
        928082,
        608253,
        704415,
        596656,
    ];
    $request->district = [
        'porro',
    ];
    $request->electionYear = [
        500026,
    ];
    $request->federalFundsFlag = false;
    $request->hasRaisedFunds = false;
    $request->incumbentChallenge = [
        GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum::UNKNOWN,
        GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum::C,
        GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum::C,
    ];
    $request->name = [
        'asperiores',
    ];
    $request->office = [
        GetCommitteeCommitteeIdCandidatesOfficeEnum::H,
        GetCommitteeCommitteeIdCandidatesOfficeEnum::S,
        GetCommitteeCommitteeIdCandidatesOfficeEnum::S,
        GetCommitteeCommitteeIdCandidatesOfficeEnum::S,
    ];
    $request->page = 864282;
    $request->party = [
        'nobis',
        'libero',
        'delectus',
    ];
    $request->perPage = 311945;
    $request->sort = 'quos';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->state = [
        'dolorem',
        'dolorem',
    ];
    $request->year = 'dolor';

    $response = $sdk->candidate->getCommitteeCommitteeIdCandidates($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommitteeCommitteeIdCandidatesHistory


Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteeCommitteeIdCandidatesHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommitteeCommitteeIdCandidatesHistoryRequest();
    $request->apiKey = 'qui';
    $request->committeeId = 'ipsum';
    $request->electionFull = false;
    $request->page = 944373;
    $request->perPage = 569574;
    $request->sort = 'cum';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->candidate->getCommitteeCommitteeIdCandidatesHistory($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommitteeCommitteeIdCandidatesHistoryCycle


Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteeCommitteeIdCandidatesHistoryCycleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommitteeCommitteeIdCandidatesHistoryCycleRequest();
    $request->apiKey = 'voluptate';
    $request->committeeId = 'dignissimos';
    $request->cycle = 970237;
    $request->electionFull = false;
    $request->page = 227414;
    $request->perPage = 680545;
    $request->sort = 'numquam';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->candidate->getCommitteeCommitteeIdCandidatesHistoryCycle($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
