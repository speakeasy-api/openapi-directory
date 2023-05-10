# default

## Overview

Default namespace

### Available Operations

* [getChildren](#getchildren) - Return children from a given SHA1.  A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.
* [getInfo](#getinfo) - Info about the hashlookup database
* [getLookupMd5](#getlookupmd5) - Lookup MD5.
* [getLookupSha1](#getlookupsha1) - Lookup SHA-1.
* [getLookupSha256](#getlookupsha256) - Lookup SHA-256.
* [getParents](#getparents) - Return parents from a given SHA1. A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.
* [getSessionCreate](#getsessioncreate) - Create a session key to keep search context. The session is attached to a name. After the session is created, the header `hashlookup_session` can be set to the session name.
* [getSessionMatches](#getsessionmatches) - Return set of matching and non-matching hashes from a session.
* [getStattop](#getstattop) - Return the top 100 of most queried values.
* [postBulkmd5](#postbulkmd5) - Bulk search of MD5 hashes in a JSON array with the key 'hashes'.
* [postBulksha1](#postbulksha1) - Bulk search of SHA1 hashes in a JSON array with the 'hashes'.

## getChildren

Return children from a given SHA1.  A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChildrenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChildrenRequest();
    $request->count = 844266;
    $request->cursor = 'unde';
    $request->sha1 = 'nulla';

    $response = $sdk->default->getChildren($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInfo

Info about the hashlookup database

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->default->getInfo();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLookupMd5

Lookup MD5.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLookupMd5Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLookupMd5Request();
    $request->md5 = 'corrupti';

    $response = $sdk->default->getLookupMd5($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLookupSha1

Lookup SHA-1.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLookupSha1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLookupSha1Request();
    $request->sha1 = 'illum';

    $response = $sdk->default->getLookupSha1($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLookupSha256

Lookup SHA-256.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLookupSha256Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLookupSha256Request();
    $request->sha256 = 'vel';

    $response = $sdk->default->getLookupSha256($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getParents

Return parents from a given SHA1. A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetParentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetParentsRequest();
    $request->count = 623564;
    $request->cursor = 'deserunt';
    $request->sha1 = 'suscipit';

    $response = $sdk->default->getParents($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSessionCreate

Create a session key to keep search context. The session is attached to a name. After the session is created, the header `hashlookup_session` can be set to the session name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSessionCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSessionCreateRequest();
    $request->name = 'Dr. Valerie Toy';

    $response = $sdk->default->getSessionCreate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSessionMatches

Return set of matching and non-matching hashes from a session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSessionMatchesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSessionMatchesRequest();
    $request->name = 'Minnie Schiller';

    $response = $sdk->default->getSessionMatches($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStattop

Return the top 100 of most queried values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->default->getStattop();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBulkmd5

Bulk search of MD5 hashes in a JSON array with the key 'hashes'.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->default->postBulkmd5();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBulksha1

Bulk search of SHA1 hashes in a JSON array with the 'hashes'.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->default->postBulksha1();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
