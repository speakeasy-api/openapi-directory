# tag

## Overview

Create and list tags and tag sets

### Available Operations

* [getTags](#gettags) - List tags
* [getTagsId](#gettagsid) - Retrieve a single tag by id
* [getTagsets](#gettagsets) - List tag sets
* [getTagsetsId](#gettagsetsid) - Retrieve a single tag set by id
* [postTags](#posttags) - Create a new tag
* [postTagsets](#posttagsets) - Create a new tag set

## getTags

Retrieve tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsRequest();
    $request->ownedBy = 'repudiandae';
    $request->tagSet = 'quasi';
    $request->urlWords = 'atque';

    $response = $sdk->tag->getTags($request);

    if ($response->tags !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsId

Retrieve a single tag by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsIdRequest();
    $request->id = '7f86bc17-3d68-49ee-a952-6f8d986e881e';

    $response = $sdk->tag->getTagsId($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsets

Retrieve tag sets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsetsRequest();
    $request->ownedBy = 'dolorum';
    $request->urlWords = 'repellendus';

    $response = $sdk->tag->getTagsets($request);

    if ($response->tagSets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsetsId

Retrieve a single tag set by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsetsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsetsIdRequest();
    $request->id = '4f0e1012-563f-494e-a9e9-73e922a57a15';

    $response = $sdk->tag->getTagsetsId($request);

    if ($response->tagSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTags

Create a new tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\TagSubmission;
use \OpenAPI\OpenAPI\Models\Shared\TagSet;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagSubmission();
    $request->colour = 'quidem';
    $request->name = 'Ms. Melvin Thiel IV';
    $request->tagSet = new TagSet();
    $request->tagSet->id = '07e2b6e3-ab88-445f-8597-a60ff2a54a31';
    $request->tagSet->name = 'Arturo Hagenes';
    $request->urlWords = 'ut';

    $response = $sdk->tag->postTags($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTagsets

Create a new tag set

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\TagSetSubmission;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagSetSubmission();
    $request->name = 'Jeff Toy';
    $request->urlWords = 'nemo';

    $response = $sdk->tag->postTagsets($request);

    if ($response->tagSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
