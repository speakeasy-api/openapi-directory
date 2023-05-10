# manage

### Available Operations

* [addClutter](#addclutter) - Upload clutter data as GeoJSON
* [delete](#delete) - Delete a calculation from the database.
* [deleteNetwork](#deletenetwork) - Delete an entire network
* [export](#export) - Export a calculation in a GIS file format
* [list](#list) - List calculations from your archive

## addClutter

Upload GeoJSON lineString and polygon features to your account. The height property is in metres and the material code / type / attenuation are.. 1	Trees –	0.25,2Trees +	0.5,3	Timber –	1.0,4	Timber +	1.5,5	Brick – 	1.5,6	Brick +	2.0,7	Concrete –	3.0,8	Concrete +	4.0,9	Metal	6.0

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddClutterRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Feature;
use \OpenAPI\OpenAPI\Models\Operations\AddClutterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddClutterRequestBody();
    $request->features = [
        new Feature(),
        new Feature(),
        new Feature(),
        new Feature(),
    ];
    $request->name = 'Jessie Langosh V';
    $request->type = 'voluptate';

    $requestSecurity = new AddClutterSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->manage->addClutter($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## delete

Warning! you could lose data. This function will delete the entry from the database and the file from the disk. Accidental deletion can be reversed by contacting support with biscuits who maintain an offsite backup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRequest();
    $request->cid = 739264;

    $requestSecurity = new DeleteSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->manage->delete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetwork

Warning! you could lose data. This function will delete the entry from the database and the file from the disk. Accidental deletion can be reversed by contacting support with biscuits who maintain an offsite backup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkRequest();
    $request->nid = 'perferendis';

    $requestSecurity = new DeleteNetworkSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->manage->deleteNetwork($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## export

Download your data in a format suitable for a third party viewer like Google Earth or ESRI Arcmap.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExportFmtEnum;
use \OpenAPI\OpenAPI\Models\Operations\ExportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportRequest();
    $request->file = 'doloremque';
    $request->fmt = ExportFmtEnum::KMZPPA;

    $requestSecurity = new ExportSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->manage->export($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## list

List your area and path calculations, sorted by time and limited to the last few hundred. To fetch all for a given network append a 'net' filter with the network name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRequest();
    $request->e = 2828.07;
    $request->n = 9795.87;
    $request->s = 1201.96;
    $request->w = 3594.44;

    $requestSecurity = new ListSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->manage->list($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
