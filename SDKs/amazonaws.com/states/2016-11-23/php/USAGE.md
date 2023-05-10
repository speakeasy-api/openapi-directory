<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateActivityRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateActivityInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateActivityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateActivityRequest();
    $request->createActivityInput = new CreateActivityInput();
    $request->createActivityInput->name = 'Terrence Rau';
    $request->createActivityInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = CreateActivityXAmzTargetEnum::AWS_STEP_FUNCTIONS_CREATE_ACTIVITY;

    $response = $sdk->createActivity($request);

    if ($response->createActivityOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->