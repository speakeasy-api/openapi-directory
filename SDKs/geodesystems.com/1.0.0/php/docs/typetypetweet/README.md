# typeTypeTweet

## Overview

Search API for 'Tweet' entry type

### Available Operations

* [searchTypeTweet](#searchtypetweet) - Search API for 'Tweet' entry type

## searchTypeTweet

API to search for entries of type Tweet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeTweetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeTweetRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-14T09:01:00.084Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-07T07:53:49.488Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-19T09:35:13.784Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-17T20:35:13.110Z');
    $request->description = 'placeat';
    $request->filesuffix = 'necessitatibus';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-09T04:43:18.541Z');
    $request->group = 'ducimus';
    $request->max = 279310;
    $request->maxlatitude = 9758.47;
    $request->maxlongitude = 4721.52;
    $request->minlatitude = 4976.33;
    $request->minlongitude = 7222;
    $request->name = 'Nina Gutmann';
    $request->skip = 842539;
    $request->text = 'iure';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-01T06:49:32.137Z');

    $response = $sdk->typeTypeTweet->searchTypeTweet($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
