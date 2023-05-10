# communicationCost

## Overview

Reports of communication costs by corporations and membership organizations from the FEC [F7 forms](https://www.fec.gov/pdf/forms/fecform7.pdf).

### Available Operations

* [getCommunicationCosts](#getcommunicationcosts) - 
52 U.S.C. 30118 allows "communications by a corporation to its stockholders and executive or administrative personnel and their families or by a labor organization to its members and their families on any subject," including the express advocacy of the election or defeat of any Federal candidate.  The costs of such communications must be reported to the Federal Election Commission under certain circumstances.

* [getCommunicationCostsAggregates](#getcommunicationcostsaggregates) - Communication cost aggregated by candidate ID and committee ID.
* [getCommunicationCostsByCandidate](#getcommunicationcostsbycandidate) - Communication cost aggregated by candidate ID and committee ID.
* [getCommunicationCostsTotalsByCandidate](#getcommunicationcoststotalsbycandidate) - 
Total communications costs aggregated across committees on supported or opposed candidates by cycle or candidate election year.


## getCommunicationCosts


52 U.S.C. 30118 allows "communications by a corporation to its stockholders and executive or administrative personnel and their families or by a labor organization to its members and their families on any subject," including the express advocacy of the election or defeat of any Federal candidate.  The costs of such communications must be reported to the Federal Election Commission under certain circumstances.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommunicationCostsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCommunicationCostsSupportOpposeIndicatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommunicationCostsRequest();
    $request->apiKey = 'quisquam';
    $request->candidateId = [
        'omnis',
        'quis',
        'ipsum',
        'delectus',
    ];
    $request->committeeId = [
        'consectetur',
        'vero',
    ];
    $request->imageNumber = [
        'dignissimos',
        'hic',
        'distinctio',
        'quod',
    ];
    $request->lineNumber = 'odio';
    $request->maxAmount = 'similique';
    $request->maxDate = DateTime::createFromFormat('Y-m-d', '2021-04-02');
    $request->maxImageNumber = 'ducimus';
    $request->minAmount = 'dolore';
    $request->minDate = DateTime::createFromFormat('Y-m-d', '2020-06-15');
    $request->minImageNumber = 'sequi';
    $request->page = 617877;
    $request->perPage = 773326;
    $request->sort = 'aut';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->supportOpposeIndicator = [
        GetCommunicationCostsSupportOpposeIndicatorEnum::S,
        GetCommunicationCostsSupportOpposeIndicatorEnum::O,
        GetCommunicationCostsSupportOpposeIndicatorEnum::S,
        GetCommunicationCostsSupportOpposeIndicatorEnum::O,
    ];

    $response = $sdk->communicationCost->getCommunicationCosts($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommunicationCostsAggregates

Communication cost aggregated by candidate ID and committee ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommunicationCostsAggregatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCommunicationCostsAggregatesSupportOpposeIndicatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommunicationCostsAggregatesRequest();
    $request->apiKey = 'maiores';
    $request->candidateId = [
        'iusto',
        'eligendi',
        'ducimus',
        'alias',
    ];
    $request->committeeId = [
        'tempora',
        'ipsam',
        'ea',
    ];
    $request->cycle = [
        428224,
    ];
    $request->page = 822118;
    $request->perPage = 297842;
    $request->sort = 'ratione';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->supportOpposeIndicator = GetCommunicationCostsAggregatesSupportOpposeIndicatorEnum::S;

    $response = $sdk->communicationCost->getCommunicationCostsAggregates($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommunicationCostsByCandidate

Communication cost aggregated by candidate ID and committee ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommunicationCostsByCandidateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCommunicationCostsByCandidateOfficeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCommunicationCostsByCandidateSupportOpposeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommunicationCostsByCandidateRequest();
    $request->apiKey = 'laudantium';
    $request->candidateId = [
        'dolor',
    ];
    $request->cycle = [
        97844,
        406120,
        862192,
        569211,
    ];
    $request->district = 'voluptatibus';
    $request->electionFull = false;
    $request->office = GetCommunicationCostsByCandidateOfficeEnum::SENATE;
    $request->page = 960835;
    $request->perPage = 788873;
    $request->sort = 'saepe';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->state = 'ea';
    $request->supportOppose = GetCommunicationCostsByCandidateSupportOpposeEnum::O;

    $response = $sdk->communicationCost->getCommunicationCostsByCandidate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommunicationCostsTotalsByCandidate


Total communications costs aggregated across committees on supported or opposed candidates by cycle or candidate election year.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommunicationCostsTotalsByCandidateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommunicationCostsTotalsByCandidateRequest();
    $request->apiKey = 'corporis';
    $request->candidateId = [
        'aliquid',
        'inventore',
    ];
    $request->cycle = [
        407241,
        775220,
    ];
    $request->electionFull = false;
    $request->page = 232234;
    $request->perPage = 926213;
    $request->sort = 'aspernatur';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->communicationCost->getCommunicationCostsTotalsByCandidate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
