# SDK

## Overview

API for Internet Archive's Search-related services


### Available Operations

* [getSearchV1Fields](#getsearchv1fields) - Fields that can be requested
* [getSearchV1Organic](#getsearchv1organic) - Return relevance-based results from search queries

* [getSearchV1Scrape](#getsearchv1scrape) - Scrape search results from Internet Archive, allowing a scrolling cursor


## getSearchV1Fields

Fields that can be requested

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchV1FieldsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchV1FieldsRequest();
    $request->callback = 'provident';

    $response = $sdk->sdk->getSearchV1Fields($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSearchV1Organic

Return relevance-based results from search queries


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchV1OrganicRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchV1OrganicRequest();
    $request->callback = 'distinctio';
    $request->field = 'quibusdam';
    $request->q = 'unde';
    $request->size = 857946;
    $request->totalOnly = false;

    $response = $sdk->sdk->getSearchV1Organic($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSearchV1Scrape

Scrape search results from Internet Archive, allowing a scrolling cursor


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchV1ScrapeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchV1ScrapeRequest();
    $request->callback = 'corrupti';
    $request->cursor = 'illum';
    $request->field = 'vel';
    $request->q = 'error';
    $request->size = 645894;
    $request->sort = 'suscipit';
    $request->totalOnly = false;

    $response = $sdk->sdk->getSearchV1Scrape($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
