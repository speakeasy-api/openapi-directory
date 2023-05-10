<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateClusterRequestBodyAuthTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateClusterRequest();
    $request->requestBody = new CreateClusterRequestBody();
    $request->requestBody->adminUserName = 'corrupti';
    $request->requestBody->adminUserPassword = 'provident';
    $request->requestBody->authType = CreateClusterRequestBodyAuthTypeEnum::SECRET_ARN;
    $request->requestBody->clientToken = 'quibusdam';
    $request->requestBody->clusterName = 'unde';
    $request->requestBody->kmsKeyId = 'nulla';
    $request->requestBody->preferredMaintenanceWindow = 'corrupti';
    $request->requestBody->shardCapacity = 847252;
    $request->requestBody->shardCount = 423655;
    $request->requestBody->subnetIds = [
        'deserunt',
        'suscipit',
        'iure',
    ];
    $request->requestBody->tags = [
        'debitis' => 'ipsa',
        'delectus' => 'tempora',
    ];
    $request->requestBody->vpcSecurityGroupIds = [
        'molestiae',
        'minus',
    ];
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'temporibus';

    $response = $sdk->createCluster($request);

    if ($response->createClusterOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->