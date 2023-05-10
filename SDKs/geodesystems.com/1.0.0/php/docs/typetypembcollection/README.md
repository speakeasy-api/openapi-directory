# typeTypeMbCollection

## Overview

Search API for 'Bathymetry Collection' entry type

### Available Operations

* [searchTypeMbCollection](#searchtypembcollection) - Search API for 'Bathymetry Collection' entry type

## searchTypeMbCollection

API to search for entries of type Bathymetry Collection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeMbCollectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeMbCollectionRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-01T03:40:00.912Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-25T07:41:00.958Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-28T07:51:52.960Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-18T22:48:14.460Z');
    $request->description = 'commodi';
    $request->filesuffix = 'autem';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-01T17:17:25.932Z');
    $request->group = 'quisquam';
    $request->max = 711819;
    $request->maxlatitude = 4478.78;
    $request->maxlongitude = 526.59;
    $request->minlatitude = 9662.22;
    $request->minlongitude = 5019.46;
    $request->name = 'Roman Shanahan';
    $request->skip = 733674;
    $request->text = 'laboriosam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-05T19:29:25.874Z');

    $response = $sdk->typeTypeMbCollection->searchTypeMbCollection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
