# publicIPAddresses

### Available Operations

* [getContainersFloatingIps](#getcontainersfloatingips) - List available public IP addresses in a space
* [postContainersFloatingIpsRequest](#postcontainersfloatingipsrequest) - Request a public IP address for a space
* [postContainersFloatingIpsIpRelease](#postcontainersfloatingipsiprelease) - Release public IP address
* [postContainersNameOrIdFloatingIpsIpBind](#postcontainersnameoridfloatingipsipbind) - Bind a public IP address to a single container
* [postContainersNameOrIdFloatingIpsIpUnbind](#postcontainersnameoridfloatingipsipunbind) - Unbind a public IP address from a container

## getContainersFloatingIps

This endpoint returns a list of all public IP addresses that are allocated to a space and not bound to a container. If you want to list all public IP addresses that are allocated to a space, even those that are already bound to a container, use the `all` query parameter (corrsponding IBM Containers command: `cf ic ip list`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContainersFloatingIpsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContainersFloatingIpsRequest();
    $request->xAuthProjectId = 'laborum';
    $request->xAuthToken = 'quasi';
    $request->all = false;

    $response = $sdk->publicIPAddresses->getContainersFloatingIps($request);

    if ($response->floatingIPS !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContainersFloatingIpsRequest

This endpoint requests a new public IP address for a space (corresponding IBM Containers command: `cf ic ip request`). The number of public IP addresses depends on the quota that is assigned to the space. If there is not enough quota left to request a new public IP address, you can either contact your organization manager to increase the quota, or unbind an existing IP address from a container by running `cf ic ip unbind <ip_adress> <container>` command, or  calling the `POST /container/{name_or_id}/floating-ips/{ip}/unbind` endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostContainersFloatingIpsRequestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContainersFloatingIpsRequestRequest();
    $request->xAuthProjectId = 'reiciendis';
    $request->xAuthToken = 'voluptatibus';

    $response = $sdk->publicIPAddresses->postContainersFloatingIpsRequest($request);

    if ($response->postContainersFloatingIpsRequest200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContainersFloatingIpsIpRelease

This endpoint releases a public IP address from a space (corresponding IBM Containers command: `cf ic ip release <ip_adress>`). The public IP address is no longer allocated to the space. If a container was bound to the IP address, it is automatically unbound.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostContainersFloatingIpsIpReleaseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContainersFloatingIpsIpReleaseRequest();
    $request->xAuthProjectId = 'vero';
    $request->xAuthToken = 'nihil';
    $request->ip = 'praesentium';

    $response = $sdk->publicIPAddresses->postContainersFloatingIpsIpRelease($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContainersNameOrIdFloatingIpsIpBind

This endpoint binds an available public IP address to a single container (corresponding IBM Containers command: `cf ic ip bind <ip_adress> <container>`). After a container is bound to a public IP address, it can be accessed at `https://<public_ip_adress>:<public_port>`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostContainersNameOrIdFloatingIpsIpBindRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContainersNameOrIdFloatingIpsIpBindRequest();
    $request->xAuthProjectId = 'voluptatibus';
    $request->xAuthToken = 'ipsa';
    $request->ip = 'omnis';
    $request->nameOrId = 'voluptate';

    $response = $sdk->publicIPAddresses->postContainersNameOrIdFloatingIpsIpBind($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContainersNameOrIdFloatingIpsIpUnbind

This endpoint unbinds a public IP address from a container (corresponding IBM Containers command: `cf ic ip unbind <ip_adress> <container>`). The container that is unbound from the IP address will not be accessible from the internet anymore. The public IP address will be further allocated to the space and can be used to be bound to other containers. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostContainersNameOrIdFloatingIpsIpUnbindRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContainersNameOrIdFloatingIpsIpUnbindRequest();
    $request->xAuthProjectId = 'cum';
    $request->xAuthToken = 'perferendis';
    $request->ip = 'doloremque';
    $request->nameOrId = 'reprehenderit';

    $response = $sdk->publicIPAddresses->postContainersNameOrIdFloatingIpsIpUnbind($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
