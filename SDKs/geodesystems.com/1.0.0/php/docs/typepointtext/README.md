# typePointText

## Overview

Search API for 'Text Point Data' entry type

### Available Operations

* [searchPointText](#searchpointtext) - Search API for 'Text Point Data' entry type

## searchPointText

API to search for entries of type Text Point Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchPointTextRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchPointTextRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-11T23:53:23.627Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-18T08:16:52.982Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-30T16:08:07.597Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-22T06:00:09.505Z');
    $request->description = 'esse';
    $request->filesuffix = 'debitis';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-20T00:40:38.007Z');
    $request->group = 'cumque';
    $request->max = 302878;
    $request->maxlatitude = 6778.95;
    $request->maxlongitude = 6448.27;
    $request->minlatitude = 3198.34;
    $request->minlongitude = 9704.11;
    $request->name = 'Francis Osinski';
    $request->skip = 607624;
    $request->text = 'aut';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-11T09:02:32.338Z');

    $response = $sdk->typePointText->searchPointText($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
