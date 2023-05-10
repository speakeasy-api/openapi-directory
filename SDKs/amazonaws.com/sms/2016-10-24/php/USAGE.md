<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServerGroup;
use \OpenAPI\OpenAPI\Models\Shared\Server;
use \OpenAPI\OpenAPI\Models\Shared\ServerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmServer;
use \OpenAPI\OpenAPI\Models\Shared\VmManagerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VmServerAddress;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAppRequest();
    $request->createAppRequest = new CreateAppRequest();
    $request->createAppRequest->clientToken = 'corrupti';
    $request->createAppRequest->description = 'provident';
    $request->createAppRequest->name = 'Ellis Mitchell';
    $request->createAppRequest->roleName = 'illum';
    $request->createAppRequest->serverGroups = [
        new ServerGroup(),
        new ServerGroup(),
    ];
    $request->createAppRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = CreateAppXAmzTargetEnum::AWS_SERVER_MIGRATION_SERVICE_V20161024_CREATE_APP;

    $response = $sdk->createApp($request);

    if ($response->createAppResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->