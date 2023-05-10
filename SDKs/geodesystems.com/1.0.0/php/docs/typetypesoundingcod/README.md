# typeTypeSoundingCod

## Overview

Search API for 'COD Sounding' entry type

### Available Operations

* [searchTypeSoundingCod](#searchtypesoundingcod) - Search API for 'COD Sounding' entry type

## searchTypeSoundingCod

API to search for entries of type COD Sounding

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeSoundingCodRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeSoundingCodRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-20T14:42:56.584Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-15T12:37:10.194Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-06T10:34:05.102Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-14T00:18:21.167Z');
    $request->description = 'ducimus';
    $request->filesuffix = 'nisi';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-07T02:41:22.401Z');
    $request->group = 'necessitatibus';
    $request->max = 720552;
    $request->maxlatitude = 3673.5;
    $request->maxlongitude = 841.54;
    $request->minlatitude = 5623.39;
    $request->minlongitude = 7721.25;
    $request->name = 'Dr. Elena Murazik';
    $request->skip = 832589;
    $request->text = 'dolor';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-31T14:19:07.244Z');

    $response = $sdk->typeTypeSoundingCod->searchTypeSoundingCod($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
