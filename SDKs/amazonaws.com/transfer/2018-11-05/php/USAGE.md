<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\HomeDirectoryMapEntry;
use \OpenAPI\OpenAPI\Models\Shared\HomeDirectoryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosixProfile;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccessRequest();
    $request->createAccessRequest = new CreateAccessRequest();
    $request->createAccessRequest->externalId = 'corrupti';
    $request->createAccessRequest->homeDirectory = 'provident';
    $request->createAccessRequest->homeDirectoryMappings = [
        new HomeDirectoryMapEntry(),
        new HomeDirectoryMapEntry(),
        new HomeDirectoryMapEntry(),
    ];
    $request->createAccessRequest->homeDirectoryType = HomeDirectoryTypeEnum::LOGICAL;
    $request->createAccessRequest->policy = 'unde';
    $request->createAccessRequest->posixProfile = new PosixProfile();
    $request->createAccessRequest->posixProfile->gid = 857946;
    $request->createAccessRequest->posixProfile->secondaryGids = [
        847252,
        423655,
        623564,
    ];
    $request->createAccessRequest->posixProfile->uid = 645894;
    $request->createAccessRequest->role = 'suscipit';
    $request->createAccessRequest->serverId = 'iure';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = CreateAccessXAmzTargetEnum::TRANSFER_SERVICE_CREATE_ACCESS;

    $response = $sdk->createAccess($request);

    if ($response->createAccessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->