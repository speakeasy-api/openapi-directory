# mocks

### Available Operations

* [allMocks](#allmocks) - All Mocks
* [createMock](#createmock) - Create Mock
* [deleteMock](#deletemock) - Delete Mock
* [publishMock](#publishmock) - Publish Mock
* [singleMock](#singlemock) - Single Mock
* [unpublishMock](#unpublishmock) - Unpublish Mock
* [updateMock](#updatemock) - Update Mock

## allMocks

This endpoint fetches all the mocks that you have created.

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
    $response = $sdk->mocks->allMocks();

    if ($response->allMocks200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMock

This endpoint allows you to create a mock on a collection. You can also provide an environment UID to resolve any environment variables in the collection.

You can also specify the context of a workspace to create a mock in directly by passing the `workspace` as a query param.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateMockRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateMockRequestBodyMock;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMockRequestBody();
    $request->mock = new CreateMockRequestBodyMock();
    $request->mock->collection = '1679925-39fee52f-b806-3ffa-1173-00a6f5b183dc';
    $request->mock->environment = '1679925-0b9e9f15-3208-a2b1-22e0-d58392f01524';

    $response = $sdk->mocks->createMock($request);

    if ($response->createMock200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMock

This endpoint allows you to delete an existing mock using its `uid`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMockRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMockRequest();
    $request->mockUid = 'excepturi';

    $response = $sdk->mocks->deleteMock($request);

    if ($response->deleteMock200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishMock

This endpoint publishes the mock you have created using its `uid`

> Requires <a href="#authentication">API Key</a> as `X-Api-Key ` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PublishMockRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishMockRequest();
    $request->mockUid = 'aspernatur';

    $response = $sdk->mocks->publishMock($request);

    if ($response->publishMock200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## singleMock

This endpoint fetches you the basic information about a single mock using its `uid`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SingleMockRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SingleMockRequest();
    $request->mockUid = 'perferendis';

    $response = $sdk->mocks->singleMock($request);

    if ($response->singleMock200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unpublishMock

This endpoint unpublishes the mock you have created using its `uid`

> Requires <a href="#authentication">API Key</a> as `X-Api-Key ` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UnpublishMockRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnpublishMockRequest();
    $request->mockUid = 'ad';

    $response = $sdk->mocks->unpublishMock($request);

    if ($response->unpublishMock200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMock

This endpoint allows you to update a mock you have created using its `uid`. The endpoint allows you to edit fields,
* name
* environment
* description
* private
* versionTag

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMockRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMockRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMockRequestBodyMock;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMockRequest();
    $request->requestBody = new UpdateMockRequestBody();
    $request->requestBody->mock = new UpdateMockRequestBodyMock();
    $request->requestBody->mock->description = 'example describing update mock description';
    $request->requestBody->mock->environment = '11582779-ac1b6608-deb7-4c05-9d48-ee775aabfc19';
    $request->requestBody->mock->name = 'My Mock Server';
    $request->requestBody->mock->private = false;
    $request->requestBody->mock->versionTag = 'abf07d3d-f8ec-47d4-8015-9fe83078b4ec';
    $request->mockUid = 'natus';

    $response = $sdk->mocks->updateMock($request);

    if ($response->updateMock200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
