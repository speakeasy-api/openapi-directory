# typeTypeDocumentHtml

## Overview

Search API for 'HTML File' entry type

### Available Operations

* [searchTypeDocumentHtml](#searchtypedocumenthtml) - Search API for 'HTML File' entry type

## searchTypeDocumentHtml

API to search for entries of type HTML File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeDocumentHtmlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeDocumentHtmlRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-03T08:11:18.761Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-01T00:25:41.757Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-23T11:52:33.371Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-09T09:09:47.250Z');
    $request->description = 'sint';
    $request->filesuffix = 'autem';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-29T19:31:53.860Z');
    $request->group = 'ab';
    $request->max = 683783;
    $request->maxlatitude = 9522.16;
    $request->maxlongitude = 2227.71;
    $request->minlatitude = 5280.82;
    $request->minlongitude = 5618.58;
    $request->name = 'Cornelius Beatty';
    $request->skip = 110804;
    $request->text = 'numquam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-25T13:17:27.346Z');

    $response = $sdk->typeTypeDocumentHtml->searchTypeDocumentHtml($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
