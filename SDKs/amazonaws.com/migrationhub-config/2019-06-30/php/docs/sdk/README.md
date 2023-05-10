# SDK

## Overview

<p>The AWS Migration Hub home region APIs are available specifically for working with your Migration Hub home region. You can use these APIs to determine a home region, as well as to create and work with controls that describe the home region.</p> <ul> <li> <p>You must make API calls for write actions (create, notify, associate, disassociate, import, or put) while in your home region, or a <code>HomeRegionNotSetException</code> error is returned.</p> </li> <li> <p>API calls for read actions (list, describe, stop, and delete) are permitted outside of your home region.</p> </li> <li> <p>If you call a write API outside the home region, an <code>InvalidInputException</code> is returned.</p> </li> <li> <p>You can call <code>GetHomeRegion</code> action to obtain the account's Migration Hub home region.</p> </li> </ul> <p>For specific API usage, see the sections that follow in this AWS Migration Hub Home Region API reference. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/migrationhub-config/>
### Available Operations

* [createHomeRegionControl](#createhomeregioncontrol) - This API sets up the home region for the calling account only.
* [describeHomeRegionControls](#describehomeregioncontrols) - This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code> fields.
* [getHomeRegion](#gethomeregion) - Returns the calling account’s home region, if configured. This API is used by other AWS services to determine the regional endpoint for calling AWS Application Discovery Service and Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's Migration Hub home region.

## createHomeRegionControl

This API sets up the home region for the calling account only.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateHomeRegionControlRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateHomeRegionControlRequest;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Shared\TargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateHomeRegionControlXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateHomeRegionControlRequest();
    $request->createHomeRegionControlRequest = new CreateHomeRegionControlRequest();
    $request->createHomeRegionControlRequest->dryRun = false;
    $request->createHomeRegionControlRequest->homeRegion = 'at';
    $request->createHomeRegionControlRequest->target = new Target();
    $request->createHomeRegionControlRequest->target->id = 'f7cc78ca-1ba9-428f-8816-742cb7392059';
    $request->createHomeRegionControlRequest->target->type = TargetTypeEnum::ACCOUNT;
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = CreateHomeRegionControlXAmzTargetEnum::AWS_MIGRATION_HUB_MULTI_ACCOUNT_SERVICE_CREATE_HOME_REGION_CONTROL;

    $response = $sdk->sdk->createHomeRegionControl($request);

    if ($response->createHomeRegionControlResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeHomeRegionControls

This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code> fields.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeHomeRegionControlsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeHomeRegionControlsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Shared\TargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeHomeRegionControlsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeHomeRegionControlsRequest();
    $request->describeHomeRegionControlsRequest = new DescribeHomeRegionControlsRequest();
    $request->describeHomeRegionControlsRequest->controlId = 'fuga';
    $request->describeHomeRegionControlsRequest->homeRegion = 'in';
    $request->describeHomeRegionControlsRequest->maxResults = 359508;
    $request->describeHomeRegionControlsRequest->nextToken = 'iste';
    $request->describeHomeRegionControlsRequest->target = new Target();
    $request->describeHomeRegionControlsRequest->target->id = '6eb10faa-a235-42c5-9559-07aff1a3a2fa';
    $request->describeHomeRegionControlsRequest->target->type = TargetTypeEnum::ACCOUNT;
    $request->maxResults = 'occaecati';
    $request->nextToken = 'numquam';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = DescribeHomeRegionControlsXAmzTargetEnum::AWS_MIGRATION_HUB_MULTI_ACCOUNT_SERVICE_DESCRIBE_HOME_REGION_CONTROLS;

    $response = $sdk->sdk->describeHomeRegionControls($request);

    if ($response->describeHomeRegionControlsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHomeRegion

Returns the calling account’s home region, if configured. This API is used by other AWS services to determine the regional endpoint for calling AWS Application Discovery Service and Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's Migration Hub home region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetHomeRegionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetHomeRegionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHomeRegionRequest();
    $request->requestBody = [
        'laborum' => 'animi',
    ];
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = GetHomeRegionXAmzTargetEnum::AWS_MIGRATION_HUB_MULTI_ACCOUNT_SERVICE_GET_HOME_REGION;

    $response = $sdk->sdk->getHomeRegion($request);

    if ($response->getHomeRegionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
