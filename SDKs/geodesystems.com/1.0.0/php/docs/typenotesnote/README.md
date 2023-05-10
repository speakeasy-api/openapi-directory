# typeNotesNote

## Overview

Search API for 'Note' entry type

### Available Operations

* [searchNotesNote](#searchnotesnote) - Search API for 'Note' entry type

## searchNotesNote

API to search for entries of type Note

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchNotesNoteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchNotesNoteRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-15T21:16:41.530Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-14T11:36:59.797Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-25T03:12:44.676Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-10T18:27:22.667Z');
    $request->description = 'sapiente';
    $request->filesuffix = 'quo';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-15T23:42:52.032Z');
    $request->group = 'minus';
    $request->max = 781491;
    $request->maxlatitude = 6599.71;
    $request->maxlongitude = 5697.06;
    $request->minlatitude = 5802.38;
    $request->minlongitude = 7268.51;
    $request->name = 'Cory Welch DDS';
    $request->skip = 147400;
    $request->text = 'pariatur';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-21T09:34:05.399Z');

    $response = $sdk->typeNotesNote->searchNotesNote($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
