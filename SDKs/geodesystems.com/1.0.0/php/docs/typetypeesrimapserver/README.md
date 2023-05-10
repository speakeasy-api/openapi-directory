# typeTypeEsriMapserver

## Overview

Search API for 'ESRI Map Server' entry type

### Available Operations

* [searchTypeEsriMapserver](#searchtypeesrimapserver) - Search API for 'ESRI Map Server' entry type

## searchTypeEsriMapserver

API to search for entries of type ESRI Map Server

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeEsriMapserverRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeEsriMapserverRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-14T16:50:21.678Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-20T05:34:36.600Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-22T04:31:01.154Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-21T03:02:47.125Z');
    $request->description = 'eius';
    $request->filesuffix = 'placeat';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-09T07:11:23.601Z');
    $request->group = 'ipsam';
    $request->max = 750343;
    $request->maxlatitude = 7841.2;
    $request->maxlongitude = 2878.34;
    $request->minlatitude = 5961.33;
    $request->minlongitude = 4949.72;
    $request->name = 'Norma Feest';
    $request->skip = 435841;
    $request->text = 'aliquid';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-17T19:09:36.880Z');

    $response = $sdk->typeTypeEsriMapserver->searchTypeEsriMapserver($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
