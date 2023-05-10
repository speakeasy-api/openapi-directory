# manage

## Overview

Manage Restv 2 Controller

### Available Operations

* [copySnapshotToExistingGameUsingPOST](#copysnapshottoexistinggameusingpost) - copySnapshotToExistingGame
* [createQueryUsingPOST](#createqueryusingpost) - createQuery
* [createScreenUsingPOST](#createscreenusingpost) - createScreen
* [createSnapshotUsingPOST](#createsnapshotusingpost) - createSnapshot
* [createSnippetUsingPOST](#createsnippetusingpost) - createSnippet
* [deleteQueryUsingDELETE](#deletequeryusingdelete) - deleteQuery
* [deleteScreenUsingDELETE](#deletescreenusingdelete) - deleteScreen
* [deleteSnapshotUsingDELETE](#deletesnapshotusingdelete) - deleteSnapshot
* [deleteSnippetUsingDELETE](#deletesnippetusingdelete) - deleteSnippet
* [getQueryUsingGET](#getqueryusingget) - getQuery
* [getScreenUsingGET](#getscreenusingget) - getScreen
* [getSnippetUsingGET](#getsnippetusingget) - getSnippet
* [listExecutableScreensUsingGET](#listexecutablescreensusingget) - listExecutableScreens
* [listQueriesUsingGET](#listqueriesusingget) - listQueries
* [listScreensUsingGET](#listscreensusingget) - listScreens
* [listSnapshotsUsingGET](#listsnapshotsusingget) - listSnapshots
* [listSnippetsUsingGET](#listsnippetsusingget) - listSnippets
* [publishSnapshotUsingPOST](#publishsnapshotusingpost) - publishSnapshot
* [revertSnapshotUsingPOST](#revertsnapshotusingpost) - revertSnapshot
* [updateQueryUsingPUT](#updatequeryusingput) - updateQuery
* [updateScreenUsingPUT](#updatescreenusingput) - updateScreen
* [updateSnippetUsingPUT](#updatesnippetusingput) - updateSnippet

## copySnapshotToExistingGameUsingPOST

copySnapshotToExistingGame

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CopySnapshotToExistingGameUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CopySnapshotToExistingGameUsingPOSTRequest();
    $request->apiKey = 'odit';
    $request->snapshotId = 'quo';
    $request->targetApiKey = 'sequi';

    $response = $sdk->manage->copySnapshotToExistingGameUsingPOST($request);

    if ($response->manageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createQueryUsingPOST

createQuery

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateQueryUsingPOSTRequest;
use \OpenAPI\OpenAPI\Models\Shared\ManageQuery;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateQueryUsingPOSTRequest();
    $request->manageQuery = new ManageQuery();
    $request->manageQuery->esRules = 'tenetur';
    $request->manageQuery->name = 'Mr. Alberta Schuster';
    $request->manageQuery->qbRules = 'temporibus';
    $request->manageQuery->shortCode = 'laborum';
    $request->apiKey = 'quasi';

    $response = $sdk->manage->createQueryUsingPOST($request);

    if ($response->manageQuery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createScreenUsingPOST

createScreen

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateScreenUsingPOSTRequest;
use \OpenAPI\OpenAPI\Models\Shared\ManageScreen;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateScreenUsingPOSTRequest();
    $request->manageScreen = new ManageScreen();
    $request->manageScreen->groups = [
        'voluptatibus',
        'vero',
        'nihil',
        'praesentium',
    ];
    $request->manageScreen->name = 'Jose Moen';
    $request->manageScreen->shortCode = 'perferendis';
    $request->manageScreen->template = 'doloremque';
    $request->apiKey = 'reprehenderit';

    $response = $sdk->manage->createScreenUsingPOST($request);

    if ($response->manageScreen !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSnapshotUsingPOST

createSnapshot

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSnapshotUsingPOSTRequest;
use \OpenAPI\OpenAPI\Models\Shared\SnapshotCreationModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSnapshotUsingPOSTRequest();
    $request->snapshotCreationModel = new SnapshotCreationModel();
    $request->snapshotCreationModel->description = 'ut';
    $request->apiKey = 'maiores';

    $response = $sdk->manage->createSnapshotUsingPOST($request);

    if ($response->manageSnapshot !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSnippetUsingPOST

createSnippet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSnippetUsingPOSTRequest;
use \OpenAPI\OpenAPI\Models\Shared\ManageSnippet;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSnippetUsingPOSTRequest();
    $request->manageSnippet = new ManageSnippet();
    $request->manageSnippet->groups = [
        'corporis',
    ];
    $request->manageSnippet->name = 'Heidi Carter';
    $request->manageSnippet->script = 'accusamus';
    $request->manageSnippet->scriptData = 'commodi';
    $request->manageSnippet->shortCode = 'repudiandae';
    $request->manageSnippet->template = 'quae';
    $request->apiKey = 'ipsum';

    $response = $sdk->manage->createSnippetUsingPOST($request);

    if ($response->manageSnippet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteQueryUsingDELETE

deleteQuery

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DELETEQueryUsingDELETERequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DELETEQueryUsingDELETERequest();
    $request->apiKey = 'quidem';
    $request->shortCode = 'molestias';

    $response = $sdk->manage->deleteQueryUsingDELETE($request);

    if ($response->manageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteScreenUsingDELETE

deleteScreen

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DELETEScreenUsingDELETERequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DELETEScreenUsingDELETERequest();
    $request->apiKey = 'excepturi';
    $request->shortCode = 'pariatur';

    $response = $sdk->manage->deleteScreenUsingDELETE($request);

    if ($response->manageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSnapshotUsingDELETE

deleteSnapshot

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DELETESnapshotUsingDELETERequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DELETESnapshotUsingDELETERequest();
    $request->apiKey = 'modi';
    $request->snapshotId = 'praesentium';

    $response = $sdk->manage->deleteSnapshotUsingDELETE($request);

    if ($response->manageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSnippetUsingDELETE

deleteSnippet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DELETESnippetUsingDELETERequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DELETESnippetUsingDELETERequest();
    $request->apiKey = 'rem';
    $request->shortCode = 'voluptates';

    $response = $sdk->manage->deleteSnippetUsingDELETE($request);

    if ($response->manageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQueryUsingGET

getQuery

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETQueryUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETQueryUsingGETRequest();
    $request->apiKey = 'quasi';
    $request->shortCode = 'repudiandae';

    $response = $sdk->manage->getQueryUsingGET($request);

    if ($response->manageQuery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScreenUsingGET

getScreen

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETScreenUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETScreenUsingGETRequest();
    $request->apiKey = 'sint';
    $request->shortCode = 'veritatis';

    $response = $sdk->manage->getScreenUsingGET($request);

    if ($response->manageScreen !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSnippetUsingGET

getSnippet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETSnippetUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSnippetUsingGETRequest();
    $request->apiKey = 'itaque';
    $request->shortCode = 'incidunt';

    $response = $sdk->manage->getSnippetUsingGET($request);

    if ($response->manageSnippet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExecutableScreensUsingGET

listExecutableScreens

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListExecutableScreensUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExecutableScreensUsingGETRequest();
    $request->apiKey = 'enim';

    $response = $sdk->manage->listExecutableScreensUsingGET($request);

    if ($response->manageItemSummaries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listQueriesUsingGET

listQueries

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListQueriesUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListQueriesUsingGETRequest();
    $request->apiKey = 'consequatur';

    $response = $sdk->manage->listQueriesUsingGET($request);

    if ($response->manageItemSummaries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listScreensUsingGET

listScreens

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListScreensUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListScreensUsingGETRequest();
    $request->apiKey = 'est';

    $response = $sdk->manage->listScreensUsingGET($request);

    if ($response->manageItemSummaries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSnapshotsUsingGET

listSnapshots

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSnapshotsUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSnapshotsUsingGETRequest();
    $request->apiKey = 'quibusdam';

    $response = $sdk->manage->listSnapshotsUsingGET($request);

    if ($response->manageSnapshots !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSnippetsUsingGET

listSnippets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSnippetsUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSnippetsUsingGETRequest();
    $request->apiKey = 'explicabo';

    $response = $sdk->manage->listSnippetsUsingGET($request);

    if ($response->manageItemSummaries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishSnapshotUsingPOST

publishSnapshot

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PublishSnapshotUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishSnapshotUsingPOSTRequest();
    $request->apiKey = 'deserunt';
    $request->snapshotId = 'distinctio';

    $response = $sdk->manage->publishSnapshotUsingPOST($request);

    if ($response->manageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## revertSnapshotUsingPOST

revertSnapshot

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RevertSnapshotUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RevertSnapshotUsingPOSTRequest();
    $request->apiKey = 'quibusdam';
    $request->snapshotId = 'labore';

    $response = $sdk->manage->revertSnapshotUsingPOST($request);

    if ($response->manageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateQueryUsingPUT

updateQuery

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateQueryUsingPUTRequest;
use \OpenAPI\OpenAPI\Models\Shared\ManageQuery;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateQueryUsingPUTRequest();
    $request->manageQuery = new ManageQuery();
    $request->manageQuery->esRules = 'modi';
    $request->manageQuery->name = 'Beth McGlynn Sr.';
    $request->manageQuery->qbRules = 'assumenda';
    $request->manageQuery->shortCode = 'ipsam';
    $request->apiKey = 'alias';
    $request->shortCode = 'fugit';

    $response = $sdk->manage->updateQueryUsingPUT($request);

    if ($response->manageQuery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateScreenUsingPUT

updateScreen

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScreenUsingPUTRequest;
use \OpenAPI\OpenAPI\Models\Shared\ManageScreen;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateScreenUsingPUTRequest();
    $request->manageScreen = new ManageScreen();
    $request->manageScreen->groups = [
        'excepturi',
        'tempora',
        'facilis',
    ];
    $request->manageScreen->name = 'Francisco Windler';
    $request->manageScreen->shortCode = 'eligendi';
    $request->manageScreen->template = 'sint';
    $request->apiKey = 'aliquid';
    $request->shortCode = 'provident';

    $response = $sdk->manage->updateScreenUsingPUT($request);

    if ($response->manageScreen !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSnippetUsingPUT

updateSnippet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSnippetUsingPUTRequest;
use \OpenAPI\OpenAPI\Models\Shared\ManageSnippet;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSnippetUsingPUTRequest();
    $request->manageSnippet = new ManageSnippet();
    $request->manageSnippet->groups = [
        'sint',
        'officia',
        'dolor',
        'debitis',
    ];
    $request->manageSnippet->name = 'Wilbur King';
    $request->manageSnippet->script = 'maiores';
    $request->manageSnippet->scriptData = 'rerum';
    $request->manageSnippet->shortCode = 'dicta';
    $request->manageSnippet->template = 'magnam';
    $request->apiKey = 'cumque';
    $request->shortCode = 'facere';

    $response = $sdk->manage->updateSnippetUsingPUT($request);

    if ($response->manageSnippet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
