# typeBioOntologySample

## Overview

Search API for 'Sample' entry type

### Available Operations

* [searchBioOntologySample](#searchbioontologysample) - Search API for 'Sample' entry type

## searchBioOntologySample

API to search for entries of type Sample

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBioOntologySampleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBioOntologySampleRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-24T10:05:07.174Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-16T07:10:00.236Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-16T09:46:06.582Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-25T00:56:56.568Z');
    $request->description = 'ipsum';
    $request->filesuffix = 'hic';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-10T03:04:11.898Z');
    $request->group = 'voluptate';
    $request->max = 490459;
    $request->maxlatitude = 9702.37;
    $request->maxlongitude = 2274.14;
    $request->minlatitude = 6805.45;
    $request->minlongitude = 2543.56;
    $request->name = 'Melissa Bednar';
    $request->skip = 311796;
    $request->text = 'accusamus';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-18T05:23:42.271Z');

    $response = $sdk->typeBioOntologySample->searchBioOntologySample($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
