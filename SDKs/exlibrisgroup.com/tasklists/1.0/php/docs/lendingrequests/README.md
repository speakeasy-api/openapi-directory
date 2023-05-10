# lendingRequests

### Available Operations

* [getAlmawsV1TaskListsRsLendingRequests](#getalmawsv1tasklistsrslendingrequests) - Get Lending Requests
* [postAlmawsV1TaskListsRsLendingRequests](#postalmawsv1tasklistsrslendingrequests) - Act on Lending Requests

## getAlmawsV1TaskListsRsLendingRequests

This API returns a list of lending requests in Alma

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAlmawsV1TaskListsRsLendingRequestsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAlmawsV1TaskListsRsLendingRequestsRequest();
    $request->library = 'illum';
    $request->partner = 'vel';
    $request->printed = 'error';
    $request->reported = 'deserunt';
    $request->requestedFormat = 'suscipit';
    $request->status = 'iure';
    $request->suppliedFormat = 'magnam';

    $response = $sdk->lendingRequests->getAlmawsV1TaskListsRsLendingRequests($request);

    if ($response->getAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAlmawsV1TaskListsRsLendingRequests

This API preforms the requested action on a list (specified by given filters) of lending requests in Alma

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAlmawsV1TaskListsRsLendingRequestsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAlmawsV1TaskListsRsLendingRequestsRequest();
    $request->library = 'debitis';
    $request->op = 'ipsa';
    $request->partner = 'delectus';
    $request->printed = 'tempora';
    $request->reported = 'suscipit';
    $request->requestedFormat = 'molestiae';
    $request->status = 'minus';
    $request->suppliedFormat = 'placeat';

    $response = $sdk->lendingRequests->postAlmawsV1TaskListsRsLendingRequests($request);

    if ($response->onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
