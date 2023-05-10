# typeMediaYoutubevideo

## Overview

Search API for 'YouTube Video' entry type

### Available Operations

* [searchMediaYoutubevideo](#searchmediayoutubevideo) - Search API for 'YouTube Video' entry type

## searchMediaYoutubevideo

API to search for entries of type YouTube Video

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchMediaYoutubevideoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchMediaYoutubevideoRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-18T10:44:39.786Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-26T19:09:23.398Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-22T09:30:36.023Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-07-13T07:09:47.394Z');
    $request->description = 'neque';
    $request->filesuffix = 'pariatur';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-15T07:16:56.146Z');
    $request->group = 'mollitia';
    $request->max = 65121;
    $request->maxlatitude = 5526.46;
    $request->maxlongitude = 445.71;
    $request->minlatitude = 2512;
    $request->minlongitude = 9132.84;
    $request->name = 'Suzanne Schaefer';
    $request->skip = 982445;
    $request->text = 'inventore';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-27T16:30:06.244Z');

    $response = $sdk->typeMediaYoutubevideo->searchMediaYoutubevideo($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
