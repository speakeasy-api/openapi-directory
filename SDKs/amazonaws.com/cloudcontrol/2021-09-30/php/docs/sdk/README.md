# SDK

## Overview

For more information about Amazon Web Services Cloud Control API, see the <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/what-is-cloudcontrolapi.html">Amazon Web Services Cloud Control API User Guide</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/cloudcontrolapi/>
### Available Operations

* [cancelResourceRequest](#cancelresourcerequest) - <p>Cancels the specified resource operation request. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-cancel">Canceling resource operation requests</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>Only resource operations requests with a status of <code>PENDING</code> or <code>IN_PROGRESS</code> can be canceled.</p>
* [createResource](#createresource) - <p>Creates the specified resource. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-create.html">Creating a resource</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>After you have initiated a resource creation request, you can monitor the progress of your request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the <code>ProgressEvent</code> type returned by <code>CreateResource</code>.</p>
* [deleteResource](#deleteresource) - <p>Deletes the specified resource. For details, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-delete.html">Deleting a resource</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>After you have initiated a resource deletion request, you can monitor the progress of your request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the <code>ProgressEvent</code> returned by <code>DeleteResource</code>.</p>
* [getResource](#getresource) - <p>Returns information about the current state of the specified resource. For details, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-read.html">Reading a resource's current state</a>.</p> <p>You can use this action to return information about an existing resource in your account and Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.</p>
* [getResourceRequestStatus](#getresourcerequeststatus) - Returns the current status of a resource operation request. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-track">Tracking the progress of resource operation requests</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.
* [listResourceRequests](#listresourcerequests) - <p>Returns existing resource operation requests. This includes requests of all status types. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-list">Listing active resource operation requests</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <note> <p>Resource operation requests expire after 7 days.</p> </note>
* [listResources](#listresources) - <p>Returns information about the specified resources. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-list.html">Discovering resources</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>You can use this action to return information about existing resources in your account and Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.</p>
* [updateResource](#updateresource) - <p>Updates the specified property values in the resource.</p> <p>You specify your resource property updates as a list of patch operations contained in a JSON patch document that adheres to the <a href="https://datatracker.ietf.org/doc/html/rfc6902"> <i>RFC 6902 - JavaScript Object Notation (JSON) Patch</i> </a> standard.</p> <p>For details on how Cloud Control API performs resource update operations, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-update.html">Updating a resource</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>After you have initiated a resource update request, you can monitor the progress of your request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the <code>ProgressEvent</code> returned by <code>UpdateResource</code>.</p> <p>For more information about the properties of a specific resource, refer to the related topic for the resource in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Resource and property types reference</a> in the <i>CloudFormation Users Guide</i>.</p>

## cancelResourceRequest

<p>Cancels the specified resource operation request. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-cancel">Canceling resource operation requests</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>Only resource operations requests with a status of <code>PENDING</code> or <code>IN_PROGRESS</code> can be canceled.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelResourceRequestRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelResourceRequestInput;
use \OpenAPI\OpenAPI\Models\Operations\CancelResourceRequestXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelResourceRequestRequest();
    $request->cancelResourceRequestInput = new CancelResourceRequestInput();
    $request->cancelResourceRequestInput->requestToken = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = CancelResourceRequestXAmzTargetEnum::CLOUD_API_SERVICE_CANCEL_RESOURCE_REQUEST;

    $response = $sdk->sdk->cancelResourceRequest($request);

    if ($response->cancelResourceRequestOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createResource

<p>Creates the specified resource. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-create.html">Creating a resource</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>After you have initiated a resource creation request, you can monitor the progress of your request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the <code>ProgressEvent</code> type returned by <code>CreateResource</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateResourceRequest();
    $request->createResourceInput = new CreateResourceInput();
    $request->createResourceInput->clientToken = 'delectus';
    $request->createResourceInput->desiredState = 'tempora';
    $request->createResourceInput->roleArn = 'suscipit';
    $request->createResourceInput->typeName = 'molestiae';
    $request->createResourceInput->typeVersionId = 'minus';
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = CreateResourceXAmzTargetEnum::CLOUD_API_SERVICE_CREATE_RESOURCE;

    $response = $sdk->sdk->createResource($request);

    if ($response->createResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResource

<p>Deletes the specified resource. For details, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-delete.html">Deleting a resource</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>After you have initiated a resource deletion request, you can monitor the progress of your request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the <code>ProgressEvent</code> returned by <code>DeleteResource</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourceRequest();
    $request->deleteResourceInput = new DeleteResourceInput();
    $request->deleteResourceInput->clientToken = 'ab';
    $request->deleteResourceInput->identifier = 'quis';
    $request->deleteResourceInput->roleArn = 'veritatis';
    $request->deleteResourceInput->typeName = 'deserunt';
    $request->deleteResourceInput->typeVersionId = 'perferendis';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = DeleteResourceXAmzTargetEnum::CLOUD_API_SERVICE_DELETE_RESOURCE;

    $response = $sdk->sdk->deleteResource($request);

    if ($response->deleteResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResource

<p>Returns information about the current state of the specified resource. For details, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-read.html">Reading a resource's current state</a>.</p> <p>You can use this action to return information about an existing resource in your account and Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourceRequest();
    $request->getResourceInput = new GetResourceInput();
    $request->getResourceInput->identifier = 'maiores';
    $request->getResourceInput->roleArn = 'molestiae';
    $request->getResourceInput->typeName = 'quod';
    $request->getResourceInput->typeVersionId = 'quod';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = GetResourceXAmzTargetEnum::CLOUD_API_SERVICE_GET_RESOURCE;

    $response = $sdk->sdk->getResource($request);

    if ($response->getResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourceRequestStatus

Returns the current status of a resource operation request. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-track">Tracking the progress of resource operation requests</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceRequestStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResourceRequestStatusInput;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceRequestStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourceRequestStatusRequest();
    $request->getResourceRequestStatusInput = new GetResourceRequestStatusInput();
    $request->getResourceRequestStatusInput->requestToken = 'occaecati';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = GetResourceRequestStatusXAmzTargetEnum::CLOUD_API_SERVICE_GET_RESOURCE_REQUEST_STATUS;

    $response = $sdk->sdk->getResourceRequestStatus($request);

    if ($response->getResourceRequestStatusOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResourceRequests

<p>Returns existing resource operation requests. This includes requests of all status types. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-list">Listing active resource operation requests</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <note> <p>Resource operation requests expire after 7 days.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceRequestsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResourceRequestsInput;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRequestStatusFilter;
use \OpenAPI\OpenAPI\Models\Shared\OperationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OperationEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceRequestsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourceRequestsRequest();
    $request->listResourceRequestsInput = new ListResourceRequestsInput();
    $request->listResourceRequestsInput->maxResults = 473600;
    $request->listResourceRequestsInput->nextToken = 'modi';
    $request->listResourceRequestsInput->resourceRequestStatusFilter = new ResourceRequestStatusFilter();
    $request->listResourceRequestsInput->resourceRequestStatusFilter->operationStatuses = [
        OperationStatusEnum::CANCEL_IN_PROGRESS,
    ];
    $request->listResourceRequestsInput->resourceRequestStatusFilter->operations = [
        OperationEnum::DELETE,
        OperationEnum::CREATE,
        OperationEnum::DELETE,
    ];
    $request->maxResults = 'aspernatur';
    $request->nextToken = 'perferendis';
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'laboriosam';
    $request->xAmzTarget = ListResourceRequestsXAmzTargetEnum::CLOUD_API_SERVICE_LIST_RESOURCE_REQUESTS;

    $response = $sdk->sdk->listResourceRequests($request);

    if ($response->listResourceRequestsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResources

<p>Returns information about the specified resources. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-list.html">Discovering resources</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>You can use this action to return information about existing resources in your account and Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResourcesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourcesRequest();
    $request->listResourcesInput = new ListResourcesInput();
    $request->listResourcesInput->maxResults = 943749;
    $request->listResourcesInput->nextToken = 'saepe';
    $request->listResourcesInput->resourceModel = 'fuga';
    $request->listResourcesInput->roleArn = 'in';
    $request->listResourcesInput->typeName = 'corporis';
    $request->listResourcesInput->typeVersionId = 'iste';
    $request->maxResults = 'iure';
    $request->nextToken = 'saepe';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = ListResourcesXAmzTargetEnum::CLOUD_API_SERVICE_LIST_RESOURCES;

    $response = $sdk->sdk->listResources($request);

    if ($response->listResourcesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateResource

<p>Updates the specified property values in the resource.</p> <p>You specify your resource property updates as a list of patch operations contained in a JSON patch document that adheres to the <a href="https://datatracker.ietf.org/doc/html/rfc6902"> <i>RFC 6902 - JavaScript Object Notation (JSON) Patch</i> </a> standard.</p> <p>For details on how Cloud Control API performs resource update operations, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-update.html">Updating a resource</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p> <p>After you have initiated a resource update request, you can monitor the progress of your request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the <code>ProgressEvent</code> returned by <code>UpdateResource</code>.</p> <p>For more information about the properties of a specific resource, refer to the related topic for the resource in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Resource and property types reference</a> in the <i>CloudFormation Users Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateResourceRequest();
    $request->updateResourceInput = new UpdateResourceInput();
    $request->updateResourceInput->clientToken = 'dolores';
    $request->updateResourceInput->identifier = 'dolorem';
    $request->updateResourceInput->patchDocument = 'corporis';
    $request->updateResourceInput->roleArn = 'explicabo';
    $request->updateResourceInput->typeName = 'nobis';
    $request->updateResourceInput->typeVersionId = 'enim';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = UpdateResourceXAmzTargetEnum::CLOUD_API_SERVICE_UPDATE_RESOURCE;

    $response = $sdk->sdk->updateResource($request);

    if ($response->updateResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
