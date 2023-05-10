# typeVoteYesno

## Overview

Search API for 'Simple Yes-No Vote' entry type

### Available Operations

* [searchVoteYesno](#searchvoteyesno) - Search API for 'Simple Yes-No Vote' entry type

## searchVoteYesno

API to search for entries of type Simple Yes-No Vote

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchVoteYesnoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchVoteYesnoRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-06T16:12:59.911Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-07T22:54:11.070Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-10T21:05:54.671Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-11T04:42:06.535Z');
    $request->description = 'reiciendis';
    $request->filesuffix = 'voluptatum';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-22T15:24:28.373Z');
    $request->group = 'animi';
    $request->max = 638092;
    $request->maxlatitude = 9095.58;
    $request->maxlongitude = 624.09;
    $request->minlatitude = 2365.64;
    $request->minlongitude = 9417.3;
    $request->name = 'Sylvia Ruecker';
    $request->searchDbVoteYesnoVote = 'unde';
    $request->skip = 992178;
    $request->text = 'nam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-17T22:07:18.435Z');

    $response = $sdk->typeVoteYesno->searchVoteYesno($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
