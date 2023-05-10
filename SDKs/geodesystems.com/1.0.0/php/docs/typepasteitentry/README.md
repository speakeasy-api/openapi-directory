# typePasteitentry

## Overview

Search API for 'Paste Text Entry' entry type

### Available Operations

* [searchPasteitentry](#searchpasteitentry) - Search API for 'Paste Text Entry' entry type

## searchPasteitentry

API to search for entries of type Paste Text Entry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchPasteitentryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchPasteitentryRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-10T06:44:39.892Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-29T22:58:48.514Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-03T03:35:37.503Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-17T02:21:21.661Z');
    $request->description = 'iste';
    $request->filesuffix = 'illo';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-05T02:52:31.067Z');
    $request->group = 'temporibus';
    $request->max = 576657;
    $request->maxlatitude = 4834.59;
    $request->maxlongitude = 3156.71;
    $request->minlatitude = 8811.89;
    $request->minlongitude = 444.67;
    $request->name = 'Miss Dwight Goldner';
    $request->skip = 526584;
    $request->text = 'tenetur';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-21T13:56:00.357Z');

    $response = $sdk->typePasteitentry->searchPasteitentry($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
