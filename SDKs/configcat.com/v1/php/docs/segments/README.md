# segments

## Overview

With these endpoints you can manage your Segments.
Segments allow you to group your users based on any of their properties. Define user segments and add them to multiple feature flags.

### Available Operations

* [createSegment](#createsegment) - Create Segment
* [deleteSegment](#deletesegment) - Delete Segment
* [getSegment](#getsegment) - Get Segment
* [getSegments](#getsegments) - List Segments
* [updateSegment](#updatesegment) - Update Segment

## createSegment

This endpoint creates a new Segment in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSegmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSegmentModel;
use \OpenAPI\OpenAPI\Models\Shared\RolloutRuleComparatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSegmentRequest();
    $request->createSegmentModel = new CreateSegmentModel();
    $request->createSegmentModel->comparator = RolloutRuleComparatorEnum::SEM_VER_IS_NOT_ONE_OF;
    $request->createSegmentModel->comparisonAttribute = 'eligendi';
    $request->createSegmentModel->comparisonValue = 'distinctio';
    $request->createSegmentModel->description = 'voluptatem';
    $request->createSegmentModel->name = 'Tamara D'Amore MD';
    $request->productId = 'd879eeb9-665b-485e-bbd0-2bae0be2d782';

    $response = $sdk->segments->createSegment($request);

    if ($response->segmentModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSegment

This endpoint removes a Segment identified by the `segmentId` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSegmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSegmentRequest();
    $request->segmentId = '259e3ea4-b519-47f9-a443-da7ce52b895c';

    $response = $sdk->segments->deleteSegment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSegment

This endpoint returns the metadata of a Segment
identified by the `segmentId`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSegmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSegmentRequest();
    $request->segmentId = '537c6454-efb0-4b34-896c-3ca5acfbe2fd';

    $response = $sdk->segments->getSegment($request);

    if ($response->segmentModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSegments

This endpoint returns the list of the Segments that belongs to the given Product identified by the
`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSegmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSegmentsRequest();
    $request->productId = '57075779-2917-47de-ac64-6ecb573409e3';

    $response = $sdk->segments->getSegments($request);

    if ($response->segmentListModelHaljsons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSegment

This endpoint updates a Segment identified by the `segmentId` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSegmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSegmentModel;
use \OpenAPI\OpenAPI\Models\Shared\RolloutRuleComparatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSegmentRequest();
    $request->updateSegmentModel = new UpdateSegmentModel();
    $request->updateSegmentModel->comparator = RolloutRuleComparatorEnum::SENSITIVE_IS_ONE_OF;
    $request->updateSegmentModel->comparisonAttribute = 'cum';
    $request->updateSegmentModel->comparisonValue = 'dicta';
    $request->updateSegmentModel->description = 'earum';
    $request->updateSegmentModel->name = 'Madeline Daniel Sr.';
    $request->segmentId = 'eb07f116-db99-4545-bc95-fa88970e189d';

    $response = $sdk->segments->updateSegment($request);

    if ($response->segmentModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
