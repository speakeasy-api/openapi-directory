# typeContact

## Overview

Search API for 'Contact List' entry type

### Available Operations

* [searchContact](#searchcontact) - Search API for 'Contact List' entry type

## searchContact

API to search for entries of type Contact List

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchContactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchContactRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-10T19:23:06.016Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-18T21:26:08.081Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-22T18:43:20.498Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-28T19:52:33.730Z');
    $request->description = 'architecto';
    $request->filesuffix = 'sit';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-09T08:03:12.737Z');
    $request->group = 'ab';
    $request->max = 513760;
    $request->maxlatitude = 656.04;
    $request->maxlongitude = 2226.58;
    $request->minlatitude = 8562.77;
    $request->minlongitude = 3694.9;
    $request->name = 'Cynthia Macejkovic';
    $request->searchDbContactEmail = 'officiis';
    $request->searchDbContactInstitution = 'esse';
    $request->searchDbContactName = 'necessitatibus';
    $request->skip = 153369;
    $request->text = 'veniam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-15T18:45:38.448Z');

    $response = $sdk->typeContact->searchContact($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
