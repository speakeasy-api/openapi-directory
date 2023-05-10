<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateClusterRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClusterEndpointEncryptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SSESpecification;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateClusterRequest();
    $request->createClusterRequest = new CreateClusterRequest();
    $request->createClusterRequest->availabilityZones = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->createClusterRequest->clusterEndpointEncryptionType = ClusterEndpointEncryptionTypeEnum::TLS;
    $request->createClusterRequest->clusterName = 'nulla';
    $request->createClusterRequest->description = 'corrupti';
    $request->createClusterRequest->iamRoleArn = 'illum';
    $request->createClusterRequest->nodeType = 'vel';
    $request->createClusterRequest->notificationTopicArn = 'error';
    $request->createClusterRequest->parameterGroupName = 'deserunt';
    $request->createClusterRequest->preferredMaintenanceWindow = 'suscipit';
    $request->createClusterRequest->replicationFactor = 437587;
    $request->createClusterRequest->sseSpecification = new SSESpecification();
    $request->createClusterRequest->sseSpecification->enabled = false;
    $request->createClusterRequest->securityGroupIds = [
        'debitis',
        'ipsa',
    ];
    $request->createClusterRequest->subnetGroupName = 'delectus';
    $request->createClusterRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = CreateClusterXAmzTargetEnum::AMAZON_DAXV3_CREATE_CLUSTER;

    $response = $sdk->createCluster($request);

    if ($response->createClusterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->