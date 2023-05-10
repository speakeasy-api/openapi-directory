# typeBoulderEmails

## Overview

Search API for 'Boulder Council Emails' entry type

### Available Operations

* [searchBoulderEmails](#searchboulderemails) - Search API for 'Boulder Council Emails' entry type

## searchBoulderEmails

API to search for entries of type Boulder Council Emails

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBoulderEmailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBoulderEmailsRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-15T01:59:29.520Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-05T00:59:14.180Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-14T08:30:37.763Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-09T14:55:41.766Z');
    $request->description = 'asperiores';
    $request->filesuffix = 'facilis';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-17T04:31:41.347Z');
    $request->group = 'ab';
    $request->max = 611749;
    $request->maxlatitude = 2927.94;
    $request->maxlongitude = 6719.07;
    $request->minlatitude = 1523.54;
    $request->minlongitude = 4475.16;
    $request->name = 'Melody Cole';
    $request->searchDbBoulderEmailsEmailSubject = 'architecto';
    $request->searchDbBoulderEmailsPlainTextBody = 'suscipit';
    $request->searchDbBoulderEmailsReceivedDate = 'sapiente';
    $request->searchDbBoulderEmailsSentCc = 'debitis';
    $request->searchDbBoulderEmailsSentFrom = 'illo';
    $request->searchDbBoulderEmailsSentTo = 'reiciendis';
    $request->skip = 19300;
    $request->text = 'corrupti';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-06T01:38:10.905Z');

    $response = $sdk->typeBoulderEmails->searchBoulderEmails($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
