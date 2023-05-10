# commands

### Available Operations

* [cancelreservation](#cancelreservation) - Use to request a delete an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [getCommands](#getcommands) - Get Commands data
* [getVariables](#getvariables) - Get a charge station's config variables
* [patchChargeStationVariable](#patchchargestationvariable) - Update config variables for a chargestation
* [remotestart](#remotestart) - Use to request a remote start command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [remotestop](#remotestop) - Use to request a remote stop command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [reserve](#reserve) - Use to request a reserve command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [reset](#reset) - Use to request a reset command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [unlockconnector](#unlockconnector) - Use to request an unlock command for a connector. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

## cancelreservation

Use to request a delete an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelreservationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelreservationRequestBody();
    $request->reservation = 'veritatis';

    $response = $sdk->commands->cancelreservation($request);

    if ($response->cancelreservation201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommands

Get Commands data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCommandsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortOrder1Enum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommandsRequest();
    $request->createdAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-02T21:33:21.372Z');
    $request->createdAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-28T14:02:06.064Z');
    $request->includeChargestation = false;
    $request->includeDriver = false;
    $request->includeOrganization = false;
    $request->includeTransaction = false;
    $request->paginateEnabled = false;
    $request->paginateLimit = 667411;
    $request->paginatePage = 'quibusdam';
    $request->sortBy = 'explicabo';
    $request->sortOrder = SortOrder1Enum::ASC;
    $request->updatedAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-26T18:54:54.344Z');
    $request->updatedAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-26T08:57:48.803Z');

    $response = $sdk->commands->getCommands($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVariables

Get a charge station's config variables

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVariablesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVariablesRequest();
    $request->id = '269802d5-02a9-44bb-8f63-c969e9a3efa7';

    $response = $sdk->commands->getVariables($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchChargeStationVariable

Update config variables for a chargestation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchChargeStationVariableRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchChargeStationVariableRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PatchChargeStationVariableRequestBodyVariableEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchChargeStationVariableRequest();
    $request->requestBody = new PatchChargeStationVariableRequestBody();
    $request->requestBody->value = 'in';
    $request->requestBody->variable = PatchChargeStationVariableRequestBodyVariableEnum::TRANSACTION_MESSAGE_ATTEMPTS;
    $request->id = 'fb14cd66-ae39-45ef-b9ba-88f3a6699707';

    $response = $sdk->commands->patchChargeStationVariable($request);

    if ($response->patchChargeStationVariable201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## remotestart

Use to request a remote start command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemotestartRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemotestartRequestBody();
    $request->chargestation = 'magnam';
    $request->connector = 'distinctio';
    $request->driver = 'id';
    $request->token = 'labore';

    $response = $sdk->commands->remotestart($request);

    if ($response->remotestart201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## remotestop

Use to request a remote stop command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemotestopRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemotestopRequestBody();
    $request->chargestation = 'labore';
    $request->driver = 'suscipit';
    $request->transaction = 'natus';

    $response = $sdk->commands->remotestop($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reserve

Use to request a reserve command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReserveRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReserveRequestBody();
    $request->chargestation = 'nobis';
    $request->connector = 'eum';
    $request->driver = 'vero';
    $request->endDate = 'aspernatur';
    $request->token = 'architecto';

    $response = $sdk->commands->reserve($request);

    if ($response->reserve201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reset

Use to request a reset command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetRequestBody();
    $request->chargestation = 'magnam';
    $request->type = 'et';

    $response = $sdk->commands->reset($request);

    if ($response->reset201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unlockconnector

Use to request an unlock command for a connector. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnlockconnectorRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnlockconnectorRequestBody();
    $request->chargestation = 'excepturi';
    $request->connector = 'ullam';

    $response = $sdk->commands->unlockconnector($request);

    if ($response->unlockconnector201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
