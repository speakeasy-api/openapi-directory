# search

## Overview

Code Search

### Available Operations

* [search](#search) - Searches through source code
* [searchperpackage](#searchperpackage) - Like /search, but aggregates per package

## search

Performs a search through the full Debian Code Search corpus, blocking until all results are available (might take a few seconds depending on the search query).

Search results are ordered by their ranking (best results come first).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchMatchModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchRequest();
    $request->matchMode = SearchMatchModeEnum::REGEXP;
    $request->query = 'quibusdam';

    $requestSecurity = new SearchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->search->search($request, $requestSecurity);

    if ($response->searchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchperpackage

The search results are currently sorted arbitrarily, but we intend to sort them by ranking eventually: https://github.com/Debian/dcs/blob/51338e934eb7ee18d00c5c18531c0790a83cb698/cmd/dcs-web/querymanager.go#L719

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchperpackageRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchperpackageMatchModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchperpackageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchperpackageRequest();
    $request->matchMode = SearchperpackageMatchModeEnum::REGEXP;
    $request->query = 'nulla';

    $requestSecurity = new SearchperpackageSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->search->searchperpackage($request, $requestSecurity);

    if ($response->packageSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
