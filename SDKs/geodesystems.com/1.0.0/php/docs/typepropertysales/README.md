# typePropertySales

## Overview

Search API for 'Property Sales' entry type

### Available Operations

* [searchPropertySales](#searchpropertysales) - Search API for 'Property Sales' entry type

## searchPropertySales

API to search for entries of type Property Sales

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchPropertySalesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchPropertySalesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-31T22:12:08.601Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-02T09:58:06.659Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-09T12:42:18.572Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-19T01:47:33.364Z');
    $request->description = 'sed';
    $request->filesuffix = 'dolorem';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-27T04:15:11.226Z');
    $request->group = 'amet';
    $request->max = 454165;
    $request->maxlatitude = 4542.32;
    $request->maxlongitude = 8652.12;
    $request->minlatitude = 7914.21;
    $request->minlongitude = 9550.65;
    $request->name = 'Jimmie McGlynn';
    $request->searchDbPropertySalesBuildingDescription = 'omnis';
    $request->searchDbPropertySalesBuildingDesign = 'quam';
    $request->searchDbPropertySalesBuyer = 'exercitationem';
    $request->searchDbPropertySalesCity = 'voluptates';
    $request->searchDbPropertySalesLocation = 'sequi';
    $request->searchDbPropertySalesPropertyAddress = 'quis';
    $request->searchDbPropertySalesSaleDate = 'commodi';
    $request->searchDbPropertySalesSalePrice = 4264.81;
    $request->searchDbPropertySalesSeller = 'rem';
    $request->searchDbPropertySalesSubdivision = 'aliquid';
    $request->searchDbPropertySalesType = 'aperiam';
    $request->searchDbPropertySalesZipcode = 'perspiciatis';
    $request->skip = 145841;
    $request->text = 'itaque';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-19T12:32:11.312Z');

    $response = $sdk->typePropertySales->searchPropertySales($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
