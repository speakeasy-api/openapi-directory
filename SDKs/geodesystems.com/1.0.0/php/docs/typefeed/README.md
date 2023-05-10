# typeFeed

## Overview

Search API for 'RSS/ATOM Feed' entry type

### Available Operations

* [searchFeed](#searchfeed) - Search API for 'RSS/ATOM Feed' entry type

## searchFeed

API to search for entries of type RSS/ATOM Feed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchFeedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchFeedRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-04T04:25:17.046Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-17T16:07:37.080Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-15T20:15:24.019Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-20T23:08:11.095Z');
    $request->description = 'inventore';
    $request->filesuffix = 'dolorem';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-26T04:37:41.230Z');
    $request->group = 'iste';
    $request->max = 403026;
    $request->maxlatitude = 3676.26;
    $request->maxlongitude = 7452.33;
    $request->minlatitude = 7262.27;
    $request->minlongitude = 5269.07;
    $request->name = 'Mr. Lonnie Considine';
    $request->skip = 64435;
    $request->text = 'quae';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-16T23:42:04.526Z');

    $response = $sdk->typeFeed->searchFeed($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
