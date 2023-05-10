# requestedResources

### Available Operations

* [getAlmawsV1TaskListsRequestedResources](#getalmawsv1tasklistsrequestedresources) - Get Requested Resources
* [postAlmawsV1TaskListsRequestedResources](#postalmawsv1tasklistsrequestedresources) - Act on Requested Resources

## getAlmawsV1TaskListsRequestedResources

This API returns a list of requested resources to be picked from the shelf in Alma

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAlmawsV1TaskListsRequestedResourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAlmawsV1TaskListsRequestedResourcesRequest();
    $request->circDesk = 'quo';
    $request->direction = 'odit';
    $request->library = 'at';
    $request->limit = 870088;
    $request->location = 'maiores';
    $request->offset = 473608;
    $request->orderBy = 'quod';
    $request->pickupInst = 'quod';
    $request->printed = 'esse';
    $request->reported = 'totam';

    $response = $sdk->requestedResources->getAlmawsV1TaskListsRequestedResources($request);

    if ($response->getAlmawsV1TaskListsRequestedResources200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAlmawsV1TaskListsRequestedResources

This API performs an action on requested resources that are on the shelf in Alma

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAlmawsV1TaskListsRequestedResourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAlmawsV1TaskListsRequestedResourcesRequest();
    $request->circDesk = 'porro';
    $request->library = 'dolorum';
    $request->location = 'dicta';
    $request->op = 'nam';
    $request->pickupInst = 'officia';
    $request->printed = 'occaecati';
    $request->reported = 'fugit';

    $response = $sdk->requestedResources->postAlmawsV1TaskListsRequestedResources($request);

    if ($response->onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
