# typeTypePointNoaaTower

## Overview

Search API for 'NOAA Tower Network' entry type

### Available Operations

* [searchTypePointNoaaTower](#searchtypepointnoaatower) - Search API for 'NOAA Tower Network' entry type

## searchTypePointNoaaTower

API to search for entries of type NOAA Tower Network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointNoaaTowerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointNoaaTowerRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-27T17:27:51.202Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-24T05:26:08.769Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-07T17:16:18.553Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-10T22:20:26.115Z');
    $request->description = 'aspernatur';
    $request->filesuffix = 'eveniet';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-08T15:03:54.731Z');
    $request->group = 'temporibus';
    $request->max = 966682;
    $request->maxlatitude = 3165.84;
    $request->maxlongitude = 3686.58;
    $request->minlatitude = 7835.08;
    $request->minlongitude = 1748.97;
    $request->name = 'Ms. Mario Sawayn DDS';
    $request->searchTypePointNoaaTowerSiteId = 'accusantium';
    $request->skip = 408509;
    $request->text = 'laborum';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-09T03:03:37.221Z');

    $response = $sdk->typeTypePointNoaaTower->searchTypePointNoaaTower($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
