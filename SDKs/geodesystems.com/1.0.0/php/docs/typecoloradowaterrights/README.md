# typeColoradoWaterRights

## Overview

Search API for 'Colorado Water Rights' entry type

### Available Operations

* [searchColoradoWaterRights](#searchcoloradowaterrights) - Search API for 'Colorado Water Rights' entry type

## searchColoradoWaterRights

API to search for entries of type Colorado Water Rights

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchColoradoWaterRightsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchColoradoWaterRightsRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-07T17:37:00.643Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-28T02:50:56.968Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T05:55:02.076Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-06T19:48:35.360Z');
    $request->description = 'ut';
    $request->filesuffix = 'culpa';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-09T21:52:52.867Z');
    $request->group = 'laudantium';
    $request->max = 432606;
    $request->maxlatitude = 3679.27;
    $request->maxlongitude = 9282.19;
    $request->minlatitude = 4565.2;
    $request->minlongitude = 5920.81;
    $request->name = 'Natalie Witting';
    $request->searchDbColoradoWaterRightsAdjudicationDate = 'ullam';
    $request->searchDbColoradoWaterRightsAppropriationDate = 'quasi';
    $request->searchDbColoradoWaterRightsComments = 'animi';
    $request->searchDbColoradoWaterRightsCounty = 'nostrum';
    $request->searchDbColoradoWaterRightsDecreedUnits = 'mollitia';
    $request->searchDbColoradoWaterRightsDecreedUses = 'provident';
    $request->searchDbColoradoWaterRightsLocation = 'possimus';
    $request->searchDbColoradoWaterRightsMoreInformation = 'animi';
    $request->searchDbColoradoWaterRightsNetAbsolute = 4027.67;
    $request->searchDbColoradoWaterRightsNetApexAbsolute = 3972.57;
    $request->searchDbColoradoWaterRightsNetApexConditional = 375.65;
    $request->searchDbColoradoWaterRightsNetConditional = 9992.78;
    $request->searchDbColoradoWaterRightsPriorityNo = 'doloribus';
    $request->searchDbColoradoWaterRightsSeasonalLimits = 'ullam';
    $request->searchDbColoradoWaterRightsStructureName = 'in';
    $request->searchDbColoradoWaterRightsStructureType = 'nam';
    $request->searchDbColoradoWaterRightsWaterSource = 'earum';
    $request->skip = 637583;
    $request->text = 'laborum';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-14T23:12:21.252Z');

    $response = $sdk->typeColoradoWaterRights->searchColoradoWaterRights($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
