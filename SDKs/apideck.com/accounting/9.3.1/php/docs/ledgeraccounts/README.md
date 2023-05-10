# ledgerAccounts

### Available Operations

* [ledgerAccountsAdd](#ledgeraccountsadd) - Create Ledger Account
* [ledgerAccountsAll](#ledgeraccountsall) - List Ledger Accounts
* [ledgerAccountsDelete](#ledgeraccountsdelete) - Delete Ledger Account
* [ledgerAccountsOne](#ledgeraccountsone) - Get Ledger Account
* [ledgerAccountsUpdate](#ledgeraccountsupdate) - Update Ledger Account

## ledgerAccountsAdd

Create Ledger Account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LedgerAccountsAddRequest;
use \OpenAPI\OpenAPI\Models\Operations\LedgerAccountsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LedgerAccountsAddRequest();
    $request->requestBody = [
        'quaerat' => 'sapiente',
        'consectetur' => 'esse',
        'blanditiis' => 'provident',
        'a' => 'nulla',
    ];
    $request->raw = false;
    $request->xApideckAppId = 'quas';
    $request->xApideckConsumerId = 'esse';
    $request->xApideckServiceId = 'quasi';

    $requestSecurity = new LedgerAccountsAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->ledgerAccounts->ledgerAccountsAdd($request, $requestSecurity);

    if ($response->createLedgerAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ledgerAccountsAll

List Ledger Accounts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LedgerAccountsAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\LedgerAccountsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LedgerAccountsAllRequest();
    $request->cursor = 'a';
    $request->fields = 'error';
    $request->limit = 575751;
    $request->passThrough = [
        'possimus' => 'quia',
        'eveniet' => 'asperiores',
        'facere' => 'veritatis',
        'consequuntur' => 'quasi',
    ];
    $request->raw = false;
    $request->xApideckAppId = 'similique';
    $request->xApideckConsumerId = 'culpa';
    $request->xApideckServiceId = 'aliquid';

    $requestSecurity = new LedgerAccountsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->ledgerAccounts->ledgerAccountsAll($request, $requestSecurity);

    if ($response->getLedgerAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ledgerAccountsDelete

Delete Ledger Account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LedgerAccountsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\LedgerAccountsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LedgerAccountsDeleteRequest();
    $request->id = 'f1e674bd-b04f-4157-9608-2d68ea19f1d1';
    $request->raw = false;
    $request->xApideckAppId = 'voluptate';
    $request->xApideckConsumerId = 'ipsa';
    $request->xApideckServiceId = 'minima';

    $requestSecurity = new LedgerAccountsDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->ledgerAccounts->ledgerAccountsDelete($request, $requestSecurity);

    if ($response->deleteLedgerAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ledgerAccountsOne

Get Ledger Account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LedgerAccountsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\LedgerAccountsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LedgerAccountsOneRequest();
    $request->fields = 'veritatis';
    $request->id = '339d0808-6a18-4403-94c2-6071f93f5f06';
    $request->raw = false;
    $request->xApideckAppId = 'quaerat';
    $request->xApideckConsumerId = 'consequuntur';
    $request->xApideckServiceId = 'repellendus';

    $requestSecurity = new LedgerAccountsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->ledgerAccounts->ledgerAccountsOne($request, $requestSecurity);

    if ($response->getLedgerAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ledgerAccountsUpdate

Update Ledger Account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LedgerAccountsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\LedgerAccountsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LedgerAccountsUpdateRequest();
    $request->requestBody = [
        'maxime' => 'dignissimos',
        'officia' => 'asperiores',
        'nemo' => 'quae',
    ];
    $request->id = '5cc413aa-63aa-4e8d-a786-4dbb675fd5e6';
    $request->raw = false;
    $request->xApideckAppId = 'aperiam';
    $request->xApideckConsumerId = 'cum';
    $request->xApideckServiceId = 'consectetur';

    $requestSecurity = new LedgerAccountsUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->ledgerAccounts->ledgerAccountsUpdate($request, $requestSecurity);

    if ($response->updateLedgerAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
