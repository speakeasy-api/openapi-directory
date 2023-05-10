# fileShares

### Available Operations

* [deleteVolumesFsName](#deletevolumesfsname) - Delete a file share
* [getVolumesFsFlavorsJson](#getvolumesfsflavorsjson) - List available file share sizes
* [getVolumesFsJson](#getvolumesfsjson) - List available file shares in a space
* [getVolumesFsNameJson](#getvolumesfsnamejson) - Inspect a file share
* [postVolumesFsCreate](#postvolumesfscreate) - Create a file share in a space

## deleteVolumesFsName

This endpoint deletes a file share from a space (corresponding IBM Containers command: `cf ic volume fs-rm FSNAME`).

 Before you can delete a file share, all mounted volumes must be deleted first. To delete a volume, run `cf ic volume rm VOLNAME` or call the `DELETE /volumes/{name}` API endpoint. 

 **Note:** To delete a file share you must have been granted organization developer rights.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVolumesFsNameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVolumesFsNameRequest();
    $request->xAuthProjectId = 'cum';
    $request->xAuthToken = 'esse';
    $request->name = 'Mrs. Miriam Collier';

    $response = $sdk->fileShares->deleteVolumesFsName($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVolumesFsFlavorsJson

This endpoint returns a list of available file shares in gigabyte (corresponding IBM Containers command: `cf ic volume fs-flavor-list`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVolumesFsFlavorsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVolumesFsFlavorsJsonRequest();
    $request->xAuthProjectId = 'sed';
    $request->xAuthToken = 'iste';

    $response = $sdk->fileShares->getVolumesFsFlavorsJson($request);

    if ($response->getVolumesFsFlavorsJSON200ApplicationJSONIntegers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVolumesFsJson

This endpoint returns a list of all file shares that are availble in a space (corresponding IBM Containers command: `cf ic volume fs-list`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVolumesFsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVolumesFsJsonRequest();
    $request->xAuthProjectId = 'dolor';
    $request->xAuthToken = 'natus';

    $response = $sdk->fileShares->getVolumesFsJson($request);

    if ($response->fileshares !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVolumesFsNameJson

This endpoint returns detailed information about a file share (corresponding IBM Containers command: `cf ic volume fs-inspect FSNAME`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVolumesFsNameJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVolumesFsNameJsonRequest();
    $request->xAuthProjectId = 'laboriosam';
    $request->xAuthToken = 'hic';
    $request->name = 'Wilbur Kirlin';

    $response = $sdk->fileShares->getVolumesFsNameJson($request);

    if ($response->getFileshareDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postVolumesFsCreate

This endpoint creates a new file share in a space (corresponding IBM Containers command: `cf ic volume fs-create FSNAME FSSIZE FSIOPS`). 

 A file share is a persistent NFS-based (Network File System) storage system that hosts Docker volumes in a Bluemix space and allows a user to store and access container and app-related files. To store files in a file share, you must create a container volume and save the data into this volume.

 As soon as you create your first volume in a space with the `cf ic volume create VOLNAME` command or the `POST /volumes/create` API endpoint, a default file share with 20 GB at 4 IOPS (Input Output operations Per Second) is created at no cost. 

The organization manager can create file shares with specific storage size and IOPS to meet the storage needs of the space. File shares can be provisioned in sizes from 20 GB to 12 TB and at IOPS per GB of 0.25, 2 or 4. Run `cf ic volume fs-flavor-list` or call the `GET /volumes/fs/flavors/json` API endpoint to retrieve a list of available file share sizes. The file share size in relation to the number of IOPS impacts the speed that data can be read and written from and to the container volume.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostVolumesFsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\FileshareParam;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostVolumesFsCreateRequest();
    $request->fileshareParam = new FileshareParam();
    $request->fileshareParam->fsIOPS = 4370.32;
    $request->fileshareParam->fsName = 'saepe';
    $request->fileshareParam->fsSize = 697631;
    $request->xAuthProjectId = 'architecto';
    $request->xAuthToken = 'ipsa';

    $response = $sdk->fileShares->postVolumesFsCreate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
