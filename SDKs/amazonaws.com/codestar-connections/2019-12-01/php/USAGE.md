<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\ProviderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConnectionRequest();
    $request->createConnectionInput = new CreateConnectionInput();
    $request->createConnectionInput->connectionName = 'corrupti';
    $request->createConnectionInput->hostArn = 'provident';
    $request->createConnectionInput->providerType = ProviderTypeEnum::GIT_HUB_ENTERPRISE_SERVER;
    $request->createConnectionInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = CreateConnectionXAmzTargetEnum::COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS20191201_CREATE_CONNECTION;

    $response = $sdk->createConnection($request);

    if ($response->createConnectionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->