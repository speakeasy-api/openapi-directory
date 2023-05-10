# legal

## Overview

Explore relevant statutes, regulations and Commission actions.

### Available Operations

* [getLegalSearch](#getlegalsearch) - 
Search legal documents by document type, or across all document types using keywords, parameter values and ranges.


## getLegalSearch


Search legal documents by document type, or across all document types using keywords, parameter values and ranges.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLegalSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLegalSearchAoCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetLegalSearchAoRequestorTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetLegalSearchCaseDocCategoryIDEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetLegalSearchMurTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetLegalSearchTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLegalSearchRequest();
    $request->afCommitteeId = 'officia';
    $request->afFdFineAmount = 491892;
    $request->afMaxFdDate = DateTime::createFromFormat('Y-m-d', '2020-04-21');
    $request->afMaxRtbDate = DateTime::createFromFormat('Y-m-d', '2022-10-25');
    $request->afMinFdDate = DateTime::createFromFormat('Y-m-d', '2021-12-08');
    $request->afMinRtbDate = DateTime::createFromFormat('Y-m-d', '2022-05-07');
    $request->afName = [
        'enim',
        'neque',
        'in',
        'minus',
    ];
    $request->afReportYear = 'eum';
    $request->afRtbFineAmount = 266408;
    $request->aoCategory = [
        GetLegalSearchAoCategoryEnum::D,
        GetLegalSearchAoCategoryEnum::S,
    ];
    $request->aoCitationRequireAll = false;
    $request->aoEntityName = [
        'tempore',
        'aperiam',
        'libero',
        'ratione',
    ];
    $request->aoIsPending = false;
    $request->aoMaxIssueDate = DateTime::createFromFormat('Y-m-d', '2022-06-24');
    $request->aoMaxRequestDate = DateTime::createFromFormat('Y-m-d', '2022-04-01');
    $request->aoMinIssueDate = DateTime::createFromFormat('Y-m-d', '2022-04-10');
    $request->aoMinRequestDate = DateTime::createFromFormat('Y-m-d', '2020-12-12');
    $request->aoName = [
        'est',
        'impedit',
    ];
    $request->aoNo = [
        'tempore',
        'vero',
        'odit',
        'repellat',
    ];
    $request->aoRegulatoryCitation = [
        'nemo',
        'reprehenderit',
        'aperiam',
        'odio',
    ];
    $request->aoRequestor = 'minima';
    $request->aoRequestorType = [
        GetLegalSearchAoRequestorTypeEnum::EIGHT,
        GetLegalSearchAoRequestorTypeEnum::TEN,
    ];
    $request->aoStatus = 'dolores';
    $request->aoStatutoryCitation = [
        'veritatis',
        'ducimus',
        'voluptate',
    ];
    $request->apiKey = 'pariatur';
    $request->caseCitationRequireAll = false;
    $request->caseDispositions = [
        'similique',
        'optio',
        'ex',
        'quaerat',
    ];
    $request->caseDocCategoryId = [
        GetLegalSearchCaseDocCategoryIDEnum::ONE_THOUSAND_AND_SIX,
        GetLegalSearchCaseDocCategoryIDEnum::ONE_THOUSAND_AND_FIVE,
    ];
    $request->caseElectionCycles = 697274;
    $request->caseMaxCloseDate = DateTime::createFromFormat('Y-m-d', '2022-07-15');
    $request->caseMaxOpenDate = DateTime::createFromFormat('Y-m-d', '2022-09-26');
    $request->caseMinCloseDate = DateTime::createFromFormat('Y-m-d', '2022-06-04');
    $request->caseMinOpenDate = DateTime::createFromFormat('Y-m-d', '2022-06-01');
    $request->caseNo = [
        'cum',
        'dicta',
        'earum',
        'veniam',
    ];
    $request->caseRegulatoryCitation = [
        'dolores',
        'nam',
        'dicta',
    ];
    $request->caseRespondents = 'consequuntur';
    $request->caseStatutoryCitation = [
        'nobis',
        'ipsa',
        'ducimus',
        'maiores',
    ];
    $request->fromHit = 87382;
    $request->hitsReturned = 96450;
    $request->murType = GetLegalSearchMurTypeEnum::ARCHIVED;
    $request->q = 'pariatur';
    $request->sort = 'libero';
    $request->type = GetLegalSearchTypeEnum::MURS;

    $response = $sdk->legal->getLegalSearch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
