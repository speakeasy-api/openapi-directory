# typeProjectStandardName

## Overview

Search API for 'Standard Parameter Name' entry type

### Available Operations

* [searchProjectStandardName](#searchprojectstandardname) - Search API for 'Standard Parameter Name' entry type

## searchProjectStandardName

API to search for entries of type Standard Parameter Name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectStandardNameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectStandardNameRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-25T04:21:40.208Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-05T01:09:34.246Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-28T08:52:08.006Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-07-26T23:23:59.902Z');
    $request->description = 'quam';
    $request->filesuffix = 'similique';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-15T01:03:52.923Z');
    $request->group = 'facere';
    $request->max = 748723;
    $request->maxlatitude = 8690.88;
    $request->maxlongitude = 5611.21;
    $request->minlatitude = 128.77;
    $request->minlongitude = 8365.48;
    $request->name = 'Barry Funk';
    $request->searchProjectStandardNameAliases = 'dolore';
    $request->searchProjectStandardNameUnit = 'esse';
    $request->skip = 968205;
    $request->text = 'iste';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-02T22:16:37.572Z');

    $response = $sdk->typeProjectStandardName->searchProjectStandardName($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
