# SDK

## Overview

<fullname>Cloud9</fullname> <p>Cloud9 is a collection of tools that you can use to code, build, run, test, debug, and release software in the cloud.</p> <p>For more information about Cloud9, see the <a href="https://docs.aws.amazon.com/cloud9/latest/user-guide">Cloud9 User Guide</a>.</p> <p>Cloud9 supports these operations:</p> <ul> <li> <p> <code>CreateEnvironmentEC2</code>: Creates an Cloud9 development environment, launches an Amazon EC2 instance, and then connects from the instance to the environment.</p> </li> <li> <p> <code>CreateEnvironmentMembership</code>: Adds an environment member to an environment.</p> </li> <li> <p> <code>DeleteEnvironment</code>: Deletes an environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.</p> </li> <li> <p> <code>DeleteEnvironmentMembership</code>: Deletes an environment member from an environment.</p> </li> <li> <p> <code>DescribeEnvironmentMemberships</code>: Gets information about environment members for an environment.</p> </li> <li> <p> <code>DescribeEnvironments</code>: Gets information about environments.</p> </li> <li> <p> <code>DescribeEnvironmentStatus</code>: Gets status information for an environment.</p> </li> <li> <p> <code>ListEnvironments</code>: Gets a list of environment identifiers.</p> </li> <li> <p> <code>ListTagsForResource</code>: Gets the tags for an environment.</p> </li> <li> <p> <code>TagResource</code>: Adds tags to an environment.</p> </li> <li> <p> <code>UntagResource</code>: Removes tags from an environment.</p> </li> <li> <p> <code>UpdateEnvironment</code>: Changes the settings of an existing environment.</p> </li> <li> <p> <code>UpdateEnvironmentMembership</code>: Changes the settings of an existing environment member for an environment.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cloud9/>
### Available Operations

* [createEnvironmentEc2](#createenvironmentec2) - Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.
* [createEnvironmentMembership](#createenvironmentmembership) - Adds an environment member to an Cloud9 development environment.
* [deleteEnvironment](#deleteenvironment) - Deletes an Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.
* [deleteEnvironmentMembership](#deleteenvironmentmembership) - Deletes an environment member from a development environment.
* [describeEnvironmentMemberships](#describeenvironmentmemberships) - Gets information about environment members for an Cloud9 development environment.
* [describeEnvironmentStatus](#describeenvironmentstatus) - Gets status information for an Cloud9 development environment.
* [describeEnvironments](#describeenvironments) - Gets information about Cloud9 development environments.
* [listEnvironments](#listenvironments) - Gets a list of Cloud9 development environment identifiers.
* [listTagsForResource](#listtagsforresource) - Gets a list of the tags associated with an Cloud9 development environment.
* [tagResource](#tagresource) - <p>Adds tags to an Cloud9 development environment.</p> <important> <p>Tags that you add to an Cloud9 environment by using this method will NOT be automatically propagated to underlying resources.</p> </important>
* [untagResource](#untagresource) - Removes tags from an Cloud9 development environment.
* [updateEnvironment](#updateenvironment) - Changes the settings of an existing Cloud9 development environment.
* [updateEnvironmentMembership](#updateenvironmentmembership) - Changes the settings of an existing environment member for an Cloud9 development environment.

## createEnvironmentEc2

Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentEc2Request;
use \OpenAPI\OpenAPI\Models\Shared\CreateEnvironmentEc2Request;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentEc2XAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEnvironmentEc2Request();
    $request->createEnvironmentEc2Request = new CreateEnvironmentEc2Request();
    $request->createEnvironmentEc2Request->automaticStopTimeMinutes = 812169;
    $request->createEnvironmentEc2Request->clientRequestToken = 'voluptatum';
    $request->createEnvironmentEc2Request->connectionType = ConnectionTypeEnum::CONNECT_SSH;
    $request->createEnvironmentEc2Request->description = 'excepturi';
    $request->createEnvironmentEc2Request->dryRun = false;
    $request->createEnvironmentEc2Request->imageId = 'nisi';
    $request->createEnvironmentEc2Request->instanceType = 'recusandae';
    $request->createEnvironmentEc2Request->name = 'Miss Raymond Hauck III';
    $request->createEnvironmentEc2Request->ownerArn = 'repellendus';
    $request->createEnvironmentEc2Request->subnetId = 'sapiente';
    $request->createEnvironmentEc2Request->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = CreateEnvironmentEc2XAmzTargetEnum::AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_CREATE_ENVIRONMENT_EC2;

    $response = $sdk->sdk->createEnvironmentEc2($request);

    if ($response->createEnvironmentEc2Result !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEnvironmentMembership

Adds an environment member to an Cloud9 development environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentMembershipRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEnvironmentMembershipRequest;
use \OpenAPI\OpenAPI\Models\Shared\MemberPermissionsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateEnvironmentMembershipXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEnvironmentMembershipRequest();
    $request->createEnvironmentMembershipRequest = new CreateEnvironmentMembershipRequest();
    $request->createEnvironmentMembershipRequest->environmentId = 'esse';
    $request->createEnvironmentMembershipRequest->permissions = MemberPermissionsEnum::READ_ONLY;
    $request->createEnvironmentMembershipRequest->userArn = 'porro';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = CreateEnvironmentMembershipXAmzTargetEnum::AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_CREATE_ENVIRONMENT_MEMBERSHIP;

    $response = $sdk->sdk->createEnvironmentMembership($request);

    if ($response->createEnvironmentMembershipResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEnvironment

Deletes an Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEnvironmentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEnvironmentRequest();
    $request->deleteEnvironmentRequest = new DeleteEnvironmentRequest();
    $request->deleteEnvironmentRequest->environmentId = 'hic';
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = DeleteEnvironmentXAmzTargetEnum::AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_DELETE_ENVIRONMENT;

    $response = $sdk->sdk->deleteEnvironment($request);

    if ($response->deleteEnvironmentResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEnvironmentMembership

Deletes an environment member from a development environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEnvironmentMembershipRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEnvironmentMembershipRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEnvironmentMembershipXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEnvironmentMembershipRequest();
    $request->deleteEnvironmentMembershipRequest = new DeleteEnvironmentMembershipRequest();
    $request->deleteEnvironmentMembershipRequest->environmentId = 'impedit';
    $request->deleteEnvironmentMembershipRequest->userArn = 'cum';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = DeleteEnvironmentMembershipXAmzTargetEnum::AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_DELETE_ENVIRONMENT_MEMBERSHIP;

    $response = $sdk->sdk->deleteEnvironmentMembership($request);

    if ($response->deleteEnvironmentMembershipResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEnvironmentMemberships

Gets information about environment members for an Cloud9 development environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEnvironmentMembershipsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEnvironmentMembershipsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PermissionsEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEnvironmentMembershipsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEnvironmentMembershipsRequest();
    $request->describeEnvironmentMembershipsRequest = new DescribeEnvironmentMembershipsRequest();
    $request->describeEnvironmentMembershipsRequest->environmentId = 'sed';
    $request->describeEnvironmentMembershipsRequest->maxResults = 612096;
    $request->describeEnvironmentMembershipsRequest->nextToken = 'dolor';
    $request->describeEnvironmentMembershipsRequest->permissions = [
        PermissionsEnum::READ_WRITE,
        PermissionsEnum::READ_ONLY,
        PermissionsEnum::READ_ONLY,
    ];
    $request->describeEnvironmentMembershipsRequest->userArn = 'fuga';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = DescribeEnvironmentMembershipsXAmzTargetEnum::AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_DESCRIBE_ENVIRONMENT_MEMBERSHIPS;
    $request->maxResults = 'ipsa';
    $request->nextToken = 'reiciendis';

    $response = $sdk->sdk->describeEnvironmentMemberships($request);

    if ($response->describeEnvironmentMembershipsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEnvironmentStatus

Gets status information for an Cloud9 development environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEnvironmentStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEnvironmentStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEnvironmentStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEnvironmentStatusRequest();
    $request->describeEnvironmentStatusRequest = new DescribeEnvironmentStatusRequest();
    $request->describeEnvironmentStatusRequest->environmentId = 'est';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = DescribeEnvironmentStatusXAmzTargetEnum::AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_DESCRIBE_ENVIRONMENT_STATUS;

    $response = $sdk->sdk->describeEnvironmentStatus($request);

    if ($response->describeEnvironmentStatusResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEnvironments

Gets information about Cloud9 development environments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEnvironmentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEnvironmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEnvironmentsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEnvironmentsRequest();
    $request->describeEnvironmentsRequest = new DescribeEnvironmentsRequest();
    $request->describeEnvironmentsRequest->environmentIds = [
        'omnis',
        'nemo',
    ];
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = DescribeEnvironmentsXAmzTargetEnum::AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_DESCRIBE_ENVIRONMENTS;

    $response = $sdk->sdk->describeEnvironments($request);

    if ($response->describeEnvironmentsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEnvironments

Gets a list of Cloud9 development environment identifiers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEnvironmentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEnvironmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEnvironmentsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEnvironmentsRequest();
    $request->listEnvironmentsRequest = new ListEnvironmentsRequest();
    $request->listEnvironmentsRequest->maxResults = 102044;
    $request->listEnvironmentsRequest->nextToken = 'mollitia';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'numquam';
    $request->xAmzTarget = ListEnvironmentsXAmzTargetEnum::AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_LIST_ENVIRONMENTS;
    $request->maxResults = 'commodi';
    $request->nextToken = 'quam';

    $response = $sdk->sdk->listEnvironments($request);

    if ($response->listEnvironmentsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Gets a list of the tags associated with an Cloud9 development environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceARN = 'molestiae';
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'quia';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'animi';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Adds tags to an Cloud9 development environment.</p> <important> <p>Tags that you add to an Cloud9 environment by using this method will NOT be automatically propagated to underlying resources.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceARN = 'enim';
    $request->tagResourceRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from an Cloud9 development environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceARN = 'quasi';
    $request->untagResourceRequest->tagKeys = [
        'temporibus',
        'laborum',
        'quasi',
    ];
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEnvironment

Changes the settings of an existing Cloud9 development environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\ManagedCredentialsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEnvironmentRequest();
    $request->updateEnvironmentRequest = new UpdateEnvironmentRequest();
    $request->updateEnvironmentRequest->description = 'omnis';
    $request->updateEnvironmentRequest->environmentId = 'voluptate';
    $request->updateEnvironmentRequest->managedCredentialsAction = ManagedCredentialsActionEnum::DISABLE;
    $request->updateEnvironmentRequest->name = 'Sharon Kiehn';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = UpdateEnvironmentXAmzTargetEnum::AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_UPDATE_ENVIRONMENT;

    $response = $sdk->sdk->updateEnvironment($request);

    if ($response->updateEnvironmentResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEnvironmentMembership

Changes the settings of an existing environment member for an Cloud9 development environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentMembershipRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEnvironmentMembershipRequest;
use \OpenAPI\OpenAPI\Models\Shared\MemberPermissionsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEnvironmentMembershipXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEnvironmentMembershipRequest();
    $request->updateEnvironmentMembershipRequest = new UpdateEnvironmentMembershipRequest();
    $request->updateEnvironmentMembershipRequest->environmentId = 'accusamus';
    $request->updateEnvironmentMembershipRequest->permissions = MemberPermissionsEnum::READ_WRITE;
    $request->updateEnvironmentMembershipRequest->userArn = 'repudiandae';
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = UpdateEnvironmentMembershipXAmzTargetEnum::AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_UPDATE_ENVIRONMENT_MEMBERSHIP;

    $response = $sdk->sdk->updateEnvironmentMembership($request);

    if ($response->updateEnvironmentMembershipResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
