<!-- Start SDK Example Usage -->
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
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->itemInput->available = true;
    $request->itemInput->availableForPickup = false;
    $request->itemInput->availableOnline = false;
    $request->itemInput->categories = [
        new ItemCategoriesInput(),
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
        'illum',
        'vel',
        'error',
    ];
    $request->itemInput->useDefaultTaxRates = false;
    $request->itemInput->variations = [
        new ItemVariationsInput(),
        new ItemVariationsInput(),
        new ItemVariationsInput(),
    ];
    $request->raw = false;
    $request->xApideckAppId = 'suscipit';
    $request->xApideckConsumerId = 'iure';
    $request->xApideckServiceId = 'magnam';

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
<!-- End SDK Example Usage -->