# volumes

### Available Operations

* [deleteVolumesName](#deletevolumesname) - Delete a volume
* [getVolumesJson](#getvolumesjson) - List all volumes for a space
* [getVolumesNameJson](#getvolumesnamejson) - Retrieve detailed information about a volume. 
* [postVolumesCreate](#postvolumescreate) - Create a volume in a space
* [postVolumesName](#postvolumesname) - Share a volume with another space

## deleteVolumesName

Delete a volume with a given name from a space (corresponding IBM Containers command: `cf ic volume rm VOLNAME`). To delete a volume, all mounted containers must be unmounted first. After the volume is deleted, the data that are stored in the volume are lost. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVolumesNameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVolumesNameRequest();
    $request->xAuthProjectId = 'quos';
    $request->xAuthToken = 'sint';
    $request->name = 'Angie Wisozk';

    $response = $sdk->volumes->deleteVolumesName($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVolumesJson

This endpoint returns a list of all volumes that are available in the given space (corresponding IBM Containers command: `cf ic volume list`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVolumesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVolumesJsonRequest();
    $request->xAuthProjectId = 'eum';
    $request->xAuthToken = 'dolor';

    $response = $sdk->volumes->getVolumesJson($request);

    if ($response->volumes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVolumesNameJson

Retrieve a detailed list of information about a volume that is identified by the volume name (corresponding IBM Containers command: `cf ic volume inspect VOLNAME`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVolumesNameJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVolumesNameJsonRequest();
    $request->xAuthProjectId = 'necessitatibus';
    $request->xAuthToken = 'odit';
    $request->name = 'Joyce Kertzmann';

    $response = $sdk->volumes->getVolumesNameJson($request);

    if ($response->volume !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postVolumesCreate

This endpoints creates a new volume in your space (corresponding IBM Containers command: `cf ic volume create VOLNAME`). A volume is used to persist and access app data between container restarts. Volumes are hosted on file shares that define the available actual storage in Bluemix and the number of input and output transactions per second (IOPS). 

 After you have created a volume, you must mount it to a container by using the `--volume` option in the `cf ic run` (single containers) or `cf ic group create` (container groups) command. You can also define the volume as part of the HTTP body and send a request to the `POST /containers/create` (single containers) or `POST /containers/groups` (container groups) endpoints. 

 Note: If you mount multiple containers in a space to the same volume, they share the data in the volume and can access them anytime. When a container is deleted, the associated volume is not removed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostVolumesCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostVolumesCreateRequest();
    $request->xAuthProjectId = 'eius';
    $request->xAuthToken = 'maxime';
    $request->fsName = 'deleniti';
    $request->name = 'Dr. Arnold Bradtke';

    $response = $sdk->volumes->postVolumesCreate($request);

    if ($response->volume !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postVolumesName

This endpoint provisions an existing volume that was created in one space to another space within the same organization. Single containers and container groups in each space can read and write to the shared volume. The volume remains owned by the original space it was created in, including management and billing. For example, the volume can be deleted from the original space only.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostVolumesNameRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateVolume;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostVolumesNameRequest();
    $request->updateVolume = new UpdateVolume();
    $request->updateVolume->addSpaces = [
        'nihil',
        'repellat',
        'quibusdam',
    ];
    $request->updateVolume->removeSpaces = [
        'saepe',
    ];
    $request->xAuthProjectId = 'pariatur';
    $request->xAuthToken = 'accusantium';
    $request->name = 'Irma Morissette DDS';

    $response = $sdk->volumes->postVolumesName($request);

    if ($response->volume !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
