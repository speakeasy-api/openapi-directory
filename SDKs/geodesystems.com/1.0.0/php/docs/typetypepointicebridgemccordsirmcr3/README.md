# typeTypePointIcebridgeMccordsIrmcr3

## Overview

Search API for 'McCords Irmcr3 Data' entry type

### Available Operations

* [searchTypePointIcebridgeMccordsIrmcr3](#searchtypepointicebridgemccordsirmcr3) - Search API for 'McCords Irmcr3 Data' entry type

## searchTypePointIcebridgeMccordsIrmcr3

API to search for entries of type McCords Irmcr3 Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointIcebridgeMccordsIrmcr3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointIcebridgeMccordsIrmcr3Request();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-02T20:34:30.193Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-03T09:52:02.484Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-11T22:30:11.425Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-04T03:35:50.569Z');
    $request->description = 'nulla';
    $request->filesuffix = 'ab';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-10T07:27:43.062Z');
    $request->group = 'magni';
    $request->max = 951633;
    $request->maxlatitude = 7687.72;
    $request->maxlongitude = 1277.84;
    $request->minlatitude = 9668.01;
    $request->minlongitude = 6189.9;
    $request->name = 'Mr. Louis Waelchi';
    $request->skip = 589014;
    $request->text = 'numquam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-07T08:46:00.661Z');

    $response = $sdk->typeTypePointIcebridgeMccordsIrmcr3->searchTypePointIcebridgeMccordsIrmcr3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
