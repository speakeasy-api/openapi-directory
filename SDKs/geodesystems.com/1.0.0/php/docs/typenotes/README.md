# typeNotes

## Overview

Search API for 'Notes' entry type

### Available Operations

* [searchNotes](#searchnotes) - Search API for 'Notes' entry type

## searchNotes

API to search for entries of type Notes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchNotesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchNotesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-23T10:18:08.861Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-08T04:54:26.161Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-04T02:54:37.855Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-02T01:41:31.539Z');
    $request->description = 'adipisci';
    $request->filesuffix = 'recusandae';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-01T05:47:03.008Z');
    $request->group = 'numquam';
    $request->max = 196374;
    $request->maxlatitude = 5323.2;
    $request->maxlongitude = 270.78;
    $request->minlatitude = 7031.89;
    $request->minlongitude = 841.78;
    $request->name = 'Milton Powlowski';
    $request->searchDbNotesNote = 'deserunt';
    $request->skip = 168926;
    $request->text = 'nihil';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-05T18:10:28.279Z');

    $response = $sdk->typeNotes->searchNotes($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
