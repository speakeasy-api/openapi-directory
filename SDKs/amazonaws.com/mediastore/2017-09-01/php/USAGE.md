<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateContainerRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateContainerInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateContainerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateContainerRequest();
    $request->createContainerInput = new CreateContainerInput();
    $request->createContainerInput->containerName = 'corrupti';
    $request->createContainerInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = CreateContainerXAmzTargetEnum::MEDIA_STORE20170901_CREATE_CONTAINER;

    $response = $sdk->createContainer($request);

    if ($response->createContainerOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->