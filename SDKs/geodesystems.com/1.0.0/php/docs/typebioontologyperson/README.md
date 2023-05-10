# typeBioOntologyPerson

## Overview

Search API for 'Person' entry type

### Available Operations

* [searchBioOntologyPerson](#searchbioontologyperson) - Search API for 'Person' entry type

## searchBioOntologyPerson

API to search for entries of type Person

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBioOntologyPersonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBioOntologyPersonRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-11T06:25:10.430Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-18T20:09:27.741Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-20T18:01:24.992Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-04T18:39:34.709Z');
    $request->description = 'perspiciatis';
    $request->filesuffix = 'voluptatem';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-04T15:50:14.407Z');
    $request->group = 'blanditiis';
    $request->max = 621479;
    $request->maxlatitude = 503.7;
    $request->maxlongitude = 5772.29;
    $request->minlatitude = 6990.98;
    $request->minlongitude = 2378.93;
    $request->name = 'Merle Gleichner';
    $request->searchBioOntologyPersonGender = 'deleniti';
    $request->skip = 864282;
    $request->text = 'provident';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-23T12:23:35.067Z');

    $response = $sdk->typeBioOntologyPerson->searchBioOntologyPerson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
