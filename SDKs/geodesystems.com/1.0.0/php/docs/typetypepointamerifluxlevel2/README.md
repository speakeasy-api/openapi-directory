# typeTypePointAmerifluxLevel2

## Overview

Search API for 'Ameriflux Level 2 CSV File' entry type

### Available Operations

* [searchTypePointAmerifluxLevel2](#searchtypepointamerifluxlevel2) - Search API for 'Ameriflux Level 2 CSV File' entry type

## searchTypePointAmerifluxLevel2

API to search for entries of type Ameriflux Level 2 CSV File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointAmerifluxLevel2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointAmerifluxLevel2Request();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-30T10:23:56.897Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-28T03:15:45.968Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-06T15:00:57.607Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-12T16:26:07.021Z');
    $request->description = 'ut';
    $request->filesuffix = 'non';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-18T11:29:20.910Z');
    $request->group = 'tempora';
    $request->max = 302228;
    $request->maxlatitude = 2107.1;
    $request->maxlongitude = 7122.09;
    $request->minlatitude = 7711.46;
    $request->minlongitude = 1027.34;
    $request->name = 'Danielle Bruen';
    $request->searchTypePointAmerifluxLevel2Contact = 'quisquam';
    $request->searchTypePointAmerifluxLevel2EcosystemType = 'sunt';
    $request->searchTypePointAmerifluxLevel2SiteId = 'asperiores';
    $request->skip = 357519;
    $request->text = 'vel';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-08T15:34:01.450Z');

    $response = $sdk->typeTypePointAmerifluxLevel2->searchTypePointAmerifluxLevel2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
