# typeTypeBlsSurvey

## Overview

Search API for 'BLS Survey' entry type

### Available Operations

* [searchTypeBlsSurvey](#searchtypeblssurvey) - Search API for 'BLS Survey' entry type

## searchTypeBlsSurvey

API to search for entries of type BLS Survey

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeBlsSurveyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeBlsSurveyRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-03T23:21:08.092Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-20T23:19:03.169Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-24T20:44:16.683Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-04T23:17:50.527Z');
    $request->description = 'veniam';
    $request->filesuffix = 'quidem';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-15T01:50:57.399Z');
    $request->group = 'deserunt';
    $request->max = 919730;
    $request->maxlatitude = 3659.98;
    $request->maxlongitude = 5654.46;
    $request->minlatitude = 1020.19;
    $request->minlongitude = 7112.75;
    $request->name = 'Hugh Quigley';
    $request->skip = 982447;
    $request->text = 'ipsum';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-20T01:15:44.636Z');

    $response = $sdk->typeTypeBlsSurvey->searchTypeBlsSurvey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
