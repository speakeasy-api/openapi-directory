# typeProjectOrganization

## Overview

Search API for 'Organization' entry type

### Available Operations

* [searchProjectOrganization](#searchprojectorganization) - Search API for 'Organization' entry type

## searchProjectOrganization

API to search for entries of type Organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectOrganizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectOrganizationRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-10T02:34:04.729Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-14T12:10:11.341Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-25T23:55:31.783Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-20T17:26:00.007Z');
    $request->description = 'distinctio';
    $request->filesuffix = 'voluptatem';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-09T18:41:13.955Z');
    $request->group = 'consequatur';
    $request->max = 515433;
    $request->maxlatitude = 8310.67;
    $request->maxlongitude = 4159.53;
    $request->minlatitude = 8436.79;
    $request->minlongitude = 2312.55;
    $request->name = 'Michele Wehner';
    $request->searchProjectOrganizationOrganizationType = 'dolore';
    $request->searchProjectOrganizationStatus = 'enim';
    $request->skip = 353904;
    $request->text = 'perspiciatis';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-06T11:53:42.173Z');

    $response = $sdk->typeProjectOrganization->searchProjectOrganization($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
