# author

### Available Operations

* [createAuthorIfNotExistsForUsingGET](#createauthorifnotexistsforusingget) - this functions helps you to map your application author ids to Etherpad author ids
* [createAuthorIfNotExistsForUsingPOST](#createauthorifnotexistsforusingpost) - this functions helps you to map your application author ids to Etherpad author ids
* [createAuthorUsingGET](#createauthorusingget) - creates a new author
* [createAuthorUsingPOST](#createauthorusingpost) - creates a new author
* [getAuthorNameUsingGET](#getauthornameusingget) - Returns the Author Name of the author
* [getAuthorNameUsingPOST](#getauthornameusingpost) - Returns the Author Name of the author
* [listPadsOfAuthorUsingGET](#listpadsofauthorusingget) - returns an array of all pads this author contributed to
* [listPadsOfAuthorUsingPOST](#listpadsofauthorusingpost) - returns an array of all pads this author contributed to
* [listSessionsOfAuthorUsingGET](#listsessionsofauthorusingget) - returns all sessions of an author
* [listSessionsOfAuthorUsingPOST](#listsessionsofauthorusingpost) - returns all sessions of an author

## createAuthorIfNotExistsForUsingGET

this functions helps you to map your application author ids to Etherpad author ids

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAuthorIfNotExistsForUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAuthorIfNotExistsForUsingGETRequest();
    $request->authorMapper = 'esse';
    $request->name = 'Miss Lowell Parisian';

    $response = $sdk->author->createAuthorIfNotExistsForUsingGET($request);

    if ($response->createAuthorIfNotExistsForUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAuthorIfNotExistsForUsingPOST

this functions helps you to map your application author ids to Etherpad author ids

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAuthorIfNotExistsForUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAuthorIfNotExistsForUsingPOSTRequest();
    $request->authorMapper = 'occaecati';
    $request->name = 'Cassandra Welch';

    $response = $sdk->author->createAuthorIfNotExistsForUsingPOST($request);

    if ($response->createAuthorIfNotExistsForUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAuthorUsingGET

creates a new author

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAuthorUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAuthorUsingGETRequest();
    $request->name = 'Lucy Krajcik';

    $response = $sdk->author->createAuthorUsingGET($request);

    if ($response->createAuthorUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAuthorUsingPOST

creates a new author

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAuthorUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAuthorUsingPOSTRequest();
    $request->name = 'Jonathon Klocko';

    $response = $sdk->author->createAuthorUsingPOST($request);

    if ($response->createAuthorUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAuthorNameUsingGET

Returns the Author Name of the author

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorNameUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAuthorNameUsingGETRequest();
    $request->authorID = 'aspernatur';

    $response = $sdk->author->getAuthorNameUsingGET($request);

    if ($response->getAuthorNameUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAuthorNameUsingPOST

Returns the Author Name of the author

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAuthorNameUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAuthorNameUsingPOSTRequest();
    $request->authorID = 'perferendis';

    $response = $sdk->author->getAuthorNameUsingPOST($request);

    if ($response->getAuthorNameUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPadsOfAuthorUsingGET

returns an array of all pads this author contributed to

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPadsOfAuthorUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPadsOfAuthorUsingGETRequest();
    $request->authorID = 'ad';

    $response = $sdk->author->listPadsOfAuthorUsingGET($request);

    if ($response->listPadsOfAuthorUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPadsOfAuthorUsingPOST

returns an array of all pads this author contributed to

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPadsOfAuthorUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPadsOfAuthorUsingPOSTRequest();
    $request->authorID = 'natus';

    $response = $sdk->author->listPadsOfAuthorUsingPOST($request);

    if ($response->listPadsOfAuthorUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSessionsOfAuthorUsingGET

returns all sessions of an author

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSessionsOfAuthorUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSessionsOfAuthorUsingGETRequest();
    $request->authorID = 'sed';

    $response = $sdk->author->listSessionsOfAuthorUsingGET($request);

    if ($response->listSessionsOfAuthorUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSessionsOfAuthorUsingPOST

returns all sessions of an author

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSessionsOfAuthorUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSessionsOfAuthorUsingPOSTRequest();
    $request->authorID = 'iste';

    $response = $sdk->author->listSessionsOfAuthorUsingPOST($request);

    if ($response->listSessionsOfAuthorUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
