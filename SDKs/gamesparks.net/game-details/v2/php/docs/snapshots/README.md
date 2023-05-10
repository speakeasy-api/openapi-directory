# snapshots

### Available Operations

* [copySnapshotToExistingGameUsingPOST1](#copysnapshottoexistinggameusingpost1) - copySnapshotToExistingGame
* [copySnapshotToNewGameUsingPOST](#copysnapshottonewgameusingpost) - copySnapshotToNewGame
* [createSnapshotsUsingPOST](#createsnapshotsusingpost) - createSnapshots
* [deleteSnapshotUsingDELETE1](#deletesnapshotusingdelete1) - deleteSnapshot
* [getLiveSnapshotIdUsingGET](#getlivesnapshotidusingget) - getLiveSnapshotId
* [getSnapshotUsingGET](#getsnapshotusingget) - getSnapshot
* [getSnapshotsUsingGET](#getsnapshotsusingget) - getSnapshots
* [getSnapshotsUsingGET1](#getsnapshotsusingget1) - getSnapshots
* [publishSnapshotUsingPOST1](#publishsnapshotusingpost1) - publishSnapshot
* [revertToSnapshotUsingPOST](#reverttosnapshotusingpost) - revertToSnapshot
* [unpublishSnapshotUsingPOST](#unpublishsnapshotusingpost) - unpublishSnapshot

## copySnapshotToExistingGameUsingPOST1

copySnapshotToExistingGame

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CopySnapshotToExistingGameUsingPOST1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CopySnapshotToExistingGameUsingPOST1Request();
    $request->apiKey = 'maiores';
    $request->includeBinaries = false;
    $request->includeCollaborators = false;
    $request->includeGameConfig = false;
    $request->includeMetadata = false;
    $request->snapshotId = 'quidem';
    $request->targetApiKey = 'ipsam';

    $response = $sdk->snapshots->copySnapshotToExistingGameUsingPOST1($request);

    if ($response->snapshotCreationSuccessModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## copySnapshotToNewGameUsingPOST

copySnapshotToNewGame

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CopySnapshotToNewGameUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CopySnapshotToNewGameUsingPOSTRequest();
    $request->apiKey = 'voluptate';
    $request->includeBinaries = false;
    $request->includeCollaborators = false;
    $request->includeGameConfig = false;
    $request->includeMetadata = false;
    $request->snapshotId = 'autem';

    $response = $sdk->snapshots->copySnapshotToNewGameUsingPOST($request);

    if ($response->snapshotCreationSuccessModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSnapshotsUsingPOST

createSnapshots

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSnapshotsUsingPOSTRequest;
use \OpenAPI\OpenAPI\Models\Shared\SnapshotCreationModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSnapshotsUsingPOSTRequest();
    $request->snapshotCreationModel = new SnapshotCreationModel();
    $request->snapshotCreationModel->description = 'nam';
    $request->apiKey = 'eaque';

    $response = $sdk->snapshots->createSnapshotsUsingPOST($request);

    if ($response->snapshotModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSnapshotUsingDELETE1

deleteSnapshot

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DELETESnapshotUsingDELETE1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DELETESnapshotUsingDELETE1Request();
    $request->apiKey = 'pariatur';
    $request->snapshotId = 'nemo';

    $response = $sdk->snapshots->deleteSnapshotUsingDELETE1($request);

    if ($response->messageModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLiveSnapshotIdUsingGET

getLiveSnapshotId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETLiveSnapshotIdUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETLiveSnapshotIdUsingGETRequest();
    $request->apiKey = 'voluptatibus';

    $response = $sdk->snapshots->getLiveSnapshotIdUsingGET($request);

    if ($response->messageModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSnapshotUsingGET

getSnapshot

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETSnapshotUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSnapshotUsingGETRequest();
    $request->apiKey = 'perferendis';
    $request->snapshotId = 'fugiat';

    $response = $sdk->snapshots->getSnapshotUsingGET($request);

    if ($response->snapshotModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSnapshotsUsingGET

getSnapshots

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETSnapshotsUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSnapshotsUsingGETRequest();
    $request->apiKey = 'amet';
    $request->page = 11714;
    $request->pageSize = 764912;

    $response = $sdk->snapshots->getSnapshotsUsingGET($request);

    if ($response->snapshotModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSnapshotsUsingGET1

getSnapshots

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETSnapshotsUsingGET1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSnapshotsUsingGET1Request();
    $request->apiKey = 'corporis';
    $request->pageSize = 944124;

    $response = $sdk->snapshots->getSnapshotsUsingGET1($request);

    if ($response->snapshotModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishSnapshotUsingPOST1

publishSnapshot

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PublishSnapshotUsingPOST1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishSnapshotUsingPOST1Request();
    $request->apiKey = 'libero';
    $request->snapshotId = 'nobis';

    $response = $sdk->snapshots->publishSnapshotUsingPOST1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## revertToSnapshotUsingPOST

revertToSnapshot

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RevertToSnapshotUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RevertToSnapshotUsingPOSTRequest();
    $request->apiKey = 'dolores';
    $request->snapshotId = 'quis';

    $response = $sdk->snapshots->revertToSnapshotUsingPOST($request);

    if ($response->messageModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unpublishSnapshotUsingPOST

unpublishSnapshot

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UnpublishSnapshotUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnpublishSnapshotUsingPOSTRequest();
    $request->apiKey = 'totam';
    $request->snapshotId = 'dignissimos';

    $response = $sdk->snapshots->unpublishSnapshotUsingPOST($request);

    if ($response->messageModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
