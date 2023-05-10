# general

### Available Operations

* [postAssignTerminals](#postassignterminals) - Assign terminals
* [postFindTerminal](#postfindterminal) - Get the account or store of a terminal
* [postGetStoresUnderAccount](#postgetstoresunderaccount) - Get the stores of an account
* [postGetTerminalDetails](#postgetterminaldetails) - Get the details of a terminal
* [postGetTerminalsUnderAccount](#postgetterminalsunderaccount) - Get the list of terminals

## postAssignTerminals

Assigns one or more payment terminals to a merchant account or a store. You can also use this endpoint to reassign terminals between merchant accounts or stores, and to unassign a terminal and return it to company inventory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AssignTerminalsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostAssignTerminalsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssignTerminalsRequest();
    $request->companyAccount = 'vel';
    $request->merchantAccount = 'error';
    $request->merchantInventory = false;
    $request->store = 'deserunt';
    $request->terminals = [
        'iure',
        'magnam',
    ];

    $requestSecurity = new PostAssignTerminalsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postAssignTerminals($request, $requestSecurity);

    if ($response->assignTerminalsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFindTerminal

Returns the company account, merchant account, or store that a payment terminal is assigned to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\FindTerminalRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostFindTerminalSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindTerminalRequest();
    $request->terminal = 'debitis';

    $requestSecurity = new PostFindTerminalSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postFindTerminal($request, $requestSecurity);

    if ($response->findTerminalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetStoresUnderAccount

Returns a list of stores associated with a company account or a merchant account, including the status of each store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\GetStoresUnderAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostGetStoresUnderAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStoresUnderAccountRequest();
    $request->companyAccount = 'ipsa';
    $request->merchantAccount = 'delectus';

    $requestSecurity = new PostGetStoresUnderAccountSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postGetStoresUnderAccount($request, $requestSecurity);

    if ($response->getStoresUnderAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetTerminalDetails

Returns the details of a payment terminal, including where the terminal is assigned to. The response returns the same details that are provided in the terminal list in your Customer Area and in the Terminal Fleet report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\GetTerminalDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostGetTerminalDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTerminalDetailsRequest();
    $request->terminal = 'tempora';

    $requestSecurity = new PostGetTerminalDetailsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postGetTerminalDetails($request, $requestSecurity);

    if ($response->getTerminalDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetTerminalsUnderAccount

Returns a list of payment terminals associated with a company account, merchant account, or store. The response shows whether the terminals are in the inventory, or in-store (ready for boarding or already boarded).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\GetTerminalsUnderAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostGetTerminalsUnderAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTerminalsUnderAccountRequest();
    $request->companyAccount = 'suscipit';
    $request->merchantAccount = 'molestiae';
    $request->store = 'minus';

    $requestSecurity = new PostGetTerminalsUnderAccountSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postGetTerminalsUnderAccount($request, $requestSecurity);

    if ($response->getTerminalsUnderAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
