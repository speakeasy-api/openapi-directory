# typeBostonCrime

## Overview

Search API for 'Boston Crime' entry type

### Available Operations

* [searchBostonCrime](#searchbostoncrime) - Search API for 'Boston Crime' entry type

## searchBostonCrime

API to search for entries of type Boston Crime

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBostonCrimeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBostonCrimeRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-24T16:30:16.544Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-19T07:05:05.913Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-27T07:00:05.421Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-12T08:30:58.411Z');
    $request->description = 'atque';
    $request->filesuffix = 'explicabo';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-10T16:09:39.108Z');
    $request->group = 'fugit';
    $request->max = 956406;
    $request->maxlatitude = 1598.7;
    $request->maxlongitude = 1871.31;
    $request->minlatitude = 1294.12;
    $request->minlongitude = 9039.84;
    $request->name = 'Ivan Bosco';
    $request->searchDbBostonCrimeDayOfWeek = 'accusamus';
    $request->searchDbBostonCrimeDistrict = 'veritatis';
    $request->searchDbBostonCrimeHour = 4586.04;
    $request->searchDbBostonCrimeLocation = 'quod';
    $request->searchDbBostonCrimeMonth = 7241.68;
    $request->searchDbBostonCrimeOffense = 'vero';
    $request->searchDbBostonCrimeOffenseCodeGroup = 'aliquid';
    $request->searchDbBostonCrimeOffenseDescription = 'quasi';
    $request->searchDbBostonCrimeReportingArea = 'saepe';
    $request->searchDbBostonCrimeShooting = 'vel';
    $request->searchDbBostonCrimeStreet = 'harum';
    $request->searchDbBostonCrimeYear = 4732.21;
    $request->skip = 699622;
    $request->text = 'occaecati';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-14T13:42:03.513Z');

    $response = $sdk->typeBostonCrime->searchBostonCrime($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
