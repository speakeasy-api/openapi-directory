# images

## Overview

The Advanced Image Management API endpoints allow you to manage Docker
images across all repositories.

For more information, see [Advanced Image Management dashboard](https://docs.docker.com/docker-hub/image-management/).


### Available Operations

* [getNamespacesRepositoriesImages](#getnamespacesrepositoriesimages) - Get details of repository's images
* [getNamespacesRepositoriesImagesSummary](#getnamespacesrepositoriesimagessummary) - Get summary of repository's images
* [getNamespacesRepositoriesImagesTags](#getnamespacesrepositoriesimagestags) - Get image's tags
* [postNamespacesDeleteImages](#postnamespacesdeleteimages) - Delete images

## getNamespacesRepositoriesImages

Gets details on the images in a repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNamespacesRepositoriesImagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNamespacesRepositoriesImagesOrderingEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamespacesRepositoriesImagesStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamespacesRepositoriesImagesRequest();
    $request->activeFrom = 'voluptatibus';
    $request->currentlyTagged = false;
    $request->namespace = 'ipsa';
    $request->ordering = GetNamespacesRepositoriesImagesOrderingEnum::DIGEST;
    $request->page = 451159;
    $request->pageSize = 739264;
    $request->repository = 'perferendis';
    $request->status = GetNamespacesRepositoriesImagesStatusEnum::ACTIVE;

    $response = $sdk->images->getNamespacesRepositoriesImages($request);

    if ($response->getNamespaceRepositoryImagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNamespacesRepositoriesImagesSummary

Gets the number of images in a repository and the number of images
counted as active and inactive.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNamespacesRepositoriesImagesSummaryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamespacesRepositoriesImagesSummaryRequest();
    $request->activeFrom = 'reprehenderit';
    $request->namespace = 'ut';
    $request->repository = 'maiores';

    $response = $sdk->images->getNamespacesRepositoriesImagesSummary($request);

    if ($response->getNamespaceRepositoryImagesSummaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNamespacesRepositoriesImagesTags

Gets current and historical tags for an image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNamespacesRepositoriesImagesTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamespacesRepositoriesImagesTagsRequest();
    $request->digest = 'dicta';
    $request->namespace = 'corporis';
    $request->page = 296140;
    $request->pageSize = 480894;
    $request->repository = 'dicta';

    $response = $sdk->images->getNamespacesRepositoriesImagesTags($request);

    if ($response->getNamespaceRepositoryImagesTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNamespacesDeleteImages

Deletes one or more images within a namespace. This is currently limited to a single 
repository.

If you attempt to delete images that are marked as active or are currently tagged, the deletion does not happen and it displays the warnings.
To continue with the deletion, you must ignore these warnings by putting them in the `ignore_warnings` property.

Deleting a currently tagged image deletes the tag from the repository.

You cannot ignore errors. It is not possible to directly delete children of multi-arch images.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostNamespacesDeleteImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PostNamespacesDeleteImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PostNamespacesDeleteImagesRequestIgnoreWarnings;
use \OpenAPI\OpenAPI\Models\Shared\PostNamespacesDeleteImagesRequestIgnoreWarningsWarningEnum;
use \OpenAPI\OpenAPI\Models\Shared\PostNamespacesDeleteImagesRequestManifests;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostNamespacesDeleteImagesRequest();
    $request->postNamespacesDeleteImagesRequest = new PostNamespacesDeleteImagesRequest();
    $request->postNamespacesDeleteImagesRequest->activeFrom = '2020-12-01T12:00:00Z';
    $request->postNamespacesDeleteImagesRequest->dryRun = false;
    $request->postNamespacesDeleteImagesRequest->ignoreWarnings = [
        new PostNamespacesDeleteImagesRequestIgnoreWarnings(),
        new PostNamespacesDeleteImagesRequestIgnoreWarnings(),
        new PostNamespacesDeleteImagesRequestIgnoreWarnings(),
    ];
    $request->postNamespacesDeleteImagesRequest->manifests = [
        new PostNamespacesDeleteImagesRequestManifests(),
        new PostNamespacesDeleteImagesRequestManifests(),
    ];
    $request->namespace = 'accusamus';

    $response = $sdk->images->postNamespacesDeleteImages($request);

    if ($response->postNamespacesDeleteImagesResponseSuccess !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
