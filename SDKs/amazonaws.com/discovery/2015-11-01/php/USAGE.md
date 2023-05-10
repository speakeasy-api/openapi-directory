<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateConfigurationItemsToApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateConfigurationItemsToApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateConfigurationItemsToApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateConfigurationItemsToApplicationRequest();
    $request->associateConfigurationItemsToApplicationRequest = new AssociateConfigurationItemsToApplicationRequest();
    $request->associateConfigurationItemsToApplicationRequest->applicationConfigurationId = 'corrupti';
    $request->associateConfigurationItemsToApplicationRequest->configurationIds = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = AssociateConfigurationItemsToApplicationXAmzTargetEnum::AWS_POSEIDON_SERVICE_V20151101_ASSOCIATE_CONFIGURATION_ITEMS_TO_APPLICATION;

    $response = $sdk->associateConfigurationItemsToApplication($request);

    if ($response->associateConfigurationItemsToApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->