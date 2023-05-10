# taxRates

### Available Operations

* [taxRatesAdd](#taxratesadd) - Create Tax Rate
* [taxRatesAll](#taxratesall) - List Tax Rates
* [taxRatesDelete](#taxratesdelete) - Delete Tax Rate
* [taxRatesOne](#taxratesone) - Get Tax Rate
* [taxRatesUpdate](#taxratesupdate) - Update Tax Rate

## taxRatesAdd

Create Tax Rate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TaxRatesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaxRateInput;
use \OpenAPI\OpenAPI\Models\Shared\TaxRateComponents;
use \OpenAPI\OpenAPI\Models\Shared\TaxRateTaxRateStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\TaxRatesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxRatesAddRequest();
    $request->taxRateInput = new TaxRateInput();
    $request->taxRateInput->code = 'ABN';
    $request->taxRateInput->components = [
        new TaxRateComponents(),
        new TaxRateComponents(),
        new TaxRateComponents(),
        new TaxRateComponents(),
    ];
    $request->taxRateInput->description = 'Reduced rate GST Purchases';
    $request->taxRateInput->effectiveTaxRate = 10;
    $request->taxRateInput->id = '1234';
    $request->taxRateInput->name = 'GST on Purchases';
    $request->taxRateInput->originalTaxRateId = '12345';
    $request->taxRateInput->reportTaxType = 'NONE';
    $request->taxRateInput->rowVersion = '1-12345';
    $request->taxRateInput->status = TaxRateTaxRateStatusEnum::ACTIVE;
    $request->taxRateInput->taxPayableAccountId = '123456';
    $request->taxRateInput->taxRemittedAccountId = '123456';
    $request->taxRateInput->totalTaxRate = 10;
    $request->taxRateInput->type = 'NONE';
    $request->raw = false;
    $request->xApideckAppId = 'molestias';
    $request->xApideckConsumerId = 'magnam';
    $request->xApideckServiceId = 'saepe';

    $requestSecurity = new TaxRatesAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->taxRates->taxRatesAdd($request, $requestSecurity);

    if ($response->createTaxRateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taxRatesAll

List Tax Rates. Note: Not all connectors return the actual rate/percentage value. In this case, only the tax code or reference is returned. Connectors Affected: Quickbooks


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TaxRatesAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaxRatesFilter;
use \OpenAPI\OpenAPI\Models\Operations\TaxRatesAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxRatesAllRequest();
    $request->cursor = 'consequuntur';
    $request->fields = 'occaecati';
    $request->filter = new TaxRatesFilter();
    $request->filter->assets = true;
    $request->filter->equity = true;
    $request->filter->expenses = true;
    $request->filter->liabilities = true;
    $request->filter->revenue = true;
    $request->limit = 886305;
    $request->passThrough = [
        'in' => 'adipisci',
        'eveniet' => 'occaecati',
        'consequuntur' => 'fugit',
    ];
    $request->raw = false;
    $request->xApideckAppId = 'id';
    $request->xApideckConsumerId = 'quis';
    $request->xApideckServiceId = 'reprehenderit';

    $requestSecurity = new TaxRatesAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->taxRates->taxRatesAll($request, $requestSecurity);

    if ($response->getTaxRatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taxRatesDelete

Delete Tax Rate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TaxRatesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaxRatesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxRatesDeleteRequest();
    $request->id = 'a15be3e0-6080-47e2-b6e3-ab8845f0597a';
    $request->raw = false;
    $request->xApideckAppId = 'voluptas';
    $request->xApideckConsumerId = 'alias';
    $request->xApideckServiceId = 'maiores';

    $requestSecurity = new TaxRatesDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->taxRates->taxRatesDelete($request, $requestSecurity);

    if ($response->deleteTaxRateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taxRatesOne

Get Tax Rate. Note: Not all connectors return the actual rate/percentage value. In this case, only the tax code or reference is returned. Support will soon be added to return the actual rate/percentage by doing additional calls in the background to provide the full view of a given tax rate. Connectors Affected: Quickbooks


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TaxRatesOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaxRatesOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxRatesOneRequest();
    $request->fields = 'reiciendis';
    $request->id = '2a54a31e-9476-44a3-a865-e7956f9251a5';
    $request->raw = false;
    $request->xApideckAppId = 'mollitia';
    $request->xApideckConsumerId = 'provident';
    $request->xApideckServiceId = 'possimus';

    $requestSecurity = new TaxRatesOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->taxRates->taxRatesOne($request, $requestSecurity);

    if ($response->getTaxRateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taxRatesUpdate

Update Tax Rate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TaxRatesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaxRateInput;
use \OpenAPI\OpenAPI\Models\Shared\TaxRateComponents;
use \OpenAPI\OpenAPI\Models\Shared\TaxRateTaxRateStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\TaxRatesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxRatesUpdateRequest();
    $request->taxRateInput = new TaxRateInput();
    $request->taxRateInput->code = 'ABN';
    $request->taxRateInput->components = [
        new TaxRateComponents(),
        new TaxRateComponents(),
        new TaxRateComponents(),
    ];
    $request->taxRateInput->description = 'Reduced rate GST Purchases';
    $request->taxRateInput->effectiveTaxRate = 10;
    $request->taxRateInput->id = '1234';
    $request->taxRateInput->name = 'GST on Purchases';
    $request->taxRateInput->originalTaxRateId = '12345';
    $request->taxRateInput->reportTaxType = 'NONE';
    $request->taxRateInput->rowVersion = '1-12345';
    $request->taxRateInput->status = TaxRateTaxRateStatusEnum::ACTIVE;
    $request->taxRateInput->taxPayableAccountId = '123456';
    $request->taxRateInput->taxRemittedAccountId = '123456';
    $request->taxRateInput->totalTaxRate = 10;
    $request->taxRateInput->type = 'NONE';
    $request->id = '660ff57b-faad-44f9-afc1-b4512c103264';
    $request->raw = false;
    $request->xApideckAppId = 'rem';
    $request->xApideckConsumerId = 'at';
    $request->xApideckServiceId = 'impedit';

    $requestSecurity = new TaxRatesUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->taxRates->taxRatesUpdate($request, $requestSecurity);

    if ($response->updateTaxRateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
