# typeNotesNotebook

## Overview

Search API for 'Notebook' entry type

### Available Operations

* [searchNotesNotebook](#searchnotesnotebook) - Search API for 'Notebook' entry type

## searchNotesNotebook

API to search for entries of type Notebook

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchNotesNotebookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchNotesNotebookRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-27T00:31:59.035Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-15T07:00:59.329Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-31T05:44:55.505Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-30T23:22:09.432Z');
    $request->description = 'rerum';
    $request->filesuffix = 'doloremque';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-27T23:55:27.293Z');
    $request->group = 'at';
    $request->max = 431253;
    $request->maxlatitude = 4444.79;
    $request->maxlongitude = 5311.95;
    $request->minlatitude = 5023.93;
    $request->minlongitude = 4706.47;
    $request->name = 'Rickey Oberbrunner';
    $request->skip = 542340;
    $request->text = 'architecto';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-13T14:00:02.845Z');

    $response = $sdk->typeNotesNotebook->searchNotesNotebook($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
