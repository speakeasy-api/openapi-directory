# access

### Available Operations

* [accessAdd](#accessadd) - Adds/Overwrites the user entry in the access control database.
* [accessDel](#accessdel) - Clears a users entry from access control database.
* [accessGetAcldb](#accessgetacldb) - Returns the current access control database in use.
* [accessGetAdmindir](#accessgetadmindir) - Returns the current admin directory.
* [accessGetAdminuser](#accessgetadminuser) - Returns the current administrator.
* [accessGetEnabled](#accessgetenabled) - Returns the state of access control checking.
* [accessList](#accesslist) - Returns an array of entries.
* [accessLoad](#accessload) - Loads the specified file for access control data.
* [accessSave](#accesssave) - Saves current access control data in specified file.
* [accessSetAcldb](#accesssetacldb) - Allows setting the name of the current access control database.
* [accessSetEnabled](#accesssetenabled) - Allows the user to enable/disable the access control check.

## accessAdd

Adds/Overwrites the user entry in the access control database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccessAddRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccessAddRequest();
    $request->agents = 'quibusdam';
    $request->mask = 'unde';
    $request->user = 'nulla';

    $response = $sdk->access->accessAdd($request);

    if ($response->accessAdd200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accessDel

Using '*' for user clears all the users.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccessDelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccessDelRequest();
    $request->user = 'corrupti';

    $response = $sdk->access->accessDel($request);

    if ($response->accessDel200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accessGetAcldb

If nothing is specified then this returns "".

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
    $response = $sdk->access->accessGetAcldb();

    if ($response->accessGetAcldb200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accessGetAdmindir

If nothing is specified in admin/settings.cfg then returns "". If no admin directory is specified then the shared area will be used where needed (e.g. for persistent info, access control data files etc. )

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
    $response = $sdk->access->accessGetAdmindir();

    if ($response->accessGetAdmindir200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accessGetAdminuser

If nothing is specified in admin/settings.cfg then returns "".

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
    $response = $sdk->access->accessGetAdminuser();

    if ($response->accessGetAdminuser200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accessGetEnabled

0 indicates that it is disabled, 1 indicates it is enabled.

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
    $response = $sdk->access->accessGetEnabled();

    if ($response->accessGetEnabled200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accessList

Each entry consists of user, agents (in minimal range representation) and access mask (not used currently).

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
    $response = $sdk->access->accessList();

    if ($response->accessEntries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accessLoad

If filename is not specified then the currently set 'acldb' parameter is used.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccessLoadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccessLoadRequest();
    $request->filename = 'illum';

    $response = $sdk->access->accessLoad($request);

    if ($response->accessLoad200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accessSave

If filename is not specified then the currently set 'acldb' parameter is used.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccessSaveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccessSaveRequest();
    $request->filename = 'vel';

    $response = $sdk->access->accessSave($request);

    if ($response->accessSave200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accessSetAcldb

This will be used for subsequent load and save operations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccessSetAcldbRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccessSetAcldbRequest();
    $request->databaseName = 'error';

    $response = $sdk->access->accessSetAcldb($request);

    if ($response->accessSetAcldb200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accessSetEnabled

0 indicates disabled, 1 indicates enabled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccessSetEnabledRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccessSetEnabledRequest();
    $request->enabledOrNot = 'deserunt';

    $response = $sdk->access->accessSetEnabled($request);

    if ($response->accessSetEnabled200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
