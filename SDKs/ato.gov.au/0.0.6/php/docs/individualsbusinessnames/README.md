# individualsBusinessNames

## Overview

A business name is a name or title under which a person conducts a business.


### Available Operations

* [deleteIndividualsPartyIdBusinessNamesProductId](#deleteindividualspartyidbusinessnamesproductid) - Delete a business name
* [getIndividualsPartyIdBusinessNames](#getindividualspartyidbusinessnames) - Retrieve a list of business names
* [getIndividualsPartyIdBusinessNamesProductId](#getindividualspartyidbusinessnamesproductid) - Retrieve a business name
* [postIndividualsPartyIdBusinessNames](#postindividualspartyidbusinessnames) - Create a business name
* [putIndividualsPartyIdBusinessNamesProductId](#putindividualspartyidbusinessnamesproductid) - Update a business name

## deleteIndividualsPartyIdBusinessNamesProductId

Delete a business name


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIndividualsPartyIdBusinessNamesProductIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIndividualsPartyIdBusinessNamesProductIdRequest();
    $request->apiKey = 'at';
    $request->partyId = 'maiores';
    $request->productId = 'molestiae';

    $response = $sdk->individualsBusinessNames->deleteIndividualsPartyIdBusinessNamesProductId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIndividualsPartyIdBusinessNames

Retrieve a list of business names

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIndividualsPartyIdBusinessNamesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIndividualsPartyIdBusinessNamesRequest();
    $request->apiKey = 'quod';
    $request->partyId = 'quod';

    $response = $sdk->individualsBusinessNames->getIndividualsPartyIdBusinessNames($request);

    if ($response->businessNames !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIndividualsPartyIdBusinessNamesProductId

Retrieve a business name


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIndividualsPartyIdBusinessNamesProductIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIndividualsPartyIdBusinessNamesProductIdRequest();
    $request->apiKey = 'esse';
    $request->partyId = 'totam';
    $request->productId = 'porro';

    $response = $sdk->individualsBusinessNames->getIndividualsPartyIdBusinessNamesProductId($request);

    if ($response->businessName !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postIndividualsPartyIdBusinessNames

Create a business name


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostIndividualsPartyIdBusinessNamesRequest;
use \OpenAPI\OpenAPI\Models\Shared\BusinessNameInput;
use \OpenAPI\OpenAPI\Models\Shared\BusinessNameLifecycleStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostIndividualsPartyIdBusinessNamesRequest();
    $request->apiKey = 'dolorum';
    $request->businessNameInput = new BusinessNameInput();
    $request->businessNameInput->lifecycleState = BusinessNameLifecycleStateEnum::APPROVED;
    $request->businessNameInput->name = 'XYZ Technology Ventures';
    $request->partyId = 'nam';

    $response = $sdk->individualsBusinessNames->postIndividualsPartyIdBusinessNames($request);

    if ($response->businessName !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putIndividualsPartyIdBusinessNamesProductId

Update a business name


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutIndividualsPartyIdBusinessNamesProductIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\BusinessNameInput;
use \OpenAPI\OpenAPI\Models\Shared\BusinessNameLifecycleStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutIndividualsPartyIdBusinessNamesProductIdRequest();
    $request->apiKey = 'officia';
    $request->businessNameInput = new BusinessNameInput();
    $request->businessNameInput->lifecycleState = BusinessNameLifecycleStateEnum::ISSUED;
    $request->businessNameInput->name = 'XYZ Technology Ventures';
    $request->partyId = 'fugit';
    $request->productId = 'deleniti';

    $response = $sdk->individualsBusinessNames->putIndividualsPartyIdBusinessNamesProductId($request);

    if ($response->businessName !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
