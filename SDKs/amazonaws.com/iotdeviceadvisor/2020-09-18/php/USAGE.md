<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSuiteDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSuiteDefinitionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DeviceUnderTest;
use \OpenAPI\OpenAPI\Models\Shared\ProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSuiteDefinitionRequest();
    $request->requestBody = new CreateSuiteDefinitionRequestBody();
    $request->requestBody->suiteDefinitionConfiguration = new CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration();
    $request->requestBody->suiteDefinitionConfiguration->devicePermissionRoleArn = 'corrupti';
    $request->requestBody->suiteDefinitionConfiguration->devices = [
        new DeviceUnderTest(),
        new DeviceUnderTest(),
        new DeviceUnderTest(),
    ];
    $request->requestBody->suiteDefinitionConfiguration->intendedForQualification = false;
    $request->requestBody->suiteDefinitionConfiguration->isLongDurationTest = false;
    $request->requestBody->suiteDefinitionConfiguration->protocol = ProtocolEnum::MQTT_V5;
    $request->requestBody->suiteDefinitionConfiguration->rootGroup = 'quibusdam';
    $request->requestBody->suiteDefinitionConfiguration->suiteDefinitionName = 'unde';
    $request->requestBody->tags = [
        'corrupti' => 'illum',
        'vel' => 'error',
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
    ];
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'minus';

    $response = $sdk->createSuiteDefinition($request);

    if ($response->createSuiteDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->