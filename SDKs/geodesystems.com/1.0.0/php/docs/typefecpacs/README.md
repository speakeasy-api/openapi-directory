# typeFecPacs

## Overview

Search API for 'FEC PACs' entry type

### Available Operations

* [searchFecPacs](#searchfecpacs) - Search API for 'FEC PACs' entry type

## searchFecPacs

API to search for entries of type FEC PACs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchFecPacsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchFecPacsRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-06T06:38:58.719Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-04T17:19:05.591Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-20T09:18:57.946Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-15T06:49:27.168Z');
    $request->description = 'voluptas';
    $request->filesuffix = 'debitis';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-21T17:37:55.823Z');
    $request->group = 'minus';
    $request->max = 685478;
    $request->maxlatitude = 6756.89;
    $request->maxlongitude = 2310.7;
    $request->minlatitude = 2448.89;
    $request->minlongitude = 5388.69;
    $request->name = 'Pat Cummerata';
    $request->searchDbFecPacsBeginningCash = 7214.3;
    $request->searchDbFecPacsCandidateLoanRepayments = 2940.76;
    $request->searchDbFecPacsCommittee = 'iusto';
    $request->searchDbFecPacsContributionsFromCandidate = 4530.94;
    $request->searchDbFecPacsContributionsFromIndividuals = 1940.23;
    $request->searchDbFecPacsContributionsFromOtherCommittees = 4939.58;
    $request->searchDbFecPacsContributionsToOtherCommittee = 2055.66;
    $request->searchDbFecPacsEndingCash = 7781.72;
    $request->searchDbFecPacsLoanRepayments = 5354.68;
    $request->searchDbFecPacsLoansFromCandidate = 8442.35;
    $request->searchDbFecPacsRefendsToOthercommittees = 4378.14;
    $request->searchDbFecPacsRefundsToIndividuals = 1390.72;
    $request->searchDbFecPacsTotalDistributions = 9749.9;
    $request->searchDbFecPacsTotalLoansReceived = 4269.04;
    $request->searchDbFecPacsTotalReceipts = 3008.24;
    $request->searchDbFecPacsTransFromAffiliates = 8428.55;
    $request->searchDbFecPacsTransfersToAffiliates = 789.69;
    $request->skip = 818034;
    $request->text = 'libero';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-09T23:17:04.281Z');

    $response = $sdk->typeFecPacs->searchFecPacs($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
