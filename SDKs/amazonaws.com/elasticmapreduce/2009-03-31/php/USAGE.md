<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddInstanceFleetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddInstanceFleetInput;
use \OpenAPI\OpenAPI\Models\Shared\InstanceFleetConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceFleetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceTypeConfig;
use \OpenAPI\OpenAPI\Models\Shared\Configuration;
use \OpenAPI\OpenAPI\Models\Shared\EbsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EbsBlockDeviceConfig;
use \OpenAPI\OpenAPI\Models\Shared\VolumeSpecification;
use \OpenAPI\OpenAPI\Models\Shared\InstanceFleetProvisioningSpecifications;
use \OpenAPI\OpenAPI\Models\Shared\OnDemandProvisioningSpecification;
use \OpenAPI\OpenAPI\Models\Shared\OnDemandProvisioningAllocationStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnDemandCapacityReservationOptions;
use \OpenAPI\OpenAPI\Models\Shared\OnDemandCapacityReservationPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnDemandCapacityReservationUsageStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SpotProvisioningSpecification;
use \OpenAPI\OpenAPI\Models\Shared\SpotProvisioningAllocationStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SpotProvisioningTimeoutActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceFleetResizingSpecifications;
use \OpenAPI\OpenAPI\Models\Shared\OnDemandResizingSpecification;
use \OpenAPI\OpenAPI\Models\Shared\SpotResizingSpecification;
use \OpenAPI\OpenAPI\Models\Operations\AddInstanceFleetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddInstanceFleetRequest();
    $request->addInstanceFleetInput = new AddInstanceFleetInput();
    $request->addInstanceFleetInput->clusterId = 'corrupti';
    $request->addInstanceFleetInput->instanceFleet = new InstanceFleetConfig();
    $request->addInstanceFleetInput->instanceFleet->instanceFleetType = InstanceFleetTypeEnum::CORE;
    $request->addInstanceFleetInput->instanceFleet->instanceTypeConfigs = [
        new InstanceTypeConfig(),
        new InstanceTypeConfig(),
        new InstanceTypeConfig(),
    ];
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications = new InstanceFleetProvisioningSpecifications();
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->onDemandSpecification = new OnDemandProvisioningSpecification();
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->onDemandSpecification->allocationStrategy = OnDemandProvisioningAllocationStrategyEnum::LOWEST_PRICE;
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->onDemandSpecification->capacityReservationOptions = new OnDemandCapacityReservationOptions();
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->onDemandSpecification->capacityReservationOptions->capacityReservationPreference = OnDemandCapacityReservationPreferenceEnum::NONE;
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->onDemandSpecification->capacityReservationOptions->capacityReservationResourceGroupArn = 'unde';
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->onDemandSpecification->capacityReservationOptions->usageStrategy = OnDemandCapacityReservationUsageStrategyEnum::USE_CAPACITY_RESERVATIONS_FIRST;
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->spotSpecification = new SpotProvisioningSpecification();
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->spotSpecification->allocationStrategy = SpotProvisioningAllocationStrategyEnum::CAPACITY_OPTIMIZED;
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->spotSpecification->blockDurationMinutes = 857946;
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->spotSpecification->timeoutAction = SpotProvisioningTimeoutActionEnum::TERMINATE_CLUSTER;
    $request->addInstanceFleetInput->instanceFleet->launchSpecifications->spotSpecification->timeoutDurationMinutes = 847252;
    $request->addInstanceFleetInput->instanceFleet->name = 'Sabrina Oberbrunner';
    $request->addInstanceFleetInput->instanceFleet->resizeSpecifications = new InstanceFleetResizingSpecifications();
    $request->addInstanceFleetInput->instanceFleet->resizeSpecifications->onDemandResizeSpecification = new OnDemandResizingSpecification();
    $request->addInstanceFleetInput->instanceFleet->resizeSpecifications->onDemandResizeSpecification->timeoutDurationMinutes = 297534;
    $request->addInstanceFleetInput->instanceFleet->resizeSpecifications->spotResizeSpecification = new SpotResizingSpecification();
    $request->addInstanceFleetInput->instanceFleet->resizeSpecifications->spotResizeSpecification->timeoutDurationMinutes = 891773;
    $request->addInstanceFleetInput->instanceFleet->targetOnDemandCapacity = 56713;
    $request->addInstanceFleetInput->instanceFleet->targetSpotCapacity = 963663;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = AddInstanceFleetXAmzTargetEnum::ELASTIC_MAP_REDUCE_ADD_INSTANCE_FLEET;

    $response = $sdk->addInstanceFleet($request);

    if ($response->addInstanceFleetOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->