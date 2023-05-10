# typePoliceStopData

## Overview

Search API for 'Police Stop Data' entry type

### Available Operations

* [searchPoliceStopData](#searchpolicestopdata) - Search API for 'Police Stop Data' entry type

## searchPoliceStopData

API to search for entries of type Police Stop Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchPoliceStopDataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchPoliceStopDataRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-11T16:51:51.667Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-07T04:45:04.380Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-05T15:53:48.964Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-11T22:08:27.190Z');
    $request->description = 'quia';
    $request->filesuffix = 'laudantium';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-10T17:44:58.508Z');
    $request->group = 'iusto';
    $request->max = 712893;
    $request->maxlatitude = 1769.35;
    $request->maxlongitude = 8304.77;
    $request->minlatitude = 1998.79;
    $request->minlongitude = 579.09;
    $request->name = 'Miss Marcus Koch';
    $request->searchDbPoliceStopDataAddress = 'quam';
    $request->searchDbPoliceStopDataDate = 'est';
    $request->searchDbPoliceStopDataEthnicity = 'aliquam';
    $request->searchDbPoliceStopDataMinutes = 964201;
    $request->searchDbPoliceStopDataRace = 'culpa';
    $request->searchDbPoliceStopDataResident = 'voluptatum';
    $request->searchDbPoliceStopDataSex = 'iusto';
    $request->skip = 802069;
    $request->text = 'voluptatibus';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-02T13:33:28.563Z');

    $response = $sdk->typePoliceStopData->searchPoliceStopData($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
