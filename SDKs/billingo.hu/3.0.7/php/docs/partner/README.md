# partner

## Overview

Partner object represents your client.

### Available Operations

* [createPartner](#createpartner) - Create a partner
* [deletePartner](#deletepartner) - Delete a partner
* [getPartner](#getpartner) - Retrieve a partner
* [listPartner](#listpartner) - List all partners
* [updatePartner](#updatepartner) - Update a partner

## createPartner

Create a new partner. Returns a partner object if the create is succeded.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PartnerUpsert;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\CountryEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PartnerUpsert();
    $request->accountNumber = 'est';
    $request->address = new Address();
    $request->address->address = '6123 Nestor Gardens';
    $request->address->city = 'Hickleborough';
    $request->address->countryCode = CountryEnum::MH;
    $request->address->postCode = '46991';
    $request->emails = [
        'dolorem',
        'culpa',
        'consequuntur',
    ];
    $request->generalLedgerNumber = 'repellat';
    $request->iban = 'mollitia';
    $request->name = 'Francis Jerde';
    $request->phone = '613.266.3171';
    $request->swift = 'tenetur';
    $request->taxcode = 'ipsam';

    $response = $sdk->partner->createPartner($request);

    if ($response->partner !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePartner

Delete an existing partner.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePartnerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePartnerRequest();
    $request->id = 662527;

    $response = $sdk->partner->deletePartner($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPartner

Retrieves the details of an existing partner.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPartnerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPartnerRequest();
    $request->id = 820994;

    $response = $sdk->partner->getPartner($request);

    if ($response->partner !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPartner

Returns a list of your partners. The partners are returned sorted by creation date, with the most recent partners appearing first.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPartnerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPartnerRequest();
    $request->page = 13571;
    $request->perPage = 97101;

    $response = $sdk->partner->listPartner($request);

    if ($response->partnerList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePartner

Update an existing partner. Returns a partner object if the update is succeded.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePartnerRequest;
use \OpenAPI\OpenAPI\Models\Shared\PartnerUpsert;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\CountryEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePartnerRequest();
    $request->partnerUpsert = new PartnerUpsert();
    $request->partnerUpsert->accountNumber = 'error';
    $request->partnerUpsert->address = new Address();
    $request->partnerUpsert->address->address = '609 Thiel Lane';
    $request->partnerUpsert->address->city = 'Whitneyton';
    $request->partnerUpsert->address->countryCode = CountryEnum::MS;
    $request->partnerUpsert->address->postCode = '70042';
    $request->partnerUpsert->emails = [
        'dicta',
        'corporis',
        'dolore',
        'iusto',
    ];
    $request->partnerUpsert->generalLedgerNumber = 'dicta';
    $request->partnerUpsert->iban = 'harum';
    $request->partnerUpsert->name = 'Sophia Jerde I';
    $request->partnerUpsert->phone = '658.455.9095 x0923';
    $request->partnerUpsert->swift = 'consequatur';
    $request->partnerUpsert->taxcode = 'est';
    $request->id = 842342;

    $response = $sdk->partner->updatePartner($request);

    if ($response->partner !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
