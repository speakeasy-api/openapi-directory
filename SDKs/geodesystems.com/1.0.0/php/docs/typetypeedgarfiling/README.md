# typeTypeEdgarFiling

## Overview

Search API for 'SEC EDGAR Filing' entry type

### Available Operations

* [searchTypeEdgarFiling](#searchtypeedgarfiling) - Search API for 'SEC EDGAR Filing' entry type

## searchTypeEdgarFiling

API to search for entries of type SEC EDGAR Filing

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeEdgarFilingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeEdgarFilingRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-20T22:00:48.719Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-04T01:27:13.665Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-21T12:05:45.550Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-08T10:54:10.339Z');
    $request->description = 'omnis';
    $request->filesuffix = 'possimus';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-25T08:28:41.959Z');
    $request->group = 'expedita';
    $request->max = 481307;
    $request->maxlatitude = 4564.73;
    $request->maxlongitude = 6873.52;
    $request->minlatitude = 3216.54;
    $request->minlongitude = 8010.59;
    $request->name = 'Christy Swift';
    $request->searchTypeEdgarFilingCikNumber = 'officia';
    $request->searchTypeEdgarFilingCompanyName = 'maiores';
    $request->searchTypeEdgarFilingFormType = 'cupiditate';
    $request->searchTypeEdgarFilingIrsNumber = 'illo';
    $request->searchTypeEdgarFilingStandardIndustrialClassification = 'saepe';
    $request->searchTypeEdgarFilingState = 'enim';
    $request->skip = 52407;
    $request->text = 'ex';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-12T00:23:13.319Z');

    $response = $sdk->typeTypeEdgarFiling->searchTypeEdgarFiling($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
