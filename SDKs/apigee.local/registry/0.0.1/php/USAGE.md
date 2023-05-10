<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryCreateApiRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryCreateApiRequest();
    $request->apiInput = new ApiInput();
    $request->apiInput->annotations = [
        'provident' => 'distinctio',
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
    ];
    $request->apiInput->availability = 'illum';
    $request->apiInput->description = 'vel';
    $request->apiInput->displayName = 'error';
    $request->apiInput->labels = [
        'suscipit' => 'iure',
        'magnam' => 'debitis',
        'ipsa' => 'delectus',
    ];
    $request->apiInput->name = 'Laurie Kreiger';
    $request->apiInput->recommendedDeployment = 'voluptatum';
    $request->apiInput->recommendedVersion = 'iusto';
    $request->apiId = 'excepturi';
    $request->location = 'nisi';
    $request->project = 'recusandae';

    $response = $sdk->registry->registryCreateApi($request);

    if ($response->api !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->