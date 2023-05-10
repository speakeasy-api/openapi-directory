# typeProjectProject

## Overview

Search API for 'Project' entry type

### Available Operations

* [searchProjectProject](#searchprojectproject) - Search API for 'Project' entry type

## searchProjectProject

API to search for entries of type Project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectProjectRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-15T07:52:06.510Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-25T03:59:17.657Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-31T07:46:10.277Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-09T03:17:39.929Z');
    $request->description = 'ad';
    $request->filesuffix = 'voluptate';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-04T09:00:32.956Z');
    $request->group = 'sit';
    $request->max = 426527;
    $request->maxlatitude = 3883.33;
    $request->maxlongitude = 3112.47;
    $request->minlatitude = 941.22;
    $request->minlongitude = 5252.23;
    $request->name = 'Michelle Shanahan';
    $request->skip = 152887;
    $request->text = 'inventore';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-13T15:44:04.050Z');

    $response = $sdk->typeProjectProject->searchProjectProject($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
