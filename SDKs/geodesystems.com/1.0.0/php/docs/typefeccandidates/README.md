# typeFeccandidates

## Overview

Search API for 'Candidates' entry type

### Available Operations

* [searchFeccandidates](#searchfeccandidates) - Search API for 'Candidates' entry type

## searchFeccandidates

API to search for entries of type Candidates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchFeccandidatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchFeccandidatesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-21T12:53:49.231Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-02T19:53:01.274Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-18T15:43:31.696Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-05T11:21:49.286Z');
    $request->description = 'beatae';
    $request->filesuffix = 'vero';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-19T15:28:07.331Z');
    $request->group = 'velit';
    $request->max = 284086;
    $request->maxlatitude = 5964.33;
    $request->maxlongitude = 9353.02;
    $request->minlatitude = 1175.25;
    $request->minlongitude = 7722.66;
    $request->name = 'Mrs. Jackie Watsica';
    $request->searchDbFeccandidatesBeginningCash = 2421.78;
    $request->searchDbFeccandidatesCandidateLoanRepayments = 6738.38;
    $request->searchDbFeccandidatesCommitteeRefunds = 2503.98;
    $request->searchDbFeccandidatesContributionsFromCandidate = 2244.67;
    $request->searchDbFeccandidatesContributionsFromOtherCommittees = 4833.94;
    $request->searchDbFeccandidatesContributionsFromPartyCommittees = 247.53;
    $request->searchDbFeccandidatesCoverageEndDate = 'doloremque';
    $request->searchDbFeccandidatesDebtsOwedBy = 74.68;
    $request->searchDbFeccandidatesDistrict = 'officia';
    $request->searchDbFeccandidatesEndingCash = 9274.03;
    $request->searchDbFeccandidatesGender = 'ea';
    $request->searchDbFeccandidatesIndividualRefunds = 6931.53;
    $request->searchDbFeccandidatesLoansFromCandidates = 3774.06;
    $request->searchDbFeccandidatesName = 'facilis';
    $request->searchDbFeccandidatesOtherLoanRepayments = 8093.65;
    $request->searchDbFeccandidatesOtherLoans = 5960.65;
    $request->searchDbFeccandidatesParty = 'expedita';
    $request->searchDbFeccandidatesState = 'deleniti';
    $request->searchDbFeccandidatesTotalDisbursements = 9543.34;
    $request->searchDbFeccandidatesTotalIndivualContributions = 4555.79;
    $request->searchDbFeccandidatesTotalReceipts = 3519.36;
    $request->searchDbFeccandidatesTransfersFromCommittees = 6001.93;
    $request->searchDbFeccandidatesTransfersToCommittees = 8975.43;
    $request->skip = 654082;
    $request->text = 'impedit';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-23T12:57:35.673Z');

    $response = $sdk->typeFeccandidates->searchFeccandidates($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
