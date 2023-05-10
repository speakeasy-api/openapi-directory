# typeBioOntologyStudy

## Overview

Search API for 'Study' entry type

### Available Operations

* [searchBioOntologyStudy](#searchbioontologystudy) - Search API for 'Study' entry type

## searchBioOntologyStudy

API to search for entries of type Study

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBioOntologyStudyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBioOntologyStudyRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-15T13:56:57.287Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-07T02:34:07.563Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-28T12:41:02.358Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-03T16:00:55.670Z');
    $request->description = 'totam';
    $request->filesuffix = 'similique';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-16T11:34:48.736Z');
    $request->group = 'quaerat';
    $request->max = 273542;
    $request->maxlatitude = 4254.51;
    $request->maxlongitude = 7980.47;
    $request->minlatitude = 8853.38;
    $request->minlongitude = 1856.36;
    $request->name = 'Randal Klocko';
    $request->skip = 215507;
    $request->text = 'quisquam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-24T18:16:06.669Z');

    $response = $sdk->typeBioOntologyStudy->searchBioOntologyStudy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
