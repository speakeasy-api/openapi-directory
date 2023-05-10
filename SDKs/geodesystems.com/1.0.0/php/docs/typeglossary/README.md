# typeGlossary

## Overview

Search API for 'Glossary' entry type

### Available Operations

* [searchGlossary](#searchglossary) - Search API for 'Glossary' entry type

## searchGlossary

API to search for entries of type Glossary

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchGlossaryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchGlossaryRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-17T06:03:04.160Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-10T10:43:04.313Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-23T03:22:14.898Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-28T00:11:01.662Z');
    $request->description = 'nesciunt';
    $request->filesuffix = 'mollitia';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-23T13:33:54.639Z');
    $request->group = 'nostrum';
    $request->max = 475325;
    $request->maxlatitude = 3306;
    $request->maxlongitude = 9692.06;
    $request->minlatitude = 662.07;
    $request->minlongitude = 2656.32;
    $request->name = 'Maria Veum';
    $request->skip = 256114;
    $request->text = 'dolorum';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-23T14:57:18.247Z');

    $response = $sdk->typeGlossary->searchGlossary($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
