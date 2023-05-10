# journalEntries

### Available Operations

* [journalEntriesAdd](#journalentriesadd) - Create Journal Entry
* [journalEntriesAll](#journalentriesall) - List Journal Entries
* [journalEntriesDelete](#journalentriesdelete) - Delete Journal Entry
* [journalEntriesOne](#journalentriesone) - Get Journal Entry
* [journalEntriesUpdate](#journalentriesupdate) - Update Journal Entry

## journalEntriesAdd

Create Journal Entry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\JournalEntriesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\JournalEntryInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\JournalEntryLineItemInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedLedgerAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedTaxRateInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedTrackingCategory;
use \OpenAPI\OpenAPI\Models\Shared\JournalEntryLineItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\JournalEntriesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JournalEntriesAddRequest();
    $request->journalEntryInput = new JournalEntryInput();
    $request->journalEntryInput->currency = CurrencyEnum::USD;
    $request->journalEntryInput->currencyRate = 0.69;
    $request->journalEntryInput->journalSymbol = 'IND';
    $request->journalEntryInput->lineItems = [
        new JournalEntryLineItemInput(),
        new JournalEntryLineItemInput(),
        new JournalEntryLineItemInput(),
        new JournalEntryLineItemInput(),
    ];
    $request->journalEntryInput->memo = 'Thank you for your business and have a great day!';
    $request->journalEntryInput->postedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-30T07:43:32.000Z');
    $request->journalEntryInput->rowVersion = '1-12345';
    $request->journalEntryInput->title = 'Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry';
    $request->raw = false;
    $request->xApideckAppId = 'quas';
    $request->xApideckConsumerId = 'assumenda';
    $request->xApideckServiceId = 'nulla';

    $requestSecurity = new JournalEntriesAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->journalEntries->journalEntriesAdd($request, $requestSecurity);

    if ($response->createJournalEntryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## journalEntriesAll

List Journal Entries

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\JournalEntriesAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\JournalEntriesAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JournalEntriesAllRequest();
    $request->cursor = 'voluptas';
    $request->fields = 'libero';
    $request->limit = 96549;
    $request->passThrough = [
        'numquam' => 'explicabo',
        'provident' => 'ipsa',
    ];
    $request->raw = false;
    $request->xApideckAppId = 'molestiae';
    $request->xApideckConsumerId = 'magnam';
    $request->xApideckServiceId = 'odio';

    $requestSecurity = new JournalEntriesAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->journalEntries->journalEntriesAll($request, $requestSecurity);

    if ($response->getJournalEntriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## journalEntriesDelete

Delete Journal Entry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\JournalEntriesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\JournalEntriesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JournalEntriesDeleteRequest();
    $request->id = '4778a7bd-466d-428c-90ab-3cdca4251904';
    $request->raw = false;
    $request->xApideckAppId = 'debitis';
    $request->xApideckConsumerId = 'ipsam';
    $request->xApideckServiceId = 'aspernatur';

    $requestSecurity = new JournalEntriesDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->journalEntries->journalEntriesDelete($request, $requestSecurity);

    if ($response->deleteJournalEntryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## journalEntriesOne

Get Journal Entry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\JournalEntriesOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\JournalEntriesOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JournalEntriesOneRequest();
    $request->fields = 'sequi';
    $request->id = 'c7e0bc71-78e4-4796-b2a7-0c688282aa48';
    $request->raw = false;
    $request->xApideckAppId = 'explicabo';
    $request->xApideckConsumerId = 'minima';
    $request->xApideckServiceId = 'nisi';

    $requestSecurity = new JournalEntriesOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->journalEntries->journalEntriesOne($request, $requestSecurity);

    if ($response->getJournalEntryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## journalEntriesUpdate

Update Journal Entry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\JournalEntriesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\JournalEntryInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\JournalEntryLineItemInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedLedgerAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedTaxRateInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedTrackingCategory;
use \OpenAPI\OpenAPI\Models\Shared\JournalEntryLineItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\JournalEntriesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JournalEntriesUpdateRequest();
    $request->journalEntryInput = new JournalEntryInput();
    $request->journalEntryInput->currency = CurrencyEnum::USD;
    $request->journalEntryInput->currencyRate = 0.69;
    $request->journalEntryInput->journalSymbol = 'IND';
    $request->journalEntryInput->lineItems = [
        new JournalEntryLineItemInput(),
    ];
    $request->journalEntryInput->memo = 'Thank you for your business and have a great day!';
    $request->journalEntryInput->postedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-30T07:43:32.000Z');
    $request->journalEntryInput->rowVersion = '1-12345';
    $request->journalEntryInput->title = 'Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry';
    $request->id = 'f222e981-7ee1-47cb-a61e-6b7b95bc0ab3';
    $request->raw = false;
    $request->xApideckAppId = 'cumque';
    $request->xApideckConsumerId = 'consequuntur';
    $request->xApideckServiceId = 'consequatur';

    $requestSecurity = new JournalEntriesUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->journalEntries->journalEntriesUpdate($request, $requestSecurity);

    if ($response->updateJournalEntryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
