# typeTypeNitf

## Overview

Search API for 'NITF File' entry type

### Available Operations

* [searchTypeNitf](#searchtypenitf) - Search API for 'NITF File' entry type

## searchTypeNitf

API to search for entries of type NITF File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeNitfRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeNitfRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-25T00:43:44.722Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-28T17:38:41.350Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-28T01:30:23.895Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-15T19:19:31.225Z');
    $request->description = 'sunt';
    $request->filesuffix = 'in';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-07T00:41:11.481Z');
    $request->group = 'voluptatem';
    $request->max = 593830;
    $request->maxlatitude = 6224.85;
    $request->maxlongitude = 5376.23;
    $request->minlatitude = 3151.9;
    $request->minlongitude = 1984.06;
    $request->name = 'Stuart Witting';
    $request->skip = 238371;
    $request->text = 'pariatur';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-09T18:48:48.082Z');

    $response = $sdk->typeTypeNitf->searchTypeNitf($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
