# committee

## Overview

Committees are entities that spend and raise money in an election. Their characteristics and relationships with candidates can change over time. 

 You might want to use filters or search endpoints to find the committee you're looking for. Then you can use other committee endpoints to explore information about the committee that interests you. 

 Financial information is organized by `committee_id`, so finding the committee you're interested in will lead you to more granular financial information. 

 The committee endpoints include all FEC filers, even if they aren't registered as a committee. 

 Officially, committees include the committees and organizations that file with the FEC. Several different types of organizations file financial reports with the FEC: 

 *Campaign committees authorized by particular candidates to raise and spend funds in their campaigns. Non-party committees (e.g., PACs), some of which may be sponsored by corporations, unions, trade or membership groups, etc. Political party committees at the national, state, and local levels. Groups and individuals making only independent expenditures Corporations, unions, and other organizations making internal communications* 

 The committee endpoints primarily use data from FEC registration Form 1 and Form 2.

### Available Operations

* [getCandidateCandidateIdCommittees](#getcandidatecandidateidcommittees) - 
This endpoint is useful for finding detailed information about a particular committee or
filer. Use the `committee_id` to find the most recent information about the committee.

* [getCandidateCandidateIdCommitteesHistory](#getcandidatecandidateidcommitteeshistory) - 
Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.

* [getCandidateCandidateIdCommitteesHistoryCycle](#getcandidatecandidateidcommitteeshistorycycle) - 
Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.

* [getCommitteeCommitteeId](#getcommitteecommitteeid) - 
This endpoint is useful for finding detailed information about a particular committee or
filer. Use the `committee_id` to find the most recent information about the committee.

* [getCommitteeCommitteeIdHistory](#getcommitteecommitteeidhistory) - 
Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.

* [getCommitteeCommitteeIdHistoryCycle](#getcommitteecommitteeidhistorycycle) - 
Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.

* [getCommittees](#getcommittees) - 
Fetch basic information about committees and filers. Use parameters to filter for
particular characteristics.



## getCandidateCandidateIdCommittees


This endpoint is useful for finding detailed information about a particular committee or
filer. Use the `committee_id` to find the most recent information about the committee.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidateCandidateIdCommitteesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidateCandidateIdCommitteesCommitteeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidateCandidateIdCommitteesDesignationEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidateCandidateIdCommitteesFilingFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidateCandidateIdCommitteesOrganizationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCandidateCandidateIdCommitteesRequest();
    $request->apiKey = 'veritatis';
    $request->candidateId = 'ipsa';
    $request->committeeType = [
        GetCandidateCandidateIdCommitteesCommitteeTypeEnum::O,
    ];
    $request->cycle = [
        311796,
        881005,
    ];
    $request->designation = [
        GetCandidateCandidateIdCommitteesDesignationEnum::D,
        GetCandidateCandidateIdCommitteesDesignationEnum::J,
        GetCandidateCandidateIdCommitteesDesignationEnum::U,
    ];
    $request->filingFrequency = [
        GetCandidateCandidateIdCommitteesFilingFrequencyEnum::Q,
    ];
    $request->organizationType = [
        GetCandidateCandidateIdCommitteesOrganizationTypeEnum::V,
    ];
    $request->page = 67249;
    $request->perPage = 743835;
    $request->sort = 'dolorum';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->year = [
        453697,
        677082,
    ];

    $response = $sdk->committee->getCandidateCandidateIdCommittees($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCandidateCandidateIdCommitteesHistory


Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidateCandidateIdCommitteesHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidateCandidateIdCommitteesHistoryDesignationEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCandidateCandidateIdCommitteesHistoryRequest();
    $request->apiKey = 'deleniti';
    $request->candidateId = 'omnis';
    $request->designation = [
        GetCandidateCandidateIdCommitteesHistoryDesignationEnum::B,
        GetCandidateCandidateIdCommitteesHistoryDesignationEnum::D,
        GetCandidateCandidateIdCommitteesHistoryDesignationEnum::P,
        GetCandidateCandidateIdCommitteesHistoryDesignationEnum::A,
    ];
    $request->electionFull = false;
    $request->page = 456015;
    $request->perPage = 663078;
    $request->sort = 'saepe';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->committee->getCandidateCandidateIdCommitteesHistory($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCandidateCandidateIdCommitteesHistoryCycle


Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidateCandidateIdCommitteesHistoryCycleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCandidateCandidateIdCommitteesHistoryCycleRequest();
    $request->apiKey = 'eius';
    $request->candidateId = 'aspernatur';
    $request->cycle = 20651;
    $request->designation = [
        GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum::B,
    ];
    $request->electionFull = false;
    $request->page = 881586;
    $request->perPage = 320017;
    $request->sort = 'saepe';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->committee->getCandidateCandidateIdCommitteesHistoryCycle($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommitteeCommitteeId


This endpoint is useful for finding detailed information about a particular committee or
filer. Use the `committee_id` to find the most recent information about the committee.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteeCommitteeIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteeCommitteeIdCommitteeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteeCommitteeIdDesignationEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteeCommitteeIdFilingFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteeCommitteeIdOrganizationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommitteeCommitteeIdRequest();
    $request->apiKey = 'suscipit';
    $request->committeeId = 'deserunt';
    $request->committeeType = [
        GetCommitteeCommitteeIdCommitteeTypeEnum::I,
        GetCommitteeCommitteeIdCommitteeTypeEnum::X,
        GetCommitteeCommitteeIdCommitteeTypeEnum::P,
    ];
    $request->cycle = [
        55,
        872651,
        311860,
    ];
    $request->designation = [
        GetCommitteeCommitteeIdDesignationEnum::J,
        GetCommitteeCommitteeIdDesignationEnum::B,
    ];
    $request->filingFrequency = [
        GetCommitteeCommitteeIdFilingFrequencyEnum::A,
        GetCommitteeCommitteeIdFilingFrequencyEnum::W,
        GetCommitteeCommitteeIdFilingFrequencyEnum::MINUS_T,
        GetCommitteeCommitteeIdFilingFrequencyEnum::Q,
    ];
    $request->organizationType = [
        GetCommitteeCommitteeIdOrganizationTypeEnum::M,
        GetCommitteeCommitteeIdOrganizationTypeEnum::C,
        GetCommitteeCommitteeIdOrganizationTypeEnum::V,
    ];
    $request->page = 947371;
    $request->perPage = 229442;
    $request->sort = 'tempore';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->year = [
        253941,
        313692,
        213312,
        957451,
    ];

    $response = $sdk->committee->getCommitteeCommitteeId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommitteeCommitteeIdHistory


Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteeCommitteeIdHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteeCommitteeIdHistoryDesignationEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommitteeCommitteeIdHistoryRequest();
    $request->apiKey = 'totam';
    $request->committeeId = 'nihil';
    $request->designation = [
        GetCommitteeCommitteeIdHistoryDesignationEnum::U,
    ];
    $request->electionFull = false;
    $request->page = 207470;
    $request->perPage = 153694;
    $request->sort = 'vel';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->committee->getCommitteeCommitteeIdHistory($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommitteeCommitteeIdHistoryCycle


Explore a filer's characteristics over time. This can be particularly useful if the committees change treasurers, designation, or `committee_type`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteeCommitteeIdHistoryCycleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteeCommitteeIdHistoryCycleDesignationEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommitteeCommitteeIdHistoryCycleRequest();
    $request->apiKey = 'libero';
    $request->committeeId = 'voluptas';
    $request->cycle = 646265;
    $request->designation = [
        GetCommitteeCommitteeIdHistoryCycleDesignationEnum::A,
        GetCommitteeCommitteeIdHistoryCycleDesignationEnum::A,
    ];
    $request->electionFull = false;
    $request->page = 186458;
    $request->perPage = 586784;
    $request->sort = 'maxime';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->committee->getCommitteeCommitteeIdHistoryCycle($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommittees


Fetch basic information about committees and filers. Use parameters to filter for
particular characteristics.



### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteesCommitteeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteesDesignationEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteesFilingFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCommitteesOrganizationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommitteesRequest();
    $request->apiKey = 'pariatur';
    $request->candidateId = [
        'dicta',
        'laborum',
        'totam',
    ];
    $request->committeeId = [
        'aspernatur',
        'dolores',
    ];
    $request->committeeType = [
        GetCommitteesCommitteeTypeEnum::U,
        GetCommitteesCommitteeTypeEnum::N,
        GetCommitteesCommitteeTypeEnum::O,
    ];
    $request->cycle = [
        840429,
        183280,
        204865,
    ];
    $request->designation = [
        GetCommitteesDesignationEnum::A,
    ];
    $request->filingFrequency = [
        GetCommitteesFilingFrequencyEnum::A,
        GetCommitteesFilingFrequencyEnum::N,
    ];
    $request->maxFirstF1Date = DateTime::createFromFormat('Y-m-d', '2021-02-13');
    $request->maxFirstFileDate = DateTime::createFromFormat('Y-m-d', '2022-03-27');
    $request->maxLastF1Date = DateTime::createFromFormat('Y-m-d', '2021-07-03');
    $request->minFirstF1Date = DateTime::createFromFormat('Y-m-d', '2022-02-05');
    $request->minFirstFileDate = DateTime::createFromFormat('Y-m-d', '2022-12-01');
    $request->minLastF1Date = DateTime::createFromFormat('Y-m-d', '2021-11-23');
    $request->organizationType = [
        GetCommitteesOrganizationTypeEnum::T,
        GetCommitteesOrganizationTypeEnum::UNKNOWN,
        GetCommitteesOrganizationTypeEnum::W,
    ];
    $request->page = 209157;
    $request->party = [
        'labore',
        'adipisci',
    ];
    $request->perPage = 677263;
    $request->q = [
        'quae',
    ];
    $request->sort = 'aut';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->sponsorCandidateId = [
        'itaque',
        'consequatur',
        'est',
    ];
    $request->state = [
        'porro',
        'doloribus',
        'ut',
        'facilis',
    ];
    $request->treasurerName = [
        'qui',
        'quae',
        'laudantium',
    ];
    $request->year = [
        580447,
        977496,
    ];

    $response = $sdk->committee->getCommittees($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
