# SDK

## Overview

This API reference provides descriptions, syntax, and other details about each of the actions and data types for AWS Systems Manager for SAP. The topic for each action shows the API request parameters and responses. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/ssm-sap/>
### Available Operations

* [deleteResourcePermission](#deleteresourcepermission) - Removes permissions associated with the target database.
* [deregisterApplication](#deregisterapplication) - Deregister an SAP application with AWS Systems Manager for SAP. This action does not aﬀect the existing setup of your SAP workloads on Amazon EC2.
* [getApplication](#getapplication) - Gets an application registered with AWS Systems Manager for SAP. It also returns the components of the application.
* [getComponent](#getcomponent) - Gets the component of an application registered with AWS Systems Manager for SAP.
* [getDatabase](#getdatabase) - Gets the SAP HANA database of an application registered with AWS Systems Manager for SAP.
* [getOperation](#getoperation) - Gets the details of an operation by specifying the operation ID.
* [getResourcePermission](#getresourcepermission) - Gets permissions associated with the target database.
* [listApplications](#listapplications) - Lists all the applications registered with AWS Systems Manager for SAP.
* [listComponents](#listcomponents) - Lists all the components registered with AWS Systems Manager for SAP.
* [listDatabases](#listdatabases) - Lists the SAP HANA databases of an application registered with AWS Systems Manager for SAP.
* [listOperations](#listoperations) - Lists the operations performed by AWS Systems Manager for SAP.
* [listTagsForResource](#listtagsforresource) - Lists all tags on an SAP HANA application and/or database registered with AWS Systems Manager for SAP.
* [putResourcePermission](#putresourcepermission) - Adds permissions to the target database.
* [registerApplication](#registerapplication) - <p>Register an SAP application with AWS Systems Manager for SAP. You must meet the following requirements before registering. </p> <p>The SAP application you want to register with AWS Systems Manager for SAP is running on Amazon EC2.</p> <p>AWS Systems Manager Agent must be setup on an Amazon EC2 instance along with the required IAM permissions.</p> <p>Amazon EC2 instance(s) must have access to the secrets created in AWS Secrets Manager to manage SAP applications and components.</p>
* [tagResource](#tagresource) - Creates tag for a resource by specifying the ARN.
* [untagResource](#untagresource) - Delete the tags for a resource.
* [updateApplicationSettings](#updateapplicationsettings) - Updates the settings of an application registered with AWS Systems Manager for SAP.

## deleteResourcePermission

Removes permissions associated with the target database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePermissionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePermissionRequestBodyActionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourcePermissionRequest();
    $request->requestBody = new DeleteResourcePermissionRequestBody();
    $request->requestBody->actionType = DeleteResourcePermissionRequestBodyActionTypeEnum::RESTORE;
    $request->requestBody->resourceArn = 'error';
    $request->requestBody->sourceResourceArn = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->deleteResourcePermission($request);

    if ($response->deleteResourcePermissionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterApplication

Deregister an SAP application with AWS Systems Manager for SAP. This action does not aﬀect the existing setup of your SAP workloads on Amazon EC2.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterApplicationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterApplicationRequest();
    $request->requestBody = new DeregisterApplicationRequestBody();
    $request->requestBody->applicationId = 'suscipit';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';

    $response = $sdk->sdk->deregisterApplication($request);

    if ($response->deregisterApplicationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApplication

Gets an application registered with AWS Systems Manager for SAP. It also returns the components of the application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApplicationRequest();
    $request->requestBody = new GetApplicationRequestBody();
    $request->requestBody->appRegistryArn = 'recusandae';
    $request->requestBody->applicationArn = 'temporibus';
    $request->requestBody->applicationId = 'ab';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->getApplication($request);

    if ($response->getApplicationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComponent

Gets the component of an application registered with AWS Systems Manager for SAP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetComponentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetComponentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetComponentRequest();
    $request->requestBody = new GetComponentRequestBody();
    $request->requestBody->applicationId = 'quo';
    $request->requestBody->componentId = 'odit';
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->getComponent($request);

    if ($response->getComponentOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDatabase

Gets the SAP HANA database of an application registered with AWS Systems Manager for SAP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDatabaseRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDatabaseRequest();
    $request->requestBody = new GetDatabaseRequestBody();
    $request->requestBody->applicationId = 'totam';
    $request->requestBody->componentId = 'porro';
    $request->requestBody->databaseArn = 'dolorum';
    $request->requestBody->databaseId = 'dicta';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'optio';

    $response = $sdk->sdk->getDatabase($request);

    if ($response->getDatabaseOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOperation

Gets the details of an operation by specifying the operation ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOperationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOperationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOperationRequest();
    $request->requestBody = new GetOperationRequestBody();
    $request->requestBody->operationId = 'totam';
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'cum';

    $response = $sdk->sdk->getOperation($request);

    if ($response->getOperationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcePermission

Gets permissions associated with the target database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePermissionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePermissionRequestBodyActionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcePermissionRequest();
    $request->requestBody = new GetResourcePermissionRequestBody();
    $request->requestBody->actionType = GetResourcePermissionRequestBodyActionTypeEnum::RESTORE;
    $request->requestBody->resourceArn = 'esse';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->getResourcePermission($request);

    if ($response->getResourcePermissionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApplications

Lists all the applications registered with AWS Systems Manager for SAP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListApplicationsRequest();
    $request->maxResults = 'iste';
    $request->nextToken = 'dolor';
    $request->requestBody = new ListApplicationsRequestBody();
    $request->requestBody->maxResults = 616934;
    $request->requestBody->nextToken = 'laboriosam';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->sdk->listApplications($request);

    if ($response->listApplicationsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listComponents

Lists all the components registered with AWS Systems Manager for SAP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListComponentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListComponentsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListComponentsRequest();
    $request->maxResults = 'saepe';
    $request->nextToken = 'quidem';
    $request->requestBody = new ListComponentsRequestBody();
    $request->requestBody->applicationId = 'architecto';
    $request->requestBody->maxResults = 60225;
    $request->requestBody->nextToken = 'reiciendis';
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'explicabo';

    $response = $sdk->sdk->listComponents($request);

    if ($response->listComponentsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatabases

Lists the SAP HANA databases of an application registered with AWS Systems Manager for SAP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDatabasesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDatabasesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatabasesRequest();
    $request->maxResults = 'nobis';
    $request->nextToken = 'enim';
    $request->requestBody = new ListDatabasesRequestBody();
    $request->requestBody->applicationId = 'omnis';
    $request->requestBody->componentId = 'nemo';
    $request->requestBody->maxResults = 325047;
    $request->requestBody->nextToken = 'excepturi';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->listDatabases($request);

    if ($response->listDatabasesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOperations

Lists the operations performed by AWS Systems Manager for SAP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOperationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListOperationsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterOperatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOperationsRequest();
    $request->maxResults = 'dolorem';
    $request->nextToken = 'culpa';
    $request->requestBody = new ListOperationsRequestBody();
    $request->requestBody->applicationId = 'consequuntur';
    $request->requestBody->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->requestBody->maxResults = 653108;
    $request->requestBody->nextToken = 'occaecati';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'quia';

    $response = $sdk->sdk->listOperations($request);

    if ($response->listOperationsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists all tags on an SAP HANA application and/or database registered with AWS Systems Manager for SAP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'quo';
    $request->resourceArn = 'sequi';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putResourcePermission

Adds permissions to the target database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePermissionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePermissionRequestBodyActionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutResourcePermissionRequest();
    $request->requestBody = new PutResourcePermissionRequestBody();
    $request->requestBody->actionType = PutResourcePermissionRequestBodyActionTypeEnum::RESTORE;
    $request->requestBody->resourceArn = 'tenetur';
    $request->requestBody->sourceResourceArn = 'ipsam';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->putResourcePermission($request);

    if ($response->putResourcePermissionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerApplication

<p>Register an SAP application with AWS Systems Manager for SAP. You must meet the following requirements before registering. </p> <p>The SAP application you want to register with AWS Systems Manager for SAP is running on Amazon EC2.</p> <p>AWS Systems Manager Agent must be setup on an Amazon EC2 instance along with the required IAM permissions.</p> <p>Amazon EC2 instance(s) must have access to the secrets created in AWS Secrets Manager to manage SAP applications and components.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterApplicationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RegisterApplicationRequestBodyApplicationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationCredential;
use \OpenAPI\OpenAPI\Models\Shared\CredentialTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterApplicationRequest();
    $request->requestBody = new RegisterApplicationRequestBody();
    $request->requestBody->applicationId = 'quasi';
    $request->requestBody->applicationType = RegisterApplicationRequestBodyApplicationTypeEnum::HANA;
    $request->requestBody->credentials = [
        new ApplicationCredential(),
        new ApplicationCredential(),
        new ApplicationCredential(),
        new ApplicationCredential(),
    ];
    $request->requestBody->instances = [
        'vero',
        'nihil',
        'praesentium',
        'voluptatibus',
    ];
    $request->requestBody->sapInstanceNumber = 'ipsa';
    $request->requestBody->sid = 'omnis';
    $request->requestBody->tags = [
        'cum' => 'perferendis',
        'doloremque' => 'reprehenderit',
    ];
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->registerApplication($request);

    if ($response->registerApplicationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Creates tag for a resource by specifying the ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'enim' => 'accusamus',
        'commodi' => 'repudiandae',
        'quae' => 'ipsum',
    ];
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'rem';
    $request->resourceArn = 'voluptates';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Delete the tags for a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'enim';
    $request->resourceArn = 'consequatur';
    $request->tagKeys = [
        'quibusdam',
        'explicabo',
        'deserunt',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApplicationSettings

Updates the settings of an application registered with AWS Systems Manager for SAP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationCredential;
use \OpenAPI\OpenAPI\Models\Shared\CredentialTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApplicationSettingsRequest();
    $request->requestBody = new UpdateApplicationSettingsRequestBody();
    $request->requestBody->applicationId = 'distinctio';
    $request->requestBody->credentialsToAddOrUpdate = [
        new ApplicationCredential(),
        new ApplicationCredential(),
        new ApplicationCredential(),
        new ApplicationCredential(),
    ];
    $request->requestBody->credentialsToRemove = [
        new ApplicationCredential(),
        new ApplicationCredential(),
    ];
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'magni';

    $response = $sdk->sdk->updateApplicationSettings($request);

    if ($response->updateApplicationSettingsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
