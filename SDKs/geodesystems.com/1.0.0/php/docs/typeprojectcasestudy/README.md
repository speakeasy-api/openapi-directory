# typeProjectCasestudy

## Overview

Search API for 'Case Study' entry type

### Available Operations

* [searchProjectCasestudy](#searchprojectcasestudy) - Search API for 'Case Study' entry type

## searchProjectCasestudy

API to search for entries of type Case Study

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectCasestudyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectCasestudyRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-18T16:44:34.970Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-07T04:48:01.873Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-01-24T16:46:41.592Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-13T18:01:05.207Z');
    $request->description = 'impedit';
    $request->filesuffix = 'accusamus';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-12T01:59:08.514Z');
    $request->group = 'blanditiis';
    $request->max = 741603;
    $request->maxlatitude = 1197.25;
    $request->maxlongitude = 7705.44;
    $request->minlatitude = 2740.4;
    $request->minlongitude = 9082.49;
    $request->name = 'Jeremy Rutherford';
    $request->searchProjectCasestudyIntendedUse = 'vel';
    $request->searchProjectCasestudyLocation = 'eligendi';
    $request->skip = 923159;
    $request->text = 'ex';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-30T06:16:15.371Z');

    $response = $sdk->typeProjectCasestudy->searchProjectCasestudy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
