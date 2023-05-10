<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateItemDraftRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItemDraft;
use \OpenAPI\OpenAPI\Models\Shared\Charity;
use \OpenAPI\OpenAPI\Models\Shared\PricingSummary;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\Product;
use \OpenAPI\OpenAPI\Models\Shared\Aspect;
use \OpenAPI\OpenAPI\Models\Operations\CreateItemDraftSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateItemDraftRequest();
    $request->contentLanguage = 'corrupti';
    $request->itemDraft = new ItemDraft();
    $request->itemDraft->categoryId = 'provident';
    $request->itemDraft->charity = new Charity();
    $request->itemDraft->charity->charityId = 'distinctio';
    $request->itemDraft->charity->donationPercentage = 'quibusdam';
    $request->itemDraft->condition = 'unde';
    $request->itemDraft->format = 'nulla';
    $request->itemDraft->pricingSummary = new PricingSummary();
    $request->itemDraft->pricingSummary->auctionReservePrice = new Amount();
    $request->itemDraft->pricingSummary->auctionReservePrice->currency = 'corrupti';
    $request->itemDraft->pricingSummary->auctionReservePrice->value = 'illum';
    $request->itemDraft->pricingSummary->auctionStartPrice = new Amount();
    $request->itemDraft->pricingSummary->auctionStartPrice->currency = 'vel';
    $request->itemDraft->pricingSummary->auctionStartPrice->value = 'error';
    $request->itemDraft->pricingSummary->price = new Amount();
    $request->itemDraft->pricingSummary->price->currency = 'deserunt';
    $request->itemDraft->pricingSummary->price->value = 'suscipit';
    $request->itemDraft->product = new Product();
    $request->itemDraft->product->aspects = [
        new Aspect(),
        new Aspect(),
    ];
    $request->itemDraft->product->brand = 'magnam';
    $request->itemDraft->product->description = 'debitis';
    $request->itemDraft->product->epid = 'ipsa';
    $request->itemDraft->product->imageUrls = [
        'tempora',
        'suscipit',
        'molestiae',
        'minus',
    ];
    $request->itemDraft->product->title = 'Dr.';
    $request->xEbayCMarketplaceId = 'voluptatum';

    $requestSecurity = new CreateItemDraftSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itemDraft->createItemDraft($request, $requestSecurity);

    if ($response->itemDraftResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->