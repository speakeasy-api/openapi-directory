# typeTypePointIcebridgeAtmIcessn

## Overview

Search API for 'ATM Ice SSN Data' entry type

### Available Operations

* [searchTypePointIcebridgeAtmIcessn](#searchtypepointicebridgeatmicessn) - Search API for 'ATM Ice SSN Data' entry type

## searchTypePointIcebridgeAtmIcessn

API to search for entries of type ATM Ice SSN Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointIcebridgeAtmIcessnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointIcebridgeAtmIcessnRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-03T23:06:17.189Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-02T21:29:43.687Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-25T13:28:01.783Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-14T14:52:18.325Z');
    $request->description = 'consequatur';
    $request->filesuffix = 'accusantium';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-05T01:37:32.821Z');
    $request->group = 'amet';
    $request->max = 578452;
    $request->maxlatitude = 5525.12;
    $request->maxlongitude = 3971.12;
    $request->minlatitude = 1930.48;
    $request->minlongitude = 6328.85;
    $request->name = 'Edwin Bogisich';
    $request->skip = 760942;
    $request->text = 'adipisci';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-13T22:56:12.922Z');

    $response = $sdk->typeTypePointIcebridgeAtmIcessn->searchTypePointIcebridgeAtmIcessn($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
