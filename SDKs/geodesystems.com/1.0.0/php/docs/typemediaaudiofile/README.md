# typeMediaAudiofile

## Overview

Search API for 'Audio File' entry type

### Available Operations

* [searchMediaAudiofile](#searchmediaaudiofile) - Search API for 'Audio File' entry type

## searchMediaAudiofile

API to search for entries of type Audio File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchMediaAudiofileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchMediaAudiofileRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-02T01:50:45.376Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-07T00:00:40.742Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-16T15:01:20.520Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-03T07:29:42.207Z');
    $request->description = 'porro';
    $request->filesuffix = 'tempore';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-20T20:53:51.556Z');
    $request->group = 'voluptates';
    $request->max = 145435;
    $request->maxlatitude = 2593.77;
    $request->maxlongitude = 1940.58;
    $request->minlatitude = 7581.94;
    $request->minlongitude = 9928.87;
    $request->name = 'Vickie Marvin';
    $request->skip = 658604;
    $request->text = 'maiores';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-01T13:23:22.069Z');

    $response = $sdk->typeMediaAudiofile->searchMediaAudiofile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
