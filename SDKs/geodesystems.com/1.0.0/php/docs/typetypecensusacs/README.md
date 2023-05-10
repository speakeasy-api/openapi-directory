# typeTypeCensusAcs

## Overview

Search API for 'US Census ACS Data' entry type

### Available Operations

* [searchTypeCensusAcs](#searchtypecensusacs) - Search API for 'US Census ACS Data' entry type

## searchTypeCensusAcs

API to search for entries of type US Census ACS Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeCensusAcsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeCensusAcsRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-11T17:07:28.537Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-18T18:15:07.964Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-22T03:59:26.894Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-06T06:29:15.334Z');
    $request->description = 'a';
    $request->filesuffix = 'facere';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-03T03:19:06.487Z');
    $request->group = 'quaerat';
    $request->max = 45850;
    $request->maxlatitude = 4898.21;
    $request->maxlongitude = 4638.95;
    $request->minlatitude = 2640.73;
    $request->minlongitude = 6839.8;
    $request->name = 'Leah Nienow';
    $request->searchTypeCensusAcsFields = 'dolor';
    $request->searchTypeCensusAcsForType = 'ad';
    $request->searchTypeCensusAcsInType1 = 'illum';
    $request->searchTypeCensusAcsInType2 = 'sit';
    $request->skip = 561399;
    $request->text = 'voluptas';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-01T23:22:38.639Z');

    $response = $sdk->typeTypeCensusAcs->searchTypeCensusAcs($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
