# typePoll

## Overview

Search API for 'Poll' entry type

### Available Operations

* [searchPoll](#searchpoll) - Search API for 'Poll' entry type

## searchPoll

API to search for entries of type Poll

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchPollRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchPollRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-29T14:29:34.691Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-05T14:38:05.371Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-24T00:35:46.114Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-30T19:30:44.770Z');
    $request->description = 'necessitatibus';
    $request->filesuffix = 'distinctio';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-03T17:46:09.057Z');
    $request->group = 'voluptatem';
    $request->max = 759490;
    $request->maxlatitude = 1936.23;
    $request->maxlongitude = 1257.07;
    $request->minlatitude = 1122.5;
    $request->minlongitude = 9730.96;
    $request->name = 'Tammy Farrell';
    $request->skip = 345514;
    $request->text = 'temporibus';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-12T00:49:16.585Z');

    $response = $sdk->typePoll->searchPoll($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
