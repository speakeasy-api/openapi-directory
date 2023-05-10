# presidential

## Overview

Data supporting fec.gov's presidential map. 

 For more information about the presidential map data available to download from fec.gov, please visit: https://www.fec.gov/campaign-finance-data/presidential-map-data/

### Available Operations

* [getPresidentialContributionsByCandidate](#getpresidentialcontributionsbycandidate) - 
Net receipts per candidate.

Filter with `contributor_state='US'` for national totals

* [getPresidentialContributionsBySize](#getpresidentialcontributionsbysize) - 
Contribution receipts by size per candidate.

Filter by candidate_id, election_year and/or size

* [getPresidentialContributionsByState](#getpresidentialcontributionsbystate) - 
Contribution receipts by state per candidate.

Filter by candidate_id and/or election_year

* [getPresidentialCoverageEndDate](#getpresidentialcoverageenddate) - 
Coverage end date per candidate.

Filter by candidate_id and/or election_year

* [getPresidentialFinancialSummary](#getpresidentialfinancialsummary) - 
Financial summary per candidate.

Filter by candidate_id and/or election_year


## getPresidentialContributionsByCandidate


Net receipts per candidate.

Filter with `contributor_state='US'` for national totals


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPresidentialContributionsByCandidateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPresidentialContributionsByCandidateRequest();
    $request->apiKey = 'voluptatibus';
    $request->contributorState = [
        'debitis',
    ];
    $request->electionYear = [
        700928,
        179795,
    ];
    $request->page = 440777;
    $request->perPage = 345506;
    $request->sort = 'neque';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->presidential->getPresidentialContributionsByCandidate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPresidentialContributionsBySize


Contribution receipts by size per candidate.

Filter by candidate_id, election_year and/or size


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPresidentialContributionsBySizeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPresidentialContributionsBySizeSizeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPresidentialContributionsBySizeRequest();
    $request->apiKey = 'iusto';
    $request->candidateId = [
        'rem',
        'eligendi',
        'fugiat',
    ];
    $request->electionYear = [
        889448,
        495617,
        220104,
    ];
    $request->page = 118041;
    $request->perPage = 622894;
    $request->size = [
        GetPresidentialContributionsBySizeSizeEnum::ZERO,
        GetPresidentialContributionsBySizeSizeEnum::FIVE_HUNDRED,
        GetPresidentialContributionsBySizeSizeEnum::FIVE_HUNDRED,
        GetPresidentialContributionsBySizeSizeEnum::TWO_THOUSAND,
    ];
    $request->sort = 'ad';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->presidential->getPresidentialContributionsBySize($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPresidentialContributionsByState


Contribution receipts by state per candidate.

Filter by candidate_id and/or election_year


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPresidentialContributionsByStateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPresidentialContributionsByStateRequest();
    $request->apiKey = 'aspernatur';
    $request->candidateId = [
        'delectus',
        'iusto',
    ];
    $request->electionYear = [
        729828,
        72350,
    ];
    $request->page = 69182;
    $request->perPage = 280114;
    $request->sort = 'accusamus';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->presidential->getPresidentialContributionsByState($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPresidentialCoverageEndDate


Coverage end date per candidate.

Filter by candidate_id and/or election_year


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPresidentialCoverageEndDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPresidentialCoverageEndDateRequest();
    $request->apiKey = 'saepe';
    $request->candidateId = [
        'veniam',
        'eos',
        'reiciendis',
    ];
    $request->electionYear = [
        444121,
        506312,
        367046,
        999809,
    ];
    $request->page = 789770;
    $request->perPage = 197259;
    $request->sort = 'nihil';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->presidential->getPresidentialCoverageEndDate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPresidentialFinancialSummary


Financial summary per candidate.

Filter by candidate_id and/or election_year


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPresidentialFinancialSummaryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPresidentialFinancialSummaryRequest();
    $request->apiKey = 'deleniti';
    $request->candidateId = [
        'labore',
    ];
    $request->electionYear = [
        304173,
        790463,
        591065,
        514993,
    ];
    $request->page = 921719;
    $request->perPage = 9683;
    $request->sort = 'maxime';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->presidential->getPresidentialFinancialSummary($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
