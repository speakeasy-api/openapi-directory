# typeTripEvent

## Overview

Search API for 'Event' entry type

### Available Operations

* [searchTripEvent](#searchtripevent) - Search API for 'Event' entry type

## searchTripEvent

API to search for entries of type Event

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTripEventRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTripEventRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-29T05:03:39.225Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-19T06:43:31.808Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-13T23:12:40.856Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-17T16:30:55.479Z');
    $request->description = 'odio';
    $request->filesuffix = 'sit';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-16T18:26:19.436Z');
    $request->group = 'delectus';
    $request->max = 461853;
    $request->maxlatitude = 6759.55;
    $request->maxlongitude = 7262.44;
    $request->minlatitude = 1921.73;
    $request->minlongitude = 4748.72;
    $request->name = 'Mr. Bert Wunsch';
    $request->skip = 162251;
    $request->text = 'quis';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-04T05:07:59.763Z');

    $response = $sdk->typeTripEvent->searchTripEvent($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
