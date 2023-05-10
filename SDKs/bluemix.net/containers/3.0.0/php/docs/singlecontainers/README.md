# singleContainers

### Available Operations

* [deleteContainersNameOrId](#deletecontainersnameorid) - Remove a single container
* [getContainersJson](#getcontainersjson) - List single containers in a space.
* [getContainersIdStatus](#getcontainersidstatus) - List the current state of a container.
* [getContainersNameOrIdJson](#getcontainersnameoridjson) - Inspect a single container
* [postContainersCreate](#postcontainerscreate) - Create and start a single container
* [postContainersNameOrIdPause](#postcontainersnameoridpause) - Pause a single container
* [postContainersNameOrIdRename](#postcontainersnameoridrename) - Rename a single container
* [postContainersNameOrIdRestart](#postcontainersnameoridrestart) - Restart a single container
* [postContainersNameOrIdStart](#postcontainersnameoridstart) - Start a single container
* [postContainersNameOrIdStop](#postcontainersnameoridstop) - Stop a single container
* [postContainersNameOrIdUnpause](#postcontainersnameoridunpause) - Unpause a single container

## deleteContainersNameOrId

Remove a single container that is identified by container ID or name from a space (corresponding IBM Containers command: `cf ic delete <container>`). The container must be stopped before it can be deleted, unless the `force` query parameter is set to true.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContainersNameOrIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteContainersNameOrIdRequest();
    $request->xAuthProjectId = 'enim';
    $request->xAuthToken = 'accusamus';
    $request->force = false;
    $request->nameOrId = 'commodi';

    $response = $sdk->singleContainers->deleteContainersNameOrId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContainersJson

This endpoint returns a list of all single containers in a space that are currently in a running state (corresponding IBM Containers command: `cf ic ps`). To list all single containers independent of their current state, set the `all` query parameter to true.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContainersJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContainersJsonRequest();
    $request->xAuthProjectId = 'repudiandae';
    $request->xAuthToken = 'quae';
    $request->all = 'ipsum';
    $request->filters = 'quidem';

    $response = $sdk->singleContainers->getContainersJson($request);

    if ($response->containers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContainersIdStatus

This endpoint returns the current state of a container. This state can either be a transient state, such as BUILDING and NETWORKING, or a non-transient state, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContainersIdStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContainersIdStatusRequest();
    $request->xAuthProjectId = 'molestias';
    $request->xAuthToken = 'excepturi';
    $request->id = 'd488e1e9-1e45-40ad-aabd-44269802d502';

    $response = $sdk->singleContainers->getContainersIdStatus($request);

    if ($response->getContainerStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContainersNameOrIdJson

This endpoint retrieves detailed information about a single container (corresponding IBM Containers command: `cf ic inspect <container>`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContainersNameOrIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContainersNameOrIdJsonRequest();
    $request->xAuthProjectId = 'dolorum';
    $request->xAuthToken = 'excepturi';
    $request->nameOrId = 'tempora';

    $response = $sdk->singleContainers->getContainersNameOrIdJson($request);

    if ($response->containerInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContainersCreate

This endpoint creates and starts a single container in your space based on the Docker image that is specified in the Image field of the request json. A single container in IBM Containers is similar to a container that you create in your local Docker environment. Single containers are a good way to start with IBM Containers and to learn about how containers work in the IBM Cloud and the features that IBM Containers provides. They are also recommended when you want to run simple app tests or during the development process of an app. 

 In the Docker API there are two separate APIs to create and start a container. However in IBM Containers a container is created and started in a single API call. Therefore, this API merges parameters from the Docker API to create and start container. 

 To create a container with IBM Containers, you must at least define the image that the container is based on.

- Image: You must include the full path to the image in your private Bluemix registry in the format: `registry.ng.bluemix.net/<namespace>/<image>`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostContainersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateContainer;
use \OpenAPI\OpenAPI\Models\Shared\HostConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContainersCreateRequest();
    $request->createContainer = new CreateContainer();
    $request->createContainer->bluemixApp = 'facilis';
    $request->createContainer->cmd = [
        'labore',
        'delectus',
        'eum',
    ];
    $request->createContainer->cpuset = 'non';
    $request->createContainer->env = [
        'sint',
        'aliquid',
        'provident',
        'necessitatibus',
    ];
    $request->createContainer->exposedPorts = [
        'officia',
        'dolor',
        'debitis',
    ];
    $request->createContainer->hostConfig = new HostConfig();
    $request->createContainer->hostConfig->binds = [
        'dolorum',
        'in',
        'in',
        'illum',
    ];
    $request->createContainer->hostConfig->extraHosts = [
        'rerum',
        'dicta',
        'magnam',
        'cumque',
    ];
    $request->createContainer->hostConfig->links = [
        'ea',
        'aliquid',
        'laborum',
        'accusamus',
    ];
    $request->createContainer->hostConfig->portBindings = [
        'occaecati',
    ];
    $request->createContainer->image = 'enim';
    $request->createContainer->memory = 881736;
    $request->createContainer->numberCpus = 965417;
    $request->createContainer->volumes = 'quidem';
    $request->xAuthProjectId = 'provident';
    $request->xAuthToken = 'nam';
    $request->name = 'Nelson Lesch';

    $response = $sdk->singleContainers->postContainersCreate($request);

    if ($response->containerId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContainersNameOrIdPause

Pause all processes in a running single container with a given container ID or name (corresponding IBM Containers command: `cf ic pause <container>`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostContainersNameOrIdPauseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContainersNameOrIdPauseRequest();
    $request->xAuthProjectId = 'deserunt';
    $request->xAuthToken = 'nisi';
    $request->nameOrId = 'vel';

    $response = $sdk->singleContainers->postContainersNameOrIdPause($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContainersNameOrIdRename

Change the current name of an existing single container that is identified by the container ID or name (corresponding IBM Containers command: `cf ic rename <old_name> <new_name>`). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostContainersNameOrIdRenameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContainersNameOrIdRenameRequest();
    $request->xAuthProjectId = 'natus';
    $request->xAuthToken = 'omnis';
    $request->name = 'Dorothy Kovacek';
    $request->nameOrId = 'id';

    $response = $sdk->singleContainers->postContainersNameOrIdRename($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContainersNameOrIdRestart

Restart a container with a given container ID or name (corresponding IBM Containers command: `cf ic restart <container>`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostContainersNameOrIdRestartRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContainersNameOrIdRestartRequest();
    $request->xAuthProjectId = 'labore';
    $request->xAuthToken = 'labore';
    $request->nameOrId = 'suscipit';
    $request->t = 618016;

    $response = $sdk->singleContainers->postContainersNameOrIdRestart($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContainersNameOrIdStart

Start a single container with a given container name or ID (corresponding IBM Containers command: `cf ic start <container>`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostContainersNameOrIdStartRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContainersNameOrIdStartRequest();
    $request->xAuthProjectId = 'nobis';
    $request->xAuthToken = 'eum';
    $request->nameOrId = 'vero';

    $response = $sdk->singleContainers->postContainersNameOrIdStart($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContainersNameOrIdStop

Stop a single container with a given container name or ID (corresponding IBM Containers command: `cf ic stop <container>`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostContainersNameOrIdStopRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContainersNameOrIdStopRequest();
    $request->xAuthProjectId = 'aspernatur';
    $request->xAuthToken = 'architecto';
    $request->nameOrId = 'magnam';
    $request->t = 92373;

    $response = $sdk->singleContainers->postContainersNameOrIdStop($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContainersNameOrIdUnpause

Unpause all processes that are currently stopped inside a single containers with a given container ID or name (corresponding IBM Containers command: `cf ic unpause <container>`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostContainersNameOrIdUnpauseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContainersNameOrIdUnpauseRequest();
    $request->xAuthProjectId = 'excepturi';
    $request->xAuthToken = 'ullam';
    $request->nameOrId = 'provident';

    $response = $sdk->singleContainers->postContainersNameOrIdUnpause($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
