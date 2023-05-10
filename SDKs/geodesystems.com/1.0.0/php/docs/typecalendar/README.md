# typeCalendar

## Overview

Search API for 'Calendar' entry type

### Available Operations

* [searchCalendar](#searchcalendar) - Search API for 'Calendar' entry type

## searchCalendar

API to search for entries of type Calendar

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchCalendarRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchCalendarRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-02T13:45:48.565Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-10T10:18:57.740Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-27T22:55:23.952Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-28T14:53:26.431Z');
    $request->description = 'cum';
    $request->filesuffix = 'laboriosam';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-10T00:50:30.454Z');
    $request->group = 'error';
    $request->max = 944708;
    $request->maxlatitude = 7105.29;
    $request->maxlongitude = 8928.63;
    $request->minlatitude = 2049.23;
    $request->minlongitude = 6771.15;
    $request->name = 'Brandi Padberg';
    $request->skip = 272683;
    $request->text = 'atque';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-19T19:33:03.218Z');

    $response = $sdk->typeCalendar->searchCalendar($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
