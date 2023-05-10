# typeTypeDrilsdownCasestudy

## Overview

Search API for 'Drilsdown Case Study' entry type

### Available Operations

* [searchTypeDrilsdownCasestudy](#searchtypedrilsdowncasestudy) - Search API for 'Drilsdown Case Study' entry type

## searchTypeDrilsdownCasestudy

API to search for entries of type Drilsdown Case Study

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeDrilsdownCasestudyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeDrilsdownCasestudyRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-10T06:27:07.573Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-15T19:33:26.213Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-06T05:38:53.226Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-27T13:23:11.341Z');
    $request->description = 'aspernatur';
    $request->filesuffix = 'eaque';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-31T16:33:47.128Z');
    $request->group = 'ex';
    $request->max = 483626;
    $request->maxlatitude = 9630.94;
    $request->maxlongitude = 7949.27;
    $request->minlatitude = 2835.14;
    $request->minlongitude = 7160.58;
    $request->name = 'Julia Hartmann';
    $request->skip = 577707;
    $request->text = 'debitis';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-28T15:46:21.236Z');

    $response = $sdk->typeTypeDrilsdownCasestudy->searchTypeDrilsdownCasestudy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
