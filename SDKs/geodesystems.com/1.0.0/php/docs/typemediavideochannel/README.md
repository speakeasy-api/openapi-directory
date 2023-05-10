# typeMediaVideoChannel

## Overview

Search API for 'Video Channel' entry type

### Available Operations

* [searchMediaVideoChannel](#searchmediavideochannel) - Search API for 'Video Channel' entry type

## searchMediaVideoChannel

API to search for entries of type Video Channel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchMediaVideoChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchMediaVideoChannelRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-04T21:04:08.252Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-04T08:20:05.226Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-04T21:42:10.988Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-18T03:51:40.510Z');
    $request->description = 'possimus';
    $request->filesuffix = 'repellat';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-13T05:51:54.156Z');
    $request->group = 'adipisci';
    $request->max = 867115;
    $request->maxlatitude = 6884.63;
    $request->maxlongitude = 2942.66;
    $request->minlatitude = 9767.62;
    $request->minlongitude = 4353.53;
    $request->name = 'Bethany Rogahn';
    $request->skip = 937865;
    $request->text = 'praesentium';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-30T16:40:09.613Z');

    $response = $sdk->typeMediaVideoChannel->searchMediaVideoChannel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
