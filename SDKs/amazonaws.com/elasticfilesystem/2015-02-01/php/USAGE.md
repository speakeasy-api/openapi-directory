<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessPointRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessPointRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessPointRequestBodyPosixUser;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessPointRequestBodyRootDirectory;
use \OpenAPI\OpenAPI\Models\Shared\CreationInfo;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccessPointRequest();
    $request->requestBody = new CreateAccessPointRequestBody();
    $request->requestBody->clientToken = 'corrupti';
    $request->requestBody->fileSystemId = 'provident';
    $request->requestBody->posixUser = new CreateAccessPointRequestBodyPosixUser();
    $request->requestBody->posixUser->gid = 715190;
    $request->requestBody->posixUser->secondaryGids = [
        602763,
        857946,
        544883,
        847252,
    ];
    $request->requestBody->posixUser->uid = 423655;
    $request->requestBody->rootDirectory = new CreateAccessPointRequestBodyRootDirectory();
    $request->requestBody->rootDirectory->creationInfo = new CreationInfo();
    $request->requestBody->rootDirectory->creationInfo->ownerGid = 623564;
    $request->requestBody->rootDirectory->creationInfo->ownerUid = 645894;
    $request->requestBody->rootDirectory->creationInfo->permissions = 'suscipit';
    $request->requestBody->rootDirectory->path = 'iure';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'minus';

    $response = $sdk->createAccessPoint($request);

    if ($response->accessPointDescription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->