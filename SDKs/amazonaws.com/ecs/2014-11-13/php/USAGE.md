<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCapacityProviderRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCapacityProviderRequest;
use \OpenAPI\OpenAPI\Models\Shared\AutoScalingGroupProvider;
use \OpenAPI\OpenAPI\Models\Shared\ManagedScaling;
use \OpenAPI\OpenAPI\Models\Shared\ManagedScalingStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedTerminationProtectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateCapacityProviderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCapacityProviderRequest();
    $request->createCapacityProviderRequest = new CreateCapacityProviderRequest();
    $request->createCapacityProviderRequest->autoScalingGroupProvider = new AutoScalingGroupProvider();
    $request->createCapacityProviderRequest->autoScalingGroupProvider->autoScalingGroupArn = 'corrupti';
    $request->createCapacityProviderRequest->autoScalingGroupProvider->managedScaling = new ManagedScaling();
    $request->createCapacityProviderRequest->autoScalingGroupProvider->managedScaling->instanceWarmupPeriod = 592845;
    $request->createCapacityProviderRequest->autoScalingGroupProvider->managedScaling->maximumScalingStepSize = 715190;
    $request->createCapacityProviderRequest->autoScalingGroupProvider->managedScaling->minimumScalingStepSize = 844266;
    $request->createCapacityProviderRequest->autoScalingGroupProvider->managedScaling->status = ManagedScalingStatusEnum::DISABLED;
    $request->createCapacityProviderRequest->autoScalingGroupProvider->managedScaling->targetCapacity = 857946;
    $request->createCapacityProviderRequest->autoScalingGroupProvider->managedTerminationProtection = ManagedTerminationProtectionEnum::DISABLED;
    $request->createCapacityProviderRequest->name = 'Ben Mueller';
    $request->createCapacityProviderRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = CreateCapacityProviderXAmzTargetEnum::AMAZON_EC2_CONTAINER_SERVICE_V20141113_CREATE_CAPACITY_PROVIDER;

    $response = $sdk->createCapacityProvider($request);

    if ($response->createCapacityProviderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->