# organisationsBusinessNames

## Overview

A business name is a name or title under which an organisation conducts a business.


### Available Operations

* [deleteOrganisationsPartyIdBusinessNamesProductId](#deleteorganisationspartyidbusinessnamesproductid) - Delete a business name
* [getOrganisationsPartyIdBusinessNames](#getorganisationspartyidbusinessnames) - Retrieve a list of business names
* [getOrganisationsPartyIdBusinessNamesProductId](#getorganisationspartyidbusinessnamesproductid) - Retrieve a business name
* [postOrganisationsPartyIdBusinessNames](#postorganisationspartyidbusinessnames) - Create a business name
* [putOrganisationsPartyIdBusinessNamesProductId](#putorganisationspartyidbusinessnamesproductid) - Update a business name

## deleteOrganisationsPartyIdBusinessNamesProductId

Delete a business name


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganisationsPartyIdBusinessNamesProductIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganisationsPartyIdBusinessNamesProductIdRequest();
    $request->apiKey = 'commodi';
    $request->partyId = 'repudiandae';
    $request->productId = 'quae';

    $response = $sdk->organisationsBusinessNames->deleteOrganisationsPartyIdBusinessNamesProductId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganisationsPartyIdBusinessNames

Retrieve a list of business names

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganisationsPartyIdBusinessNamesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganisationsPartyIdBusinessNamesRequest();
    $request->apiKey = 'ipsum';
    $request->partyId = 'quidem';

    $response = $sdk->organisationsBusinessNames->getOrganisationsPartyIdBusinessNames($request);

    if ($response->businessNames !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganisationsPartyIdBusinessNamesProductId

Retrieve a business name


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganisationsPartyIdBusinessNamesProductIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganisationsPartyIdBusinessNamesProductIdRequest();
    $request->apiKey = 'molestias';
    $request->partyId = 'excepturi';
    $request->productId = 'pariatur';

    $response = $sdk->organisationsBusinessNames->getOrganisationsPartyIdBusinessNamesProductId($request);

    if ($response->businessName !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOrganisationsPartyIdBusinessNames

Create a business name


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostOrganisationsPartyIdBusinessNamesRequest;
use \OpenAPI\OpenAPI\Models\Shared\BusinessNameInput;
use \OpenAPI\OpenAPI\Models\Shared\BusinessNameLifecycleStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOrganisationsPartyIdBusinessNamesRequest();
    $request->apiKey = 'modi';
    $request->businessNameInput = new BusinessNameInput();
    $request->businessNameInput->lifecycleState = BusinessNameLifecycleStateEnum::ISSUED;
    $request->businessNameInput->name = 'XYZ Technology Ventures';
    $request->partyId = 'rem';

    $response = $sdk->organisationsBusinessNames->postOrganisationsPartyIdBusinessNames($request);

    if ($response->businessName !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putOrganisationsPartyIdBusinessNamesProductId

Update a business name


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutOrganisationsPartyIdBusinessNamesProductIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\BusinessNameInput;
use \OpenAPI\OpenAPI\Models\Shared\BusinessNameLifecycleStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutOrganisationsPartyIdBusinessNamesProductIdRequest();
    $request->apiKey = 'voluptates';
    $request->businessNameInput = new BusinessNameInput();
    $request->businessNameInput->lifecycleState = BusinessNameLifecycleStateEnum::APPROVED;
    $request->businessNameInput->name = 'XYZ Technology Ventures';
    $request->partyId = 'repudiandae';
    $request->productId = 'sint';

    $response = $sdk->organisationsBusinessNames->putOrganisationsPartyIdBusinessNamesProductId($request);

    if ($response->businessName !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
