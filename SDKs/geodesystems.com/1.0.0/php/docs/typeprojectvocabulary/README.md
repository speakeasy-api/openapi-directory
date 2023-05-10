# typeProjectVocabulary

## Overview

Search API for 'Vocabulary' entry type

### Available Operations

* [searchProjectVocabulary](#searchprojectvocabulary) - Search API for 'Vocabulary' entry type

## searchProjectVocabulary

API to search for entries of type Vocabulary

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectVocabularyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectVocabularyRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-24T10:46:29.092Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-17T14:08:59.849Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-21T20:29:31.570Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-09T20:46:26.848Z');
    $request->description = 'vitae';
    $request->filesuffix = 'dolor';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-17T22:36:10.251Z');
    $request->group = 'ut';
    $request->max = 989765;
    $request->maxlatitude = 4446.25;
    $request->maxlongitude = 6441.29;
    $request->minlatitude = 9301.27;
    $request->minlongitude = 932.54;
    $request->name = 'Pat Jacobs';
    $request->skip = 112014;
    $request->text = 'tenetur';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-25T19:14:36.297Z');

    $response = $sdk->typeProjectVocabulary->searchProjectVocabulary($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
