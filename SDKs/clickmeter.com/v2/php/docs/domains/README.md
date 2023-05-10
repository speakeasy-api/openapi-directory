# domains

### Available Operations

* [domainsCount](#domainscount) - Retrieve count of domains
* [domainsDelete](#domainsdelete) - Delete a domain
* [domainsGet](#domainsget) - Retrieve a list of domains
* [domainsPutForm](#domainsputform) - Create a domain
* [domainsPutJson](#domainsputjson) - Create a domain
* [domainsPutRaw](#domainsputraw) - Create a domain
* [domainsUpdateForm](#domainsupdateform) - Update a domain
* [domainsUpdateJson](#domainsupdatejson) - Update a domain
* [domainsUpdateRaw](#domainsupdateraw) - Update a domain
* [getDomainsId](#getdomainsid) - Get a domain

## domainsCount

Retrieve count of domains

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DomainsCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\DomainsCountTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsCountRequest();
    $request->name = 'Marco Terry PhD';
    $request->type = DomainsCountTypeEnum::GO;

    $response = $sdk->domains->domainsCount($request);

    if ($response->apiCoreResponsesCountResponce !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsDelete

Delete a domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DomainsDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsDeleteRequest();
    $request->id = 690025;

    $response = $sdk->domains->domainsDelete($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsGet

Retrieve a list of domains

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DomainsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DomainsGetTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsGetRequest();
    $request->limit = 473221;
    $request->name = 'Tracy Harber';
    $request->offset = 27069;
    $request->type = DomainsGetTypeEnum::PERSONAL;

    $response = $sdk->domains->domainsGet($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsPutForm

Create a domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDomainsDomain;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDomainsDomainTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiCoreDtoDomainsDomain();
    $request->custom404 = 'tempore';
    $request->customHomepage = 'adipisci';
    $request->id = 766964;
    $request->name = 'Elizabeth Schinner';
    $request->type = ApiCoreDtoDomainsDomainTypeEnum::SYSTEM;

    $response = $sdk->domains->domainsPutForm($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsPutJson

Create a domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDomainsDomain;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDomainsDomainTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiCoreDtoDomainsDomain();
    $request->custom404 = 'esse';
    $request->customHomepage = 'blanditiis';
    $request->id = 590984;
    $request->name = 'Ismael Lynch DVM';
    $request->type = ApiCoreDtoDomainsDomainTypeEnum::DEDICATED;

    $response = $sdk->domains->domainsPutJson($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsPutRaw

Create a domain

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
'sint'

    $response = $sdk->domains->domainsPutRaw($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsUpdateForm

Update a domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DomainsUpdateFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDomainsDomain;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDomainsDomainTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsUpdateFormRequest();
    $request->apiCoreDtoDomainsDomain = new ApiCoreDtoDomainsDomain();
    $request->apiCoreDtoDomainsDomain->custom404 = 'pariatur';
    $request->apiCoreDtoDomainsDomain->customHomepage = 'possimus';
    $request->apiCoreDtoDomainsDomain->id = 157632;
    $request->apiCoreDtoDomainsDomain->name = 'Mr. Marlon Schultz V';
    $request->apiCoreDtoDomainsDomain->type = ApiCoreDtoDomainsDomainTypeEnum::DEDICATED;
    $request->id = 398434;

    $response = $sdk->domains->domainsUpdateForm($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsUpdateJson

Update a domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DomainsUpdateJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDomainsDomain;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoDomainsDomainTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsUpdateJsonRequest();
    $request->apiCoreDtoDomainsDomain = new ApiCoreDtoDomainsDomain();
    $request->apiCoreDtoDomainsDomain->custom404 = 'tenetur';
    $request->apiCoreDtoDomainsDomain->customHomepage = 'quae';
    $request->apiCoreDtoDomainsDomain->id = 936747;
    $request->apiCoreDtoDomainsDomain->name = 'Pearl Gerlach';
    $request->apiCoreDtoDomainsDomain->type = ApiCoreDtoDomainsDomainTypeEnum::DEDICATED;
    $request->id = 33304;

    $response = $sdk->domains->domainsUpdateJson($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsUpdateRaw

Update a domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DomainsUpdateRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsUpdateRawRequest();
    $request->requestBody = 'aliquam';
    $request->id = 958983;

    $response = $sdk->domains->domainsUpdateRaw($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomainsId

Get a domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainsIdRequest();
    $request->id = 119771;

    $response = $sdk->domains->getDomainsId($request);

    if ($response->apiCoreDtoDomainsDomain !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
