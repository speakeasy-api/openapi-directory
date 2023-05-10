<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddCustomAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddCustomAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\SchemaAttributeType;
use \OpenAPI\OpenAPI\Models\Shared\AttributeDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NumberAttributeConstraintsType;
use \OpenAPI\OpenAPI\Models\Shared\StringAttributeConstraintsType;
use \OpenAPI\OpenAPI\Models\Operations\AddCustomAttributesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddCustomAttributesRequest();
    $request->addCustomAttributesRequest = new AddCustomAttributesRequest();
    $request->addCustomAttributesRequest->customAttributes = [
        new SchemaAttributeType(),
        new SchemaAttributeType(),
        new SchemaAttributeType(),
    ];
    $request->addCustomAttributesRequest->userPoolId = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = AddCustomAttributesXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADD_CUSTOM_ATTRIBUTES;

    $response = $sdk->addCustomAttributes($request);

    if ($response->addCustomAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->