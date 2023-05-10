# search

## Overview

The search API is used to browse or find artifacts in the registry. This section describes the operations for searching for artifacts and versions. 

### Available Operations

* [searchArtifacts](#searchartifacts) - Search for artifacts
* [searchVersions](#searchversions) - Search artifact versions

## searchArtifacts

Returns a paginated list of all artifacts that match the provided search criteria.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchArtifactsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchArtifactsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchArtifactsOverEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchArtifactsRequest();
    $request->limit = 568434;
    $request->offset = 135218;
    $request->order = SearchArtifactsOrderEnum::ASC;
    $request->over = SearchArtifactsOverEnum::NAME;
    $request->search = 'natus';

    $response = $sdk->search->searchArtifacts($request);

    if ($response->artifactSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchVersions

Searches for versions of a specific artifact.  This is typically used to get a listing
of all versions of an artifact (for example, in a user interface).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchVersionsRequest();
    $request->artifactId = 'sed';
    $request->limit = 612096;
    $request->offset = 222321;

    $response = $sdk->search->searchVersions($request);

    if ($response->versionSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
