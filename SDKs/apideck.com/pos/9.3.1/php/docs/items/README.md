# items

### Available Operations

* [itemsAdd](#itemsadd) - Create Item
* [itemsAll](#itemsall) - List Items
* [itemsDelete](#itemsdelete) - Delete Item
* [itemsOne](#itemsone) - Get Item
* [itemsUpdate](#itemsupdate) - Update Item

## itemsAdd

Create Item

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ItemsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItemInput;
use \OpenAPI\OpenAPI\Models\Shared\ItemCategoriesInput;
use \OpenAPI\OpenAPI\Models\Shared\ItemOptions;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItemPricingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItemProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItemVariationsInput;
use \OpenAPI\OpenAPI\Models\Shared\ItemVariationsPricingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ItemsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemsAddRequest();
    $request->itemInput = new ItemInput();
    $request->itemInput->abbreviation = 'Ch';
    $request->itemInput->absentAtLocationIds = [
        'ipsa',
        'delectus',
        'tempora',
        'suscipit',
    ];
    $request->itemInput->available = true;
    $request->itemInput->availableForPickup = false;
    $request->itemInput->availableOnline = false;
    $request->itemInput->categories = [
        new ItemCategoriesInput(),
        new ItemCategoriesInput(),
    ];
    $request->itemInput->code = '11910345';
    $request->itemInput->cost = 2;
    $request->itemInput->deleted = true;
    $request->itemInput->description = 'Hot Chocolate';
    $request->itemInput->hidden = true;
    $request->itemInput->id = '#cocoa';
    $request->itemInput->idempotencyKey = 'random_string';
    $request->itemInput->isRevenue = false;
    $request->itemInput->name = 'Cocoa';
    $request->itemInput->options = [
        new ItemOptions(),
        new ItemOptions(),
        new ItemOptions(),
        new ItemOptions(),
    ];
    $request->itemInput->presentAtAllLocations = false;
    $request->itemInput->priceAmount = 10;
    $request->itemInput->priceCurrency = CurrencyEnum::USD;
    $request->itemInput->pricingType = ItemPricingTypeEnum::FIXED;
    $request->itemInput->productType = ItemProductTypeEnum::REGULAR;
    $request->itemInput->sku = '11910345';
    $request->itemInput->taxIds = [
        'voluptatum',
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->itemInput->useDefaultTaxRates = false;
    $request->itemInput->variations = [
        new ItemVariationsInput(),
        new ItemVariationsInput(),
        new ItemVariationsInput(),
        new ItemVariationsInput(),
    ];
    $request->raw = false;
    $request->xApideckAppId = 'temporibus';
    $request->xApideckConsumerId = 'ab';
    $request->xApideckServiceId = 'quis';

    $requestSecurity = new ItemsAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->items->itemsAdd($request, $requestSecurity);

    if ($response->createItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## itemsAll

List Items

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ItemsAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\ItemsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemsAllRequest();
    $request->cursor = 'veritatis';
    $request->fields = 'deserunt';
    $request->limit = 20218;
    $request->raw = false;
    $request->xApideckAppId = 'ipsam';
    $request->xApideckConsumerId = 'repellendus';
    $request->xApideckServiceId = 'sapiente';

    $requestSecurity = new ItemsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->items->itemsAll($request, $requestSecurity);

    if ($response->getItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## itemsDelete

Delete Item

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ItemsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\ItemsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemsDeleteRequest();
    $request->id = 'c2ddf7cc-78ca-41ba-928f-c816742cb739';
    $request->raw = false;
    $request->xApideckAppId = 'aspernatur';
    $request->xApideckConsumerId = 'perferendis';
    $request->xApideckServiceId = 'ad';

    $requestSecurity = new ItemsDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->items->itemsDelete($request, $requestSecurity);

    if ($response->deleteItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## itemsOne

Get Item

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ItemsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\ItemsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemsOneRequest();
    $request->fields = 'natus';
    $request->id = '29396fea-7596-4eb1-8faa-a2352c595590';
    $request->raw = false;
    $request->xApideckAppId = 'iure';
    $request->xApideckConsumerId = 'culpa';
    $request->xApideckServiceId = 'doloribus';

    $requestSecurity = new ItemsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->items->itemsOne($request, $requestSecurity);

    if ($response->getItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## itemsUpdate

Update Item

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ItemsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItemInput;
use \OpenAPI\OpenAPI\Models\Shared\ItemCategoriesInput;
use \OpenAPI\OpenAPI\Models\Shared\ItemOptions;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItemPricingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItemProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItemVariationsInput;
use \OpenAPI\OpenAPI\Models\Shared\ItemVariationsPricingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ItemsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemsUpdateRequest();
    $request->itemInput = new ItemInput();
    $request->itemInput->abbreviation = 'Ch';
    $request->itemInput->absentAtLocationIds = [
        'architecto',
        'mollitia',
        'dolorem',
        'culpa',
    ];
    $request->itemInput->available = true;
    $request->itemInput->availableForPickup = false;
    $request->itemInput->availableOnline = false;
    $request->itemInput->categories = [
        new ItemCategoriesInput(),
    ];
    $request->itemInput->code = '11910345';
    $request->itemInput->cost = 2;
    $request->itemInput->deleted = true;
    $request->itemInput->description = 'Hot Chocolate';
    $request->itemInput->hidden = true;
    $request->itemInput->id = '#cocoa';
    $request->itemInput->idempotencyKey = 'random_string';
    $request->itemInput->isRevenue = false;
    $request->itemInput->name = 'Cocoa';
    $request->itemInput->options = [
        new ItemOptions(),
        new ItemOptions(),
        new ItemOptions(),
        new ItemOptions(),
    ];
    $request->itemInput->presentAtAllLocations = false;
    $request->itemInput->priceAmount = 10;
    $request->itemInput->priceCurrency = CurrencyEnum::USD;
    $request->itemInput->pricingType = ItemPricingTypeEnum::FIXED;
    $request->itemInput->productType = ItemProductTypeEnum::REGULAR;
    $request->itemInput->sku = '11910345';
    $request->itemInput->taxIds = [
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->itemInput->useDefaultTaxRates = false;
    $request->itemInput->variations = [
        new ItemVariationsInput(),
        new ItemVariationsInput(),
    ];
    $request->id = '739251aa-52c3-4f5a-9019-da1ffe78f097';
    $request->raw = false;
    $request->xApideckAppId = 'cum';
    $request->xApideckConsumerId = 'perferendis';
    $request->xApideckServiceId = 'doloremque';

    $requestSecurity = new ItemsUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->items->itemsUpdate($request, $requestSecurity);

    if ($response->updateItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
