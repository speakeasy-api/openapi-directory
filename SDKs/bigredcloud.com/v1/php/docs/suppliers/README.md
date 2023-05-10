# suppliers

### Available Operations

* [suppliersDelete](#suppliersdelete) - Removes an existing Supplier.
* [suppliersGet](#suppliersget) - Returns a list of company's Suppliers. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.
* [suppliersGetAccountTrans](#suppliersgetaccounttrans) - Returns a list of Supplier's account transactions.
* [suppliersGetOpeningBalance](#suppliersgetopeningbalance) - Returns a Supplier's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
* [suppliersGetOpeningBalanceList](#suppliersgetopeningbalancelist) - Returns a list of Supplier's opening balance transactions.
* [suppliersPost](#supplierspost) - Creates a new Supplier.
* [suppliersProcessBatch](#suppliersprocessbatch) - Processes a batch of Suppliers.
* [suppliersPut](#suppliersput) - Updates an existing Supplier.
* [getV1SuppliersId](#getv1suppliersid) - Returns information about a single Supplier. You may specify that Supplier's ledger balance should be calculated.

## suppliersDelete

Removes an existing Supplier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SuppliersDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SuppliersDeleteRequest();
    $request->id = 121059;
    $request->timestamp = 'asperiores';

    $response = $sdk->suppliers->suppliersDelete($request);

    if ($response->suppliersDelete200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## suppliersGet

Returns a list of company's Suppliers. Supports OData querying protocol.
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
    $response = $sdk->suppliers->suppliersGet();

    if ($response->pageResultSupplierQueryDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## suppliersGetAccountTrans

Returns a list of Supplier's account transactions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SuppliersGetAccountTransRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SuppliersGetAccountTransRequest();
    $request->itemId = 241545;

    $response = $sdk->suppliers->suppliersGetAccountTrans($request);

    if ($response->accountTranDtos !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## suppliersGetOpeningBalance

Returns a Supplier's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SuppliersGetOpeningBalanceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SuppliersGetOpeningBalanceRequest();
    $request->itemId = 249420;

    $response = $sdk->suppliers->suppliersGetOpeningBalance($request);

    if ($response->ownerOpeningBalanceInPeriodsDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## suppliersGetOpeningBalanceList

Returns a list of Supplier's opening balance transactions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SuppliersGetOpeningBalanceListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SuppliersGetOpeningBalanceListRequest();
    $request->itemId = 228263;

    $response = $sdk->suppliers->suppliersGetOpeningBalanceList($request);

    if ($response->ownerOpeningBalanceDtos !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## suppliersPost

Creates a new Supplier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SupplierDto;
use \OpenAPI\OpenAPI\Models\Shared\EFTBankDto;
use \OpenAPI\OpenAPI\Models\Shared\OwnerOpeningBalanceInPeriodsDto;
use \OpenAPI\OpenAPI\Models\Shared\OwnerOpeningBalanceDto;
use \OpenAPI\OpenAPI\Models\Shared\OwnerOpeningBalanceVatEntryDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SupplierDto();
    $request->accountName = 'beatae';
    $request->accountNumber = 'dignissimos';
    $request->additionalEmails = [
        'debitis',
        'consectetur',
        'corporis',
        'harum',
    ];
    $request->address = [
        'ipsa',
        'voluptates',
    ];
    $request->authCode = 'libero';
    $request->bank = new EFTBankDto();
    $request->bank->branch = 'vitae';
    $request->bank->id = 881721;
    $request->bank->name = 'Ricky Cole';
    $request->bank->sortCode = 'voluptas';
    $request->businessIdentifierCode = 'minima';
    $request->code = 'nobis';
    $request->contact = 'dolorum';
    $request->eFTReference = 'adipisci';
    $request->email = 'Celestino.Labadie@hotmail.com';
    $request->fax = 'aliquam';
    $request->id = 885963;
    $request->internationalBankAccountNumber = 'temporibus';
    $request->ledgerBalance = 3518.7;
    $request->mobile = '755.926.5859';
    $request->name = 'Della Bailey';
    $request->openingBalance = new OwnerOpeningBalanceInPeriodsDto();
    $request->openingBalance->currentMonth = 9679.66;
    $request->openingBalance->oneMonthOld = 1318.52;
    $request->openingBalance->threeMonthsOld = 9944.01;
    $request->openingBalance->twoMonthsOld = 7079.18;
    $request->openingBalances = [
        new OwnerOpeningBalanceDto(),
        new OwnerOpeningBalanceDto(),
    ];
    $request->ourCode = 'expedita';
    $request->ownerTypeId = 70869;
    $request->phone = '(461) 546-1361 x3980';
    $request->postponedAccounting = false;
    $request->timestamp = 'reiciendis';
    $request->vatAnalysisTypeId = 19300;
    $request->vatReg = 'corrupti';
    $request->vatType = 979574;

    $response = $sdk->suppliers->suppliersPost($request);

    if ($response->suppliersPost200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## suppliersProcessBatch

Processes a batch of Suppliers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemSupplierDto;
use \OpenAPI\OpenAPI\Models\Shared\SupplierDto;
use \OpenAPI\OpenAPI\Models\Shared\EFTBankDto;
use \OpenAPI\OpenAPI\Models\Shared\OwnerOpeningBalanceInPeriodsDto;
use \OpenAPI\OpenAPI\Models\Shared\OwnerOpeningBalanceDto;
use \OpenAPI\OpenAPI\Models\Shared\OwnerOpeningBalanceVatEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemSupplierDtoOpCodeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new BatchItemSupplierDto(),
        new BatchItemSupplierDto(),
    ]

    $response = $sdk->suppliers->suppliersProcessBatch($request);

    if ($response->suppliersProcessBatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## suppliersPut

Updates an existing Supplier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SuppliersPutRequest;
use \OpenAPI\OpenAPI\Models\Shared\SupplierDto;
use \OpenAPI\OpenAPI\Models\Shared\EFTBankDto;
use \OpenAPI\OpenAPI\Models\Shared\OwnerOpeningBalanceInPeriodsDto;
use \OpenAPI\OpenAPI\Models\Shared\OwnerOpeningBalanceDto;
use \OpenAPI\OpenAPI\Models\Shared\OwnerOpeningBalanceVatEntryDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SuppliersPutRequest();
    $request->supplierDto = new SupplierDto();
    $request->supplierDto->accountName = 'sed';
    $request->supplierDto->accountNumber = 'provident';
    $request->supplierDto->additionalEmails = [
        'necessitatibus',
        'ipsum',
    ];
    $request->supplierDto->address = [
        'occaecati',
        'quos',
    ];
    $request->supplierDto->authCode = 'voluptatibus';
    $request->supplierDto->bank = new EFTBankDto();
    $request->supplierDto->bank->branch = 'tempora';
    $request->supplierDto->bank->id = 273009;
    $request->supplierDto->bank->name = 'Mrs. Johanna Jacobson';
    $request->supplierDto->bank->sortCode = 'praesentium';
    $request->supplierDto->businessIdentifierCode = 'facilis';
    $request->supplierDto->code = 'quaerat';
    $request->supplierDto->contact = 'incidunt';
    $request->supplierDto->eFTReference = 'ipsam';
    $request->supplierDto->email = 'Judy_Balistreri33@hotmail.com';
    $request->supplierDto->fax = 'minima';
    $request->supplierDto->id = 924159;
    $request->supplierDto->internationalBankAccountNumber = 'reiciendis';
    $request->supplierDto->ledgerBalance = 8623.19;
    $request->supplierDto->mobile = '1-292-448-1535';
    $request->supplierDto->name = 'Lester Parisian';
    $request->supplierDto->openingBalance = new OwnerOpeningBalanceInPeriodsDto();
    $request->supplierDto->openingBalance->currentMonth = 9447.08;
    $request->supplierDto->openingBalance->oneMonthOld = 7105.29;
    $request->supplierDto->openingBalance->threeMonthsOld = 8928.63;
    $request->supplierDto->openingBalance->twoMonthsOld = 2049.23;
    $request->supplierDto->openingBalances = [
        new OwnerOpeningBalanceDto(),
        new OwnerOpeningBalanceDto(),
        new OwnerOpeningBalanceDto(),
    ];
    $request->supplierDto->ourCode = 'nostrum';
    $request->supplierDto->ownerTypeId = 639028;
    $request->supplierDto->phone = '1-682-612-8067 x2043';
    $request->supplierDto->postponedAccounting = false;
    $request->supplierDto->timestamp = 'sit';
    $request->supplierDto->vatAnalysisTypeId = 530537;
    $request->supplierDto->vatReg = 'quas';
    $request->supplierDto->vatType = 922112;
    $request->id = 361151;

    $response = $sdk->suppliers->suppliersPut($request);

    if ($response->suppliersPut200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV1SuppliersId

Returns information about a single Supplier. You may specify that Supplier's ledger balance should be calculated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1SuppliersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1SuppliersIdRequest();
    $request->id = 89494;
    $request->needBalance = false;

    $response = $sdk->suppliers->getV1SuppliersId($request);

    if ($response->supplierDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
