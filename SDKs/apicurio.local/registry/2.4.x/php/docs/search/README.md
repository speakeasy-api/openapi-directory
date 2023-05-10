# search

## Overview

The search API is used to browse or find artifacts in the registry. This section describes the operations for searching for artifacts and versions. 

### Available Operations

* [searchArtifacts](#searchartifacts) - Search for artifacts
* [searchArtifactsByContent](#searchartifactsbycontent) - Search for artifacts by content

## searchArtifacts

Returns a paginated list of all artifacts that match the provided filter criteria.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchArtifactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchArtifactsRequest();
    $request->contentId = 296140;
    $request->description = 'iusto';
    $request->globalId = 118727;
    $request->group = 'harum';
    $request->labels = [
        'accusamus',
        'commodi',
    ];
    $request->limit = 918236;
    $request->name = 'Edna Pouros';
    $request->offset = 865103;
    $request->order = SortOrderEnum::ASC;
    $request->orderby = SortByEnum::CREATED_ON;
    $request->properties = [
        'voluptates',
        'quasi',
        'repudiandae',
    ];

    $response = $sdk->search->searchArtifacts($request);

    if ($response->artifactSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchArtifactsByContent

Returns a paginated list of all artifacts with at least one version that matches the
posted content.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchArtifactsByContentRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchArtifactsByContentOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchArtifactsByContentOrderbyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchArtifactsByContentRequest();
    $request->requestBody = 'sint';
    $request->artifactType = 'AVRO';
    $request->canonical = false;
    $request->limit = 83112;
    $request->offset = 929297;
    $request->order = SearchArtifactsByContentOrderEnum::ASC;
    $request->orderby = SearchArtifactsByContentOrderbyEnum::NAME;

    $response = $sdk->search->searchArtifactsByContent($request);

    if ($response->artifactSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
