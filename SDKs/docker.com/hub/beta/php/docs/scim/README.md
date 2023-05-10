# scim

## Overview

SCIM is a provisioning system that lets you manage users within your identity provider (IdP).
For more information, see [System for Cross-domain Identity management](https://docs.docker.com/docker-hub/scim/).


### Available Operations

* [getV2Scim20ResourceTypes](#getv2scim20resourcetypes) - List resource types
* [getV2Scim20ResourceTypesName](#getv2scim20resourcetypesname) - Get a resource type
* [getV2Scim20Schemas](#getv2scim20schemas) - List schemas
* [getV2Scim20SchemasId](#getv2scim20schemasid) - Get a schema
* [getV2Scim20ServiceProviderConfig](#getv2scim20serviceproviderconfig) - Get service provider config
* [getV2Scim20Users](#getv2scim20users) - List users
* [getV2Scim20UsersId](#getv2scim20usersid) - Get a user
* [postV2Scim20Users](#postv2scim20users) - Create user
* [putV2Scim20UsersId](#putv2scim20usersid) - Update a user

## getV2Scim20ResourceTypes

Returns all resource types supported for the SCIM configuration.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->scim->getV2Scim20ResourceTypes();

    if ($response->getV2Scim20ResourceTypes200ApplicationScimPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2Scim20ResourceTypesName

Returns a resource type by name.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2Scim20ResourceTypesNameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2Scim20ResourceTypesNameRequest();
    $request->name = 'Joanna Rau';

    $response = $sdk->scim->getV2Scim20ResourceTypesName($request);

    if ($response->scimResourceType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2Scim20Schemas

Returns all schemas supported for the SCIM configuration.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->scim->getV2Scim20Schemas();

    if ($response->getV2Scim20Schemas200ApplicationScimPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2Scim20SchemasId

Returns a schema by ID.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2Scim20SchemasIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2Scim20SchemasIdRequest();
    $request->id = '4269802d-502a-494b-b4f6-3c969e9a3efa';

    $response = $sdk->scim->getV2Scim20SchemasId($request);

    if ($response->scimSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2Scim20ServiceProviderConfig

Returns a service provider config for Docker's configuration.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->scim->getV2Scim20ServiceProviderConfig();

    if ($response->scimServiceProviderConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2Scim20Users

List users, returns paginated users for an organization. Use `startIndex`
and `count` query parameters to receive paginated results.

**Sorting:**<br>
Sorting lets you to specify the order of returned resources by specifying
a combination of `sortBy` and `sortOrder` query parameters.

The `sortBy` parameter specifies the attribute whose value will be used
to order the returned responses. The `sortOrder` parameter defines the
order in which the `sortBy` parameter is applied. Allowed values are
"ascending" and "descending".

**Filtering:**<br>
You can request a subset of resources by specifying the `filter` query
parameter containing a filter expression. Attribute names and attribute
operators used in filters are case insensitive. The filter parameter
must contain at least one valid expression. Each expression must contain
an attribute name followed by an attribute operator and an optional
value.

Supported operators are listed below.

- `eq` equal
- `ne` not equal
- `co` contains
- `sw` starts with
- `and` Logical "and"
- `or` Logical "or"
- `not` "Not" function
- `()` Precedence grouping


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2Scim20UsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV2Scim20UsersSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2Scim20UsersRequest();
    $request->attributes = 'in';
    $request->count = 449198;
    $request->filter = 'illum';
    $request->sortBy = 'maiores';
    $request->sortOrder = GetV2Scim20UsersSortOrderEnum::DESCENDING;
    $request->startIndex = 116202;

    $response = $sdk->scim->getV2Scim20Users($request);

    if ($response->getV2Scim20Users200ApplicationScimPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2Scim20UsersId

Returns a user by ID.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2Scim20UsersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2Scim20UsersIdRequest();
    $request->id = '4cd66ae3-95ef-4b9b-a88f-3a66997074ba';

    $response = $sdk->scim->getV2Scim20UsersId($request);

    if ($response->scimUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV2Scim20Users

Creates a user. If the user already exists by email, they are assigned
to the organization on the "company" team.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2Scim20UsersRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ScimUserName;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2Scim20UsersRequestBody();
    $request->name = new ScimUserName();
    $request->name->familyName = 'Snow';
    $request->name->givenName = 'Jon';
    $request->schemas = [
        'urn:ietf:params:scim:schemas:core:2.0:User',
        'urn:ietf:params:scim:schemas:core:2.0:User',
    ];
    $request->userName = 'jon.snow@docker.com';

    $response = $sdk->scim->postV2Scim20Users($request);

    if ($response->scimUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putV2Scim20UsersId

Updates a user. Use this route to change the user's name, activate,
and deactivate the user.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutV2Scim20UsersIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutV2Scim20UsersIdRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ScimUserName;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutV2Scim20UsersIdRequest();
    $request->requestBody = new PutV2Scim20UsersIdRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->name = new ScimUserName();
    $request->requestBody->name->familyName = 'Snow';
    $request->requestBody->name->givenName = 'Jon';
    $request->requestBody->schemas = [
        'urn:ietf:params:scim:schemas:core:2.0:User',
        'urn:ietf:params:scim:schemas:core:2.0:User',
    ];
    $request->id = '69b6e214-1959-4890-afa5-63e2516fe4c8';

    $response = $sdk->scim->putV2Scim20UsersId($request);

    if ($response->scimUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
