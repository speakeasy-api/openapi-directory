# typeProjectSoftwarepackage

## Overview

Search API for 'Software Tool' entry type

### Available Operations

* [searchProjectSoftwarepackage](#searchprojectsoftwarepackage) - Search API for 'Software Tool' entry type

## searchProjectSoftwarepackage

API to search for entries of type Software Tool

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectSoftwarepackageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectSoftwarepackageRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-18T04:34:13.998Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-28T18:10:48.265Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-13T17:26:24.471Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-07T19:41:24.337Z');
    $request->description = 'eum';
    $request->filesuffix = 'vel';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-13T09:57:43.930Z');
    $request->group = 'illo';
    $request->max = 383381;
    $request->maxlatitude = 8444.71;
    $request->maxlongitude = 8554.84;
    $request->minlatitude = 7716.03;
    $request->minlongitude = 6329.39;
    $request->name = 'Pat Wuckert DVM';
    $request->searchProjectSoftwarepackageCapabilities = 'cumque';
    $request->searchProjectSoftwarepackageDomain = 'expedita';
    $request->searchProjectSoftwarepackageLicense = 'modi';
    $request->searchProjectSoftwarepackagePlatform = 'cumque';
    $request->searchProjectSoftwarepackageSoftwareType = 'ipsam';
    $request->searchProjectSoftwarepackageSoftwareUse = 'occaecati';
    $request->searchProjectSoftwarepackageStatus = 'ipsum';
    $request->skip = 879193;
    $request->text = 'quisquam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-09T08:27:23.346Z');

    $response = $sdk->typeProjectSoftwarepackage->searchProjectSoftwarepackage($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
