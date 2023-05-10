# repositories

## Overview

The repository endpoints allow you to manage your repository's
configuration like description.


### Available Operations

* [getV2NamespacesNamespaceRepositoriesRepositoryTags](#getv2namespacesnamespacerepositoriesrepositorytags) - List repository tags
* [getV2NamespacesNamespaceRepositoriesRepositoryTagsTag](#getv2namespacesnamespacerepositoriesrepositorytagstag) - Read repository tag
* [headV2NamespacesNamespaceRepositoriesRepositoryTags](#headv2namespacesnamespacerepositoriesrepositorytags) - Check repository tags
* [headV2NamespacesNamespaceRepositoriesRepositoryTagsTag](#headv2namespacesnamespacerepositoriesrepositorytagstag) - Check repository tag

## getV2NamespacesNamespaceRepositoriesRepositoryTags

List repository tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2NamespacesNamespaceRepositoriesRepositoryTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2NamespacesNamespaceRepositoriesRepositoryTagsRequest();
    $request->namespace = 'rem';
    $request->page = 916723;
    $request->pageSize = 93940;
    $request->repository = 'repudiandae';

    $response = $sdk->repositories->getV2NamespacesNamespaceRepositoriesRepositoryTags($request);

    if ($response->paginatedTags !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2NamespacesNamespaceRepositoriesRepositoryTagsTag

Read repository tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2NamespacesNamespaceRepositoriesRepositoryTagsTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2NamespacesNamespaceRepositoriesRepositoryTagsTagRequest();
    $request->namespace = 'sint';
    $request->repository = 'veritatis';
    $request->tag = 'itaque';

    $response = $sdk->repositories->getV2NamespacesNamespaceRepositoriesRepositoryTagsTag($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## headV2NamespacesNamespaceRepositoriesRepositoryTags

Check repository tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HeadV2NamespacesNamespaceRepositoriesRepositoryTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HeadV2NamespacesNamespaceRepositoriesRepositoryTagsRequest();
    $request->namespace = 'incidunt';
    $request->repository = 'enim';

    $response = $sdk->repositories->headV2NamespacesNamespaceRepositoriesRepositoryTags($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## headV2NamespacesNamespaceRepositoriesRepositoryTagsTag

Check repository tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HeadV2NamespacesNamespaceRepositoriesRepositoryTagsTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HeadV2NamespacesNamespaceRepositoriesRepositoryTagsTagRequest();
    $request->namespace = 'consequatur';
    $request->repository = 'est';
    $request->tag = 'quibusdam';

    $response = $sdk->repositories->headV2NamespacesNamespaceRepositoriesRepositoryTagsTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
