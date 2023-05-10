# SDK

## Overview

Etherpad is a real-time collaborative editor scalable to thousands of simultaneous real time users. It provides full data export capabilities, and runs on your server, under your control.

### Available Operations

* [appendTextUsingGET](#appendtextusingget)
* [appendTextUsingPOST](#appendtextusingpost)
* [copyPadUsingGET](#copypadusingget)
* [copyPadUsingPOST](#copypadusingpost)
* [copyPadWithoutHistoryUsingGET](#copypadwithouthistoryusingget)
* [copyPadWithoutHistoryUsingPOST](#copypadwithouthistoryusingpost)
* [getAttributePoolUsingGET](#getattributepoolusingget)
* [getAttributePoolUsingPOST](#getattributepoolusingpost)
* [getPadIDUsingGET](#getpadidusingget)
* [getPadIDUsingPOST](#getpadidusingpost)
* [getRevisionChangesetUsingGET](#getrevisionchangesetusingget)
* [getRevisionChangesetUsingPOST](#getrevisionchangesetusingpost)
* [getSavedRevisionsCountUsingGET](#getsavedrevisionscountusingget)
* [getSavedRevisionsCountUsingPOST](#getsavedrevisionscountusingpost)
* [getStatsUsingGET](#getstatsusingget)
* [getStatsUsingPOST](#getstatsusingpost)
* [listSavedRevisionsUsingGET](#listsavedrevisionsusingget)
* [listSavedRevisionsUsingPOST](#listsavedrevisionsusingpost)
* [movePadUsingGET](#movepadusingget)
* [movePadUsingPOST](#movepadusingpost)
* [restoreRevisionUsingGET](#restorerevisionusingget)
* [restoreRevisionUsingPOST](#restorerevisionusingpost)
* [saveRevisionUsingGET](#saverevisionusingget)
* [saveRevisionUsingPOST](#saverevisionusingpost)

## appendTextUsingGET

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AppendTextUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppendTextUsingGETRequest();
    $request->padID = 'distinctio';
    $request->text = 'quibusdam';

    $response = $sdk->sdk->appendTextUsingGET($request);

    if ($response->appendTextUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appendTextUsingPOST

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AppendTextUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppendTextUsingPOSTRequest();
    $request->padID = 'unde';
    $request->text = 'nulla';

    $response = $sdk->sdk->appendTextUsingPOST($request);

    if ($response->appendTextUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## copyPadUsingGET

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CopyPadUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CopyPadUsingGETRequest();
    $request->destinationID = 'corrupti';
    $request->force = 'illum';
    $request->sourceID = 'vel';

    $response = $sdk->sdk->copyPadUsingGET($request);

    if ($response->copyPadUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## copyPadUsingPOST

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CopyPadUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CopyPadUsingPOSTRequest();
    $request->destinationID = 'error';
    $request->force = 'deserunt';
    $request->sourceID = 'suscipit';

    $response = $sdk->sdk->copyPadUsingPOST($request);

    if ($response->copyPadUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## copyPadWithoutHistoryUsingGET

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CopyPadWithoutHistoryUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CopyPadWithoutHistoryUsingGETRequest();
    $request->destinationID = 'iure';
    $request->force = 'magnam';
    $request->sourceID = 'debitis';

    $response = $sdk->sdk->copyPadWithoutHistoryUsingGET($request);

    if ($response->copyPadWithoutHistoryUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## copyPadWithoutHistoryUsingPOST

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CopyPadWithoutHistoryUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CopyPadWithoutHistoryUsingPOSTRequest();
    $request->destinationID = 'ipsa';
    $request->force = 'delectus';
    $request->sourceID = 'tempora';

    $response = $sdk->sdk->copyPadWithoutHistoryUsingPOST($request);

    if ($response->copyPadWithoutHistoryUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAttributePoolUsingGET

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAttributePoolUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAttributePoolUsingGETRequest();
    $request->padID = 'suscipit';

    $response = $sdk->sdk->getAttributePoolUsingGET($request);

    if ($response->getAttributePoolUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAttributePoolUsingPOST

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAttributePoolUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAttributePoolUsingPOSTRequest();
    $request->padID = 'molestiae';

    $response = $sdk->sdk->getAttributePoolUsingPOST($request);

    if ($response->getAttributePoolUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPadIDUsingGET

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETPadIDUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPadIDUsingGETRequest();
    $request->roID = 'minus';

    $response = $sdk->sdk->getPadIDUsingGET($request);

    if ($response->getPadIDUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPadIDUsingPOST

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPadIDUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPadIDUsingPOSTRequest();
    $request->roID = 'placeat';

    $response = $sdk->sdk->getPadIDUsingPOST($request);

    if ($response->getPadIDUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRevisionChangesetUsingGET

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRevisionChangesetUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRevisionChangesetUsingGETRequest();
    $request->padID = 'voluptatum';
    $request->rev = 'iusto';

    $response = $sdk->sdk->getRevisionChangesetUsingGET($request);

    if ($response->getRevisionChangesetUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRevisionChangesetUsingPOST

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRevisionChangesetUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRevisionChangesetUsingPOSTRequest();
    $request->padID = 'excepturi';
    $request->rev = 'nisi';

    $response = $sdk->sdk->getRevisionChangesetUsingPOST($request);

    if ($response->getRevisionChangesetUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSavedRevisionsCountUsingGET

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSavedRevisionsCountUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSavedRevisionsCountUsingGETRequest();
    $request->padID = 'recusandae';

    $response = $sdk->sdk->getSavedRevisionsCountUsingGET($request);

    if ($response->getSavedRevisionsCountUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSavedRevisionsCountUsingPOST

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSavedRevisionsCountUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSavedRevisionsCountUsingPOSTRequest();
    $request->padID = 'temporibus';

    $response = $sdk->sdk->getSavedRevisionsCountUsingPOST($request);

    if ($response->getSavedRevisionsCountUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStatsUsingGET

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getStatsUsingGET();

    if ($response->getStatsUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStatsUsingPOST

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getStatsUsingPOST();

    if ($response->getStatsUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSavedRevisionsUsingGET

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSavedRevisionsUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSavedRevisionsUsingGETRequest();
    $request->padID = 'ab';

    $response = $sdk->sdk->listSavedRevisionsUsingGET($request);

    if ($response->listSavedRevisionsUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSavedRevisionsUsingPOST

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSavedRevisionsUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSavedRevisionsUsingPOSTRequest();
    $request->padID = 'quis';

    $response = $sdk->sdk->listSavedRevisionsUsingPOST($request);

    if ($response->listSavedRevisionsUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## movePadUsingGET

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MovePadUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MovePadUsingGETRequest();
    $request->destinationID = 'veritatis';
    $request->force = 'deserunt';
    $request->sourceID = 'perferendis';

    $response = $sdk->sdk->movePadUsingGET($request);

    if ($response->movePadUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## movePadUsingPOST

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MovePadUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MovePadUsingPOSTRequest();
    $request->destinationID = 'ipsam';
    $request->force = 'repellendus';
    $request->sourceID = 'sapiente';

    $response = $sdk->sdk->movePadUsingPOST($request);

    if ($response->movePadUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## restoreRevisionUsingGET

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RestoreRevisionUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RestoreRevisionUsingGETRequest();
    $request->padID = 'quo';
    $request->rev = 'odit';

    $response = $sdk->sdk->restoreRevisionUsingGET($request);

    if ($response->restoreRevisionUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## restoreRevisionUsingPOST

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RestoreRevisionUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RestoreRevisionUsingPOSTRequest();
    $request->padID = 'at';
    $request->rev = 'at';

    $response = $sdk->sdk->restoreRevisionUsingPOST($request);

    if ($response->restoreRevisionUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveRevisionUsingGET

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SaveRevisionUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SaveRevisionUsingGETRequest();
    $request->padID = 'maiores';
    $request->rev = 'molestiae';

    $response = $sdk->sdk->saveRevisionUsingGET($request);

    if ($response->saveRevisionUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveRevisionUsingPOST

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SaveRevisionUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SaveRevisionUsingPOSTRequest();
    $request->padID = 'quod';
    $request->rev = 'quod';

    $response = $sdk->sdk->saveRevisionUsingPOST($request);

    if ($response->saveRevisionUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
