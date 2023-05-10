# collections

### Available Operations

* [allCollections](#allcollections) - All Collections
* [createAFork](#createafork) - Create a Fork
* [createCollection](#createcollection) - Create Collection
* [deleteCollection](#deletecollection) - Delete Collection
* [mergeAFork](#mergeafork) - Merge a Fork
* [singleCollection](#singlecollection) - Single Collection 
* [updateCollection](#updatecollection) - Update Collection

## allCollections

The `/collections` endpoint returns a list of all [collections](https://www.getpostman.com/docs/collections) that are accessible by you. The list includes your own collections and the collections that you have subscribed to.

The response contains an array of collection information containing the `name`, `id`, `owner` and `uid` of each collection.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->collections->allCollections();

    if ($response->allCollections200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAFork

This endpoint allows you to create a fork from an existing collection.

On successful creation of the collection, the response returns the collection `name`, `id`, `uid` along with `fork` information.

You can also specify the context of a workspace to fork a collection in by passing the `workspace` as a query param.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAForkRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAForkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAForkRequest();
    $request->requestBody = new CreateAForkRequestBody();
    $request->requestBody->name = 'Fork name';
    $request->collectionUid = 'occaecati';
    $request->workspace = '{{workspace_id}}';

    $response = $sdk->collections->createAFork($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCollection

This endpoint allows you to create collections using the Postman Collection v2 format. For more information about the v2 schema, check the format [here](https://schema.getpostman.com/json/collection/v2.0.0/docs/index.html).

On successful creation of the collection, the response returns the collection `name`, `id` and the `uid`.

You can also specify the context of a workspace to create a collection in directly by passing the `workspace` as a query param.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCollectionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateCollectionRequestBodyCollection;
use \OpenAPI\OpenAPI\Models\Operations\CreateCollectionRequestBodyCollectionInfo;
use \OpenAPI\OpenAPI\Models\Operations\CreateCollectionRequestBodyCollectionItem;
use \OpenAPI\OpenAPI\Models\Operations\CreateCollectionRequestBodyCollectionItemItem;
use \OpenAPI\OpenAPI\Models\Operations\CreateCollectionRequestBodyCollectionItemItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCollectionRequestBodyCollectionItemItemRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateCollectionRequestBodyCollectionItemItemRequestHeader;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCollectionRequestBody();
    $request->collection = new CreateCollectionRequestBodyCollection();
    $request->collection->info = new CreateCollectionRequestBodyCollectionInfo();
    $request->collection->info->description = 'This is just a sample collection.';
    $request->collection->info->name = 'Sample Collection {{$randomInt}}';
    $request->collection->info->schema = 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json';
    $request->collection->item = [
        new CreateCollectionRequestBodyCollectionItem(),
    ];

    $response = $sdk->collections->createCollection($request);

    if ($response->createCollection200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCollection

This endpoint allows you to delete an existing collection.

On successful deletion of the collection, the response returns the `id` and `uid`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCollectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCollectionRequest();
    $request->collectionUid = 'deleniti';

    $response = $sdk->collections->deleteCollection($request);

    if ($response->deleteCollection200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mergeAFork

This endpoint allows you to merge a forked collection back to its destination collection.

On successful creation of the collection, the response returns the collection `name`, `id` and `uid`.

You need to specify the fork UID (as `source`) and destination collection UID (as `destination`) in the request body.

Optionally, you can also specify the merge strategy as either `deleteSource` or `updateSourceWithDestination`. Following is an explanation of the merge strategies

| Merge Strategy | Behaviour |
| --- | --- |
| deleteSource | Forked collection is deleted after merging |
| updateSourceWithDestination | Forked collection is up to date with changes in destination collection |

If the collections cannot be merged (due to conflicts), appropriate error messages will be returned.


> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MergeAForkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MergeAForkRequestBody();
    $request->destination = '{{destination_collection_uid}}';
    $request->source = '{{source_collection_uid}}';
    $request->strategy = 'deleteSource';

    $response = $sdk->collections->mergeAFork($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## singleCollection

Access the contents of a collection that is accessible to you using its unique id (`uid`).

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SingleCollectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SingleCollectionRequest();
    $request->collectionUid = 'hic';

    $response = $sdk->collections->singleCollection($request);

    if ($response->singleCollection200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCollection

This endpoint allows you to update an existing collection using the Postman Collection v2 format. For more information about the v2 schema, check the format [here](https://schema.getpostman.com/json/collection/v2.0.0/docs/index.html).

On successful updation of the collection, the response returns the collection `name`, `id` and `uid`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

Note: Please be careful when trying to update the collection, as the existing collection will be replaced by the request body.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCollectionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCollectionRequestBodyCollection;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCollectionRequestBodyCollectionInfo;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCollectionRequestBodyCollectionItem;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCollectionRequestBodyCollectionItemItem;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCollectionRequestBodyCollectionItemItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCollectionRequestBodyCollectionItemItemRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCollectionRequestBodyCollectionItemItemRequestHeader;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCollectionRequest();
    $request->requestBody = new UpdateCollectionRequestBody();
    $request->requestBody->collection = new UpdateCollectionRequestBodyCollection();
    $request->requestBody->collection->info = new UpdateCollectionRequestBodyCollectionInfo();
    $request->requestBody->collection->info->postmanId = '174bad7c-07e3-45f3-914f-36cf84e5586f';
    $request->requestBody->collection->info->description = 'This is just a sample collection.';
    $request->requestBody->collection->info->name = 'Sample Collection {{$randomInt}}';
    $request->requestBody->collection->info->schema = 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json';
    $request->requestBody->collection->item = [
        new UpdateCollectionRequestBodyCollectionItem(),
        new UpdateCollectionRequestBodyCollectionItem(),
        new UpdateCollectionRequestBodyCollectionItem(),
        new UpdateCollectionRequestBodyCollectionItem(),
    ];
    $request->collectionUid = 'totam';

    $response = $sdk->collections->updateCollection($request);

    if ($response->updateCollection200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
