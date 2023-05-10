<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETActivateTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETActivateTypeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETActivateTypeLoggingConfig;
use \OpenAPI\OpenAPI\Models\Operations\GETActivateTypeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETActivateTypeVersionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETActivateTypeVersionBumpEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETActivateTypeRequest();
    $request->action = GETActivateTypeActionEnum::ACTIVATE_TYPE;
    $request->autoUpdate = false;
    $request->executionRoleArn = 'corrupti';
    $request->loggingConfig = new GETActivateTypeLoggingConfig();
    $request->loggingConfig->logGroupName = 'provident';
    $request->loggingConfig->logRoleArn = 'distinctio';
    $request->majorVersion = 844266;
    $request->publicTypeArn = 'unde';
    $request->publisherId = 'nulla';
    $request->type = GETActivateTypeTypeEnum::MODULE;
    $request->typeName = 'illum';
    $request->typeNameAlias = 'vel';
    $request->version = GETActivateTypeVersionEnum::TWO_THOUSAND_AND_TEN0515;
    $request->versionBump = GETActivateTypeVersionBumpEnum::MINOR;
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->getActivateType($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->