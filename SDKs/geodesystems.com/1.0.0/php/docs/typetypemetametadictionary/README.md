# typeTypeMetametaDictionary

## Overview

Search API for 'Metadata Dictionary' entry type

### Available Operations

* [searchTypeMetametaDictionary](#searchtypemetametadictionary) - Search API for 'Metadata Dictionary' entry type

## searchTypeMetametaDictionary

API to search for entries of type Metadata Dictionary

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeMetametaDictionaryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeMetametaDictionaryRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-04T22:19:54.604Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-14T09:11:21.253Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-22T07:55:07.552Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-23T09:14:18.952Z');
    $request->description = 'quis';
    $request->filesuffix = 'dolorem';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-13T10:23:58.341Z');
    $request->group = 'quo';
    $request->max = 91736;
    $request->maxlatitude = 761.45;
    $request->maxlongitude = 6688.81;
    $request->minlatitude = 1580.59;
    $request->minlongitude = 3322.37;
    $request->name = 'Wallace Ritchie';
    $request->searchTypeMetametaDictionaryDictionaryType = 'sunt';
    $request->searchTypeMetametaDictionaryFieldIndex = 982804;
    $request->searchTypeMetametaDictionaryHandlerClass = 'excepturi';
    $request->searchTypeMetametaDictionaryIsgroup = false;
    $request->searchTypeMetametaDictionaryProperties = 'ducimus';
    $request->searchTypeMetametaDictionaryShortName = 'dolore';
    $request->searchTypeMetametaDictionarySuperType = 'aspernatur';
    $request->searchTypeMetametaDictionaryWikiText = 'molestias';
    $request->skip = 686291;
    $request->text = 'at';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-27T10:02:33.600Z');

    $response = $sdk->typeTypeMetametaDictionary->searchTypeMetametaDictionary($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
