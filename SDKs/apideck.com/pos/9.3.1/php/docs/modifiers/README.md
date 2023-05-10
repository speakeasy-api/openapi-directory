# modifiers

### Available Operations

* [modifiersAdd](#modifiersadd) - Create Modifier
* [modifiersAll](#modifiersall) - List Modifiers
* [modifiersDelete](#modifiersdelete) - Delete Modifier
* [modifiersOne](#modifiersone) - Get Modifier
* [modifiersUpdate](#modifiersupdate) - Update Modifier

## modifiersAdd

Create Modifier

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifiersAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifierInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ModifiersAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifiersAddRequest();
    $request->modifierInput = new ModifierInput();
    $request->modifierInput->alternateName = 'Modifier New';
    $request->modifierInput->available = true;
    $request->modifierInput->currency = CurrencyEnum::USD;
    $request->modifierInput->idempotencyKey = 'random_string';
    $request->modifierInput->modifierGroupId = '123';
    $request->modifierInput->name = 'Modifier';
    $request->modifierInput->priceAmount = 10;
    $request->raw = false;
    $request->xApideckAppId = 'quam';
    $request->xApideckConsumerId = 'molestias';
    $request->xApideckServiceId = 'temporibus';

    $requestSecurity = new ModifiersAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->modifiers->modifiersAdd($request, $requestSecurity);

    if ($response->createModifierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifiersAll

List Modifiers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifiersAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\ModifiersAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifiersAllRequest();
    $request->cursor = 'qui';
    $request->fields = 'neque';
    $request->limit = 144847;
    $request->raw = false;
    $request->xApideckAppId = 'magni';
    $request->xApideckConsumerId = 'odio';
    $request->xApideckServiceId = 'sunt';

    $requestSecurity = new ModifiersAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->modifiers->modifiersAll($request, $requestSecurity);

    if ($response->getModifiersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifiersDelete

Delete Modifier

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifiersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifierGroupFilter;
use \OpenAPI\OpenAPI\Models\Operations\ModifiersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifiersDeleteRequest();
    $request->filter = new ModifierGroupFilter();
    $request->filter->modifierGroupId = '1234';
    $request->id = '5bf0cbb1-e31b-48b9-8f34-43a1108e0adc';
    $request->raw = false;
    $request->xApideckAppId = 'doloribus';
    $request->xApideckConsumerId = 'ut';
    $request->xApideckServiceId = 'facilis';

    $requestSecurity = new ModifiersDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->modifiers->modifiersDelete($request, $requestSecurity);

    if ($response->deleteModifierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifiersOne

Get Modifier

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifiersOneRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifierGroupFilter;
use \OpenAPI\OpenAPI\Models\Operations\ModifiersOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifiersOneRequest();
    $request->fields = 'cupiditate';
    $request->filter = new ModifierGroupFilter();
    $request->filter->modifierGroupId = '1234';
    $request->id = '21879fce-953f-473e-b7fb-c7abd74dd39c';
    $request->raw = false;
    $request->xApideckAppId = 'aut';
    $request->xApideckConsumerId = 'voluptatibus';
    $request->xApideckServiceId = 'exercitationem';

    $requestSecurity = new ModifiersOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->modifiers->modifiersOne($request, $requestSecurity);

    if ($response->getModifierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifiersUpdate

Update Modifier

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifiersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifierInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ModifiersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifiersUpdateRequest();
    $request->modifierInput = new ModifierInput();
    $request->modifierInput->alternateName = 'Modifier New';
    $request->modifierInput->available = true;
    $request->modifierInput->currency = CurrencyEnum::USD;
    $request->modifierInput->idempotencyKey = 'random_string';
    $request->modifierInput->modifierGroupId = '123';
    $request->modifierInput->name = 'Modifier';
    $request->modifierInput->priceAmount = 10;
    $request->id = 'd2cff7c7-0a45-4626-9436-813f16d9f5fc';
    $request->raw = false;
    $request->xApideckAppId = 'saepe';
    $request->xApideckConsumerId = 'ea';
    $request->xApideckServiceId = 'impedit';

    $requestSecurity = new ModifiersUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->modifiers->modifiersUpdate($request, $requestSecurity);

    if ($response->updateModifierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
