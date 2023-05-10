# containerGroups

### Available Operations

* [deleteContainersGroupsNameOrId](#deletecontainersgroupsnameorid) - Stop and delete all container instances in a container group.
* [getContainersGroups](#getcontainersgroups) - List all container groups in a space
* [getContainersGroupsNameOrId](#getcontainersgroupsnameorid) - Inspect a container group.
* [patchContainersGroupsNameOrId](#patchcontainersgroupsnameorid) - Update a container group.
* [postContainersGroups](#postcontainersgroups) - Create and start a container group.
* [postContainersGroupsNameOrIdMaproute](#postcontainersgroupsnameoridmaproute) - Map a public route to a container group.
* [postContainersGroupsNameOrIdUnmaproute](#postcontainersgroupsnameoridunmaproute) - Unmap a public route from a container group

## deleteContainersGroupsNameOrId

Stops and deletes the container instances that run in a container group (corresponding IBM Containers command: `cf ic group rm <group_name>`). When you delete a container group, all floating private IP addresses are released.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContainersGroupsNameOrIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteContainersGroupsNameOrIdRequest();
    $request->xAuthProjectId = 'vel';
    $request->xAuthToken = 'error';
    $request->force = 'deserunt';
    $request->nameOrId = 'suscipit';

    $response = $sdk->containerGroups->deleteContainersGroupsNameOrId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContainersGroups

This endpoint returns a list of all container groups in a space independent of their current state. (corresponding IBM Containers command: `cf ic group list`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContainersGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContainersGroupsRequest();
    $request->xAuthProjectId = 'iure';
    $request->xAuthToken = 'magnam';

    $response = $sdk->containerGroups->getContainersGroups($request);

    if ($response->containersGroupsGetListItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContainersGroupsNameOrId

This endpoint retrieves detailed information about a container group with a given name (corresponding IBM Containers command: `cf ic group inspect GROUP`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContainersGroupsNameOrIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContainersGroupsNameOrIdRequest();
    $request->xAuthProjectId = 'debitis';
    $request->xAuthToken = 'ipsa';
    $request->nameOrId = 'delectus';

    $response = $sdk->containerGroups->getContainersGroupsNameOrId($request);

    if ($response->containersGroupsNameOrIdGetDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchContainersGroupsNameOrId

Update the number of container instances that run in a container group (corresponding IBM Containers command: `cf ic group update <option> <group>`). 

Note: You can run only one update at a time.  

 The desired number is the number of container instances that you require. It must be within the current limits of Max and Min. To increase the number of desired container instances above the Max value, you must first execute an update on the Max value. Once this update is completed, you can increase the desired number of container instances. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchContainersGroupsNameOrIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContainersGroupsNameOrIdPatchUpdatedInfo;
use \OpenAPI\OpenAPI\Models\Shared\ContainersGroupsNameOrIdPatchUpdatedInfoNumberInstances;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchContainersGroupsNameOrIdRequest();
    $request->containersGroupsNameOrIdPatchUpdatedInfo = new ContainersGroupsNameOrIdPatchUpdatedInfo();
    $request->containersGroupsNameOrIdPatchUpdatedInfo->autorecovery = 'tempora';
    $request->containersGroupsNameOrIdPatchUpdatedInfo->environment = [
        'molestiae',
        'minus',
    ];
    $request->containersGroupsNameOrIdPatchUpdatedInfo->numberInstances = new ContainersGroupsNameOrIdPatchUpdatedInfoNumberInstances();
    $request->containersGroupsNameOrIdPatchUpdatedInfo->numberInstances->desired = 812169;
    $request->containersGroupsNameOrIdPatchUpdatedInfo->numberInstances->max = 528895;
    $request->containersGroupsNameOrIdPatchUpdatedInfo->numberInstances->min = 479977;
    $request->xAuthProjectId = 'excepturi';
    $request->xAuthToken = 'nisi';
    $request->nameOrId = 'recusandae';

    $response = $sdk->containerGroups->patchContainersGroupsNameOrId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContainersGroups

This endpoint creates and starts a new container group in your space. A container group consists of two or more single containers that are all created from the same container image and as a consequence are configured in the same way. Container groups offer different options at no cost to make your app highly available, such as in-built load balancing, auto-recovery of unhealthy container instances, and auto-scaling of container instances based on CPU and memory usage.

To create a container group with IBM Containers, you must at least define a container group name and the image that the container group is based on. Required attributes:
















- Name: The container group name must start with a letter and then can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-). 
- Image: You must include the full path to the image in your private Bluemix registry in the format:`registry.ng.bluemix.net/<namespace>/<image>`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostContainersGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContainersGroupsPostRequiredAttributes;
use \OpenAPI\OpenAPI\Models\Shared\ContainersGroupsPostRequiredAttributesNumberInstances;
use \OpenAPI\OpenAPI\Models\Shared\ContainersGroupsPostRequiredAttributesRoute;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContainersGroupsRequest();
    $request->containersGroupsPostRequiredAttributes = new ContainersGroupsPostRequiredAttributes();
    $request->containersGroupsPostRequiredAttributes->autorecovery = 'temporibus';
    $request->containersGroupsPostRequiredAttributes->bluemixApp = 'ab';
    $request->containersGroupsPostRequiredAttributes->cmd = [
        'veritatis',
        'deserunt',
    ];
    $request->containersGroupsPostRequiredAttributes->env = [
        'ipsam',
    ];
    $request->containersGroupsPostRequiredAttributes->image = 'repellendus';
    $request->containersGroupsPostRequiredAttributes->memory = 957156;
    $request->containersGroupsPostRequiredAttributes->name = 'Fred Strosin';
    $request->containersGroupsPostRequiredAttributes->numberInstances = new ContainersGroupsPostRequiredAttributesNumberInstances();
    $request->containersGroupsPostRequiredAttributes->numberInstances->desired = 473608;
    $request->containersGroupsPostRequiredAttributes->numberInstances->max = 799159;
    $request->containersGroupsPostRequiredAttributes->numberInstances->min = 800911;
    $request->containersGroupsPostRequiredAttributes->port = 461479;
    $request->containersGroupsPostRequiredAttributes->route = new ContainersGroupsPostRequiredAttributesRoute();
    $request->containersGroupsPostRequiredAttributes->route->domain = 'totam';
    $request->containersGroupsPostRequiredAttributes->route->host = 'porro';
    $request->containersGroupsPostRequiredAttributes->volumes = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->xAuthProjectId = 'occaecati';
    $request->xAuthToken = 'fugit';

    $response = $sdk->containerGroups->postContainersGroups($request);

    if ($response->containersGroupsPostCreatedInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContainersGroupsNameOrIdMaproute

If you want your container group to be accessible from the Internet, you need to expose a public port and map a public route to it (corresponding IBM Containers command: `cf ic route map -n <host> -d <domain> <group>`). Every route consists of the host name and domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostContainersGroupsNameOrIdMaprouteRequest;
use \OpenAPI\OpenAPI\Models\Shared\Route;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContainersGroupsNameOrIdMaprouteRequest();
    $request->route = new Route();
    $request->route->domain = 'deleniti';
    $request->route->host = 'hic';
    $request->xAuthProjectId = 'optio';
    $request->xAuthToken = 'totam';
    $request->nameOrId = 'beatae';

    $response = $sdk->containerGroups->postContainersGroupsNameOrIdMaproute($request);

    if ($response->containersGroupsNameOrIdMaproutePostInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContainersGroupsNameOrIdUnmaproute

This endpoint unmaps a public route from a container group (corresponding IBM Containers command: `cf ic route unmap -n <host> -d <domain> <group>`). If no other public route is mapped to the container group, then the container group is no longer available from the internet. 

 When you unmap a route from a container group, the route is not deleted and can be mapped to other container groups. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostContainersGroupsNameOrIdUnmaprouteRequest;
use \OpenAPI\OpenAPI\Models\Shared\Route;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContainersGroupsNameOrIdUnmaprouteRequest();
    $request->route = new Route();
    $request->route->domain = 'commodi';
    $request->route->host = 'molestiae';
    $request->xAuthProjectId = 'modi';
    $request->xAuthToken = 'qui';
    $request->nameOrId = 'impedit';

    $response = $sdk->containerGroups->postContainersGroupsNameOrIdUnmaproute($request);

    if ($response->containersGroupsNameOrIdMaproutePostInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
