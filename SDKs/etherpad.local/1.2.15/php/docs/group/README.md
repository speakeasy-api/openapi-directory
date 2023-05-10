# group

### Available Operations

* [createGroupIfNotExistsForUsingGET](#creategroupifnotexistsforusingget) - this functions helps you to map your application group ids to Etherpad group ids
* [createGroupIfNotExistsForUsingPOST](#creategroupifnotexistsforusingpost) - this functions helps you to map your application group ids to Etherpad group ids
* [createGroupPadUsingGET](#creategrouppadusingget) - creates a new pad in this group
* [createGroupPadUsingPOST](#creategrouppadusingpost) - creates a new pad in this group
* [createGroupUsingGET](#creategroupusingget) - creates a new group
* [createGroupUsingPOST](#creategroupusingpost) - creates a new group
* [deleteGroupUsingGET](#deletegroupusingget) - deletes a group
* [deleteGroupUsingPOST](#deletegroupusingpost) - deletes a group
* [listAllGroupsUsingGET](#listallgroupsusingget)
* [listAllGroupsUsingPOST](#listallgroupsusingpost)
* [listPadsUsingGET](#listpadsusingget) - returns all pads of this group
* [listPadsUsingPOST](#listpadsusingpost) - returns all pads of this group
* [listSessionsOfGroupUsingGET](#listsessionsofgroupusingget)
* [listSessionsOfGroupUsingPOST](#listsessionsofgroupusingpost)

## createGroupIfNotExistsForUsingGET

this functions helps you to map your application group ids to Etherpad group ids

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupIfNotExistsForUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGroupIfNotExistsForUsingGETRequest();
    $request->groupMapper = 'dolor';

    $response = $sdk->group->createGroupIfNotExistsForUsingGET($request);

    if ($response->createGroupIfNotExistsForUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGroupIfNotExistsForUsingPOST

this functions helps you to map your application group ids to Etherpad group ids

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupIfNotExistsForUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGroupIfNotExistsForUsingPOSTRequest();
    $request->groupMapper = 'natus';

    $response = $sdk->group->createGroupIfNotExistsForUsingPOST($request);

    if ($response->createGroupIfNotExistsForUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGroupPadUsingGET

creates a new pad in this group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupPadUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGroupPadUsingGETRequest();
    $request->groupID = 'laboriosam';
    $request->padName = 'hic';
    $request->text = 'saepe';

    $response = $sdk->group->createGroupPadUsingGET($request);

    if ($response->createGroupPadUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGroupPadUsingPOST

creates a new pad in this group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupPadUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGroupPadUsingPOSTRequest();
    $request->groupID = 'fuga';
    $request->padName = 'in';
    $request->text = 'corporis';

    $response = $sdk->group->createGroupPadUsingPOST($request);

    if ($response->createGroupPadUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGroupUsingGET

creates a new group

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
    $response = $sdk->group->createGroupUsingGET();

    if ($response->createGroupUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGroupUsingPOST

creates a new group

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
    $response = $sdk->group->createGroupUsingPOST();

    if ($response->createGroupUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGroupUsingGET

deletes a group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGroupUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGroupUsingGETRequest();
    $request->groupID = 'iste';

    $response = $sdk->group->deleteGroupUsingGET($request);

    if ($response->deleteGroupUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGroupUsingPOST

deletes a group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGroupUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGroupUsingPOSTRequest();
    $request->groupID = 'iure';

    $response = $sdk->group->deleteGroupUsingPOST($request);

    if ($response->deleteGroupUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAllGroupsUsingGET

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
    $response = $sdk->group->listAllGroupsUsingGET();

    if ($response->listAllGroupsUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAllGroupsUsingPOST

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
    $response = $sdk->group->listAllGroupsUsingPOST();

    if ($response->listAllGroupsUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPadsUsingGET

returns all pads of this group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPadsUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPadsUsingGETRequest();
    $request->groupID = 'saepe';

    $response = $sdk->group->listPadsUsingGET($request);

    if ($response->listPadsUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPadsUsingPOST

returns all pads of this group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPadsUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPadsUsingPOSTRequest();
    $request->groupID = 'quidem';

    $response = $sdk->group->listPadsUsingPOST($request);

    if ($response->listPadsUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSessionsOfGroupUsingGET

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSessionsOfGroupUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSessionsOfGroupUsingGETRequest();
    $request->groupID = 'architecto';

    $response = $sdk->group->listSessionsOfGroupUsingGET($request);

    if ($response->listSessionsOfGroupUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSessionsOfGroupUsingPOST

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSessionsOfGroupUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSessionsOfGroupUsingPOSTRequest();
    $request->groupID = 'ipsa';

    $response = $sdk->group->listSessionsOfGroupUsingPOST($request);

    if ($response->listSessionsOfGroupUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
