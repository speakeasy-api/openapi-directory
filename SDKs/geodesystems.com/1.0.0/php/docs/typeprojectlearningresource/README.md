# typeProjectLearningResource

## Overview

Search API for 'Teaching Resource' entry type

### Available Operations

* [searchProjectLearningResource](#searchprojectlearningresource) - Search API for 'Teaching Resource' entry type

## searchProjectLearningResource

API to search for entries of type Teaching Resource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectLearningResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectLearningResourceRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T09:40:46.168Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-25T00:39:09.630Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-13T00:37:41.372Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-09T16:14:03.266Z');
    $request->description = 'voluptas';
    $request->filesuffix = 'doloribus';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-21T17:46:18.554Z');
    $request->group = 'facere';
    $request->max = 491380;
    $request->maxlatitude = 6143.46;
    $request->maxlongitude = 5884.73;
    $request->minlatitude = 2214.9;
    $request->minlongitude = 5732.47;
    $request->name = 'Deborah Keeling';
    $request->searchProjectLearningResourceGradeLevel = 'autem';
    $request->searchProjectLearningResourceTopic = 'assumenda';
    $request->skip = 129631;
    $request->text = 'fugiat';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-20T00:52:58.130Z');

    $response = $sdk->typeProjectLearningResource->searchProjectLearningResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
