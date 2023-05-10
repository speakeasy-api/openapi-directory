# electioneering

## Overview

An electioneering communication is any broadcast, cable or satellite communication that fulfills each of the following conditions: 

 _The communication refers to a clearly identified federal candidate._ 

 _The communication is publicly distributed by a television station, radio station, cable television system or satellite system for a fee._ 

 _The communication is distributed within 60 days prior to a general election or 30 days prior to a primary election to federal office._

### Available Operations

* [getElectioneering](#getelectioneering) - 
An electioneering communication is any broadcast, cable or satellite communication that fulfills each of the following conditions:

_The communication refers to a clearly identified federal candidate._

_The communication is publicly distributed by a television station, radio station, cable television system or satellite system for a fee._

_The communication is distributed within 60 days prior to a general election or 30 days prior to a primary election to federal office._

* [getElectioneeringAggregates](#getelectioneeringaggregates) - Electioneering communications costs aggregates
* [getElectioneeringByCandidate](#getelectioneeringbycandidate) - Electioneering costs aggregated by candidate
* [getElectioneeringTotalsByCandidate](#getelectioneeringtotalsbycandidate) - 
Total electioneering communications spent on candidates by cycle
or candidate election year


## getElectioneering


An electioneering communication is any broadcast, cable or satellite communication that fulfills each of the following conditions:

_The communication refers to a clearly identified federal candidate._

_The communication is publicly distributed by a television station, radio station, cable television system or satellite system for a fee._

_The communication is distributed within 60 days prior to a general election or 30 days prior to a primary election to federal office._


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetElectioneeringRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetElectioneeringRequest();
    $request->apiKey = 'accusamus';
    $request->candidateId = [
        'atque',
        'fugit',
    ];
    $request->committeeId = [
        'fugiat',
        'voluptatem',
    ];
    $request->description = 'culpa';
    $request->lastIndex = 710337;
    $request->maxAmount = 'magnam';
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2022-07-17');
    $request->minAmount = 'ipsam';
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2022-06-21');
    $request->page = 558065;
    $request->perPage = 922112;
    $request->reportYear = [
        89494,
        502710,
    ];
    $request->sort = 'ex';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->electioneering->getElectioneering($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getElectioneeringAggregates

Electioneering communications costs aggregates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetElectioneeringAggregatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetElectioneeringAggregatesRequest();
    $request->apiKey = 'sed';
    $request->candidateId = [
        'vel',
    ];
    $request->committeeId = [
        'saepe',
        'error',
    ];
    $request->cycle = [
        279068,
    ];
    $request->page = 968865;
    $request->perPage = 209750;
    $request->sort = 'harum';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->electioneering->getElectioneeringAggregates($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getElectioneeringByCandidate

Electioneering costs aggregated by candidate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetElectioneeringByCandidateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetElectioneeringByCandidateOfficeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetElectioneeringByCandidateRequest();
    $request->apiKey = 'dicta';
    $request->candidateId = [
        'occaecati',
    ];
    $request->cycle = [
        695270,
        539074,
    ];
    $request->district = 'laborum';
    $request->electionFull = false;
    $request->office = GetElectioneeringByCandidateOfficeEnum::PRESIDENT;
    $request->page = 948861;
    $request->perPage = 388867;
    $request->sort = 'alias';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->state = 'amet';

    $response = $sdk->electioneering->getElectioneeringByCandidate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getElectioneeringTotalsByCandidate


Total electioneering communications spent on candidates by cycle
or candidate election year


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetElectioneeringTotalsByCandidateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetElectioneeringTotalsByCandidateRequest();
    $request->apiKey = 'deserunt';
    $request->candidateId = [
        'unde',
        'reiciendis',
    ];
    $request->cycle = [
        833819,
        962771,
        914791,
    ];
    $request->electionFull = false;
    $request->page = 16871;
    $request->perPage = 667285;
    $request->sort = 'quidem';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->electioneering->getElectioneeringTotalsByCandidate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
