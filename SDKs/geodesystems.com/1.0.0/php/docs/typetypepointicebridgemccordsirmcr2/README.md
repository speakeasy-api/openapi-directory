# typeTypePointIcebridgeMccordsIrmcr2

## Overview

Search API for 'McCords Irmcr2 Data' entry type

### Available Operations

* [searchTypePointIcebridgeMccordsIrmcr2](#searchtypepointicebridgemccordsirmcr2) - Search API for 'McCords Irmcr2 Data' entry type

## searchTypePointIcebridgeMccordsIrmcr2

API to search for entries of type McCords Irmcr2 Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointIcebridgeMccordsIrmcr2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointIcebridgeMccordsIrmcr2Request();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-01T20:19:05.294Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-16T15:03:29.219Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-07T16:38:24.285Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-18T13:51:19.758Z');
    $request->description = 'molestiae';
    $request->filesuffix = 'mollitia';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-28T14:46:04.955Z');
    $request->group = 'eum';
    $request->max = 106201;
    $request->maxlatitude = 3811.97;
    $request->maxlongitude = 9115.47;
    $request->minlatitude = 6520.29;
    $request->minlongitude = 3688.49;
    $request->name = 'Fernando Bode';
    $request->skip = 116452;
    $request->text = 'provident';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-15T17:32:45.445Z');

    $response = $sdk->typeTypePointIcebridgeMccordsIrmcr2->searchTypePointIcebridgeMccordsIrmcr2($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
