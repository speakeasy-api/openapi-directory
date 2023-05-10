# typeBioTaxonomy

## Overview

Search API for 'Taxonomic Entry' entry type

### Available Operations

* [searchBioTaxonomy](#searchbiotaxonomy) - Search API for 'Taxonomic Entry' entry type

## searchBioTaxonomy

API to search for entries of type Taxonomic Entry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBioTaxonomyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBioTaxonomyRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-16T18:42:11.269Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-22T18:51:28.663Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-01-21T21:31:25.345Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-26T04:25:41.517Z');
    $request->description = 'eligendi';
    $request->filesuffix = 'ducimus';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-12T14:13:14.359Z');
    $request->group = 'tempora';
    $request->max = 368584;
    $request->maxlatitude = 4104.92;
    $request->maxlongitude = 1369;
    $request->minlatitude = 4282.24;
    $request->minlongitude = 8221.18;
    $request->name = 'Paula Jacobs I';
    $request->searchBioTaxonomyAliases = 'maiores';
    $request->searchBioTaxonomyDivision = 'quasi';
    $request->searchBioTaxonomyEmblCode = 'ex';
    $request->searchBioTaxonomyInheritedDiv = false;
    $request->searchBioTaxonomyRank = 'nulla';
    $request->skip = 569211;
    $request->text = 'voluptatibus';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-15T07:05:18.296Z');

    $response = $sdk->typeBioTaxonomy->searchBioTaxonomy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
