# typeTypePointIcebridgeParis

## Overview

Search API for 'Paris Data' entry type

### Available Operations

* [searchTypePointIcebridgeParis](#searchtypepointicebridgeparis) - Search API for 'Paris Data' entry type

## searchTypePointIcebridgeParis

API to search for entries of type Paris Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointIcebridgeParisRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointIcebridgeParisRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-19T21:00:17.683Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-26T02:18:03.425Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-05T04:44:20.086Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-05T07:29:58.783Z');
    $request->description = 'ducimus';
    $request->filesuffix = 'dolores';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-03T20:48:28.253Z');
    $request->group = 'doloremque';
    $request->max = 503802;
    $request->maxlatitude = 3011.55;
    $request->maxlongitude = 5713.81;
    $request->minlatitude = 8518.94;
    $request->minlongitude = 3849.39;
    $request->name = 'Dexter Shields';
    $request->skip = 908127;
    $request->text = 'optio';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-06T04:00:38.682Z');

    $response = $sdk->typeTypePointIcebridgeParis->searchTypePointIcebridgeParis($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
