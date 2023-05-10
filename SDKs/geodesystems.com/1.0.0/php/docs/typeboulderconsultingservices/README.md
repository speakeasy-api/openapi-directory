# typeBoulderConsultingServices

## Overview

Search API for 'Boulder Consulting Services Database' entry type

### Available Operations

* [searchBoulderConsultingServices](#searchboulderconsultingservices) - Search API for 'Boulder Consulting Services Database' entry type

## searchBoulderConsultingServices

API to search for entries of type Boulder Consulting Services Database

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBoulderConsultingServicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBoulderConsultingServicesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-16T16:15:17.905Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-05T18:37:23.267Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-07T16:50:11.026Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-06T09:42:25.585Z');
    $request->description = 'voluptatibus';
    $request->filesuffix = 'voluptas';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-12T00:03:51.639Z');
    $request->group = 'ea';
    $request->max = 310067;
    $request->maxlatitude = 1629.54;
    $request->maxlongitude = 8315.2;
    $request->minlatitude = 6387.62;
    $request->minlongitude = 8070.23;
    $request->name = 'Blanche Yundt II';
    $request->searchDbBoulderConsultingServicesAccountDescription = 'porro';
    $request->searchDbBoulderConsultingServicesAmount = 8018.36;
    $request->searchDbBoulderConsultingServicesComment = 'labore';
    $request->searchDbBoulderConsultingServicesDate = 'ab';
    $request->searchDbBoulderConsultingServicesDepartment = 'adipisci';
    $request->searchDbBoulderConsultingServicesFund = 'fuga';
    $request->searchDbBoulderConsultingServicesObject = 'id';
    $request->searchDbBoulderConsultingServicesOrganization = 'suscipit';
    $request->searchDbBoulderConsultingServicesProject = 'velit';
    $request->searchDbBoulderConsultingServicesPurchaseOrder = 'culpa';
    $request->searchDbBoulderConsultingServicesVendorName = 'est';
    $request->skip = 926880;
    $request->text = 'totam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-23T14:56:28.537Z');

    $response = $sdk->typeBoulderConsultingServices->searchBoulderConsultingServices($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
