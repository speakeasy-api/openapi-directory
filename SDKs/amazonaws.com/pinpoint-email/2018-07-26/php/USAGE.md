<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationSetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationSetRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationSetRequestBodyDeliveryOptions;
use \OpenAPI\OpenAPI\Models\Shared\TlsPolicyEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationSetRequestBodyReputationOptions;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationSetRequestBodySendingOptions;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateConfigurationSetRequestBodyTrackingOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConfigurationSetRequest();
    $request->requestBody = new CreateConfigurationSetRequestBody();
    $request->requestBody->configurationSetName = 'corrupti';
    $request->requestBody->deliveryOptions = new CreateConfigurationSetRequestBodyDeliveryOptions();
    $request->requestBody->deliveryOptions->sendingPoolName = 'provident';
    $request->requestBody->deliveryOptions->tlsPolicy = TlsPolicyEnum::OPTIONAL;
    $request->requestBody->reputationOptions = new CreateConfigurationSetRequestBodyReputationOptions();
    $request->requestBody->reputationOptions->lastFreshStart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-11T23:22:42.658Z');
    $request->requestBody->reputationOptions->reputationMetricsEnabled = false;
    $request->requestBody->sendingOptions = new CreateConfigurationSetRequestBodySendingOptions();
    $request->requestBody->sendingOptions->sendingEnabled = false;
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->trackingOptions = new CreateConfigurationSetRequestBodyTrackingOptions();
    $request->requestBody->trackingOptions->customRedirectDomain = 'corrupti';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->createConfigurationSet($request);

    if ($response->createConfigurationSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->