# typeProjectProgram

## Overview

Search API for 'Program' entry type

### Available Operations

* [searchProjectProgram](#searchprojectprogram) - Search API for 'Program' entry type

## searchProjectProgram

API to search for entries of type Program

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectProgramRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectProgramRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-26T00:43:51.707Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-03T10:39:43.179Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-27T01:33:10.149Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-24T01:33:58.896Z');
    $request->description = 'officiis';
    $request->filesuffix = 'omnis';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-22T15:30:12.306Z');
    $request->group = 'quod';
    $request->max = 175803;
    $request->maxlatitude = 8080.5;
    $request->maxlongitude = 5700.39;
    $request->minlatitude = 9270.21;
    $request->minlongitude = 5517.78;
    $request->name = 'Miss Jeannie Emmerich';
    $request->skip = 196000;
    $request->text = 'recusandae';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-05T04:08:05.701Z');

    $response = $sdk->typeProjectProgram->searchProjectProgram($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
