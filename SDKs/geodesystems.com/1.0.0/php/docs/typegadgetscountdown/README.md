# typeGadgetsCountdown

## Overview

Search API for 'Countdown' entry type

### Available Operations

* [searchGadgetsCountdown](#searchgadgetscountdown) - Search API for 'Countdown' entry type

## searchGadgetsCountdown

API to search for entries of type Countdown

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchGadgetsCountdownRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchGadgetsCountdownRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-19T15:08:58.907Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-01T13:09:02.595Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-29T07:53:10.726Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-03T18:34:18.310Z');
    $request->description = 'qui';
    $request->filesuffix = 'expedita';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-29T05:11:03.916Z');
    $request->group = 'minima';
    $request->max = 809594;
    $request->maxlatitude = 3165.42;
    $request->maxlongitude = 2040.72;
    $request->minlatitude = 4468.77;
    $request->minlongitude = 7963.97;
    $request->name = 'Emma Herzog';
    $request->skip = 978173;
    $request->text = 'tempore';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-10T10:41:17.662Z');

    $response = $sdk->typeGadgetsCountdown->searchGadgetsCountdown($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
