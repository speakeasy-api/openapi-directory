# amz

## Overview

APIs for request on Amazon

Find out more
<http://api.axesso.de/>
### Available Operations

* [keywordSearch](#keywordsearch) - fetch results auf a keyword search on Amazon
* [requestBuyRecommendation](#requestbuyrecommendation) - request buy recommendations to a given product
* [requestProduct](#requestproduct) - lookup product information
* [sortOptions](#sortoptions) - request available sort options to use in keyword search

## keywordSearch

fetch results auf a keyword search on Amazon

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeywordSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeywordSearchRequest();
    $request->domainCode = 'unde';
    $request->keyword = 'nulla';
    $request->numberOfProducts = 544883;
    $request->sortBy = 'illum';

    $response = $sdk->amz->keywordSearch($request);

    if ($response->keywordSearchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## requestBuyRecommendation

request buy recommendations to a given product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RequestBuyRecommendationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequestBuyRecommendationRequest();
    $request->url = 'vel';

    $response = $sdk->amz->requestBuyRecommendation($request);

    if ($response->buyRecommendationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## requestProduct

lookup product information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RequestProductRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequestProductRequest();
    $request->size = 'error';
    $request->url = 'deserunt';

    $response = $sdk->amz->requestProduct($request);

    if ($response->productDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sortOptions

request available sort options to use in keyword search

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->amz->sortOptions();

    if ($response->sortOptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
