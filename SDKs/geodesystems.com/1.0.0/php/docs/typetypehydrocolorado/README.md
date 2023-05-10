# typeTypeHydroColorado

## Overview

Search API for 'Colorado DNR Stream Gage' entry type

### Available Operations

* [searchTypeHydroColorado](#searchtypehydrocolorado) - Search API for 'Colorado DNR Stream Gage' entry type

## searchTypeHydroColorado

API to search for entries of type Colorado DNR Stream Gage

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeHydroColoradoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeHydroColoradoRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-25T13:16:35.979Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-15T04:37:44.760Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-16T00:30:13.504Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-31T19:42:19.266Z');
    $request->description = 'nostrum';
    $request->filesuffix = 'minus';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-16T07:41:05.814Z');
    $request->group = 'ea';
    $request->max = 256941;
    $request->maxlatitude = 1032.53;
    $request->maxlongitude = 6864.7;
    $request->minlatitude = 5190.99;
    $request->minlongitude = 2443.32;
    $request->name = 'Jane Towne II';
    $request->searchTypeHydroColoradoSiteId = 'in';
    $request->skip = 730370;
    $request->text = 'ut';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-15T10:01:53.355Z');

    $response = $sdk->typeTypeHydroColorado->searchTypeHydroColorado($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
