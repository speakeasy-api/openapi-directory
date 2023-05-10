# typeConstructionPermits

## Overview

Search API for 'Construction Permits' entry type

### Available Operations

* [searchConstructionPermits](#searchconstructionpermits) - Search API for 'Construction Permits' entry type

## searchConstructionPermits

API to search for entries of type Construction Permits

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchConstructionPermitsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchConstructionPermitsRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-10T20:51:38.142Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-10T15:26:02.215Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-15T12:05:30.894Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-19T18:28:47.948Z');
    $request->description = 'ad';
    $request->filesuffix = 'deleniti';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-21T16:13:12.951Z');
    $request->group = 'repellendus';
    $request->max = 405036;
    $request->maxlatitude = 7758.03;
    $request->maxlongitude = 4053.73;
    $request->minlatitude = 2811.53;
    $request->minlongitude = 3210.43;
    $request->name = 'Donald MacGyver';
    $request->searchDbConstructionPermitsAddress = 'beatae';
    $request->searchDbConstructionPermitsAffordableHsgUnit = 530860;
    $request->searchDbConstructionPermitsApplied = 'omnis';
    $request->searchDbConstructionPermitsApproved = 'veritatis';
    $request->searchDbConstructionPermitsBuildingUsesAndWorkScopes = 'rerum';
    $request->searchDbConstructionPermitsCaseStatus = 'est';
    $request->searchDbConstructionPermitsCategory = 'culpa';
    $request->searchDbConstructionPermitsCoDate = 'voluptatem';
    $request->searchDbConstructionPermitsCompletionDate = 'sapiente';
    $request->searchDbConstructionPermitsContractorCompany = 'officiis';
    $request->searchDbConstructionPermitsContractorFirstName = 'architecto';
    $request->searchDbConstructionPermitsContractorLastName = 'fuga';
    $request->searchDbConstructionPermitsExistingResUnit = 867168;
    $request->searchDbConstructionPermitsIssued = 'debitis';
    $request->searchDbConstructionPermitsNarrativeDescription = 'voluptatem';
    $request->searchDbConstructionPermitsNewResUnit = 1207;
    $request->searchDbConstructionPermitsNewSf = 534917;
    $request->searchDbConstructionPermitsOwner1Company = 'earum';
    $request->searchDbConstructionPermitsOwner1FirstName = 'ex';
    $request->searchDbConstructionPermitsOwner1LastName = 'sapiente';
    $request->searchDbConstructionPermitsOwner2Company = 'rem';
    $request->searchDbConstructionPermitsOwner2FirstName = 'minus';
    $request->searchDbConstructionPermitsOwner2LastName = 'nemo';
    $request->searchDbConstructionPermitsPermitTypes = 'asperiores';
    $request->searchDbConstructionPermitsPrimaryCompany = 'ratione';
    $request->searchDbConstructionPermitsPrimaryFirstName = 'ullam';
    $request->searchDbConstructionPermitsPrimaryLastName = 'perferendis';
    $request->searchDbConstructionPermitsRemodelSf = 848341;
    $request->searchDbConstructionPermitsTotalProjectValue = 5181.5;
    $request->searchDbConstructionPermitsTotalSubpermitValue = 7706.75;
    $request->skip = 842777;
    $request->text = 'nam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-14T19:17:09.662Z');

    $response = $sdk->typeConstructionPermits->searchConstructionPermits($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
