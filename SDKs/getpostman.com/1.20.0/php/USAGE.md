<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiRequestBodyApi;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApiRequest();
    $request->requestBody = new CreateApiRequestBody();
    $request->requestBody->api = new CreateApiRequestBodyApi();
    $request->requestBody->api->description = 'This is description.';
    $request->requestBody->api->name = 'Sync Service API';
    $request->requestBody->api->summary = 'This is supposed to be a short summary.';
    $request->workspace = '{{workspaceId}}';

    $response = $sdk->api->createApi($request);

    if ($response->createApi200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->