# tags

## Overview

With these endpoints you can manage Tags. Tags are stored under a Product. You can  and add a Tag to a Feature Flag or Setting using the [Update Flag](#operation/update-setting) endpoint.

### Available Operations

* [createTag](#createtag) - Create Tag
* [deleteTag](#deletetag) - Delete Tag
* [getSettingsByTag](#getsettingsbytag) - List Settings by Tag
* [getTag](#gettag) - Get Tag
* [getTags](#gettags) - List Tags
* [updateTag](#updatetag) - Update Tag

## createTag

This endpoint creates a new Tag in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTagRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTagModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTagRequest();
    $request->createTagModel = new CreateTagModel();
    $request->createTagModel->color = 'tempore';
    $request->createTagModel->name = 'Lee Batz';
    $request->productId = 'b33ea055-b197-4cd4-8e2f-52d82d3513bb';

    $response = $sdk->tags->createTag($request);

    if ($response->tagModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTag

This endpoint deletes a Tag identified by the `tagId` parameter. To remove a Tag from a Feature Flag or Setting use the [Update Flag](#operation/update-setting) endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTagRequest();
    $request->tagId = 395233;

    $response = $sdk->tags->deleteTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSettingsByTag

This endpoint returns the list of the Settings that 
has the specified Tag, identified by the `tagId` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingsByTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSettingsByTagRequest();
    $request->tagId = 977518;

    $response = $sdk->tags->getSettingsByTag($request);

    if ($response->settingModelHaljsons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTag

This endpoint returns the metadata of a Tag 
identified by the `tagId`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagRequest();
    $request->tagId = 310840;

    $response = $sdk->tags->getTag($request);

    if ($response->tagModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTags

This endpoint returns the list of the Tags in a 
specified Product, identified by the `productId` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsRequest();
    $request->productId = '8b656bcd-b35f-4f2e-8b27-537a8cd9e731';

    $response = $sdk->tags->getTags($request);

    if ($response->tagModelHaljsons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTag

This endpoint updates a Tag identified by the `tagId` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTagRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTagModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTagRequest();
    $request->updateTagModel = new UpdateTagModel();
    $request->updateTagModel->color = 'error';
    $request->updateTagModel->name = 'Justin Kulas';
    $request->tagId = 322333;

    $response = $sdk->tags->updateTag($request);

    if ($response->tagModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
