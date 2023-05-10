<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentEc2Request;
use \OpenAPI\OpenAPI\Models\Shared\CreateEnvironmentEc2Request;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentEc2XAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEnvironmentEc2Request();
    $request->createEnvironmentEc2Request = new CreateEnvironmentEc2Request();
    $request->createEnvironmentEc2Request->automaticStopTimeMinutes = 548814;
    $request->createEnvironmentEc2Request->clientRequestToken = 'provident';
    $request->createEnvironmentEc2Request->connectionType = ConnectionTypeEnum::CONNECT_SSM;
    $request->createEnvironmentEc2Request->description = 'quibusdam';
    $request->createEnvironmentEc2Request->dryRun = false;
    $request->createEnvironmentEc2Request->imageId = 'unde';
    $request->createEnvironmentEc2Request->instanceType = 'nulla';
    $request->createEnvironmentEc2Request->name = 'Dallas Kassulke';
    $request->createEnvironmentEc2Request->ownerArn = 'suscipit';
    $request->createEnvironmentEc2Request->subnetId = 'iure';
    $request->createEnvironmentEc2Request->tags = [
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
    $request->xAmzTarget = CreateEnvironmentEc2XAmzTargetEnum::AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_CREATE_ENVIRONMENT_EC2;

    $response = $sdk->createEnvironmentEc2($request);

    if ($response->createEnvironmentEc2Result !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->