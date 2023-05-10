# typePythonNotebook

## Overview

Search API for 'IPython Notebook file' entry type

### Available Operations

* [searchPythonNotebook](#searchpythonnotebook) - Search API for 'IPython Notebook file' entry type

## searchPythonNotebook

API to search for entries of type IPython Notebook file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchPythonNotebookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchPythonNotebookRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-04T19:51:43.586Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-08T06:04:19.379Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-05T05:12:26.595Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-27T23:49:16.699Z');
    $request->description = 'tempora';
    $request->filesuffix = 'esse';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-14T11:05:35.136Z');
    $request->group = 'reiciendis';
    $request->max = 704644;
    $request->maxlatitude = 3060.23;
    $request->maxlongitude = 9229.15;
    $request->minlatitude = 2274.24;
    $request->minlongitude = 6170.35;
    $request->name = 'Gretchen Keeling';
    $request->skip = 68336;
    $request->text = 'ad';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-10T07:55:03.152Z');

    $response = $sdk->typePythonNotebook->searchPythonNotebook($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
