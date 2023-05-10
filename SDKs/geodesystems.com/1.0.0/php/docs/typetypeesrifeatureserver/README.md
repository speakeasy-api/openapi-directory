# typeTypeEsriFeatureserver

## Overview

Search API for 'ESRI Feature Server' entry type

### Available Operations

* [searchTypeEsriFeatureserver](#searchtypeesrifeatureserver) - Search API for 'ESRI Feature Server' entry type

## searchTypeEsriFeatureserver

API to search for entries of type ESRI Feature Server

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeEsriFeatureserverRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeEsriFeatureserverRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-10T02:46:21.249Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-17T01:57:37.545Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-11T16:58:55.649Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-28T14:50:23.356Z');
    $request->description = 'vitae';
    $request->filesuffix = 'mollitia';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-20T12:36:20.334Z');
    $request->group = 'quibusdam';
    $request->max = 461853;
    $request->maxlatitude = 5345.09;
    $request->maxlongitude = 5232.66;
    $request->minlatitude = 4245.53;
    $request->minlongitude = 1777.9;
    $request->name = 'Katherine Kuvalis';
    $request->skip = 716410;
    $request->text = 'incidunt';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-02T07:17:30.104Z');

    $response = $sdk->typeTypeEsriFeatureserver->searchTypeEsriFeatureserver($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
