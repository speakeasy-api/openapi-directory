# typeTypeEiaCategory

## Overview

Search API for 'EIA Category' entry type

### Available Operations

* [searchTypeEiaCategory](#searchtypeeiacategory) - Search API for 'EIA Category' entry type

## searchTypeEiaCategory

API to search for entries of type EIA Category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeEiaCategoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeEiaCategoryRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-26T17:25:08.094Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-27T18:27:57.430Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-24T03:14:43.673Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-27T00:48:16.622Z');
    $request->description = 'odio';
    $request->filesuffix = 'nostrum';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-01T00:33:36.040Z');
    $request->group = 'autem';
    $request->max = 939516;
    $request->maxlatitude = 3266.35;
    $request->maxlongitude = 4051.61;
    $request->minlatitude = 8216.72;
    $request->minlongitude = 2005.01;
    $request->name = 'Gordon Parker';
    $request->skip = 255839;
    $request->text = 'laborum';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-25T11:07:50.686Z');

    $response = $sdk->typeTypeEiaCategory->searchTypeEiaCategory($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
