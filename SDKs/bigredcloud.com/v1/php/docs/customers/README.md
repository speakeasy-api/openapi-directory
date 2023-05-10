# customers

### Available Operations

* [customersDelete](#customersdelete) - Removes an existing Customer.
* [customersGet](#customersget) - Returns a list of company's Customers. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.
* [customersGetAccountTrans](#customersgetaccounttrans) - Returns a list of Customer's account transactions.
* [customersGetOpeningBalance](#customersgetopeningbalance) - Returns a Customer's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
* [customersGetOpeningBalanceList](#customersgetopeningbalancelist) - Returns a list of Customer's opening balance transactions.
* [customersGetQuotes](#customersgetquotes) - Returns a list of Customer's quotes.
* [customersPost](#customerspost) - Creates a new Customer.
* [customersProcessBatch](#customersprocessbatch) - Processes a batch of Customers.
* [customersPut](#customersput) - Updates an existing Customer.
* [getV1CustomersId](#getv1customersid) - Returns information about a single Customer. You may specify that Customer's ledger balance should be calculated.

## customersDelete

Removes an existing Customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomersDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomersDeleteRequest();
    $request->id = 39187;
    $request->timestamp = 'reprehenderit';

    $response = $sdk->customers->customersDelete($request);

    if ($response->customersDelete200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customersGet

Returns a list of company's Customers. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->customers->customersGet();

    if ($response->pageResultCustomerQueryDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customersGetAccountTrans

Returns a list of Customer's account transactions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomersGetAccountTransRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomersGetAccountTransRequest();
    $request->itemId = 282807;

    $response = $sdk->customers->customersGetAccountTrans($request);

    if ($response->accountTranDtos !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customersGetOpeningBalance

Returns a Customer's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomersGetOpeningBalanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomersGetOpeningBalanceRequest();
    $request->itemId = 979587;

    $response = $sdk->customers->customersGetOpeningBalance($request);

    if ($response->ownerOpeningBalanceInPeriodsDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customersGetOpeningBalanceList

Returns a list of Customer's opening balance transactions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomersGetOpeningBalanceListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomersGetOpeningBalanceListRequest();
    $request->itemId = 120196;

    $response = $sdk->customers->customersGetOpeningBalanceList($request);

    if ($response->ownerOpeningBalanceDtos !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customersGetQuotes

Returns a list of Customer's quotes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomersGetQuotesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomersGetQuotesRequest();
    $request->itemId = 359444;

    $response = $sdk->customers->customersGetQuotes($request);

    if ($response->quoteDtos !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customersPost

Creates a new Customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CustomerDto;
use \OpenAPI\OpenAPI\Models\Shared\EFTBankDto;
use \OpenAPI\OpenAPI\Models\Shared\OwnerOpeningBalanceInPeriodsDto;
use \OpenAPI\OpenAPI\Models\Shared\OwnerOpeningBalanceDto;
use \OpenAPI\OpenAPI\Models\Shared\OwnerOpeningBalanceVatEntryDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerDto();
    $request->accountName = 'dolore';
    $request->accountNumber = 'iusto';
    $request->additionalEmails = [
        'harum',
    ];
    $request->address = [
        'accusamus',
        'commodi',
    ];
    $request->authCode = 'repudiandae';
    $request->bank = new EFTBankDto();
    $request->bank->branch = 'quae';
    $request->bank->id = 216822;
    $request->bank->name = 'Virgil Mante';
    $request->bank->sortCode = 'praesentium';
    $request->businessIdentifierCode = 'rem';
    $request->code = 'voluptates';
    $request->contact = 'quasi';
    $request->delivery = [
        'sint',
        'veritatis',
        'itaque',
        'incidunt',
    ];
    $request->eFTReference = 'enim';
    $request->email = 'Marc64@gmail.com';
    $request->fax = 'distinctio';
    $request->id = 841386;
    $request->internationalBankAccountNumber = 'labore';
    $request->ledgerBalance = 2647.3;
    $request->mobile = '1-555-218-3016';
    $request->name = 'Eddie Prosacco';
    $request->openingBalance = new OwnerOpeningBalanceInPeriodsDto();
    $request->openingBalance->currentMonth = 9621.89;
    $request->openingBalance->oneMonthOld = 4332.88;
    $request->openingBalance->threeMonthsOld = 2487.53;
    $request->openingBalance->twoMonthsOld = 7561.07;
    $request->openingBalances = [
        new OwnerOpeningBalanceDto(),
        new OwnerOpeningBalanceDto(),
        new OwnerOpeningBalanceDto(),
    ];
    $request->ourCode = 'aliquid';
    $request->ownerTypeId = 592042;
    $request->phone = '1-662-996-4489 x61278';
    $request->timestamp = 'ea';
    $request->vatAnalysisTypeId = 396506;
    $request->vatReg = 'laborum';
    $request->vatType = 881104;

    $response = $sdk->customers->customersPost($request);

    if ($response->customersPost200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customersProcessBatch

Processes a batch of Customers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemCustomerDto;
use \OpenAPI\OpenAPI\Models\Shared\CustomerDto;
use \OpenAPI\OpenAPI\Models\Shared\EFTBankDto;
use \OpenAPI\OpenAPI\Models\Shared\OwnerOpeningBalanceInPeriodsDto;
use \OpenAPI\OpenAPI\Models\Shared\OwnerOpeningBalanceDto;
use \OpenAPI\OpenAPI\Models\Shared\OwnerOpeningBalanceVatEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemCustomerDtoOpCodeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new BatchItemCustomerDto(),
    ]

    $response = $sdk->customers->customersProcessBatch($request);

    if ($response->customersProcessBatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customersPut

Updates an existing Customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomersPutRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerDto;
use \OpenAPI\OpenAPI\Models\Shared\EFTBankDto;
use \OpenAPI\OpenAPI\Models\Shared\OwnerOpeningBalanceInPeriodsDto;
use \OpenAPI\OpenAPI\Models\Shared\OwnerOpeningBalanceDto;
use \OpenAPI\OpenAPI\Models\Shared\OwnerOpeningBalanceVatEntryDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomersPutRequest();
    $request->customerDto = new CustomerDto();
    $request->customerDto->accountName = 'occaecati';
    $request->customerDto->accountNumber = 'enim';
    $request->customerDto->additionalEmails = [
        'delectus',
        'quidem',
        'provident',
        'nam',
    ];
    $request->customerDto->address = [
        'blanditiis',
        'deleniti',
        'sapiente',
    ];
    $request->customerDto->authCode = 'amet';
    $request->customerDto->bank = new EFTBankDto();
    $request->customerDto->bank->branch = 'deserunt';
    $request->customerDto->bank->id = 394869;
    $request->customerDto->bank->name = 'Ada Moen IV';
    $request->customerDto->bank->sortCode = 'magnam';
    $request->customerDto->businessIdentifierCode = 'distinctio';
    $request->customerDto->code = 'id';
    $request->customerDto->contact = 'labore';
    $request->customerDto->delivery = [
        'suscipit',
        'natus',
    ];
    $request->customerDto->eFTReference = 'nobis';
    $request->customerDto->email = 'Shaina29@yahoo.com';
    $request->customerDto->fax = 'et';
    $request->customerDto->id = 569965;
    $request->customerDto->internationalBankAccountNumber = 'ullam';
    $request->customerDto->ledgerBalance = 5908.73;
    $request->customerDto->mobile = '606-963-4281 x3049';
    $request->customerDto->name = 'Frederick Schoen';
    $request->customerDto->openingBalance = new OwnerOpeningBalanceInPeriodsDto();
    $request->customerDto->openingBalance->currentMonth = 4479.26;
    $request->customerDto->openingBalance->oneMonthOld = 1002.26;
    $request->customerDto->openingBalance->threeMonthsOld = 995.69;
    $request->customerDto->openingBalance->twoMonthsOld = 9194.83;
    $request->customerDto->openingBalances = [
        new OwnerOpeningBalanceDto(),
        new OwnerOpeningBalanceDto(),
    ];
    $request->customerDto->ourCode = 'expedita';
    $request->customerDto->ownerTypeId = 469249;
    $request->customerDto->phone = '819.801.5611 x78884';
    $request->customerDto->timestamp = 'excepturi';
    $request->customerDto->vatAnalysisTypeId = 139972;
    $request->customerDto->vatReg = 'ea';
    $request->customerDto->vatType = 33222;
    $request->id = 69167;

    $response = $sdk->customers->customersPut($request);

    if ($response->customersPut200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV1CustomersId

Returns information about a single Customer. You may specify that Customer's ledger balance should be calculated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1CustomersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1CustomersIdRequest();
    $request->id = 982575;
    $request->needBalance = false;

    $response = $sdk->customers->getV1CustomersId($request);

    if ($response->customerDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
