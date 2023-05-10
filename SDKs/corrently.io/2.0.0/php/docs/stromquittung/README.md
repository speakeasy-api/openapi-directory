# stromQuittung

## Overview

Self-Service to create a full receipt (Quittung) for energy delivery in case of submetering. Please refer to [Strom-Quittung](http://strom-quittung.de) for a sample usage.


### Available Operations

* [quittungComit](#quittungcomit) - Finishs a collection of data and finalizes receipt. Use this method after collecting all data via quittung/prepare
* [quittungCreate](#quittungcreate) - Create a receipt for an energy delivery (only valid in Germany).
* [quittungPrepare](#quittungprepare) - Allows to collect data with several requests (or a single) for a receipt.
* [quittungTSE](#quittungtse) - Retrieve TSE (Technische Sicherheitseinrichtung) Data for a given receipt (Strom-Quittung).
* [quittungTSEData](#quittungtsedata) - Retrieve TSE (Technische Sicherheitseinrichtung) raw data  only for a given receipt (Strom-Quittung).
* [quittungTSEsignature](#quittungtsesignature) - Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).
* [quittungZugferd](#quittungzugferd) - Retrieve Zugferd XML for a given receipt (Strom-Quittung).

## quittungComit

Uses collected fields or provided fields to create a final receipt (Strom-Quittung).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QuittungComitRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuittungComitRequestBody();
    $request->account = 'excepturi';

    $response = $sdk->stromQuittung->quittungComit($request);

    if ($response->quittungComit200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quittungCreate

Creates a full featured receipt (Quittung) for an energy delivery as it appears on a charging session or similar events. Allows to embed receipt generation directly into external services.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QuittungCreateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuittungCreateRequestBody();
    $request->email = 'Tianna33@yahoo.com';

    $response = $sdk->stromQuittung->quittungCreate($request);

    if ($response->quittungCreate200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quittungPrepare

During the first call an account parameter will be returned within the result object. Any other parameter will be set inside the preperation. If account is put into body/request in following requests, the existing collection will be extended/updated with the provided body parameters/values.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QuittungPrepareRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuittungPrepareRequestBody();
    $request->account = 'veritatis';

    $response = $sdk->stromQuittung->quittungPrepare($request);

    if ($response->quittungPrepare200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->account = 'deserunt';

    $response = $sdk->stromQuittung->quittungTSE($request);

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
    $request->account = 'perferendis';

    $response = $sdk->stromQuittung->quittungTSEData($request);

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
    $request->account = 'ipsam';

    $response = $sdk->stromQuittung->quittungTSEsignature($request);

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
    $request->account = 'repellendus';

    $response = $sdk->stromQuittung->quittungZugferd($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
