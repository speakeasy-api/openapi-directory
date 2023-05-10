# typeTypeMetametaField

## Overview

Search API for 'Metadata Field' entry type

### Available Operations

* [searchTypeMetametaField](#searchtypemetametafield) - Search API for 'Metadata Field' entry type

## searchTypeMetametaField

API to search for entries of type Metadata Field

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeMetametaFieldRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeMetametaFieldRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-13T02:11:36.009Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-07T09:10:06.875Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-21T05:39:24.978Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-11T08:45:03.667Z');
    $request->description = 'illo';
    $request->filesuffix = 'architecto';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-06T08:10:19.294Z');
    $request->group = 'velit';
    $request->max = 355685;
    $request->maxlatitude = 5929.46;
    $request->maxlongitude = 8207.25;
    $request->minlatitude = 6124.25;
    $request->minlongitude = 5035.98;
    $request->name = 'Deanna Kuhn';
    $request->searchTypeMetametaFieldDatabaseColumnSize = 633956;
    $request->searchTypeMetametaFieldDatatype = 'voluptate';
    $request->searchTypeMetametaFieldEnumerationValues = 'cupiditate';
    $request->searchTypeMetametaFieldFieldId = 'maxime';
    $request->searchTypeMetametaFieldFieldIndex = 828267;
    $request->searchTypeMetametaFieldMissing = 'nihil';
    $request->searchTypeMetametaFieldProperties = 'sed';
    $request->searchTypeMetametaFieldUnit = 'optio';
    $request->skip = 860830;
    $request->text = 'magni';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-20T19:57:57.320Z');

    $response = $sdk->typeTypeMetametaField->searchTypeMetametaField($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
