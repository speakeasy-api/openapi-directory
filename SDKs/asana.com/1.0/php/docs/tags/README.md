# tags

## Overview

A tag is a label that can be attached to any task in Asana. It exists in a single workspace or organization.

Tags have some metadata associated with them, but it is possible that we will simplify them in the future so it is not encouraged to rely too heavily on it. Unlike projects, tags do not provide any ordering on the tasks they are associated with.

### Available Operations

* [createTag](#createtag) - Create a tag
* [createTagForWorkspace](#createtagforworkspace) - Create a tag in a workspace
* [deleteTag](#deletetag) - Delete a tag
* [getTag](#gettag) - Get a tag
* [getTags](#gettags) - Get multiple tags
* [getTagsForTask](#gettagsfortask) - Get a task's tags
* [getTagsForWorkspace](#gettagsforworkspace) - Get tags in a workspace
* [updateTag](#updatetag) - Update a tag

## createTag

Creates a new tag in a workspace or organization.

Every tag is required to be created in a specific workspace or
organization, and this cannot be changed once set. Note that you can use
the workspace parameter regardless of whether or not it is an
organization.

Returns the full record of the newly created tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTagRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\TagRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\TagRequestColorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTagRequest();
    $request->requestBody = new CreateTagRequestBodyInput();
    $request->requestBody->data = new TagRequestInput();
    $request->requestBody->data->color = TagRequestColorEnum::LIGHT_GREEN;
    $request->requestBody->data->followers = [
        'laudantium',
        'dicta',
    ];
    $request->requestBody->data->name = 'Stuff to buy';
    $request->requestBody->data->notes = 'Mittens really likes the stuff from Humboldt.';
    $request->requestBody->data->workspace = '12345';
    $request->optFields = [
        'maiores',
    ];
    $request->optPretty = false;

    $response = $sdk->tags->createTag($request);

    if ($response->createTag201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTagForWorkspace

Creates a new tag in a workspace or organization.

Every tag is required to be created in a specific workspace or
organization, and this cannot be changed once set. Note that you can use
the workspace parameter regardless of whether or not it is an
organization.

Returns the full record of the newly created tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTagForWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTagForWorkspaceRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\TagResponseInput;
use \OpenAPI\OpenAPI\Models\Shared\TagResponseColorEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkspaceCompactInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTagForWorkspaceRequest();
    $request->requestBody = new CreateTagForWorkspaceRequestBodyInput();
    $request->requestBody->data = new TagResponseInput();
    $request->requestBody->data->color = TagResponseColorEnum::LIGHT_GREEN;
    $request->requestBody->data->name = 'Stuff to buy';
    $request->requestBody->data->notes = 'Mittens really likes the stuff from Humboldt.';
    $request->requestBody->data->workspace = new WorkspaceCompactInput();
    $request->requestBody->data->workspace->name = 'My Company Workspace';
    $request->optFields = [
        'ex',
    ];
    $request->optPretty = false;
    $request->workspaceGid = 'nulla';

    $response = $sdk->tags->createTagForWorkspace($request);

    if ($response->createTagForWorkspace201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTag

A specific, existing tag can be deleted by making a DELETE request on
the URL for that tag.

Returns an empty data record.

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
    $request->limit = 569211;
    $request->offset = 'voluptatibus';
    $request->optFields = [
        'sapiente',
        'quisquam',
    ];
    $request->optPretty = false;
    $request->tagGid = 'saepe';

    $response = $sdk->tags->deleteTag($request);

    if ($response->deleteTag200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTag

Returns the complete tag record for a single tag.

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
    $request->limit = 411372;
    $request->offset = 'impedit';
    $request->optFields = [
        'veniam',
        'aliquid',
    ];
    $request->optPretty = false;
    $request->tagGid = 'inventore';

    $response = $sdk->tags->getTag($request);

    if ($response->getTag200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTags

Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.

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
    $request->limit = 301831;
    $request->offset = 'ea';
    $request->optFields = [
        'consectetur',
        'recusandae',
        'aspernatur',
        'minima',
    ];
    $request->optPretty = false;
    $request->workspace = 'eaque';

    $response = $sdk->tags->getTags($request);

    if ($response->getTags200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsForTask

Get a compact representation of all of the tags the task has.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsForTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsForTaskRequest();
    $request->limit = 952871;
    $request->offset = 'libero';
    $request->optFields = [
        'aut',
    ];
    $request->optPretty = false;
    $request->taskGid = 'deleniti';

    $response = $sdk->tags->getTagsForTask($request);

    if ($response->getTagsForTask200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsForWorkspace

Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsForWorkspaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsForWorkspaceRequest();
    $request->limit = 770581;
    $request->offset = 'aliquam';
    $request->optFields = [
        'accusamus',
    ];
    $request->optPretty = false;
    $request->workspaceGid = 'inventore';

    $response = $sdk->tags->getTagsForWorkspace($request);

    if ($response->getTagsForWorkspace200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTag

Updates the properties of a tag. Only the fields provided in the `data`
block will be updated; any unspecified fields will remain unchanged.

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the tag.

Returns the complete updated tag record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTagRequest();
    $request->limit = 250622;
    $request->offset = 'et';
    $request->optFields = [
        'laborum',
        'placeat',
        'velit',
    ];
    $request->optPretty = false;
    $request->tagGid = 'eum';

    $response = $sdk->tags->updateTag($request);

    if ($response->updateTag200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
