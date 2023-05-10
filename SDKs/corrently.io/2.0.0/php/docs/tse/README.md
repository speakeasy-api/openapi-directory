# tse

## Overview

Technische Sicherheitseinrichtung - use in context of strom-quittungen to get digitaly signed receipts.

### Available Operations

* [quittungTSE](#quittungtse) - Retrieve TSE (Technische Sicherheitseinrichtung) Data for a given receipt (Strom-Quittung).
* [quittungTSEData](#quittungtsedata) - Retrieve TSE (Technische Sicherheitseinrichtung) raw data  only for a given receipt (Strom-Quittung).
* [quittungTSEsignature](#quittungtsesignature) - Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).
* [quittungZugferd](#quittungzugferd) - Retrieve Zugferd XML for a given receipt (Strom-Quittung).

## quittungTSE

Allows to retrieve all relevant data assiciated to a TSE service call. E.q. Input parameters, public key and signature.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QuittungTSERequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuittungTSERequest();
    $request->account = 'esse';

    $response = $sdk->tse->quittungTSE($request);

    if ($response->quittungTSE200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quittungTSEData

Allows to retrieve input string for a signing process.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QuittungTSEDataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuittungTSEDataRequest();
    $request->account = 'ipsum';

    $response = $sdk->tse->quittungTSEData($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quittungTSEsignature

Allows to retrieve digital signature for a given receipt.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QuittungTSEsignatureRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuittungTSEsignatureRequest();
    $request->account = 'excepturi';

    $response = $sdk->tse->quittungTSEsignature($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quittungZugferd

Allows to retrieve XML of the zugferd invoice.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QuittungZugferdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuittungZugferdRequest();
    $request->account = 'aspernatur';

    $response = $sdk->tse->quittungZugferd($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
