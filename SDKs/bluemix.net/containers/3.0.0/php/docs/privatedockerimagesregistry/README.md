# privateDockerImagesRegistry

### Available Operations

* [getRegistryNamespaces](#getregistrynamespaces) - Retrieve the namespace of an organization.
* [getRegistryNamespacesNamespace](#getregistrynamespacesnamespace) - Check the availability of a namespace
* [putRegistryNamespacesNamespace](#putregistrynamespacesnamespace) - Set a namespace for your private Bluemix registry.

## getRegistryNamespaces

This endpoint retrieves the namespace that was set for the organization that owns the current space (corresponding IBM Containers command: `cf ic namespace get`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRegistryNamespacesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRegistryNamespacesRequest();
    $request->xAuthProjectId = 'tenetur';
    $request->xAuthToken = 'ipsam';

    $response = $sdk->privateDockerImagesRegistry->getRegistryNamespaces($request);

    if ($response->namespace !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRegistryNamespacesNamespace

This endpoint checks whether a namespace is available in Bluemix and can be used to set up the private Docker images registry for an organization. When a HTTP code `201 Ok` is returned, the namespace is already assigned to another organization in Bluemix and cannot be used. When a HTTP code `404 Not found` is returned, the namespace can be used for your organization. 

 Consider the following rules when choosing a namespace for your organization: 

- Every organization can have one namespace at a time only 
- The namespace must be unique in Bluemix. 
- The namespace can be 4-30 characters long. 
- The namespace must start with at least one letter or number. 
- The namespace can only contain lowercase letters, numbers or underscores (_). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRegistryNamespacesNamespaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRegistryNamespacesNamespaceRequest();
    $request->xAuthProjectId = 'id';
    $request->xAuthToken = 'possimus';
    $request->namespace = 'aut';

    $response = $sdk->privateDockerImagesRegistry->getRegistryNamespacesNamespace($request);

    if ($response->namespace !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRegistryNamespacesNamespace

Set up your own Docker images registry in Bluemix by defining a namespace for your organization (corresponding IBM Containers command: `cf ic namespace set <namespace>`). The namespace is used to generate a unique URL to your private Bluemix registry. In your private registry you store all Docker images that you want to share across your organization. To create a container from an image, you must first push the image to your registry. 

 The namespace cannot be changed after is has been set. Consider the following rules to choose a namespace for your organization: 

- Every organization can have one namespace at a time only 
- The namespace must be unique in Bluemix. 
- The namespace can be 4-30 characters long. 
- The namespace must start with at least one letter or number. 
- The namespace can only contain lowercase letters, numbers or underscores (_).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutRegistryNamespacesNamespaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRegistryNamespacesNamespaceRequest();
    $request->xAuthProjectId = 'quasi';
    $request->xAuthToken = 'error';
    $request->namespace = 'temporibus';

    $response = $sdk->privateDockerImagesRegistry->putRegistryNamespacesNamespace($request);

    if ($response->namespace !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
