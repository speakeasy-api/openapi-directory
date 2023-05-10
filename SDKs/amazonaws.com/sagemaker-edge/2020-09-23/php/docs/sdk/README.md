# SDK

## Overview

SageMaker Edge Manager dataplane service for communicating with active agents.

Amazon Web Services documentation
<https://docs.aws.amazon.com/sagemaker/>
### Available Operations

* [getDeployments](#getdeployments) - Use to get the active deployments from a device.
* [getDeviceRegistration](#getdeviceregistration) - Use to check if a device is registered with SageMaker Edge Manager.
* [sendHeartbeat](#sendheartbeat) - Use to get the current status of devices registered on SageMaker Edge Manager.

## getDeployments

Use to get the active deployments from a device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeploymentsRequest();
    $request->requestBody = new GetDeploymentsRequestBody();
    $request->requestBody->deviceFleetName = 'error';
    $request->requestBody->deviceName = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->getDeployments($request);

    if ($response->getDeploymentsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceRegistration

Use to check if a device is registered with SageMaker Edge Manager.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceRegistrationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceRegistrationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceRegistrationRequest();
    $request->requestBody = new GetDeviceRegistrationRequestBody();
    $request->requestBody->deviceFleetName = 'suscipit';
    $request->requestBody->deviceName = 'molestiae';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->getDeviceRegistration($request);

    if ($response->getDeviceRegistrationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendHeartbeat

Use to get the current status of devices registered on SageMaker Edge Manager.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendHeartbeatRequest;
use \OpenAPI\OpenAPI\Models\Operations\SendHeartbeatRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\EdgeMetric;
use \OpenAPI\OpenAPI\Models\Operations\SendHeartbeatRequestBodyDeploymentResult;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentModel;
use \OpenAPI\OpenAPI\Models\Shared\ModelStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeploymentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Model;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendHeartbeatRequest();
    $request->requestBody = new SendHeartbeatRequestBody();
    $request->requestBody->agentMetrics = [
        new EdgeMetric(),
        new EdgeMetric(),
        new EdgeMetric(),
        new EdgeMetric(),
    ];
    $request->requestBody->agentVersion = 'ab';
    $request->requestBody->deploymentResult = new SendHeartbeatRequestBodyDeploymentResult();
    $request->requestBody->deploymentResult->deploymentEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-30T04:44:49.578Z');
    $request->requestBody->deploymentResult->deploymentModels = [
        new DeploymentModel(),
        new DeploymentModel(),
        new DeploymentModel(),
    ];
    $request->requestBody->deploymentResult->deploymentName = 'perferendis';
    $request->requestBody->deploymentResult->deploymentStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-03T02:15:00.468Z');
    $request->requestBody->deploymentResult->deploymentStatus = 'sapiente';
    $request->requestBody->deploymentResult->deploymentStatusMessage = 'quo';
    $request->requestBody->deviceFleetName = 'odit';
    $request->requestBody->deviceName = 'at';
    $request->requestBody->models = [
        new Model(),
        new Model(),
        new Model(),
        new Model(),
    ];
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'porro';

    $response = $sdk->sdk->sendHeartbeat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
