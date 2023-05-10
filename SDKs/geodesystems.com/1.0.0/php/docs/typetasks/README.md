# typeTasks

## Overview

Search API for 'Tasks' entry type

### Available Operations

* [searchTasks](#searchtasks) - Search API for 'Tasks' entry type

## searchTasks

API to search for entries of type Tasks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTasksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTasksRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-09T20:34:50.690Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-26T13:45:22.454Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-14T19:22:57.784Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-16T15:40:19.045Z');
    $request->description = 'magnam';
    $request->filesuffix = 'perspiciatis';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-15T16:15:25.092Z');
    $request->group = 'sunt';
    $request->max = 364284;
    $request->maxlatitude = 9642.1;
    $request->maxlongitude = 8484.39;
    $request->minlatitude = 7808.85;
    $request->minlongitude = 3096.34;
    $request->name = 'Jacquelyn Lueilwitz';
    $request->searchDbTasksAssignedto = 'maxime';
    $request->searchDbTasksComplete = 1514.86;
    $request->searchDbTasksEnddate = 'minus';
    $request->searchDbTasksPriority = 'consequuntur';
    $request->searchDbTasksStartdate = 'possimus';
    $request->searchDbTasksStatus = 'delectus';
    $request->searchDbTasksTitle = 'harum';
    $request->skip = 304964;
    $request->text = 'eligendi';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-30T04:13:05.248Z');

    $response = $sdk->typeTasks->searchTasks($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
