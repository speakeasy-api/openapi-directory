# typeJeopardy

## Overview

Search API for 'Jeopardy' entry type

### Available Operations

* [searchJeopardy](#searchjeopardy) - Search API for 'Jeopardy' entry type

## searchJeopardy

API to search for entries of type Jeopardy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchJeopardyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchJeopardyRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-05T10:05:27.153Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-11T08:40:17.658Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-15T06:32:12.898Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-02T03:13:50.504Z');
    $request->description = 'optio';
    $request->filesuffix = 'alias';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-08T19:04:23.267Z');
    $request->group = 'commodi';
    $request->max = 956124;
    $request->maxlatitude = 1643.19;
    $request->maxlongitude = 3304.4;
    $request->minlatitude = 8937.73;
    $request->minlongitude = 6383.9;
    $request->name = 'Alexander Gerhold';
    $request->searchDbJeopardyAirDate = 'libero';
    $request->searchDbJeopardyAnswer = 'in';
    $request->searchDbJeopardyCategory = 'minima';
    $request->searchDbJeopardyQuestion = 'ex';
    $request->searchDbJeopardyRound = 'minus';
    $request->skip = 68880;
    $request->text = 'beatae';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-28T09:51:29.423Z');

    $response = $sdk->typeJeopardy->searchJeopardy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
