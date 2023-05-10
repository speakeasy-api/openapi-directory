# images

### Available Operations

* [deleteImagesId](#deleteimagesid) - Remove a Docker image.
* [getImagesJson](#getimagesjson) - List all Docker images that are available in your private Bluemix registry.
* [getImagesNameOrIdJson](#getimagesnameoridjson) - Inspect a Docker image in private Bluemix registry
* [postBuild](#postbuild) - Build a Docker image from a Dockerfile

## deleteImagesId

Remove a Docker image from the private Bluemix registry that is identified by the image ID (corresponding IBM Containers command: `cf ic rmi <image>`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteImagesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteImagesIdRequest();
    $request->xAuthProjectId = 'reiciendis';
    $request->xAuthToken = 'est';
    $request->id = 'aa2352c5-9559-407a-bf1a-3a2fa9467739';

    $response = $sdk->images->deleteImagesId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImagesJson

This endpoint returns a list of all available Docker images in a private Bluemix registry (corresponding IBM Containers command: `cf ic images`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetImagesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImagesJsonRequest();
    $request->xAuthProjectId = 'quia';
    $request->xAuthToken = 'quis';

    $response = $sdk->images->getImagesJson($request);

    if ($response->imageInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImagesNameOrIdJson

This endpoint returns detailed information about a Docker image that is stored in the private Bluemix registry of an organization (corresponding IBM Containers command: `cf ic inspect <image_name_or_id>`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetImagesNameOrIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImagesNameOrIdJsonRequest();
    $request->xAuthProjectId = 'vitae';
    $request->xAuthToken = 'laborum';
    $request->nameOrId = 'animi';

    $response = $sdk->images->getImagesNameOrIdJson($request);

    if ($response->imageDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBuild

This API builds a new container image from a Dockerfile that is stored on your local machine and pushes the image to the private Bluemix registry (corresponding IBM Containers command: `cf ic build`).

 To push an image to your Bluemix registry, a namespace must be set for the organization. Run `cf ic namespace get` or call the `GET /registry/namespaces` API to check if a namespace is already set. If not, run `cf ic namespace set NAMESPACE` or call the `PUT /registry/namespaces/{namespace}` API to set a namespace for your organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostBuildRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostBuildRequest();
    $request->requestBody = 'enim';
    $request->xAuthProjectId = 'odit';
    $request->xAuthToken = 'quo';
    $request->nocache = false;
    $request->pull = false;
    $request->q = false;
    $request->t = 'sequi';

    $response = $sdk->images->postBuild($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
