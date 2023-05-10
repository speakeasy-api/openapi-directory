# SDK

## Overview

An AWS Elemental MediaStore container is a namespace that holds folders and objects. You use a container endpoint to create, read, and delete objects. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/mediastore/>
### Available Operations

* [createContainer](#createcontainer) - Creates a storage container to hold objects. A container is similar to a bucket in the Amazon S3 service.
* [deleteContainer](#deletecontainer) - Deletes the specified container. Before you make a <code>DeleteContainer</code> request, delete any objects in the container or in any folders in the container. You can delete only empty containers. 
* [deleteContainerPolicy](#deletecontainerpolicy) - Deletes the access policy that is associated with the specified container.
* [deleteCorsPolicy](#deletecorspolicy) - <p>Deletes the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:DeleteCorsPolicy</code> action. The container owner has this permission by default and can grant this permission to others.</p>
* [deleteLifecyclePolicy](#deletelifecyclepolicy) - Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.
* [deleteMetricPolicy](#deletemetricpolicy) - Deletes the metric policy that is associated with the specified container. If there is no metric policy associated with the container, MediaStore doesn't send metrics to CloudWatch.
* [describeContainer](#describecontainer) - Retrieves the properties of the requested container. This request is commonly used to retrieve the endpoint of a container. An endpoint is a value assigned by the service when a new container is created. A container's endpoint does not change after it has been assigned. The <code>DescribeContainer</code> request returns a single <code>Container</code> object based on <code>ContainerName</code>. To return all <code>Container</code> objects that are associated with a specified AWS account, use <a>ListContainers</a>.
* [getContainerPolicy](#getcontainerpolicy) - Retrieves the access policy for the specified container. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.
* [getCorsPolicy](#getcorspolicy) - <p>Returns the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:GetCorsPolicy</code> action. By default, the container owner has this permission and can grant it to others.</p>
* [getLifecyclePolicy](#getlifecyclepolicy) - Retrieves the object lifecycle policy that is assigned to a container.
* [getMetricPolicy](#getmetricpolicy) - Returns the metric policy for the specified container. 
* [listContainers](#listcontainers) - <p>Lists the properties of all containers in AWS Elemental MediaStore. </p> <p>You can query to receive all the containers in one response. Or you can include the <code>MaxResults</code> parameter to receive a limited number of containers in each response. In this case, the response includes a token. To get the next set of containers, send the command again, this time with the <code>NextToken</code> parameter (with the returned token as its value). The next set of responses appears, with a token if there are still more containers to receive. </p> <p>See also <a>DescribeContainer</a>, which gets the properties of one container. </p>
* [listTagsForResource](#listtagsforresource) - Returns a list of the tags assigned to the specified container. 
* [putContainerPolicy](#putcontainerpolicy) - <p>Creates an access policy for the specified container to restrict the users and clients that can access it. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.</p> <p>For this release of the REST API, you can create only one policy for a container. If you enter <code>PutContainerPolicy</code> twice, the second command modifies the existing policy. </p>
* [putCorsPolicy](#putcorspolicy) - <p>Sets the cross-origin resource sharing (CORS) configuration on a container so that the container can service cross-origin requests. For example, you might want to enable a request whose origin is http://www.example.com to access your AWS Elemental MediaStore container at my.example.container.com by using the browser's XMLHttpRequest capability.</p> <p>To enable CORS on a container, you attach a CORS policy to the container. In the CORS policy, you configure rules that identify origins and the HTTP methods that can be executed on your container. The policy can contain up to 398,000 characters. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.</p> <p>To learn more about CORS, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html">Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore</a>.</p>
* [putLifecyclePolicy](#putlifecyclepolicy) - <p>Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect.</p> <p>For information about how to construct an object lifecycle policy, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-object-lifecycle-components.html">Components of an Object Lifecycle Policy</a>.</p>
* [putMetricPolicy](#putmetricpolicy) - The metric policy that you want to add to the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. It takes up to 20 minutes for the new policy to take effect.
* [startAccessLogging](#startaccesslogging) - Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.
* [stopAccessLogging](#stopaccesslogging) - Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.
* [tagResource](#tagresource) - Adds tags to the specified AWS Elemental MediaStore container. Tags are key:value pairs that you can associate with AWS resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>.
* [untagResource](#untagresource) - Removes tags from the specified container. You can specify one or more tags to remove. 

## createContainer

Creates a storage container to hold objects. A container is similar to a bucket in the Amazon S3 service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateContainerRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateContainerInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateContainerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateContainerRequest();
    $request->createContainerInput = new CreateContainerInput();
    $request->createContainerInput->containerName = 'error';
    $request->createContainerInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = CreateContainerXAmzTargetEnum::MEDIA_STORE20170901_CREATE_CONTAINER;

    $response = $sdk->sdk->createContainer($request);

    if ($response->createContainerOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteContainer

Deletes the specified container. Before you make a <code>DeleteContainer</code> request, delete any objects in the container or in any folders in the container. You can delete only empty containers. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContainerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteContainerInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContainerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteContainerRequest();
    $request->deleteContainerInput = new DeleteContainerInput();
    $request->deleteContainerInput->containerName = 'suscipit';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';
    $request->xAmzTarget = DeleteContainerXAmzTargetEnum::MEDIA_STORE20170901_DELETE_CONTAINER;

    $response = $sdk->sdk->deleteContainer($request);

    if ($response->deleteContainerOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteContainerPolicy

Deletes the access policy that is associated with the specified container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContainerPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteContainerPolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContainerPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteContainerPolicyRequest();
    $request->deleteContainerPolicyInput = new DeleteContainerPolicyInput();
    $request->deleteContainerPolicyInput->containerName = 'recusandae';
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = DeleteContainerPolicyXAmzTargetEnum::MEDIA_STORE20170901_DELETE_CONTAINER_POLICY;

    $response = $sdk->sdk->deleteContainerPolicy($request);

    if ($response->deleteContainerPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCorsPolicy

<p>Deletes the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:DeleteCorsPolicy</code> action. The container owner has this permission by default and can grant this permission to others.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCorsPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteCorsPolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCorsPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCorsPolicyRequest();
    $request->deleteCorsPolicyInput = new DeleteCorsPolicyInput();
    $request->deleteCorsPolicyInput->containerName = 'repellendus';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = DeleteCorsPolicyXAmzTargetEnum::MEDIA_STORE20170901_DELETE_CORS_POLICY;

    $response = $sdk->sdk->deleteCorsPolicy($request);

    if ($response->deleteCorsPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLifecyclePolicy

Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLifecyclePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteLifecyclePolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLifecyclePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLifecyclePolicyRequest();
    $request->deleteLifecyclePolicyInput = new DeleteLifecyclePolicyInput();
    $request->deleteLifecyclePolicyInput->containerName = 'quod';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = DeleteLifecyclePolicyXAmzTargetEnum::MEDIA_STORE20170901_DELETE_LIFECYCLE_POLICY;

    $response = $sdk->sdk->deleteLifecyclePolicy($request);

    if ($response->deleteLifecyclePolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMetricPolicy

Deletes the metric policy that is associated with the specified container. If there is no metric policy associated with the container, MediaStore doesn't send metrics to CloudWatch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMetricPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteMetricPolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMetricPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMetricPolicyRequest();
    $request->deleteMetricPolicyInput = new DeleteMetricPolicyInput();
    $request->deleteMetricPolicyInput->containerName = 'officia';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'beatae';
    $request->xAmzTarget = DeleteMetricPolicyXAmzTargetEnum::MEDIA_STORE20170901_DELETE_METRIC_POLICY;

    $response = $sdk->sdk->deleteMetricPolicy($request);

    if ($response->deleteMetricPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeContainer

Retrieves the properties of the requested container. This request is commonly used to retrieve the endpoint of a container. An endpoint is a value assigned by the service when a new container is created. A container's endpoint does not change after it has been assigned. The <code>DescribeContainer</code> request returns a single <code>Container</code> object based on <code>ContainerName</code>. To return all <code>Container</code> objects that are associated with a specified AWS account, use <a>ListContainers</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeContainerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeContainerInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeContainerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeContainerRequest();
    $request->describeContainerInput = new DescribeContainerInput();
    $request->describeContainerInput->containerName = 'commodi';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = DescribeContainerXAmzTargetEnum::MEDIA_STORE20170901_DESCRIBE_CONTAINER;

    $response = $sdk->sdk->describeContainer($request);

    if ($response->describeContainerOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContainerPolicy

Retrieves the access policy for the specified container. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContainerPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetContainerPolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\GetContainerPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContainerPolicyRequest();
    $request->getContainerPolicyInput = new GetContainerPolicyInput();
    $request->getContainerPolicyInput->containerName = 'excepturi';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = GetContainerPolicyXAmzTargetEnum::MEDIA_STORE20170901_GET_CONTAINER_POLICY;

    $response = $sdk->sdk->getContainerPolicy($request);

    if ($response->getContainerPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCorsPolicy

<p>Returns the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:GetCorsPolicy</code> action. By default, the container owner has this permission and can grant it to others.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCorsPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCorsPolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\GetCorsPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCorsPolicyRequest();
    $request->getCorsPolicyInput = new GetCorsPolicyInput();
    $request->getCorsPolicyInput->containerName = 'natus';
    $request->xAmzAlgorithm = 'laboriosam';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'iste';
    $request->xAmzTarget = GetCorsPolicyXAmzTargetEnum::MEDIA_STORE20170901_GET_CORS_POLICY;

    $response = $sdk->sdk->getCorsPolicy($request);

    if ($response->getCorsPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLifecyclePolicy

Retrieves the object lifecycle policy that is assigned to a container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLifecyclePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetLifecyclePolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\GetLifecyclePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLifecyclePolicyRequest();
    $request->getLifecyclePolicyInput = new GetLifecyclePolicyInput();
    $request->getLifecyclePolicyInput->containerName = 'iure';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = GetLifecyclePolicyXAmzTargetEnum::MEDIA_STORE20170901_GET_LIFECYCLE_POLICY;

    $response = $sdk->sdk->getLifecyclePolicy($request);

    if ($response->getLifecyclePolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMetricPolicy

Returns the metric policy for the specified container. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMetricPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetMetricPolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\GetMetricPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMetricPolicyRequest();
    $request->getMetricPolicyInput = new GetMetricPolicyInput();
    $request->getMetricPolicyInput->containerName = 'laborum';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = GetMetricPolicyXAmzTargetEnum::MEDIA_STORE20170901_GET_METRIC_POLICY;

    $response = $sdk->sdk->getMetricPolicy($request);

    if ($response->getMetricPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listContainers

<p>Lists the properties of all containers in AWS Elemental MediaStore. </p> <p>You can query to receive all the containers in one response. Or you can include the <code>MaxResults</code> parameter to receive a limited number of containers in each response. In this case, the response includes a token. To get the next set of containers, send the command again, this time with the <code>NextToken</code> parameter (with the returned token as its value). The next set of responses appears, with a token if there are still more containers to receive. </p> <p>See also <a>DescribeContainer</a>, which gets the properties of one container. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListContainersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListContainersInput;
use \OpenAPI\OpenAPI\Models\Operations\ListContainersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListContainersRequest();
    $request->listContainersInput = new ListContainersInput();
    $request->listContainersInput->maxResults = 363711;
    $request->listContainersInput->nextToken = 'minima';
    $request->maxResults = 'excepturi';
    $request->nextToken = 'accusantium';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = ListContainersXAmzTargetEnum::MEDIA_STORE20170901_LIST_CONTAINERS;

    $response = $sdk->sdk->listContainers($request);

    if ($response->listContainersOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Returns a list of the tags assigned to the specified container. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceInput = new ListTagsForResourceInput();
    $request->listTagsForResourceInput->resource = 'culpa';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::MEDIA_STORE20170901_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putContainerPolicy

<p>Creates an access policy for the specified container to restrict the users and clients that can access it. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.</p> <p>For this release of the REST API, you can create only one policy for a container. If you enter <code>PutContainerPolicy</code> twice, the second command modifies the existing policy. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutContainerPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutContainerPolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\PutContainerPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutContainerPolicyRequest();
    $request->putContainerPolicyInput = new PutContainerPolicyInput();
    $request->putContainerPolicyInput->containerName = 'molestiae';
    $request->putContainerPolicyInput->policy = 'velit';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = PutContainerPolicyXAmzTargetEnum::MEDIA_STORE20170901_PUT_CONTAINER_POLICY;

    $response = $sdk->sdk->putContainerPolicy($request);

    if ($response->putContainerPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCorsPolicy

<p>Sets the cross-origin resource sharing (CORS) configuration on a container so that the container can service cross-origin requests. For example, you might want to enable a request whose origin is http://www.example.com to access your AWS Elemental MediaStore container at my.example.container.com by using the browser's XMLHttpRequest capability.</p> <p>To enable CORS on a container, you attach a CORS policy to the container. In the CORS policy, you configure rules that identify origins and the HTTP methods that can be executed on your container. The policy can contain up to 398,000 characters. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.</p> <p>To learn more about CORS, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html">Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutCorsPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutCorsPolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\CorsRule;
use \OpenAPI\OpenAPI\Models\Shared\MethodNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutCorsPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCorsPolicyRequest();
    $request->putCorsPolicyInput = new PutCorsPolicyInput();
    $request->putCorsPolicyInput->containerName = 'odit';
    $request->putCorsPolicyInput->corsPolicy = [
        new CorsRule(),
        new CorsRule(),
        new CorsRule(),
        new CorsRule(),
    ];
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = PutCorsPolicyXAmzTargetEnum::MEDIA_STORE20170901_PUT_CORS_POLICY;

    $response = $sdk->sdk->putCorsPolicy($request);

    if ($response->putCorsPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putLifecyclePolicy

<p>Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect.</p> <p>For information about how to construct an object lifecycle policy, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-object-lifecycle-components.html">Components of an Object Lifecycle Policy</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutLifecyclePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutLifecyclePolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\PutLifecyclePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutLifecyclePolicyRequest();
    $request->putLifecyclePolicyInput = new PutLifecyclePolicyInput();
    $request->putLifecyclePolicyInput->containerName = 'error';
    $request->putLifecyclePolicyInput->lifecyclePolicy = 'temporibus';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->xAmzTarget = PutLifecyclePolicyXAmzTargetEnum::MEDIA_STORE20170901_PUT_LIFECYCLE_POLICY;

    $response = $sdk->sdk->putLifecyclePolicy($request);

    if ($response->putLifecyclePolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putMetricPolicy

The metric policy that you want to add to the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. It takes up to 20 minutes for the new policy to take effect.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutMetricPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutMetricPolicyInput;
use \OpenAPI\OpenAPI\Models\Shared\MetricPolicy;
use \OpenAPI\OpenAPI\Models\Shared\ContainerLevelMetricsEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricPolicyRule;
use \OpenAPI\OpenAPI\Models\Operations\PutMetricPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutMetricPolicyRequest();
    $request->putMetricPolicyInput = new PutMetricPolicyInput();
    $request->putMetricPolicyInput->containerName = 'voluptatibus';
    $request->putMetricPolicyInput->metricPolicy = new MetricPolicy();
    $request->putMetricPolicyInput->metricPolicy->containerLevelMetrics = ContainerLevelMetricsEnum::ENABLED;
    $request->putMetricPolicyInput->metricPolicy->metricPolicyRules = [
        new MetricPolicyRule(),
        new MetricPolicyRule(),
        new MetricPolicyRule(),
    ];
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = PutMetricPolicyXAmzTargetEnum::MEDIA_STORE20170901_PUT_METRIC_POLICY;

    $response = $sdk->sdk->putMetricPolicy($request);

    if ($response->putMetricPolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startAccessLogging

Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartAccessLoggingRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartAccessLoggingInput;
use \OpenAPI\OpenAPI\Models\Operations\StartAccessLoggingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartAccessLoggingRequest();
    $request->startAccessLoggingInput = new StartAccessLoggingInput();
    $request->startAccessLoggingInput->containerName = 'dicta';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = StartAccessLoggingXAmzTargetEnum::MEDIA_STORE20170901_START_ACCESS_LOGGING;

    $response = $sdk->sdk->startAccessLogging($request);

    if ($response->startAccessLoggingOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopAccessLogging

Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopAccessLoggingRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopAccessLoggingInput;
use \OpenAPI\OpenAPI\Models\Operations\StopAccessLoggingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopAccessLoggingRequest();
    $request->stopAccessLoggingInput = new StopAccessLoggingInput();
    $request->stopAccessLoggingInput->containerName = 'commodi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = StopAccessLoggingXAmzTargetEnum::MEDIA_STORE20170901_STOP_ACCESS_LOGGING;

    $response = $sdk->sdk->stopAccessLogging($request);

    if ($response->stopAccessLoggingOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds tags to the specified AWS Elemental MediaStore container. Tags are key:value pairs that you can associate with AWS resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceInput = new TagResourceInput();
    $request->tagResourceInput->resource = 'modi';
    $request->tagResourceInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'itaque';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::MEDIA_STORE20170901_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from the specified container. You can specify one or more tags to remove. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceInput = new UntagResourceInput();
    $request->untagResourceInput->resource = 'incidunt';
    $request->untagResourceInput->tagKeys = [
        'consequatur',
        'est',
    ];
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::MEDIA_STORE20170901_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
